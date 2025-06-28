import { CartLineItemDTO, OrderDTO, LinkDefinition, InferTypeOf } from "@medusajs/framework/types";
import Vendor from "../../../../modules/marketplace/models/vendor";
export type VendorOrder = (OrderDTO & {
    vendor: InferTypeOf<typeof Vendor>;
});
type StepInput = {
    parentOrder: OrderDTO;
    vendorsItems: Record<string, CartLineItemDTO[]>;
};
declare const createVendorOrdersStep: import("@medusajs/framework/workflows-sdk").StepFunction<StepInput, {
    orders: VendorOrder[];
    linkDefs: LinkDefinition[];
}>;
export default createVendorOrdersStep;
