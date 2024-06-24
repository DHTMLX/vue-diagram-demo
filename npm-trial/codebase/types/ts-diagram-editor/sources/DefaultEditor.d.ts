import { ActionDirection, IBaseCoords, ItemConfig } from "../../ts-diagram";
import { IDataItem } from "../../ts-data";
import { Id } from "../../ts-common/types";
import { BaseDiagramEditor } from "./BaseDiagramEditor";
import { IDefaultEditorConfig, ITargetOption } from "./types";
export declare class DefaultEditor extends BaseDiagramEditor {
    config: IDefaultEditorConfig;
    private shapebar;
    constructor(container: string | HTMLElement, config: IDefaultEditorConfig);
    alignItems(items: IDataItem[], position: number, direction: "x" | "y"): void;
    distributeItems(items: IDataItem[], direction: "x" | "y"): void;
    protected _initDiagram(): void;
    protected _initUI(container: any): void;
    protected _showConnectPoints(id: Id, toggle?: boolean): void;
    protected _setHandlers(): void;
    protected _initHotkeys(): void;
    protected _removeItem(id: Id): void;
    protected _getGroupTarget(item: IDataItem, option: ITargetOption, target?: any): IDataItem;
    protected _addItemToGroup(selectedItem: IDataItem): void;
    protected _addItem(item: ItemConfig): Id;
    protected _addSwimlaneItem(item: any): Id;
    protected _moveChildren(id: Id, mov: IBaseCoords): boolean;
    protected _setParentBox(id: Id): void;
    protected _setItemIndicator({ entryArea, $captureArea, id }: IDataItem, percent: number): void;
    protected _addSwimlaneCells(item: any, dir: ActionDirection): void;
}
