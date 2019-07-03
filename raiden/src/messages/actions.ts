import { createStandardAction } from 'typesafe-actions';

import { Message } from './types';
import { Address } from '../utils/types';

/* One-shot send payload.message to meta.address user in transport */
export const messageSend = createStandardAction('messageSend')<
  { message: string | Message },
  { address: Address }
>();

/**
 * payload.message was received on payload.ts (timestamp) from meta.address
 * payload.userId and payload.roomId are optional and specific to matrix transport, as sender info
 */
export const messageReceived = createStandardAction('messageReceived').map(
  (
    {
      text,
      message,
      ts,
      userId,
      roomId,
    }: {
      text: string;
      message?: Message;
      ts?: number;
      userId?: string;
      roomId?: string;
    },
    meta: { address: Address },
  ) => ({ payload: { text, message, ts: ts || Date.now(), userId, roomId }, meta }),
);
