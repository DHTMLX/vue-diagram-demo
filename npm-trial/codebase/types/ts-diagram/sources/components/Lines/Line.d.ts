import { VNode } from "../../../../ts-common/dom";
import { ItemType, IBoxSize, ICoords, ILineConfig } from "../../../../ts-diagram";
import { BaseItem } from "../BaseItem";
export declare class Line extends BaseItem {
    config: ILineConfig;
    constructor(config: ILineConfig, defaults?: any);
    getBaseType(): ItemType;
    setDefaults(config: ILineConfig, defaults?: any): ILineConfig;
    getBox(): IBoxSize;
    render(): VNode;
    protected _getType(): string;
    protected _getPoints(): string;
    protected _getStringPoints(): string;
    protected _getCurvedPoints(config: ILineConfig): string;
    protected _getArrowLine(): any[];
    protected _getArrow(from: ICoords, to: ICoords): any;
}
