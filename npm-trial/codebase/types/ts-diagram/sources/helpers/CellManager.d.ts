import { IEventSystem } from "../../../ts-common/events";
import { Id } from "../../../ts-common/types";
import { ShapesCollection } from "../ShapesCollection";
import { ActionDirection, ActionValidate, ICellType, ISwimlaneConfig } from "../types";
export declare enum CellManagerEvents {
    beforeCellsAdd = "beforeCellsAdd",
    afterCellsAdd = "afterCellsAdd",
    beforeCellsMove = "beforeCellsMove",
    afterCellsMove = "afterCellsMove",
    beforeCellsRemove = "beforeCellsRemove",
    afterCellsRemove = "afterCellsRemove",
    beforeCellsValidation = "beforeCellsValidation",
    afterCellsValidation = "afterCellsValidation"
}
export interface ICellManagerHandlersMap {
    [key: string]: (...args: any[]) => any;
    [CellManagerEvents.beforeCellsAdd]: (swimlaneId: Id) => boolean | void;
    [CellManagerEvents.afterCellsAdd]: (swimlaneId: Id) => void;
    [CellManagerEvents.beforeCellsMove]: (swimlaneId: Id) => boolean | void;
    [CellManagerEvents.afterCellsMove]: (swimlaneId: Id) => void;
    [CellManagerEvents.beforeCellsRemove]: (swimlaneId: Id) => boolean | void;
    [CellManagerEvents.afterCellsRemove]: (swimlaneId: Id) => void;
    [CellManagerEvents.beforeCellsValidation]: (swimlaneId: Id, action: ActionValidate) => boolean | void;
    [CellManagerEvents.afterCellsValidation]: (swimlaneId: Id, validate: boolean, action: ActionValidate) => void;
}
export interface ICellManager {
    data: ShapesCollection;
    swimlane: ISwimlaneConfig | null;
    setSwimlane(id: Id): boolean;
    resetSwimlane(): void;
    add(cellIndex: number, dir: ActionDirection, unstrict?: boolean): void;
    move(cellIndex: number, dir: ActionDirection, unstrict?: boolean): void;
    remove(cellIndex: number, type: ICellType, unstrict?: boolean): void;
    validation(cellIndex: number, dir: ActionDirection, action: ActionValidate): boolean;
    getSubHeaderCellIndex(subheaderId: string): number;
    getSubHeaderCellId(subheaderId: string): Id | undefined;
    getSubHeaderType(subheaderId: string): ICellType | undefined;
    getCellIndex(cellId: Id, type: ICellType): number | undefined;
    getCellId(cellIndex: number, type: ICellType): Id | undefined;
}
export declare class CellManager implements ICellManager {
    events: IEventSystem<CellManagerEvents, ICellManagerHandlersMap>;
    data: ShapesCollection;
    swimlane: ISwimlaneConfig;
    constructor(data: ShapesCollection, events: any);
    setSwimlane(id: Id): boolean;
    resetSwimlane(): void;
    add(cellIndex: number, dir: ActionDirection, unstrict?: boolean): void;
    move(cellIndex: number, dir: ActionDirection, unstrict?: boolean): void;
    remove(cellIndex: number, type: ICellType, unstrict?: boolean): void;
    validation(cellIndex: number, dir: ActionDirection, action: ActionValidate): boolean;
    getSubHeaderCellIndex(subheaderId: string): number;
    getSubHeaderCellId(subheaderId: string): Id | undefined;
    getSubHeaderType(subheaderId: string): ICellType | undefined;
    getCellIndex(cellId: Id, type: ICellType): number | undefined;
    getCellId(cellIndex: number, type: ICellType): Id | undefined;
    private getSubHeaderIndex;
    private getDirectionType;
    private getUniqueLayout;
}
