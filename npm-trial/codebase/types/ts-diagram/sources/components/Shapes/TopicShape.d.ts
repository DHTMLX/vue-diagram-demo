import { VNode } from "../../../../ts-common/dom";
import { ShapesCollection, IBaseShape, ITopicShapeConfig } from "../../../../ts-diagram";
import { BaseShape } from "./BaseShape";
export declare class TopicShape extends BaseShape implements IBaseShape {
    config: ITopicShapeConfig;
    data: ShapesCollection;
    private _oldText;
    constructor(config: any, parameters?: any);
    render(): VNode;
    protected getContent(): any[];
    protected setDefaults(config: ITopicShapeConfig, defaults: ITopicShapeConfig): ITopicShapeConfig;
}
