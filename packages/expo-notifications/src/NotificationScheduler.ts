import { NativeModulesProxy, ProxyNativeModule } from '@unimodules/core';

import { NotificationTriggerInput } from './NotificationScheduler.types';
import { NotificationRequest, NotificationContentInput } from './Notifications.types';

export interface NotificationSchedulerModule extends ProxyNativeModule {
  getAllScheduledNotificationsAsync: () => Promise<NotificationRequest[]>;
  scheduleNotificationAsync: (
    identifier: string,
    notificationContent: NotificationContentInput,
    trigger: NotificationTriggerInput
  ) => Promise<string>;
  cancelScheduledNotificationAsync: (identifier: string) => Promise<void>;
  cancelAllScheduledNotificationsAsync: () => Promise<void>;
}

export default (NativeModulesProxy.ExpoNotificationScheduler as any) as NotificationSchedulerModule;
