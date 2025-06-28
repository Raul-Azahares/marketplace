"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const group_vendor_items_1 = __importDefault(require("./steps/group-vendor-items"));
const create_vendor_orders_1 = __importDefault(require("./steps/create-vendor-orders"));
const createVendorOrdersWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor-order", (input) => {
    const { data: carts } = (0, core_flows_1.useQueryGraphStep)({
        entity: "cart",
        fields: ["id", "items.*"],
        filters: { id: input.cart_id },
        options: {
            throwIfKeyNotFound: true
        }
    });
    const { id: orderId } = core_flows_1.completeCartWorkflow.runAsStep({
        input: {
            id: carts[0].id
        }
    });
    const { vendorsItems } = (0, group_vendor_items_1.default)({
        cart: carts[0]
    });
    const order = core_flows_1.getOrderDetailWorkflow.runAsStep({
        input: {
            order_id: orderId,
            fields: [
                "region_id",
                "customer_id",
                "sales_channel_id",
                "email",
                "currency_code",
                "shipping_address.*",
                "billing_address.*",
                "shipping_methods.*",
            ]
        }
    });
    const { orders: vendorOrders, linkDefs } = (0, create_vendor_orders_1.default)({
        parentOrder: order,
        vendorsItems
    });
    (0, core_flows_1.createRemoteLinkStep)(linkDefs);
    return new workflows_sdk_1.WorkflowResponse({
        parent_order: order,
        vendor_orders: vendorOrders
    });
});
exports.default = createVendorOrdersWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21hcmtldHBsYWNlL2NyZWF0ZS12ZW5kb3Itb3JkZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUVBRzBDO0FBQzFDLDREQUtvQztBQUNwQyxvRkFBNkQ7QUFDN0Qsd0ZBQWlFO0FBTWpFLE1BQU0sMEJBQTBCLEdBQUcsSUFBQSw4QkFBYyxFQUMvQyxxQkFBcUIsRUFDckIsQ0FBQyxLQUFvQixFQUFFLEVBQUU7SUFDdkIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQ3hDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztRQUN6QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUM5QixPQUFPLEVBQUU7WUFDUCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxpQ0FBb0IsQ0FBQyxTQUFTLENBQUM7UUFDckQsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUEsNEJBQW9CLEVBQUM7UUFDNUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDZixDQUFDLENBQUE7SUFFRixNQUFNLEtBQUssR0FBRyxtQ0FBc0IsQ0FBQyxTQUFTLENBQUM7UUFDN0MsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLE9BQU87WUFDakIsTUFBTSxFQUFFO2dCQUNOLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLE9BQU87Z0JBQ1AsZUFBZTtnQkFDZixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjtnQkFDbkIsb0JBQW9CO2FBQ3JCO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osTUFBTSxFQUFFLFlBQVksRUFDcEIsUUFBUSxFQUNULEdBQUcsSUFBQSw4QkFBc0IsRUFBQztRQUN6QixXQUFXLEVBQUUsS0FBSztRQUNsQixZQUFZO0tBQ2IsQ0FBQyxDQUFBO0lBRUYsSUFBQSxpQ0FBb0IsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUU5QixPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSwwQkFBMEIsQ0FBQSJ9