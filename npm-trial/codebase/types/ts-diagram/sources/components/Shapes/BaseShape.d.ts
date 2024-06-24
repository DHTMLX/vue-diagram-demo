import { ICoords, IBaseShape, ItemType, IBaseShapeConfig } from "../../../../ts-diagram";
import { BaseItem } from "../BaseItem";
export declare class BaseShape extends BaseItem implements IBaseShape {
    constructor(config: IBaseShapeConfig, params?: any);
    getBaseType(): ItemType;
    getCenter(): ICoords;
    getPoint(x: number, y: number): ICoords;
}
