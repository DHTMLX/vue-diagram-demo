import { Diagram, ItemConfig, ILineConfig } from "../../../ts-diagram";
import { Controls } from "./Controls";
export declare class Resize {
    private _diagram;
    private _controls;
    private _isOrgType;
    constructor(controls: Controls, diagram: Diagram);
    getPoints(item: ItemConfig, size: any): any;
}
export declare function getConnectorPoints(item: ILineConfig, scale: number): any[];
export declare function getRectPoints(item: ItemConfig, scale: number): any[];
