import { relations } from 'drizzle-orm';
import { pgTable, text, serial, integer } from 'drizzle-orm/pg-core'


export const users = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull().unique(),
})

export const usersRelations = relations(users, ({ many }) => ({
	microTasks: many(microTasks),
}));

export const microTasks = pgTable('micro_tasks', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	content: text('content'),
	userId: integer('user_id'),
});

export const postsRelations = relations(microTasks, ({ one }) => ({
	author: one(users, {
		fields: [microTasks.userId],
		references: [users.id],
	}),
}));