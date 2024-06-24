import { DataCollection, IDataItem } from "../../../ts-data";
interface IHistoryManager {
    saveDelay: number;
    disabled: boolean;
    add(newState: IDataItem[]): void;
    reset(): void;
    undo(first?: boolean): void;
    redo(): void;
    isUndo(): boolean;
    isRedo(): boolean;
    enable(): void;
    disable(): void;
}
export declare class HistoryManager implements IHistoryManager {
    saveDelay: number;
    disabled: boolean;
    private _data;
    private _state;
    private _position;
    private _inProgress;
    constructor(data: DataCollection);
    enable(): void;
    disable(): void;
    add(newState: IDataItem[]): void;
    reset(): void;
    undo(first?: boolean): void;
    redo(): void;
    isUndo(): boolean;
    isRedo(): boolean;
    private _apply;
}
export {};
