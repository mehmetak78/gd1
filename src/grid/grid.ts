import {Entity, Vector2D} from "../utils";
import {Node} from "../node";
import {Settings} from "../settings";

export class Grid extends Entity {

    private _nodes: Node[] = [];

    get nodes(): Node[] {
        return this._nodes;
    }

    awake() {
        super.awake();
        this.initNodes();
        for (const node of this._nodes) {
            node.awake();
        }
    }

    update(deltaTime: number) {
        super.update(deltaTime);
        for (const node of this._nodes) {
            node.update(deltaTime);
        }
    }

    private initNodes(): void {
        const size = Settings.grid.nodeSize;
        const offset = Settings.grid.nodeOffset;
        for (let y = 0; y < Settings.grid.dimension; y++) {
            for (let x = 0; x < Settings.grid.dimension; x++) {
                const start = new Vector2D(
                    x * (size+offset) + offset,
                    y * (size + offset) + offset
                );
                const end = new Vector2D(
                    start.x + size,
                    start.y + size
                );
                const index = new Vector2D(x, y);
                const node = new Node(start, end, index);
                this._nodes.push(node);
            }
        }
    }

}

