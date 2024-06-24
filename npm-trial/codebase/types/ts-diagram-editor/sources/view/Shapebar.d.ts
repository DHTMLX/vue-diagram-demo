import { View } from "../../../ts-common/view";
import { IEventSystem } from "../../../ts-common/events";
import { DiagramEditorEvents, IDiagramEditor, IDiagramEditorHandlersMap } from "../types";
interface IPreview {
    scale?: number;
    gap?: number | string;
}
type TCombinedSection = {
    [name: string]: boolean;
};
type TCustomUnit = {
    type: string;
    [key: string]: any;
};
export type TShapeSections = {
    [key: string]: (TCombinedSection | TCustomUnit | string)[];
};
export interface IShapebarConfig {
    width?: number;
    sections?: TShapeSections;
    preview?: IPreview;
}
export declare class Shapebar extends View {
    config: IShapebarConfig;
    events: IEventSystem<DiagramEditorEvents, IDiagramEditorHandlersMap>;
    private _htmlEvents;
    private _shadow;
    private _dropdowns;
    private _shapes;
    private _defaults;
    private _pressedShapeInfo;
    private _pull;
    private _data;
    private _editor;
    constructor(config: IShapebarConfig, editor: IDiagramEditor);
    private _handleMove;
    private _handleUp;
    private _toggle;
    private _getTextIcon;
    private _wrapDropdown;
    private _getShadow;
    private _getWrapped;
    private getGroupNode;
    private getSwimlaneNode;
    private _shapeInit;
    private _barCreator;
    private _getShapeSection;
    private _addToPull;
    private _render;
}
export {};
