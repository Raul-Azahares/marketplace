"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const marketplace_1 = require("../../../../modules/marketplace");
const deleteVendorAdminStep = (0, workflows_sdk_1.createStep)("delete-vendor-admin-step", async ({ id }, { container }) => {
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const vendorAdmin = await marketplaceModuleService.retrieveVendorAdmin(id);
    await marketplaceModuleService.deleteVendorAdmins(id);
    return new workflows_sdk_1.StepResponse(undefined, vendorAdmin);
}, async (vendorAdmin, { container }) => {
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const { vendor: _, ...vendorAdminData } = vendorAdmin;
    marketplaceModuleService.createVendorAdmins(vendorAdminData);
});
exports.default = deleteVendorAdminStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXZlbmRvci1hZG1pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvbWFya2V0cGxhY2UvZGVsZXRlLXZlbmRvci1hZG1pbi9zdGVwcy9kZWxldGUtdmVuZG9yLWFkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBRTFDLGlFQUFvRTtBQUdwRSxNQUFNLHFCQUFxQixHQUFHLElBQUEsMEJBQVUsRUFDdEMsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekQsTUFBTSx3QkFBd0IsR0FDNUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQ0FBa0IsQ0FBQyxDQUFBO0lBRXZDLE1BQU0sV0FBVyxHQUFHLE1BQU0sd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUUsTUFBTSx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVyRCxPQUFPLElBQUksNEJBQVksQ0FDckIsU0FBUyxFQUNULFdBQVcsQ0FDWixDQUFBO0FBQ0gsQ0FBQyxFQUNELEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ25DLE1BQU0sd0JBQXdCLEdBQzVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0NBQWtCLENBQUMsQ0FBQTtJQUV2QyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGVBQWUsRUFBRSxHQUFHLFdBQVcsQ0FBQTtJQUVyRCx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLHFCQUFxQixDQUFBIn0=