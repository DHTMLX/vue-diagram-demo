import { ItemType, ISwimlane, ISwimlaneConfig } from "../../../../ts-diagram";
import { VNode } from "../../../../ts-common/dom";
import { IDataItem } from "../../../../ts-data";
import { BaseGroup } from "../Groups/BaseGroup";
export declare class Swimlane extends BaseGroup implements ISwimlane {
    config: ISwimlaneConfig;
    private subHeaderNearCells;
    private children;
    constructor(config: ISwimlaneConfig, params: any);
    getBaseType(): ItemType;
    isEditable(subheaderId: string): boolean;
    getChildHtmlNodes(config: ISwimlaneConfig, data: IDataItem[]): VNode[];
    render(childData?: IDataItem[]): VNode;
    protected setDefaults(config: ISwimlaneConfig): ISwimlaneConfig;
    protected setExtraDefaults(config: ISwimlaneConfig, data: IDataItem[]): void;
    protected removeExtraDefaults(data: IDataItem[]): void;
    private getSubHeaderNode;
    private getSubHeaderCellNode;
    private getHeaderStates;
    private getSubHeaderType;
}
