import { eq } from 'drizzle-orm';
import { UserDb } from '~~/shared/types/db';
import { users } from '../db/schema';

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, loginSchema.parse)

  const [user]: [UserDb | undefined] = await db.select().from(users).where(eq(users.login, email));

  if (user && await verifyPassword(user.password, password)) {
    await setUserSession(event, {
      user: {
        name: user.name,
        id: user.id
      },
    })
    return {status: 'success', message: 'Успешно вошли'}
  } else {
    return {status: 'error', message: 'Неправильный пароль или логин'}
  }
  
})
