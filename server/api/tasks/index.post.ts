import { eq } from "drizzle-orm";
import { tasks } from "hub:db:schema";
import { NewTasks } from "~~/shared/types/db";


export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const { name, description, finalTime, finalType, type } = await readValidatedBody(event, taskSchema.parse);
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Неавторизованный',
        })
    }
    if (!name || !type) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Недостаточно параметров для создания задачи',
        })
    }
    const newTask: NewTasks = { 
        name: name, 
        type: type, 
        userId: user.id,
        ...(description && { description }),
        ...(finalTime && { finalTime }),
        ...(finalType && { finalType }),
    }
    await db.insert(tasks).values(newTask);
})
