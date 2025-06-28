"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const vendor_admin_1 = __importDefault(require("./vendor-admin"));
const Vendor = utils_1.model.define("vendor", {
    id: utils_1.model.id().primaryKey(),
    handle: utils_1.model.text().unique(),
    name: utils_1.model.text(),
    logo: utils_1.model.text().nullable(),
    admins: utils_1.model.hasMany(() => vendor_admin_1.default)
});
exports.default = Vendor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvbWFya2V0cGxhY2UvbW9kZWxzL3ZlbmRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFpRDtBQUNqRCxrRUFBd0M7QUFFeEMsTUFBTSxNQUFNLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDcEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDN0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbEIsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsTUFBTSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQztDQUN6QyxDQUFDLENBQUE7QUFFRixrQkFBZSxNQUFNLENBQUEifQ==