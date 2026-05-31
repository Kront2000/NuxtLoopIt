import { users} from '@nuxthub/db/schema'
import type { tasks } from 'hub:db:schema'

// Select types (for reading data)
export type UserDb = typeof users.$inferSelect
export type Tasks = typeof tasks.$inferSelect


// Insert types (for creating data)
export type NewUserDb = typeof users.$inferInsert
export type NewTasks = typeof tasks.$inferInsert
