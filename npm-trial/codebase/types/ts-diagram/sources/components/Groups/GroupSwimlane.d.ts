import { IGroupSwimlane, IGroupSwimlaneConfig } from "../../../../ts-diagram";
import { VNode } from "../../../../ts-common/dom";
import { BaseGroup } from "./BaseGroup";
export declare class GroupSwimlane extends BaseGroup implements IGroupSwimlane {
    config: IGroupSwimlaneConfig;
    constructor(config: IGroupSwimlaneConfig, params: any);
    protected setServiceProp(config: IGroupSwimlaneConfig): void;
    protected setDefaults(config: IGroupSwimlaneConfig): IGroupSwimlaneConfig;
    render(): VNode;
}
