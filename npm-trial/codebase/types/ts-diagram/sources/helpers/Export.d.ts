import { View } from "../../../ts-common/view";
export type TExportType = "pdf" | "png";
export type TPaperFormat = "Letter" | "Legal" | "Tabloid" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6";
export interface IExportFileConfig {
    url?: string;
    name?: string;
    header?: string;
    footer?: string;
    exportStyles?: boolean | string[];
}
export interface IPDFConfig extends IExportFileConfig {
    pdf?: {
        scale?: number;
        landscape?: boolean;
        format?: TPaperFormat;
        margin?: {
            top?: string | number;
            right?: string | number;
            bottom?: string | number;
            left?: string | number;
        };
        width?: string;
        height?: string;
        pageRanges?: string;
        displayHeaderFooter?: boolean;
        footerTemplate?: string;
        headerTemplate?: string;
        printBackground?: boolean;
    };
}
export type IPNGConfig = IExportFileConfig;
export declare class Exporter {
    private _name;
    private _version;
    private _view;
    constructor(_name: string, _version: string, _view: View);
    pdf(config?: IPDFConfig): void;
    png(config?: IPNGConfig): void;
    protected _rawExport(config: IPDFConfig | IPNGConfig, mode: string, view: View): void;
    private _normalizeLink;
}
