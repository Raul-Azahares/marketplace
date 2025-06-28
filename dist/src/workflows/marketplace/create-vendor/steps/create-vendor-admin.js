"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const marketplace_1 = require("../../../../modules/marketplace");
const createVendorAdminStep = (0, workflows_sdk_1.createStep)("create-vendor-admin-step", async (adminData, { container }) => {
    console.log("adminData", adminData);
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const vendorAdmin = await marketplaceModuleService.createVendorAdmins(adminData);
    return new workflows_sdk_1.StepResponse(vendorAdmin, vendorAdmin.id);
}, async (vendorAdminId, { container }) => {
    if (!vendorAdminId) {
        return;
    }
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    marketplaceModuleService.deleteVendorAdmins(vendorAdminId);
});
exports.default = createVendorAdminStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1hZG1pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvbWFya2V0cGxhY2UvY3JlYXRlLXZlbmRvci9zdGVwcy9jcmVhdGUtdmVuZG9yLWFkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBRTFDLGlFQUFvRTtBQVNwRSxNQUFNLHFCQUFxQixHQUFHLElBQUEsMEJBQVUsRUFDdEMsMEJBQTBCLEVBQzFCLEtBQUssRUFDSCxTQUFxQyxFQUNyQyxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNuQyxNQUFNLHdCQUF3QixHQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLGdDQUFrQixDQUFDLENBQUE7SUFFdkMsTUFBTSxXQUFXLEdBQUcsTUFBTSx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FDbkUsU0FBUyxDQUNWLENBQUE7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FDckIsV0FBVyxFQUNYLFdBQVcsQ0FBQyxFQUFFLENBQ2YsQ0FBQTtBQUNILENBQUMsRUFDRCxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkIsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLHdCQUF3QixHQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLGdDQUFrQixDQUFDLENBQUE7SUFFdkMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDNUQsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxxQkFBcUIsQ0FBQSJ9