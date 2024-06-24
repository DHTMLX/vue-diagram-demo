export declare enum LineMode {
    Direct = 1,
    Edges = 2
}
export declare enum Direction {
    Top = 1,
    Bottom = 2,
    Right = 3,
    Left = 4
}
export type ISubGraph = {
    g: IGraph;
    root?: string;
};
export interface IGraph {
    translate(dir: LPoint): any;
    mirror(): any;
    rotate(vector: any): any;
    getLevelBounds(): LBound[];
    getLevels(): LNode[][];
    getBounds(i: number, padding: number, wide: boolean): number[];
    getNodes(): LNode[];
    collectSubNodes(root: LNode, backet: LNode[]): any;
    getRoot(): LNode;
    setRoot(): void;
    copy(): IGraph;
    root(LNode: any): any;
    toTree(LNode: any): LNode;
    importNodes(nodes: LNode[]): any;
    split(filter: any): any;
    setBox(): any;
    setGlobalBox(): any;
    getBox(): [LBound, LBound];
    getIString(): string;
    hash: LNodeHash;
    routes: IRoutes;
    _bounds: any;
    _tbounds: any;
    _width: any;
    _symmetry: boolean;
}
export interface IRoutes {
    getRoute(a: string, b: string): LRoute;
    addRoute(a: string, b: string, dx: number, dy: number): any;
    addPath(a: string, b: string, dx: number, dy: number, points?: number[]): any;
    hasRoute(a: string, dx: number, dy: number): boolean;
    isAligned(a: string): boolean;
    isAxisAligned(a: string, dx: number, dy: number): boolean;
}
export type LNodeHash = {
    [id: string]: LNode;
};
export type LBound = number[];
export type TreeHash = {
    [id: string]: IGraph[];
};
export interface LNode {
    id: string;
    w: number;
    h: number;
    x: number;
    y: number;
    kids?: LNode[];
    links?: LNode[];
    isn?: number;
    iss?: string;
}
export interface LRoute {
    dx: number;
    dy: number;
    points?: number[];
}
export interface LPoint {
    x: number;
    y: number;
}
type DirVector = {
    [key in Direction]: LPoint;
};
export declare const DirVectors: DirVector;
export {};
