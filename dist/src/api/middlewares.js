"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validators_1 = require("@medusajs/medusa/api/admin/products/validators");
const route_1 = require("./vendors/route");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/vendors",
            method: ["POST"],
            middlewares: [
                (0, http_1.authenticate)("vendor", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
                (0, http_1.validateAndTransformBody)(route_1.PostVendorCreateSchema),
            ],
        },
        {
            matcher: "/vendors/*",
            middlewares: [
                (0, http_1.authenticate)("vendor", ["session", "bearer"]),
            ]
        },
        {
            matcher: "/vendors/products",
            method: ["POST"],
            middlewares: [
                (0, http_1.validateAndTransformBody)(validators_1.AdminCreateProduct),
            ]
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBSWlDO0FBQ2pDLCtFQUFtRjtBQUNuRiwyQ0FBd0Q7QUFFeEQsa0JBQWUsSUFBQSx3QkFBaUIsRUFBQztJQUMvQixNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQixXQUFXLEVBQUU7Z0JBQ1gsSUFBQSxtQkFBWSxFQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRTtvQkFDNUMsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEIsQ0FBQztnQkFDRixJQUFBLCtCQUF3QixFQUFDLDhCQUFzQixDQUFDO2FBQ2pEO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFdBQVcsRUFBRTtnQkFDWCxJQUFBLG1CQUFZLEVBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWCxJQUFBLCtCQUF3QixFQUFDLCtCQUFrQixDQUFDO2FBQzdDO1NBQ0Y7S0FDRjtDQUNGLENBQ0EsQ0FBQSJ9