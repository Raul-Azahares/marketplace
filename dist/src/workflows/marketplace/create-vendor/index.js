"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const create_vendor_admin_1 = __importDefault(require("./steps/create-vendor-admin"));
const create_vendor_1 = __importDefault(require("./steps/create-vendor"));
const createVendorWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor", function (input) {
    const vendor = (0, create_vendor_1.default)({
        name: input.name,
        handle: input.handle,
        logo: input.logo,
    });
    const vendorAdminData = (0, workflows_sdk_1.transform)({
        input,
        vendor
    }, (data) => {
        return {
            ...data.input.admin,
            vendor_id: data.vendor.id,
        };
    });
    const vendorAdmin = (0, create_vendor_admin_1.default)(vendorAdminData);
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "vendor",
        value: vendorAdmin.id,
    });
    const { data: vendorWithAdmin } = (0, core_flows_1.useQueryGraphStep)({
        entity: "vendor",
        fields: ["id", "name", "handle", "logo", "admins.*"],
        filters: {
            id: vendor.id,
        },
    });
    return new workflows_sdk_1.WorkflowResponse({
        vendor: vendorWithAdmin[0],
    });
});
exports.default = createVendorWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21hcmtldHBsYWNlL2NyZWF0ZS12ZW5kb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFJMEM7QUFDMUMsNERBR29DO0FBQ3BDLHNGQUErRDtBQUMvRCwwRUFBb0Q7QUFjcEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQ3pDLGVBQWUsRUFDZixVQUFVLEtBQWdDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUEsdUJBQWdCLEVBQUM7UUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUNwQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDakIsQ0FBQyxDQUFBO0lBRUYsTUFBTSxlQUFlLEdBQUcsSUFBQSx5QkFBUyxFQUFDO1FBQ2hDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1YsT0FBTztZQUNMLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDMUIsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxXQUFXLEdBQUcsSUFBQSw2QkFBcUIsRUFBQyxlQUFlLENBQUMsQ0FBQTtJQUUxRCxJQUFBLG1DQUFzQixFQUFDO1FBQ3JCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztRQUNwQyxTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUU7S0FDdEIsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQ2xELE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7UUFDcEQsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2Q7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7S0FDM0IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQSJ9