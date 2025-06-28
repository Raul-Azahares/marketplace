import MarketplaceModuleService from "./service";
export declare const MARKETPLACE_MODULE = "marketplace";
declare const _default: import("@medusajs/types").ModuleExports<typeof MarketplaceModuleService> & {
    linkable: {
        readonly vendor: {
            id: {
                serviceName: "marketplace";
                field: "vendor";
                linkable: "vendor_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "marketplace";
                field: "vendor";
                linkable: "vendor_id";
                primaryKey: "id";
            };
        };
        readonly vendorAdmin: {
            id: {
                serviceName: "marketplace";
                field: "vendorAdmin";
                linkable: "vendor_admin_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "marketplace";
                field: "vendorAdmin";
                linkable: "vendor_admin_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
