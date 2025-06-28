import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { z } from "zod";
export declare const PostVendorCreateSchema: z.ZodObject<{
    name: z.ZodString;
    handle: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    admin: z.ZodObject<{
        email: z.ZodString;
        first_name: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        email?: string;
        first_name?: string;
        last_name?: string;
    }, {
        email?: string;
        first_name?: string;
        last_name?: string;
    }>;
}, "strict", z.ZodTypeAny, {
    name?: string;
    handle?: string;
    logo?: string;
    admin?: {
        email?: string;
        first_name?: string;
        last_name?: string;
    };
}, {
    name?: string;
    handle?: string;
    logo?: string;
    admin?: {
        email?: string;
        first_name?: string;
        last_name?: string;
    };
}>;
type RequestBody = z.infer<typeof PostVendorCreateSchema>;
export declare const POST: (req: AuthenticatedMedusaRequest<RequestBody>, res: MedusaResponse) => Promise<void>;
export {};
