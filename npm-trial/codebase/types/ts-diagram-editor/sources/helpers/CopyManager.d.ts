import { IDiagramEditor } from "../types";
import { Id } from "../../../ts-common/types";
export interface ICopyManager {
    copy(ids?: Id[]): void;
    paste(): void;
    copyStyles(id?: Id): void;
    pasteStyles(ids?: Id[]): void;
}
export declare class CopyManager implements ICopyManager {
    private _editor;
    private _data;
    private _copiedStyles;
    private _copiedItems;
    private _props;
    constructor(editor: IDiagramEditor);
    copy(ids?: Id[]): void;
    paste(): void;
    copyStyles(id?: Id): void;
    pasteStyles(ids?: Id[]): void;
}
