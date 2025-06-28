"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250311091542 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250311091542 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "vendor" drop constraint if exists "vendor_handle_unique";`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_vendor_handle_unique" ON "vendor" (handle) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop index if exists "IDX_vendor_handle_unique";`);
    }
}
exports.Migration20250311091542 = Migration20250311091542;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMTEwOTE1NDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYXJrZXRwbGFjZS9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMzExMDkxNTQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxNQUFNLENBQUMsNkdBQTZHLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FFRjtBQVhELDBEQVdDIn0=