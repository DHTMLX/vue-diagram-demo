import { VNode } from "../../../../ts-common/dom";
import { IBaseGroupConfig, IBaseCoords, BaseDirection, ShapeConfig } from "../../../../ts-diagram";
export declare function getCircleTpl(config: ShapeConfig, index?: number): VNode;
export declare function getHeaderTpl(config: ShapeConfig): VNode;
export declare function getTextTemplate(config: ShapeConfig, content: any): VNode;
export declare function getShapeCss(config: ShapeConfig): {
    [key: string]: string | number;
};
interface IExpandIconConfig {
    open: boolean;
    color: string;
    position: BaseDirection;
}
export declare function getExpandIcon(config: IExpandIconConfig): VNode;
interface IMenuIconConfig {
    dir: "rows" | "cols";
    color: string;
}
export declare function getMenuIcon(config: IMenuIconConfig): VNode;
export declare function getGroupContainerStyle(config: IBaseGroupConfig, coords: IBaseCoords): {
    [key: string]: string | number;
};
export declare function getSwimlaneBackGround(config: IBaseGroupConfig, coords: IBaseCoords): {
    [key: string]: string | number;
};
export declare function getSwimlaneContainerStyle(config: IBaseGroupConfig, coords: IBaseCoords): {
    [key: string]: string | number;
};
export declare const getTextStyle: (config: any) => {
    "justify-content": any;
    "align-items": any;
    fontStyle: any;
    fontWeight: any;
    lineHeight: string;
    fontSize: any;
    color: any;
    width: any;
    height: any;
};
export {};
