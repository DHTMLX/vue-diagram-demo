import { IRoutes, LRoute } from "./types";
export default class Routes implements IRoutes {
    private _map;
    constructor();
    getRoute(a: string, b: string): LRoute;
    addRoute(a: string, b: string, dx: number, dy: number): void;
    hasRoute(a: string, dx: number, dy: number): boolean;
    isAligned(a: string): boolean;
    isAxisAligned(a: string, dx: number, dy: number): boolean;
    addPath(a: string, b: string, dx: number, dy: number, points?: number[]): void;
    private _code;
}
