"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [vendorAdmin] } = await query.graph({
        entity: "vendor_admin",
        fields: ["vendor.orders.*"],
        filters: {
            id: [req.auth_context.actor_id]
        }
    });
    const { result: orders } = await (0, core_flows_1.getOrdersListWorkflow)(req.scope)
        .run({
        input: {
            fields: [
                "metadata",
                "total",
                "subtotal",
                "shipping_total",
                "tax_total",
                "items.*",
                "items.tax_lines",
                "items.adjustments",
                "items.variant",
                "items.variant.product",
                "items.detail",
                "shipping_methods",
                "payment_collections",
                "fulfillments",
            ],
            variables: {
                filters: {
                    id: vendorAdmin.vendor.orders.map((order) => order.id)
                }
            }
        }
    });
    res.json({
        orders
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvcnMvb3JkZXJzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUNyRSw0REFBbUU7QUFFNUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzNCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ2hDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsa0NBQXFCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM5RCxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sVUFBVTtnQkFDVixPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsdUJBQXVCO2dCQUN2QixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIscUJBQXFCO2dCQUNyQixjQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFO29CQUNQLEVBQUUsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7aUJBQ3ZEO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVKLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNO0tBQ1AsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBNUNZLFFBQUEsR0FBRyxPQTRDZiJ9