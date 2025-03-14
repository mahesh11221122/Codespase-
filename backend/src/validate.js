import {z} from "zod";

export const userinput = z.object({
    username: z.string,
    password: z.string()
})