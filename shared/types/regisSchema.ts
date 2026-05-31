import * as z from 'zod'
export const regisSchema = z.object({
    email: z.email('Введите коректную почту'),
    password: z.string('Введите пароль').min(8, 'Пароль слишком короткий'),
    name: z.string('Введите имя'),
})

export type RegisSchema = z.output<typeof regisSchema>