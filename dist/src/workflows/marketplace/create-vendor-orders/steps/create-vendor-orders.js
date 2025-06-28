"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const marketplace_1 = require("../../../../modules/marketplace");
function prepareOrderData(items, parentOrder) {
    return {
        items,
        metadata: {
            parent_order_id: parentOrder.id
        },
        // use info from parent
        region_id: parentOrder.region_id,
        customer_id: parentOrder.customer_id,
        sales_channel_id: parentOrder.sales_channel_id,
        email: parentOrder.email,
        currency_code: parentOrder.currency_code,
        shipping_address_id: parentOrder.shipping_address?.id,
        billing_address_id: parentOrder.billing_address?.id,
        // A better solution would be to have shipping methods for each
        // item/vendor. This requires changes in the storefront to commodate that
        // and passing the item/vendor ID in the `data` property, for example.
        // For simplicity here we just use the same shipping method.
        shipping_methods: parentOrder.shipping_methods.map((shippingMethod) => ({
            name: shippingMethod.name,
            amount: shippingMethod.amount,
            shipping_option_id: shippingMethod.shipping_option_id,
            data: shippingMethod.data,
            tax_lines: shippingMethod.tax_lines.map((taxLine) => ({
                code: taxLine.code,
                rate: taxLine.rate,
                provider_id: taxLine.provider_id,
                tax_rate_id: taxLine.tax_rate_id,
                description: taxLine.description
            })),
            adjustments: shippingMethod.adjustments.map((adjustment) => ({
                code: adjustment.code,
                amount: adjustment.amount,
                description: adjustment.description,
                promotion_id: adjustment.promotion_id,
                provider_id: adjustment.provider_id
            }))
        })),
    };
}
const createVendorOrdersStep = (0, workflows_sdk_1.createStep)("create-vendor-orders", async ({ vendorsItems, parentOrder }, { container, context }) => {
    const linkDefs = [];
    const createdOrders = [];
    const vendorIds = Object.keys(vendorsItems);
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const vendors = await marketplaceModuleService.listVendors({
        id: vendorIds
    });
    if (vendorIds.length === 1) {
        linkDefs.push({
            [marketplace_1.MARKETPLACE_MODULE]: {
                vendor_id: vendors[0].id
            },
            [utils_1.Modules.ORDER]: {
                order_id: parentOrder.id
            }
        });
        createdOrders.push({
            ...parentOrder,
            vendor: vendors[0]
        });
        return new workflows_sdk_1.StepResponse({
            orders: createdOrders,
            linkDefs
        }, {
            // to avoid canceling the order, as 
            // this order isn't technically a child order.
            created_orders: []
        });
    }
    try {
        await (0, utils_1.promiseAll)(vendorIds.map(async (vendorId) => {
            const items = vendorsItems[vendorId];
            const vendor = vendors.find(v => v.id === vendorId);
            const { result: childOrder } = await (0, core_flows_1.createOrderWorkflow)(container)
                .run({
                input: prepareOrderData(items, parentOrder),
                context,
            });
            childOrder.vendor = vendor;
            createdOrders.push(childOrder);
            linkDefs.push({
                [marketplace_1.MARKETPLACE_MODULE]: {
                    vendor_id: vendor.id
                },
                [utils_1.Modules.ORDER]: {
                    order_id: childOrder.id
                }
            });
        }));
    }
    catch (e) {
        return workflows_sdk_1.StepResponse.permanentFailure(`An error occured while creating vendor orders: ${e}`, {
            created_orders: createdOrders
        });
    }
    return new workflows_sdk_1.StepResponse({
        orders: createdOrders,
        linkDefs
    }, {
        created_orders: createdOrders
    });
}, async ({ created_orders }, { container, context }) => {
    await Promise.all(created_orders.map((createdOrder) => {
        return (0, core_flows_1.cancelOrderWorkflow)(container).run({
            input: {
                order_id: createdOrder.id,
            },
            context,
            container,
        });
    }));
});
exports.default = createVendorOrdersStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1vcmRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21hcmtldHBsYWNlL2NyZWF0ZS12ZW5kb3Itb3JkZXJzL3N0ZXBzL2NyZWF0ZS12ZW5kb3Itb3JkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBTzFDLHFEQUErRDtBQUMvRCw0REFHb0M7QUFFcEMsaUVBQW9FO0FBWXBFLFNBQVMsZ0JBQWdCLENBQ3ZCLEtBQXdCLEVBQ3hCLFdBQXFCO0lBRXJCLE9BQVE7UUFDTixLQUFLO1FBQ0wsUUFBUSxFQUFFO1lBQ1IsZUFBZSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1NBQ2hDO1FBQ0QsdUJBQXVCO1FBQ3ZCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztRQUNoQyxXQUFXLEVBQUUsV0FBVyxDQUFDLFdBQVc7UUFDcEMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGdCQUFnQjtRQUM5QyxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7UUFDeEIsYUFBYSxFQUFFLFdBQVcsQ0FBQyxhQUFhO1FBQ3hDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3JELGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUNuRCwrREFBK0Q7UUFDL0QseUVBQXlFO1FBQ3pFLHNFQUFzRTtRQUN0RSw0REFBNEQ7UUFDNUQsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7WUFDekIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO1lBQzdCLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxrQkFBa0I7WUFDckQsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLFNBQVMsRUFBRSxjQUFj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