import { IToolbarElement, ProToolbar } from "../../../ts-toolbar";
import { IItem } from "../../../ts-navbar";
import { IDiagramEditor } from "../types";
type TExtraToolbarType = "separator" | "spacer" | "file" | "importJson" | "export" | "exportJson" | "exportPdf" | "exportPng" | "edit" | "undo" | "redo" | "duplicate" | "copy" | "paste" | "copyStyle" | "pasteStyle" | "selectAll" | "selectNone" | "view" | "theme" | "themeLight" | "themeDark" | "themeLightContrast" | "themeDarkContrast" | "shapebar" | "editbar" | "grid" | "magnetic" | "connectionPoints" | "resizePoints" | "itemsDraggable" | "zoomIn" | "zoomOut" | "arrange" | "layout" | "layoutMode" | "layoutModeDirect" | "layoutOrthogonal" | "layoutRadial" | "align" | "alignHorizontalLeft" | "alignHorizontalCenter" | "alignHorizontalRight" | "alignVerticalTop" | "alignVerticalCenter" | "alignVerticalBottom" | "distribute" | "distributeVertical" | "distributeHorizontal" | "scale";
export type IExtraToolbarProperties = {
    items?: TToolbarCommonItem[];
    checkIcon?: (editor: IDiagramEditor) => string;
    handler?: (editor: IDiagramEditor, event: Event) => void;
};
export interface IToolbarItem extends Omit<IItem, "type">, IExtraToolbarProperties {
    type: TExtraToolbarType;
    value?: string;
    hotkey?: string;
    icon?: string;
}
export type TToolbarCommonItem = TExtraToolbarType | IToolbarItem | (IToolbarElement & IExtraToolbarProperties);
export interface IToolbarConfig {
    css?: string;
    navigationType?: "click" | "pointer";
    items?: TToolbarCommonItem[];
}
export declare class Toolbar extends ProToolbar {
    private _editor;
    private _meta;
    constructor(config: IToolbarConfig, editor: IDiagramEditor);
    parse(items: TToolbarCommonItem[]): void;
    private getPreparedItems;
    private checkIcons;
}
export {};
