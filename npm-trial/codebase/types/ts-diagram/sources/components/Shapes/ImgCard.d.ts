import { VNode } from "../../../../ts-common/dom";
import { IImgOrgCardConfig } from "../../../../ts-diagram";
import { Card } from "./Card";
export declare class ImgCard extends Card {
    protected setDefaults(config: IImgOrgCardConfig, defaults?: IImgOrgCardConfig): IImgOrgCardConfig;
    protected getCss(): string;
    protected getContent(): VNode;
}
