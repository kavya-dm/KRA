import { SetMetadata } from '@nestjs/common';

export const LOG_ACTION_KEY = 'log_action';

export interface LogActionMetadata {
  action: string;
  version?: string;
}

export const LogAction = (action: string, version?: string) => {
  console.log(` @LogAction decorator registered → action=${action}, version=${version}`);
  return SetMetadata(LOG_ACTION_KEY, { action, version });
};

// Decorators run when the application starts

// Metadata is registered before any request comes