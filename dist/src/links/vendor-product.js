"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const marketplace_1 = __importDefault(require("../modules/marketplace"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
exports.default = (0, utils_1.defineLink)(marketplace_1.default.linkable.vendor, {
    linkable: product_1.default.linkable.product.id,
    isList: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlua3MvdmVuZG9yLXByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQseUVBQXNEO0FBQ3RELHVFQUFvRDtBQUVwRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCLHFCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ2pDO0lBQ0UsUUFBUSxFQUFFLGlCQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQzNDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FDRixDQUFBIn0=