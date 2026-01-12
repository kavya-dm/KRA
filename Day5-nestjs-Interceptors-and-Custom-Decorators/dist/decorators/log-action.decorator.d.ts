export declare const LOG_ACTION_KEY = "log_action";
export interface LogActionMetadata {
    action: string;
    version?: string;
}
export declare const LogAction: (action: string, version?: string) => import("@nestjs/common").CustomDecorator<string>;
