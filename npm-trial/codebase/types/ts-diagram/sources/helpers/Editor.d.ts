import { VNode } from "../../../ts-common/dom";
import { EventSystem } from "../../../ts-common/events";
import { Id } from "../../../ts-common/types";
import { ShapesCollection } from "../ShapesCollection";
export declare enum EditorEvents {
    beforeEditorOpen = "beforeEditorOpen",
    afterEditorOpen = "afterEditorOpen",
    beforeEditorClose = "beforeEditorClose",
    afterEditorClose = "afterEditorClose",
    beforeEditorEditing = "beforeEditorEditing",
    afterEditorEditing = "afterEditorEditing"
}
export interface IEditorEventHandlersMap {
    [key: string]: (...args: any[]) => any;
    [EditorEvents.beforeEditorOpen]: (id: Id, key: string, subId?: string) => boolean | void;
    [EditorEvents.afterEditorOpen]: (id: Id, key: string, subId?: string) => void;
    [EditorEvents.beforeEditorClose]: (id: Id, key: string, subId?: string) => boolean | void;
    [EditorEvents.afterEditorClose]: (id: Id, key: string, subId?: string) => void;
    [EditorEvents.beforeEditorEditing]: (value: string, currentValue: string, id: Id, key: string, subId?: string) => boolean | void;
    [EditorEvents.afterEditorEditing]: (value: string, id: Id, key: string, subId?: string) => void;
}
export interface IEditorConfig {
    data: ShapesCollection;
    events: EventSystem<EditorEvents, IEditorEventHandlersMap>;
}
export interface IEditor {
    data: ShapesCollection;
    events: EventSystem<EditorEvents, IEditorEventHandlersMap>;
    openEditor(id: Id, key?: string, subId?: string): boolean;
    closeEditor(): boolean;
    isEditable(): boolean;
    destructor(): void;
    render(): VNode;
}
export declare class Editor implements IEditor {
    data: ShapesCollection;
    events: EventSystem<EditorEvents, IEditorEventHandlersMap>;
    private _editable;
    private _editableItem;
    private _keyManager;
    private _documentClick;
    private _currentValue;
    private _handlers;
    private _key;
    private _subId;
    private _dblDuration;
    constructor(config: IEditorConfig);
    openEditor(id: Id, key?: string, subId?: string): boolean;
    closeEditor(): boolean;
    isEditable(): boolean;
    destructor(): void;
    render(): VNode;
    protected edit(value: string): void;
    private _addHotkeys;
    private _removeHotkeys;
    private _initOuterClick;
    private _removeClickListener;
}
