"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const vendor_1 = __importDefault(require("./models/vendor"));
const vendor_admin_1 = __importDefault(require("./models/vendor-admin"));
class MarketplaceModuleService extends (0, utils_1.MedusaService)({
    Vendor: vendor_1.default,
    VendorAdmin: vendor_admin_1.default
}) {
}
exports.default = MarketplaceModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL21hcmtldHBsYWNlL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBeUQ7QUFDekQsNkRBQW9DO0FBQ3BDLHlFQUErQztBQUUvQyxNQUFNLHdCQUF5QixTQUFRLElBQUEscUJBQWEsRUFBQztJQUNuRCxNQUFNLEVBQU4sZ0JBQU07SUFDTixXQUFXLEVBQVgsc0JBQVc7Q0FDWixDQUFDO0NBQ0Q7QUFFRCxrQkFBZSx3QkFBd0IsQ0FBQSJ9