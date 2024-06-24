import { ILayoutEventHandlersMap, LayoutEvents } from "../../../ts-layout";
import { IToolbarConfig, Toolbar } from "./Toolbar";
import { IShapebarConfig, Shapebar } from "./Shapebar";
import { IDiagramEditor } from "../types";
import { VNode } from "../../../ts-common/dom";
import { IEventSystem } from "../../../ts-common/events";
import { Editbar, IEditbarConfig } from "./Editbar";
interface IView {
    events: IEventSystem<LayoutEvents, ILayoutEventHandlersMap>;
    hide(view?: TViewType): void;
    show(view?: TViewType): void;
    isVisible(view: TViewType): boolean;
}
type Views = {
    toolbar: Toolbar;
    shapebar: Shapebar;
    editbar: Editbar;
};
type TViewType = "toolbar" | "shapebar" | "editbar";
export interface ICommonViewItemConfig {
    show?: boolean;
    css?: string;
}
export interface IToolbarViewConfig extends ICommonViewItemConfig, IToolbarConfig {
}
export interface IShapebarViewConfig extends ICommonViewItemConfig, IShapebarConfig {
}
export interface IEditbarViewConfig extends ICommonViewItemConfig, IEditbarConfig {
}
export type ViewConfig = {
    toolbar?: boolean | IToolbarViewConfig;
    shapebar?: boolean | IShapebarViewConfig;
    editbar?: boolean | IEditbarViewConfig;
};
export declare class View implements IView {
    events: IEventSystem<LayoutEvents, ILayoutEventHandlersMap>;
    private _config;
    private _toolbar;
    private _shapebar;
    private _editbar;
    private _layout;
    private _diagram;
    private _editor;
    private _views;
    private _isDefault;
    constructor(container: HTMLElement, editor: IDiagramEditor);
    hide(view?: TViewType): void;
    show(view?: TViewType): void;
    isVisible(view: TViewType): boolean;
    getViews(): Views;
    paint(): void;
    destructor(): void;
    getRootView(): VNode;
    private isViewEnable;
}
export {};
