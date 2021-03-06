import {
  ServiceConfig,
  PaystackService,
  Payment,
  Currency,
  PageParams,
} from 'services/paystack';

export class SubscriptionService extends PaystackService {
  public constructor(config: ServiceConfig) {
    super(config);
  }
}
