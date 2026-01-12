"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const rxjs_1 = require("rxjs");
const log_action_decorator_1 = require("../decorators/log-action.decorator");
let LoggingInterceptor = class LoggingInterceptor {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
        console.log('🧩 LoggingInterceptor instance created');
    }
    intercept(context, next) {
        console.log('➡️ Interceptor intercept() called');
        const startTime = Date.now();
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;
        console.log(`📥 Incoming Request: ${method} ${url}`);
        const metadata = this.reflector.get(log_action_decorator_1.LOG_ACTION_KEY, context.getHandler());
        if (metadata) {
            console.log(`🏷️ Metadata found → Action: ${metadata.action}, Version: ${metadata.version}`);
        }
        else {
            console.log('ℹ️ No @LogAction metadata found for this route');
        }
        console.log('⏭️ Passing control to route handler...');
        return next.handle().pipe((0, rxjs_1.tap)((response) => {
            const executionTime = Date.now() - startTime;
            console.log('📤 Response received from handler');
            console.log(`⏱️ Execution Time: ${executionTime}ms`);
            console.log('📦 Response Data:', response);
        }), (0, rxjs_1.catchError)((error) => {
            console.log('❌ Error caught in interceptor');
            console.error(error.message);
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], LoggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map