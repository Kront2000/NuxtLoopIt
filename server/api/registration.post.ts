import { eq, } from 'drizzle-orm';
import { UserDb } from '~~/shared/types/db';
import { users } from '../db/schema';
import z from 'zod';



export default defineEventHandler(async (event) => {
  const { email, password, name } = await readValidatedBody(event, regisSchema.parse)

  const [user]: [UserDb | undefined] = await db.select().from(users).where(eq(users.login, email));

  if (!user) {
    const [response]: [UserDb] = await db.insert(users).values({ login: email, name: name, password: await hashPassword(password) }).returning();;
    await setUserSession(event, {
      user: {
        name: response.name,
        id: response.id
      },
    })
    return { status: 'success', message: 'Аккаунт успешно создан' }
  } else {
    return { status: 'error', message: 'Пользователь с такой почтой уже есть' }
  }
})
