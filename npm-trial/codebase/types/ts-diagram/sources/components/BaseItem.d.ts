import { VNode } from "../../../ts-common/dom";
import { Id } from "../../../ts-common/types";
import { ItemType, IBaseItem, IBaseItemConfig, IBoxSize, ICoords, IMeasuredItem } from "../../../ts-diagram";
export declare class BaseItem implements IBaseItem {
    config: any;
    id: Id;
    protected editorNode: VNode;
    protected editableProperty: {
        key: any;
        editableId: any;
    };
    constructor(config: any, params?: any);
    isFixed(): boolean;
    isEditable(): boolean;
    getBaseType(): ItemType;
    isLocate(box: IMeasuredItem): boolean;
    getBox(): IBoxSize;
    canResize(): boolean;
    render(): VNode;
    getEditorNode(): VNode;
    setEditorNode(editor: VNode, key?: string, editableId?: string): void;
    destructor(): void;
    protected getCss(): string;
    protected setDefaults(config: IBaseItemConfig, defaults?: IBaseItemConfig): IBaseItemConfig;
    protected getCoords(config: IBaseItemConfig): ICoords;
}
