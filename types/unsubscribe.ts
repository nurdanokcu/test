export enum TypeFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export interface DataUnsubscribe {
  confirmation_token: string;
  reason?: string;
  allow_notification: boolean;
  frequency?: TypeFrequency;
}
