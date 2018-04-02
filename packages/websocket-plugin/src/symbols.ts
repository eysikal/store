import { InjectionToken } from '@angular/core';

export const NGXS_WEBSOCKET_OPTIONS = new InjectionToken('NGXS_WEBSOCKET_OPTIONS');
export const configDefaults: Partial<NgxsWebsocketPluginOptions> = {
  reconnectInterval: 5000,
  reconnectAttempts: 10,
  typeKey: 'type',
  serializer: JSON.stringify
};

export interface NgxsWebsocketPluginOptions {
  url: string;
  typeKey?: string;
  reconnectInterval?: number;
  reconnectAttempts?: number;
  serializer?: (data: any) => string;
}

export function noop(arg) {
  return function() {};
}

export class ConnectWebSocket {}
export class DisconnectWebSocket {}
export class SendWebSocketMessage {
  constructor(public payload: any) {}
}
