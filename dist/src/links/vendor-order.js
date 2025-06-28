"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const marketplace_1 = __importDefault(require("../modules/marketplace"));
const order_1 = __importDefault(require("@medusajs/medusa/order"));
exports.default = (0, utils_1.defineLink)(marketplace_1.default.linkable.vendor, {
    linkable: order_1.default.linkable.order.id,
    isList: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpbmtzL3ZlbmRvci1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFzRDtBQUN0RCx5RUFBc0Q7QUFDdEQsbUVBQWdEO0FBRWhELGtCQUFlLElBQUEsa0JBQVUsRUFDdkIscUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDakM7SUFDRSxRQUFRLEVBQUUsZUFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUN2QyxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQ0YsQ0FBQSJ9