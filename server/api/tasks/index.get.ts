import { eq } from "drizzle-orm";
import { tasks } from "hub:db:schema";


export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const listOfTasks: Tasks[] = await db.select().from(tasks).where(eq(tasks.userId, user.id));
    return listOfTasks;
})
