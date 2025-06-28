import { CartDTO, CartLineItemDTO } from "@medusajs/framework/types";
type StepInput = {
    cart: CartDTO;
};
declare const groupVendorItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<StepInput, {
    vendorsItems: Record<string, CartLineItemDTO[]>;
}>;
export default groupVendorItemsStep;
