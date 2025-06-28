"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20240708151444 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20240708151444 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "vendor" ("id" text not null, "handle" text not null, "name" text not null, "logo" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "vendor_pkey" primary key ("id"));');
        this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_vendor_handle_unique" ON "vendor" (handle) WHERE deleted_at IS NULL;');
        this.addSql('create table if not exists "vendor_admin" ("id" text not null, "first_name" text null, "last_name" text null, "email" text not null, "vendor_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "vendor_admin_pkey" primary key ("id"));');
        this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_vendor_admin_email_unique" ON "vendor_admin" (email) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_vendor_admin_vendor_id" ON "vendor_admin" (vendor_id) WHERE deleted_at IS NULL;');
        this.addSql('alter table if exists "vendor_admin" add constraint "vendor_admin_vendor_id_foreign" foreign key ("vendor_id") references "vendor" ("id") on update cascade;');
    }
    async down() {
        this.addSql('alter table if exists "vendor_admin" drop constraint if exists "vendor_admin_vendor_id_foreign";');
        this.addSql('drop table if exists "vendor" cascade;');
        this.addSql('drop table if exists "vendor_admin" cascade;');
    }
}
exports.Migration20240708151444 = Migration20240708151444;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDA3MDgxNTE0NDQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYXJrZXRwbGFjZS9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjQwNzA4MTUxNDQ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRXBELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyx5U0FBeVMsQ0FBQyxDQUFDO1FBQ3ZULElBQUksQ0FBQyxNQUFNLENBQUMsNkdBQTZHLENBQUMsQ0FBQztRQUUzSCxJQUFJLENBQUMsTUFBTSxDQUFDLHNWQUFzVixDQUFDLENBQUM7UUFDcFcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1SEFBdUgsQ0FBQyxDQUFDO1FBQ3JJLElBQUksQ0FBQyxNQUFNLENBQUMsaUhBQWlILENBQUMsQ0FBQztRQUUvSCxJQUFJLENBQUMsTUFBTSxDQUFDLDhKQUE4SixDQUFDLENBQUM7SUFDOUssQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1FBRWhILElBQUksQ0FBQyxNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsTUFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUVGO0FBckJELDBEQXFCQyJ9