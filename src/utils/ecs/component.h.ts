import { Entity } from "./entity";
import {IAwake, IUpdate} from "../lifecycle";


export interface IComponent extends IAwake, IUpdate {
    entity: Entity | null;
}