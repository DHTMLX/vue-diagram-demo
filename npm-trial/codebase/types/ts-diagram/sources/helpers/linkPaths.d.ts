import { ItemConfig, ILineConfig, IDiagramConfig } from "../types";
interface IPoint {
    x: number;
    y: number;
}
export declare function nearestLinkPath(link: ILineConfig, from: ItemConfig, to: ItemConfig, config: any): IPoint[];
export declare function directLinkPath(link: ILineConfig, from: ItemConfig, to: ItemConfig, config: IDiagramConfig): void;
export {};
