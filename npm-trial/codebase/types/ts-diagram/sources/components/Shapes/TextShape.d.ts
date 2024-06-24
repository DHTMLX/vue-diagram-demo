import { VNode } from "../../../../ts-common/dom";
import { ShapesCollection } from "../../../../ts-diagram";
import { ITextShapeConfig, IBaseShape } from "../../../../ts-diagram";
import { BaseShape } from "./BaseShape";
export declare class TextShape extends BaseShape implements IBaseShape {
    config: ITextShapeConfig;
    data: ShapesCollection;
    private _prevValue;
    constructor(config: ITextShapeConfig, parameters?: any);
    render(): VNode;
    protected setDefaults(config: ITextShapeConfig, defaults: ITextShapeConfig): ITextShapeConfig;
    protected getContent(): VNode;
}
