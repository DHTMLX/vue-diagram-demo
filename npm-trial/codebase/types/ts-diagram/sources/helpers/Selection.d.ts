import { IEventSystem } from "../../../ts-common/events";
import { Id } from "../../../ts-common/types";
import { DataCollection, IDataItem } from "../../../ts-data";
import { SelectionEvents } from "../types";
export interface ISelectUnitConfig {
    id: Id;
    join?: boolean;
    batch?: Id[];
}
export interface ISelectStrictConfig extends Omit<ISelectUnitConfig, "join"> {
    strict?: boolean;
}
interface ISelection {
    events: IEventSystem<SelectionEvents, ISelectionEventsHandlersMap>;
    add(obj: ISelectUnitConfig): boolean;
    remove(obj?: {
        id: Id;
    }): boolean;
    getItem(obj?: {
        id: Id;
    }): IDataItem;
    includes(obj: ISelectStrictConfig): boolean;
    getIds(): Id[];
    clear(): void;
}
interface ISelectionEventsHandlersMap {
    [key: string]: (...args: any[]) => any;
    [SelectionEvents.afterSelect]: (obj: ISelectUnitConfig) => void;
    [SelectionEvents.afterUnSelect]: (obj: Omit<ISelectUnitConfig, "join">) => void;
    [SelectionEvents.beforeSelect]: (obj: ISelectUnitConfig) => void | boolean;
    [SelectionEvents.beforeUnSelect]: (obj: Omit<ISelectUnitConfig, "join">) => void | boolean;
}
export declare class Selection implements ISelection {
    events: IEventSystem<SelectionEvents, ISelectionEventsHandlersMap>;
    private _data;
    private _selected;
    private _selectedLines;
    constructor(data: DataCollection, events: IEventSystem<any>);
    add({ id, join, batch }: ISelectUnitConfig): boolean;
    remove(obj?: {
        id: Id;
    }): boolean;
    includes({ id }: ISelectStrictConfig): boolean;
    getItem(obj?: {
        id: Id;
    } | undefined): IDataItem;
    getIds(): Id[];
    clear(): void;
    private unselect;
}
export {};
