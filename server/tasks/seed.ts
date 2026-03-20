import { db, schema } from '@nuxthub/db'
import { microTasks, users } from 'hub:db:schema';

type NewUser = typeof users.$inferInsert;
type NewMicroTask = typeof microTasks.$inferInsert;

export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Seed database with initial data'
    },
    async run() {
        console.log('Seeding database...')

        const users: NewUser[] = [
            {
                name: 'Andrey',
            }
        ]

        await db.insert(schema.users).values(users)


        const microTasks: NewMicroTask[] = [
            {
                content: "Убраться в комнате",
                userId: 1,
            },
            {
                content: "Скинуть конспекты",
                userId: 1,
            },
            {
                content: "Повторить слова",
                userId: 1,
            },

        ]

        await db.insert(schema.microTasks).values(microTasks);

        

        return { result: 'Database seeded successfully' }
    }
})