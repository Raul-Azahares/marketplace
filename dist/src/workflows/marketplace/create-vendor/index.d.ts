export type CreateVendorWorkflowInput = {
    name: string;
    handle?: string;
    logo?: string;
    admin: {
        email: string;
        first_name?: string;
        last_name?: string;
    };
    authIdentityId: string;
};
declare const createVendorWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateVendorWorkflowInput, {
    vendor: any;
}, []>;
export default createVendorWorkflow;
