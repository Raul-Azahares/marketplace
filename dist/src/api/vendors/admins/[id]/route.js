"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const delete_vendor_admin_1 = require("../../../../workflows/marketplace/delete-vendor-admin");
const DELETE = async (req, res) => {
    await (0, delete_vendor_admin_1.deleteVendorAdminWorkflow)(req.scope).run({
        input: {
            id: req.params.id
        }
    });
    res.json({ message: "success" });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvcnMvYWRtaW5zL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsK0ZBQWlHO0FBRTFGLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDekIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sSUFBQSwrQ0FBeUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzdDLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBWFksUUFBQSxNQUFNLFVBV2xCIn0=