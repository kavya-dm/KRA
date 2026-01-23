import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

const SECRET = 'mysecretkey';

/**
 * Service responsible for verifying webhook signatures
 */
@Injectable()
export class WebhookService {
  verifySignature(payload: any, signature: string): boolean {
    const hmac = crypto
      .createHmac('sha256', SECRET)
      .update(JSON.stringify(payload))
      .digest('base64');

    console.log(signature);
    return signature === `sha256=${hmac}`;
  }
}

// Business logic for webhook verification.


// Creates HMAC hash

// Compares signatures


// Security: prevents fake webhooks.
