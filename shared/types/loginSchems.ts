import * as z from 'zod'

export const loginSchema = z.object({
    email: z.email('Введите коректную почту'),
    password: z.string('Введите пароль')
})

export type LoginSchema = z.output<typeof loginSchema>