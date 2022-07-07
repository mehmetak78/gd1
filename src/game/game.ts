import {Entity} from "../utils";
import {Grid} from "../grid";

export class Game extends Entity {

    private _lastTimestamp = 0;

    private _entities: Entity[] = [];

    constructor() {
        super();
        this.update();
    }

    get entities(): Entity[] {
        return this._entities;
    }

    public awake() {
        super.awake();

        this._entities.push(new Grid());

        for (const entity of this.entities) {
            entity.awake();
        }

        window.requestAnimationFrame(() => {
            this._lastTimestamp = Date.now();
            this.update();
        })

    }

    public update(): void {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000;
        super.update(deltaTime);

        for (const entity of this.entities) {
            entity.update(deltaTime)
        }

        this._lastTimestamp = Date.now();

        window.requestAnimationFrame(()=> {
            this.update();
        })
    }



}