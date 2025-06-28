"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_vendor_product_1 = __importDefault(require("../../../workflows/marketplace/create-vendor-product"));
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [vendorAdmin] } = await query.graph({
        entity: "vendor_admin",
        fields: ["vendor.products.*"],
        filters: {
            id: [
                // ID of the authenticated vendor admin
                req.auth_context.actor_id
            ],
        },
    });
    res.json({
        products: vendorAdmin.vendor.products
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { result } = await (0, create_vendor_product_1.default)(req.scope)
        .run({
        input: {
            vendor_admin_id: req.auth_context.actor_id,
            product: req.validatedBody
        }
    });
    res.json({
        product: result.product
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvcnMvcHJvZHVjdHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EscURBRWtDO0FBQ2xDLGlIQUErRjtBQUV4RixNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEQsTUFBTSxFQUFFLGNBQWM7UUFDdEIsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDN0IsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFO2dCQUNGLHVDQUF1QztnQkFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRO2FBQzFCO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUTtLQUN0QyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFwQlksUUFBQSxHQUFHLE9Bb0JmO0FBRU0sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUE2RCxFQUM3RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSwrQkFBMkIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzVELEdBQUcsQ0FBQztRQUNILEtBQUssRUFBRTtZQUNMLGVBQWUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7WUFDMUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxhQUFhO1NBQzNCO0tBQ0YsQ0FBQyxDQUFBO0lBRUosR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztLQUN4QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFmWSxRQUFBLElBQUksUUFlaEIifQ==