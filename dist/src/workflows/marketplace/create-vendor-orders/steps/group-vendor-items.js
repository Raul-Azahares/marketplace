"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const groupVendorItemsStep = (0, workflows_sdk_1.createStep)("group-vendor-items", async ({ cart }, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const vendorsItems = {};
    await (0, utils_1.promiseAll)(cart.items?.map(async (item) => {
        const { data: [product] } = await query.graph({
            entity: "product",
            fields: ["vendor.*"],
            filters: {
                id: [item.product_id]
            }
        });
        const vendorId = product.vendor?.id;
        if (!vendorId) {
            return;
        }
        vendorsItems[vendorId] = [
            ...(vendorsItems[vendorId] || []),
            item
        ];
    }));
    return new workflows_sdk_1.StepResponse({
        vendorsItems
    });
});
exports.default = groupVendorItemsStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtdmVuZG9yLWl0ZW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9tYXJrZXRwbGFjZS9jcmVhdGUtdmVuZG9yLW9yZGVycy9zdGVwcy9ncm91cC12ZW5kb3ItaXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFHMEM7QUFFMUMscURBQWlGO0FBTWpGLE1BQU0sb0JBQW9CLEdBQUcsSUFBQSwwQkFBVSxFQUNyQyxvQkFBb0IsRUFDcEIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzNDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxZQUFZLEdBQXNDLEVBQUUsQ0FBQTtJQUUxRCxNQUFNLElBQUEsa0JBQVUsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDOUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzVDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNwQixPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQTtRQUVGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFBO1FBRW5DLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNkLE9BQU07UUFDUixDQUFDO1FBQ0QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQ3ZCLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUk7U0FDTCxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVILE9BQU8sSUFBSSw0QkFBWSxDQUFDO1FBQ3RCLFlBQVk7S0FDYixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=