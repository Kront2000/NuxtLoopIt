import { sql } from 'drizzle-orm'
import { relations } from 'drizzle-orm';
import { pgTable, text, serial, timestamp, integer } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial().primaryKey(),
  login: text().notNull(),
  name: text().notNull(),
  password: text().notNull(),
  createdAt: timestamp().notNull().default(sql`CURRENT_TIMESTAMP`)
})

export const tasks = pgTable('tasks', {
  id: serial().primaryKey(),
  name: text().notNull(),
  description: text(),
  type: text({enum: ["stack", "micro", "macro", "api"]}).notNull(),
  finalType: text({enum: ["micro", "macro"]}),
  finalTime: timestamp(),
  userId: integer('user_id'),
  createdAt: timestamp().notNull().default(sql`CURRENT_TIMESTAMP`)
})

export const usersRelations = relations(users, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasksRelations = relations(tasks, ({ one }) => ({
  user: one(users, {
    fields: [tasks.userId],
    references: [users.id],
  }),
}));