import { VNode } from "../../../../ts-common/dom";
import { IGroup, IGroupConfig } from "../../../../ts-diagram";
import { ShapesCollection } from "../../ShapesCollection";
import { BaseGroup } from "./BaseGroup";
export declare class Group extends BaseGroup implements IGroup {
    config: IGroupConfig;
    protected data: ShapesCollection;
    constructor(config: IGroupConfig, params: any);
    protected setDefaults(config: IGroupConfig): IGroupConfig;
    render(): VNode;
}
