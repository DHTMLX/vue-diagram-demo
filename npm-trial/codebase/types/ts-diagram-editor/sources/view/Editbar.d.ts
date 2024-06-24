import { Id } from "../../../ts-common/types";
import { IItem } from "../../../ts-form";
import { Cell } from "../../../ts-layout/sources/Cell";
import { IDiagramEditor } from "../types";
interface IHandlerConfig {
    id: Id;
    key: string | string[];
    editor: IDiagramEditor;
    control: IItem;
    value: any;
}
interface ISetValueConfig {
    editor: IDiagramEditor;
    control: IItem;
    value: any;
}
export interface IControlProperties {
    type: string;
    key?: string | string[];
    wrap?: boolean;
    $parent?: Id;
    $on?: {
        [eventName: string]: (...args: any[]) => any;
    };
    $properties?: {
        [key: string]: IControlProperties;
    };
    [key: string]: any;
}
export interface IControl extends IControlProperties {
    $handler?: (obj: IHandlerConfig) => void;
    $setValue?: (obj: ISetValueConfig) => void;
    $layout?: (obj: any) => any;
}
export interface IControls {
    [type: string]: IControl;
}
interface ITypeProperties {
    [type: string]: IControlProperties[] | ((obj?: any) => IControlProperties[]);
}
export interface IEditbarConfig {
    width?: number;
    controls?: IControls;
    properties?: ITypeProperties;
}
export declare class Editbar {
    private _controls;
    private _properties;
    private _cell;
    private _form;
    private _editor;
    private _diagram;
    private _activeControls;
    constructor(cell: Cell, config: IEditbarConfig, editor: IDiagramEditor);
    isFocused(): boolean;
    private setControls;
    private getFormLayout;
    private getControlLayout;
    private getControlProperties;
    private getTypeProperties;
    private setForm;
    private useHandler;
    private useSetValue;
}
export {};
