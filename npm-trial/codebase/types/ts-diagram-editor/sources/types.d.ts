import { IEventSystem } from "../../ts-common/events";
import { Id, SelectionEvents } from "../../ts-common/types";
import { DataEvents, IDataItem } from "../../ts-data";
import { Diagram, DiagramEvents, DiagramType, IAutoPlacement, IBaseCoords, IShapeToolbarConfig, ILineRenderConfig, IDefaultShapeConfig } from "../../ts-diagram";
import { HistoryManager } from "./helpers/HistoryManager";
import { CopyManager } from "./helpers/CopyManager";
import { Editbar, Toolbar, View } from "./view";
import { ViewConfig } from "./view/View";
import { TShapeSections } from "./view/Shapebar";
export interface IDiagramEditor {
    version: string;
    config: IDefaultEditorConfig | IOrgEditorConfig | IMindmapEditorConfig | IEditorConfig;
    events: IEventSystem<DataEvents | SelectionEvents | DiagramEvents | DiagramEditorEvents, IDiagramEditorHandlersMap>;
    view: View;
    toolbar: Toolbar;
    editbar: Editbar;
    diagram: Diagram;
    history: HistoryManager;
    model: CopyManager;
    paint(): void;
    destructor(): void;
    import(diagram: Diagram): void;
    parse(data: IDataItem[]): void;
    serialize(): IDataItem[];
    zoomIn(step?: number): void;
    zoomOut(step?: number): void;
}
export interface ITargetOption {
    selected: IDataItem | null;
    exclude?: Id | null;
    coord?: IBaseCoords;
}
export interface IMagneticConfig {
    show?: boolean;
    lineWidth?: number;
    lineColor?: string;
}
export type OrgToolbarTypes = "add" | "horizontal" | "vertical" | "remove";
export type MindmapToolbarTypes = "add" | "addLeft" | "addRight" | "remove";
export type RadialToolbarTypes = "add" | "remove";
export type DefaultToolbarTypes = "copy" | "connect" | "removePoint" | "remove";
export type OrgShapeToolbar = IShapeToolbarConfig[] | OrgToolbarTypes[] | boolean[] | (IShapeToolbarConfig | OrgToolbarTypes | boolean)[];
export type MindmapShapeToolbar = IShapeToolbarConfig[] | MindmapToolbarTypes[] | boolean[] | (IShapeToolbarConfig | MindmapToolbarTypes | boolean)[];
export type RadialShapeToolbar = IShapeToolbarConfig[] | RadialToolbarTypes[] | boolean[] | (IShapeToolbarConfig | RadialToolbarTypes | boolean)[];
export type DefaultShapeToolbar = IShapeToolbarConfig[] | DefaultToolbarTypes[] | boolean[] | (IShapeToolbarConfig | DefaultToolbarTypes | boolean)[];
export interface IEditorConfig {
    type?: DiagramType;
    shapeType?: string;
    view?: ViewConfig;
    defaults?: IDefaultShapeConfig;
    lineConfig?: ILineRenderConfig;
    scale?: number;
    grid?: boolean;
    gridStep?: number;
    resizePoints?: boolean;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    editMode?: boolean;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    lineGap?: number;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    controls?: IEditorControls;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    reservedWidth?: number;
}
export interface IOrgEditorConfig extends IEditorConfig {
    type: "org";
    shapeToolbar?: boolean | OrgShapeToolbar;
    itemsDraggable?: boolean;
    view?: Omit<ViewConfig, "shapebar">;
}
export interface IMindmapEditorConfig extends IEditorConfig {
    type: "mindmap";
    shapeToolbar?: boolean | MindmapShapeToolbar;
    itemsDraggable?: boolean;
    view?: Omit<ViewConfig, "shapebar">;
}
export interface IDefaultEditorConfig extends IEditorConfig {
    type: "default";
    shapeToolbar: boolean | DefaultShapeToolbar;
    autoplacement?: IAutoPlacement;
    magnetic?: boolean | IMagneticConfig;
    connectionPoints?: boolean;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    shapeBarWidth?: number;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    shapeSections?: TShapeSections;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    gapPreview?: string | number;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    scalePreview?: string | number;
}
export interface ISelectionBox {
    start: ICoords;
    end: ICoords;
}
export interface ICoords {
    x: number;
    y: number;
}
export interface IDataHash {
    [id: string]: string | number | boolean;
}
export interface ILineTitleMoveEvent {
    id: Id;
    titleId: Id;
    coords: IBaseCoords;
    event: PointerEvent;
}
export interface IItemTargetEvent {
    id: Id;
    targetId: Id;
    batch: Id[];
    event: PointerEvent;
}
export interface IItemMoveEvent {
    id: Id;
    batch: Id[];
    coords: IBaseCoords;
    event: PointerEvent;
    $mov?: ICoords;
}
export declare enum DiagramEditorEvents {
    shapeResize = "shapeResize",
    zoomIn = "zoomin",
    zoomOut = "zoomout",
    beforeShapeIconClick = "beforeShapeIconClick",
    afterShapeIconClick = "afterShapeIconClick",
    beforeLineTitleMove = "beforeLineTitleMove",
    afterLineTitleMove = "afterLineTitleMove",
    lineTitleMoveEnd = "lineTitleMoveEnd",
    beforeShapeMove = "beforeShapeMove",
    afterShapeMove = "afterShapeMove",
    shapeMoveEnd = "shapeMoveEnd",
    beforeGroupMove = "beforeGroupMove",
    afterGroupMove = "afterGroupMove",
    groupMoveEnd = "groupMoveEnd",
    beforeItemMove = "beforeItemMove",
    afterItemMove = "afterItemMove",
    itemMoveEnd = "itemMoveEnd",
    itemTarget = "itemTarget",
    beforeItemCatch = "beforeItemCatch",
    afterItemCatch = "afterItemCatch",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    shapeMove = "shapemove",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    resetButton = "resetButton",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    applyButton = "applyButton",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    undoButton = "undoButton",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    redoButton = "redoButton",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    visibility = "visibility",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    exportData = "exportData",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    importData = "importData",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    autoLayout = "autoLayout",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
    changeGridStep = "changeGridStep",
    shapesUp = "shapesUp"
}
export interface IDiagramEditorHandlersMap {
    [key: string]: (...args: any[]) => any;
    [DiagramEditorEvents.shapeResize]: () => void;
    [DiagramEditorEvents.zoomIn]: (step: number) => void;
    [DiagramEditorEvents.zoomOut]: (step: number) => void;
    [DiagramEditorEvents.beforeShapeIconClick]: (iconId: string, shape: IDataItem) => boolean | void;
    [DiagramEditorEvents.afterShapeIconClick]: (iconId: string, shape: IDataItem) => void;
    [DiagramEditorEvents.beforeLineTitleMove]: (obj: ILineTitleMoveEvent) => boolean | void;
    [DiagramEditorEvents.afterLineTitleMove]: (obj: ILineTitleMoveEvent) => void;
    [DiagramEditorEvents.lineTitleMoveEnd]: (obj: ILineTitleMoveEvent) => void;
    [DiagramEditorEvents.beforeShapeMove]: (obj: IItemMoveEvent) => boolean | void;
    [DiagramEditorEvents.afterShapeMove]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.shapeMoveEnd]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.beforeGroupMove]: (obj: IItemMoveEvent) => boolean | void;
    [DiagramEditorEvents.afterGroupMove]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.groupMoveEnd]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.beforeItemMove]: (obj: IItemMoveEvent) => boolean | void;
    [DiagramEditorEvents.afterItemMove]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.itemMoveEnd]: (obj: IItemMoveEvent) => void;
    [DiagramEditorEvents.itemTarget]: (obj: IItemTargetEvent) => boolean | void;
    [DiagramEditorEvents.beforeItemCatch]: (obj: IItemTargetEvent) => boolean | void;
    [DiagramEditorEvents.afterItemCatch]: (obj: IItemTargetEvent) => void;
    [DiagramEditorEvents.shapeMove]: () => void;
    [DiagramEditorEvents.resetButton]: () => void;
    [DiagramEditorEvents.applyButton]: () => void;
    [DiagramEditorEvents.undoButton]: () => void;
    [DiagramEditorEvents.redoButton]: () => void;
    [DiagramEditorEvents.visibility]: () => void;
    [DiagramEditorEvents.exportData]: () => void;
    [DiagramEditorEvents.importData]: (data: any) => void;
    [DiagramEditorEvents.changeGridStep]: (step: number) => void;
    [DiagramEditorEvents.shapesUp]: (shape: any) => void;
}
/** @deprecated See a documentation: https://docs.dhtmlx.com/diagram/migration/ */
export interface IEditorControls {
    apply?: boolean;
    reset?: boolean;
    export?: boolean;
    import?: boolean;
    autoLayout?: boolean;
    historyManager?: boolean;
    editManager?: boolean;
    scale?: boolean;
    gridStep?: boolean;
}
