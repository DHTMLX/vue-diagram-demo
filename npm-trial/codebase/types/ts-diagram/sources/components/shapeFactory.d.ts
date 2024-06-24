import { Card } from "./Shapes/Card";
import { ImgCard } from "./Shapes/ImgCard";
import { TextShape } from "./Shapes/TextShape";
import { TopicShape } from "./Shapes/TopicShape";
import { IBaseShape, ItemConfig } from "../types";
export declare const shapes: {
    card: typeof Card;
    "img-card": typeof ImgCard;
    text: typeof TextShape;
    topic: typeof TopicShape;
};
export declare function shapesFactory(config: ItemConfig, parameters?: any): IBaseShape;
