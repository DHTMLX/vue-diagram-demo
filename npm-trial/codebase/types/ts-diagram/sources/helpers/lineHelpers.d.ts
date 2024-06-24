import { IBaseCoords, ILineConfig } from "../types";
export declare function getNearPointStraightLine(sp: IBaseCoords, ep: IBaseCoords, cp: IBaseCoords): IBaseCoords;
export declare function getLineAngle(sp: IBaseCoords, ep: IBaseCoords): number;
export declare function getLineLength(sp: IBaseCoords, ep: IBaseCoords): number;
export declare function getLinePercentage(sp: IBaseCoords, ep: IBaseCoords, cp: IBaseCoords): number;
export declare function getDistanceFactor(distance?: number): number;
export declare function getDistancePercentage(factor: number): number;
export declare function getDistanceEblowLine(line: ILineConfig, cp: IBaseCoords): number;
export declare function addLineTitle(line: any, diagram: any): void;
