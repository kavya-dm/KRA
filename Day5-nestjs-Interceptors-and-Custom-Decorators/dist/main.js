"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('🚀 Application bootstrap starting...');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('📦 AppModule initialized');
    app.setGlobalPrefix('api');
    await app.listen(3000);
    console.log('✅ Server running at http://localhost:3000/api');
}
bootstrap();
//# sourceMappingURL=main.js.map