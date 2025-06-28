"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const marketplace_1 = require("../../../../modules/marketplace");
const createVendorStep = (0, workflows_sdk_1.createStep)("create-vendor", async (vendorData, { container }) => {
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const vendor = await marketplaceModuleService.createVendors(vendorData);
    return new workflows_sdk_1.StepResponse(vendor, vendor.id);
}, async (vendorId, { container }) => {
    if (!vendorId) {
        return;
    }
    const marketplaceModuleService = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    marketplaceModuleService.deleteVendors(vendorId);
});
exports.default = createVendorStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvbWFya2V0cGxhY2UvY3JlYXRlLXZlbmRvci9zdGVwcy9jcmVhdGUtdmVuZG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBQzFDLGlFQUFvRTtBQVNwRSxNQUFNLGdCQUFnQixHQUFHLElBQUEsMEJBQVUsRUFDakMsZUFBZSxFQUNmLEtBQUssRUFBRSxVQUFpQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN6RCxNQUFNLHdCQUF3QixHQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLGdDQUFrQixDQUFDLENBQUE7SUFFdkMsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFdkUsT0FBTyxJQUFJLDRCQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QyxDQUFDLEVBQ0QsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2QsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLHdCQUF3QixHQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLGdDQUFrQixDQUFDLENBQUE7SUFFckMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUEifQ==