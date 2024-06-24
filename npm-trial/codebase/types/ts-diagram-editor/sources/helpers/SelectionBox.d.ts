import { Diagram, ICoords } from "../../../ts-diagram";
import { ISelectionBox } from "../types";
export declare class SelectionBox {
    start: ICoords;
    end: ICoords;
    private _diagram;
    private _isOrgType;
    constructor(start: ICoords, diagram: Diagram);
    render(): any;
    isValid(): boolean;
    addSelected(box?: ISelectionBox): void;
}
