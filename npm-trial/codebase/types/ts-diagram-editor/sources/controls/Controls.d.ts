import { IEventSystem } from "../../../ts-common/events";
import { Id } from "../../../ts-common/types";
import { DataEvents, Diagram, DiagramEvents, IBaseCoords, ItemConfig, SelectionEvents } from "../../../ts-diagram";
import { DiagramEditorEvents, ICoords, IMagneticConfig } from "../types";
import { Connect } from "./connect";
export declare function getLength(from: ItemConfig, to: ItemConfig): number;
export interface IControlsConfig {
    magnetic: boolean | IMagneticConfig;
    resizePoints: boolean;
    connectionPoints: boolean;
}
export declare class Controls {
    config: IControlsConfig;
    connect: Connect;
    private _events;
    private _diagram;
    private _resize;
    private _diagramSize;
    private _isOrgType;
    private _magnetic;
    private _touch;
    private _magneticItems;
    private _movedItems;
    constructor(events: IEventSystem<DataEvents | SelectionEvents | DiagramEvents | DiagramEditorEvents>, diagram: Diagram, config: IControlsConfig);
    render(item: ItemConfig, size: any): any;
    setConfig(config: Partial<IControlsConfig>): void;
    setNearShape(shape: ItemConfig): void;
    toggleNearShape(shape: ItemConfig): void;
    getPoint(x: number, y: number): ICoords;
    onMove(event: PointerEvent, mov: ICoords, p: any): void;
    onUp(event?: PointerEvent): void;
    connectOnUp(event: PointerEvent): void;
    protected _moveChilds(id: Id, mov: IBaseCoords): boolean;
    private _rotate;
    private _gripClick;
    private _eventHandling;
    private _dragStart;
    private _getUpHandler;
    private _setClosestItems;
    private _getMagneticLines;
    private _getMagneticLine;
    private _getMoveHandler;
}
