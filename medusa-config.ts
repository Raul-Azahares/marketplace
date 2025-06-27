import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    admin: {
      // Especifica la ruta donde están los archivos estáticos del admin
      path: "dist/public/admin", // Cambia esto si index.html está en otra carpeta
    },
  },
  modules: [
    {
      resolve: "./src/modules/marketplace",
    },
  ],
})
