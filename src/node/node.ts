import {Entity, Vector2D} from "../utils";
import {NodeDrawComponent} from "./components";

export class Node extends Entity {

    constructor(public readonly start: Vector2D,
                public readonly end: Vector2D,
                public readonly index: Vector2D
    ) {
        super();
    }

    public get size() : Vector2D {
        return new Vector2D(
            this.end.x  - this.start.x,
            this.end.y - this.start.y
        )
    }

    public awake() {
        this.addComponent(new NodeDrawComponent())
        super.awake();
    }
}