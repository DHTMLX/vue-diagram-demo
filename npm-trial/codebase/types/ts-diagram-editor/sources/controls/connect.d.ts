import { Id } from "../../../ts-common/types";
import { Diagram, ItemConfig, ILineConfig } from "../../../ts-diagram";
import { Controls } from "./Controls";
export declare class Connect {
    private _diagram;
    private _nearShape;
    private _nearPoint;
    private _connector;
    private _controls;
    private _isOrgType;
    constructor(controls: Controls, diagram: Diagram);
    getItemId(): Id;
    getPoints(targetItem: any, size: any): any;
    _getConnectionPoints(points: any, scale: any): any;
    createConnector: (point: any) => void;
    setNearShape(shape: ItemConfig): void;
    toggleNearShape(shape: ItemConfig): void;
    removeNearShape(): void;
    moveConnector(event: PointerEvent, item: ILineConfig, mov: any, p: any): void;
    onUp(event: any): void;
    private _setNearPoint;
    private _removeNearPoint;
    private _getDistanceBetweenPoints;
    private _findNearShape;
}
export declare function getConnectPoints(item: ItemConfig, grip: number): ({
    x: any;
    y: number;
    dx: any;
    dy: number;
    id: Id;
    side: string;
} | {
    x: number;
    y: any;
    dx: number;
    dy: any;
    id: Id;
    side: string;
})[];
