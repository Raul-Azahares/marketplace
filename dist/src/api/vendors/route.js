"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.PostVendorCreateSchema = void 0;
const utils_1 = require("@medusajs/framework/utils");
const zod_1 = require("zod");
const create_vendor_1 = __importDefault(require("../../workflows/marketplace/create-vendor"));
exports.PostVendorCreateSchema = zod_1.z.object({
    name: zod_1.z.string(),
    handle: zod_1.z.string().optional(),
    logo: zod_1.z.string().optional(),
    admin: zod_1.z.object({
        email: zod_1.z.string(),
        first_name: zod_1.z.string().optional(),
        last_name: zod_1.z.string().optional()
    }).strict()
}).strict();
const POST = async (req, res) => {
    // If `actor_id` is present, the request carries 
    // authentication for an existing vendor admin
    if (req.auth_context?.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a vendor.");
    }
    const vendorData = req.validatedBody;
    // create vendor admin
    const { result } = await (0, create_vendor_1.default)(req.scope)
        .run({
        input: {
            ...vendorData,
            authIdentityId: req.auth_context.auth_identity_id,
        }
    });
    res.json({
        vendor: result.vendor,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEscURBQXVEO0FBQ3ZELDZCQUF1QjtBQUN2Qiw4RkFFbUQ7QUFFdEMsUUFBQSxzQkFBc0IsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hCLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzNCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDakIsVUFBVSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakMsU0FBUyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDakMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtDQUNaLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUlKLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBNEMsRUFDNUMsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLGlEQUFpRDtJQUNqRCw4Q0FBOEM7SUFDOUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDRDQUE0QyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUE7SUFFcEMsc0JBQXNCO0lBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsdUJBQW9CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNyRCxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxHQUFHLFVBQVU7WUFDYixjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7U0FDckI7S0FDL0IsQ0FBQyxDQUFBO0lBRUosR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUEzQlksUUFBQSxJQUFJLFFBMkJoQiJ9