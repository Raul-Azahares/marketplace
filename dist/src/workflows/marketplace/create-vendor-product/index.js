"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const marketplace_1 = require("../../../modules/marketplace");
const utils_1 = require("@medusajs/framework/utils");
const createVendorProductWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor-product", (input) => {
    // Retrieve default sales channel to make the product available in.
    // Alternatively, you can link sales channels to vendors and allow vendors
    // to manage sales channels
    const { data: stores } = (0, core_flows_1.useQueryGraphStep)({
        entity: "store",
        fields: ["default_sales_channel_id"],
    });
    const productData = (0, workflows_sdk_1.transform)({
        input,
        stores
    }, (data) => {
        return {
            products: [{
                    ...data.input.product,
                    sales_channels: [
                        {
                            id: data.stores[0].default_sales_channel_id
                        }
                    ]
                }]
        };
    });
    const createdProducts = core_flows_1.createProductsWorkflow.runAsStep({
        input: productData
    });
    const { data: vendorAdmins } = (0, core_flows_1.useQueryGraphStep)({
        entity: "vendor_admin",
        fields: ["vendor.id"],
        filters: {
            id: input.vendor_admin_id
        }
    }).config({ name: "retrieve-vendor-admins" });
    const linksToCreate = (0, workflows_sdk_1.transform)({
        input,
        createdProducts,
        vendorAdmins
    }, (data) => {
        return data.createdProducts.map((product) => {
            return {
                [marketplace_1.MARKETPLACE_MODULE]: {
                    vendor_id: data.vendorAdmins[0].vendor.id
                },
                [utils_1.Modules.PRODUCT]: {
                    product_id: product.id
                }
            };
        });
    });
    (0, core_flows_1.createRemoteLinkStep)(linksToCreate);
    const { data: products } = (0, core_flows_1.useQueryGraphStep)({
        entity: "product",
        fields: ["*", "variants.*"],
        filters: {
            id: createdProducts[0].id
        }
    }).config({ name: "retrieve-products" });
    return new workflows_sdk_1.WorkflowResponse({
        product: products[0]
    });
});
exports.default = createVendorProductWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21hcmtldHBsYWNlL2NyZWF0ZS12ZW5kb3ItcHJvZHVjdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFFQUkwQztBQUMxQyw0REFJb0M7QUFDcEMsOERBQWlFO0FBQ2pFLHFEQUFtRDtBQU9uRCxNQUFNLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDaEQsdUJBQXVCLEVBQ3ZCLENBQUMsS0FBb0IsRUFBRSxFQUFFO0lBQ3ZCLG1FQUFtRTtJQUNuRSwwRUFBMEU7SUFDMUUsMkJBQTJCO0lBQzNCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN6QyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQ3JDLENBQUMsQ0FBQTtJQUVGLE1BQU0sV0FBVyxHQUFHLElBQUEseUJBQVMsRUFBQztRQUM1QixLQUFLO1FBQ0wsTUFBTTtLQUNQLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNWLE9BQU87WUFDTCxRQUFRLEVBQUUsQ0FBQztvQkFDVCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztvQkFDckIsY0FBYyxFQUFFO3dCQUNkOzRCQUNFLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3Qjt5QkFDNUM7cUJBQ0Y7aUJBQ0YsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sZUFBZSxHQUFHLG1DQUFzQixDQUFDLFNBQVMsQ0FBQztRQUN2RCxLQUFLLEVBQUUsV0FBVztLQUNuQixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDL0MsTUFBTSxFQUFFLGNBQWM7UUFDdEIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3JCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUMxQjtLQUNGLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO0lBRTdDLE1BQU0sYUFBYSxHQUFHLElBQUEseUJBQVMsRUFBQztRQUM5QixLQUFLO1FBQ0wsZUFBZTtRQUNmLFlBQVk7S0FDYixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUMsT0FBTztnQkFDTCxDQUFDLGdDQUFrQixDQUFDLEVBQUU7b0JBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUMxQztnQkFDRCxDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2lCQUN2QjthQUNGLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBQSxpQ0FBb0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtJQUVuQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDM0MsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztRQUMzQixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDMUI7S0FDRixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtJQUV4QyxPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDckIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSwyQkFBMkIsQ0FBQSJ9