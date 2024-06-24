import { VNode } from "../../../../ts-common/dom";
import { IFlowShapeConfig, IBaseShape } from "../../../../ts-diagram";
import { BaseShape } from "./BaseShape";
export declare class FlowShape extends BaseShape implements IBaseShape {
    config: IFlowShapeConfig;
    constructor(config: IFlowShapeConfig, parameters?: any);
    protected setDefaults(config: IFlowShapeConfig, defaults?: IFlowShapeConfig): IFlowShapeConfig;
    protected getContent(): VNode[];
    render(): VNode;
    private _getShapeContour;
}
export declare const flowShapes: {
    circle: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    rectangle: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    triangle: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    start: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    end: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    process: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    output: {
        path: (width: number, height: number, part: number) => string;
        additionalPath: () => void;
    };
    decision: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    display: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    document: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    data: {
        path: (width: number, height: number, part: number) => string;
        additionalPath: () => void;
    };
    database: {
        path: (width: number, height: number, part: number) => string;
        additionalPath: (width: number, height: number, part: number) => string;
    };
    internal: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number, part: number) => string;
    };
    offline: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number, part: number) => string;
    };
    delay: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    page: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    input: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    operation: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    punchcard: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    subroutine: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number, part: number) => string;
    };
    comment: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    storage: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    extract: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    collate: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    or: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number) => string;
    };
    junction: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number) => string;
    };
    keyring: {
        path: (width: number, height: number, part: number) => string;
        additionalPath: () => void;
    };
    tape: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    preparation: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    endpoint: {
        path: (width: number, height: number) => string;
        additionalPath: () => void;
    };
    roll: {
        path: (width: number, height: number) => string;
        additionalPath: (width: number, height: number) => string;
    };
};
