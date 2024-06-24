import { VNode } from "../../../../ts-common/dom";
import { IBaseShape, IOrgCardConfig } from "../../../../ts-diagram";
import { BaseShape } from "./BaseShape";
export declare class Card extends BaseShape implements IBaseShape {
    config: IOrgCardConfig;
    constructor(config: IOrgCardConfig, parameters?: any);
    render(): VNode;
    protected setDefaults(config: IOrgCardConfig, defaults?: IOrgCardConfig): IOrgCardConfig;
    protected getContent(): any;
}
