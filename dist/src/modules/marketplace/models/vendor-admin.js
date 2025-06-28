"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const vendor_1 = __importDefault(require("./vendor"));
const VendorAdmin = utils_1.model.define("vendor_admin", {
    id: utils_1.model.id().primaryKey(),
    first_name: utils_1.model.text().nullable(),
    last_name: utils_1.model.text().nullable(),
    email: utils_1.model.text().unique(),
    vendor: utils_1.model.belongsTo(() => vendor_1.default, {
        mappedBy: "admins"
    })
});
exports.default = VendorAdmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLWFkbWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvbWFya2V0cGxhY2UvbW9kZWxzL3ZlbmRvci1hZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFpRDtBQUNqRCxzREFBNkI7QUFFN0IsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDL0MsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbkMsU0FBUyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsTUFBTSxFQUFFLGFBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQU0sRUFBRTtRQUNwQyxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0NBQ0gsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsV0FBVyxDQUFBIn0=