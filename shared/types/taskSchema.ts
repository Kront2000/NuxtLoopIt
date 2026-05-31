import * as z from 'zod'

export const taskSchema = z.object({
    name: z.string().nonempty('Введите название'),
    description: z.string().optional(),
    type: z.enum(["stack", "micro", "macro", "api"]),
    finalType: z.enum([ "micro", "macro"]).optional(),
    finalTime: z.coerce.date().optional(),
})

export type TaskSchema = z.output<typeof taskSchema>