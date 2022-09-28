/**
 * Mitt https://github.com/developit/mitt
 */

/** 事件类型 */
export type EventType = string | symbol;

/**
 * 事件处理程序可以接受一个可选的事件参数
 * 无返回值
 */
export type Handler<T = any> = (event?: T) => void;
/**
 * 事件处理程序可以接受一个可选的事件参数
 * 无返回值
 */
export type WildcardHandler = (type: EventType, event?: any) => void;

/** 包含某一类型的所有当前注册事件处理程序的数组 */
export type EventHandlerList = Array<Handler>;
export type WildCardEventHandlerList = Array<WildcardHandler>;

/** 事件类型及其对应的事件处理程序的映射。 */
export type EventHandlerMap = Map<
  EventType,
  EventHandlerList | WildCardEventHandlerList
>;

export interface Emitter {
  all: EventHandlerMap;
  /** 注册：给定类型的事件处理程序 */
  on<T = any>(type: EventType, handler: Handler<T>): void;
  /** 注册：给定类型的事件处理程序 */
  on(type: '*', handler: WildcardHandler): void;
  /** 卸载：给定类型的事件处理程序 */
  off<T = any>(type: EventType, handler: Handler<T>): void;
  /** 卸载：给定类型的事件处理程序 */
  off(type: '*', handler: WildcardHandler): void;
  /** 调用：给定类型的所有处理程序 */
  emit<T = any>(type: EventType, event?: T): void;
  /** 调用：给定类型的所有处理程序 */
  emit(type: '*', event?: any): void;
  /** 清空 */
  clear(): void;
}
export default function mitt(alls?: EventHandlerMap): Emitter {
  const all = alls || new Map();
  return {
    all,

    on<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type);
      const added = handlers && handlers.push(handler);
      if (!added) {
        all?.set(type, [handler]);
      }
    },

    off<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },

    emit<T = any>(type: EventType, evt: T) {
      ((all?.get(type) || []) as EventHandlerList).slice().map((handler) => {
        handler(evt);
      });
      ((all?.get('*') || []) as WildCardEventHandlerList)
        .slice()
        .map((handler) => {
          handler(type, evt);
        });
    },

    clear() {
      this.all.clear();
    },
  };
}
