import { eq } from "drizzle-orm";
import { microTasks } from "hub:db:schema";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    try {
        const todos = await db.select().from(microTasks).where(eq(microTasks.userId ,parseInt(query.id as string)))
        return todos
    }
    catch (e) {
        if (e instanceof Error) {
            throw createError({
                statusCode: 500,
                statusMessage: `Ошибка при получении микрозадач: ${e.message}`,
            })
        }
        else {
            throw createError({
                statusCode: 500,
                statusMessage: `Internal Server Error: ${e}`,
            })
        }
    }
})