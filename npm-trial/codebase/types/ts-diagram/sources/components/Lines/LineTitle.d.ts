import { VNode } from "../../../../ts-common/dom";
import { IBaseCoords, IBaseShape, IBoxSize, ILineConfig, ILineTitleConfig, ItemType } from "../../../../ts-diagram";
import { BaseShape } from "../Shapes/BaseShape";
export interface ILineTitle extends IBaseShape {
    config: ILineTitleConfig;
    parent: ILineConfig;
}
export declare class LineTitle extends BaseShape implements ILineTitle {
    config: ILineTitleConfig;
    parent: ILineConfig;
    constructor(config: ILineTitleConfig, parameters?: any);
    render(): VNode;
    getBaseType(): ItemType;
    protected setDefaults(config: ILineTitleConfig, defaults?: ILineTitleConfig): ILineTitleConfig;
    protected getContent(): VNode;
    protected getSize(text: string): {
        width: number;
        height: number;
    };
    protected getCenterCoords({ width, height }: ILineTitleConfig, { x, y }: IBaseCoords): IBaseCoords;
    protected getStraightCoords(sp: IBaseCoords, ep: IBaseCoords, factor?: number): IBaseCoords;
    protected getTitlePosition(line: ILineConfig, title: ILineTitleConfig): IBaseCoords;
    getBox(): IBoxSize;
}
