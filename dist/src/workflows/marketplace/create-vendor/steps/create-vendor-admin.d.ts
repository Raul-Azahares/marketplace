type CreateVendorAdminStepInput = {
    email: string;
    first_name?: string;
    last_name?: string;
    vendor_id: string;
};
declare const createVendorAdminStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateVendorAdminStepInput, {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    vendor: {
        id: string;
        handle: string;
        name: string;
        logo: string;
        admins: /*elided*/ any[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    vendor_id: string;
}>;
export default createVendorAdminStep;
