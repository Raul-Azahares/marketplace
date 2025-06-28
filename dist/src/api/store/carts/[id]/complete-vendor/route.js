"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const create_vendor_orders_1 = __importDefault(require("../../../../../workflows/marketplace/create-vendor-orders"));
const POST = async (req, res) => {
    const cartId = req.params.id;
    const { result } = await (0, create_vendor_orders_1.default)(req.scope)
        .run({
        input: {
            cart_id: cartId
        }
    });
    res.json({
        type: "order",
        order: result.parent_order
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vY29tcGxldGUtdmVuZG9yL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLHFIQUFtRztBQUU1RixNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUU1QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLDhCQUEwQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDM0QsR0FBRyxDQUFDO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLE1BQU07U0FDaEI7S0FDRixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVk7S0FDM0IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBakJZLFFBQUEsSUFBSSxRQWlCaEIifQ==