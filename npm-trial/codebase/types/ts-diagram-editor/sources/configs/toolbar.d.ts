import { TToolbarCommonItem } from "../view/Toolbar";
export declare const defaultToolbarItems: TToolbarCommonItem[];
export declare const orgToolbarItems: TToolbarCommonItem[];
export declare const meta: (locale: any, type: any) => {
    separator: {
        type: string;
    };
    spacer: {
        type: string;
    };
    file: {
        id: string;
        type: string;
        value: any;
        items: string[];
    };
    importJson: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    export: {
        id: string;
        value: any;
        items: string[];
    };
    exportJson: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    exportPdf: {
        id: string;
        value: any;
        handler: (editor: any) => any;
    };
    exportPng: {
        id: string;
        value: any;
        handler: (editor: any) => any;
    };
    edit: {
        id: string;
        type: string;
        value: any;
        items: string[];
    };
    undo: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    redo: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    duplicate: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => void;
    };
    copy: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    paste: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    copyStyle: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    pasteStyle: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => any;
    };
    selectAll: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => void;
    };
    selectNone: {
        id: string;
        value: any;
        hotkey: any;
        handler: (editor: any) => void;
    };
    view: {
        id: string;
        value: any;
        type: string;
        items: string[];
    };
    theme: {
        id: string;
        value: any;
        items: string[];
    };
    themeLight: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    themeDark: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    themeLightContrast: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    themeDarkContrast: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    shapebar: {
        id: string;
        value: any;
        hotkey: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    editbar: {
        id: string;
        value: any;
        hotkey: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    grid: {
        id: string;
        value: any;
        hotkey: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    magnetic: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    connectionPoints: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    resizePoints: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    itemsDraggable: {
        id: string;
        value: any;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
        handler: (editor: any) => void;
    };
    zoomIn: {
        id: string;
        value: any;
        icon: string;
        handler: (editor: any) => void;
        hotkey: any;
    };
    zoomOut: {
        id: string;
        value: any;
        icon: string;
        handler: (editor: any) => void;
        hotkey: any;
    };
    arrange: {
        id: string;
        value: any;
        type: string;
        items: string[];
    };
    layout: {
        id: string;
        value: any;
        items: string[];
    };
    layoutMode: {
        id: string;
        value: any;
        items: string[];
    };
    layoutModeDirect: {
        id: string;
        value: any;
        handler: (editor: any) => void;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
    };
    layoutModeEdges: {
        id: string;
        value: any;
        handler: (editor: any) => void;
        checkIcon: (editor: any) => "dxi dxi-check" | "dxi dxi-empty";
    };
    layoutOrthogonal: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    layoutRadial: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    align: {
        id: string;
        value: any;
        items: string[];
    };
    alignHorizontalLeft: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    alignHorizontalCenter: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    alignHorizontalRight: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    alignVerticalTop: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    alignVerticalCenter: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    alignVerticalBottom: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    distribute: {
        id: string;
        value: any;
        items: string[];
    };
    distributeVertical: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    distributeHorizontal: {
        id: string;
        value: any;
        handler: (editor: any) => void;
    };
    scale: {
        id: string;
        type: string;
        html: string;
        handler: (editor: any, event: any) => void;
        checkIcon: (editor: any) => void;
    };
};
