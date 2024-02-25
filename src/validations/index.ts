import { z } from 'zod';

export const UserSchema = z.object({
    Username: z.string().min(3),
    Email: z.string().email(),
});

