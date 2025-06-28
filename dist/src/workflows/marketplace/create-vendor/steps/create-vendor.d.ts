type CreateVendorStepInput = {
    name: string;
    handle?: string;
    logo?: string;
};
declare const createVendorStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateVendorStepInput, {
    id: string;
    handle: string;
    name: string;
    logo: string;
    admins: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        vendor: /*elided*/ any;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        vendor_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export default createVendorStep;
