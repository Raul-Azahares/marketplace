import { CreateProductWorkflowInputDTO } from "@medusajs/framework/types";
type WorkflowInput = {
    vendor_admin_id: string;
    product: CreateProductWorkflowInputDTO;
};
declare const createVendorProductWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    product: any;
}, []>;
export default createVendorProductWorkflow;
