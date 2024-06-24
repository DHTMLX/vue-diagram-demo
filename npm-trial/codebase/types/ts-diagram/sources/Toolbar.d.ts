import { VNode } from "../../ts-common/dom";
import { IEventSystem } from "../../ts-common/events";
import { DataEvents, DiagramEvents, IShapeToolbarConfig, SelectionEvents, ItemConfig, IBaseCoords } from "./types";
import { View } from "../../ts-common/view";
import { IDataItem } from "../../ts-data";
export declare class Toolbar extends View {
    config: any;
    private events;
    private _handlers;
    private _hidden;
    constructor(events: IEventSystem<DataEvents | DiagramEvents | SelectionEvents>, icons: IShapeToolbarConfig[]);
    render(item: IDataItem | IDataItem[], size: any, coords?: IBaseCoords): VNode;
    hide(): void;
    show(): void;
    protected _getIcons(item: ItemConfig, icons: IShapeToolbarConfig[]): any[];
    protected _getCoords(target: ItemConfig | ItemConfig[], { width, height, x, y }: {
        width: any;
        height: any;
        x: any;
        y: any;
    }): {
        x: number;
        y: number;
    };
}
