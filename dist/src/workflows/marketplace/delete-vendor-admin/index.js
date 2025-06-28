"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendorAdminWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const delete_vendor_admin_1 = __importDefault(require("./steps/delete-vendor-admin"));
exports.deleteVendorAdminWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-vendor-admin", (input) => {
    (0, delete_vendor_admin_1.default)(input);
    const { data: authIdentities } = (0, core_flows_1.useQueryGraphStep)({
        entity: "auth_identity",
        fields: ["id"],
        filters: {
            app_metadata: {
                vendor_id: input.id,
            },
        },
    });
    const authIdentity = (0, workflows_sdk_1.transform)({ authIdentities }, ({ authIdentities }) => {
        const authIdentity = authIdentities[0];
        if (!authIdentity) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Auth identity not found");
        }
        return authIdentity;
    });
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: authIdentity.id,
        actorType: "vendor",
        value: null,
    });
    return new workflows_sdk_1.WorkflowResponse(input.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21hcmtldHBsYWNlL2RlbGV0ZS12ZW5kb3ItYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELHFFQUswQztBQUMxQyw0REFHb0M7QUFDcEMsc0ZBQStEO0FBTWxELFFBQUEseUJBQXlCLEdBQUcsSUFBQSw4QkFBYyxFQUNyRCxxQkFBcUIsRUFDckIsQ0FDRSxLQUE4QyxFQUNwQixFQUFFO0lBQzVCLElBQUEsNkJBQXFCLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFNUIsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQ2pELE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUU7YUFDcEI7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sWUFBWSxHQUFHLElBQUEseUJBQVMsRUFDNUIsRUFBRSxjQUFjLEVBQUUsRUFDbEIsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUU7UUFDckIsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRXRDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQix5QkFBeUIsQ0FDMUIsQ0FBQTtRQUNILENBQUM7UUFFRCxPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDLENBQ0YsQ0FBQTtJQUVELElBQUEsbUNBQXNCLEVBQUM7UUFDckIsY0FBYyxFQUFFLFlBQVksQ0FBQyxFQUFFO1FBQy9CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQ0YsQ0FBQSJ9