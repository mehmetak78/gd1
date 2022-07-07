import {Entity, IComponent} from "../../../utils";
import {Node} from "../../node";
import {Settings} from "../../../settings";

export class NodeDrawComponent implements IComponent {

    public entity!: Node;

    awake(): void {
        const canvas = document.createElement('canvas');
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset

        canvas.setAttribute('width',canvasSize.toString());
        canvas.setAttribute('height', canvasSize.toString());
        document.body.appendChild(canvas);


        const ctx = canvas.getContext('2d')!;
        ctx.beginPath();
        ctx.fillStyle = Settings.grid.color;
        ctx.rect(this.entity.start.x, this.entity.start.y, this.entity.size.x, this.entity.size.y);
        ctx.fill();
    }

    update(deltaTime: number): void {
    }




}