import {Node} from "./node";
import {NodeDrawComponent} from "./components";
import {Vector2D} from "../utils";

describe('>>> Node', () => {

    const start = new Vector2D(1,2);
    const end = new Vector2D(5,6);
    const index = new Vector2D(1,1);

    let node: Node;

    beforeEach(() => {
        node = new Node(start, end, index);
    })

    it('should awake and update all Components', () => {
        const spyDrawCompAwake = jest.spyOn(NodeDrawComponent.prototype,'awake');
        const spyDrawCompUpdate = jest.spyOn(NodeDrawComponent.prototype,'update');

        expect(spyDrawCompAwake).not.toBeCalled();
        expect(spyDrawCompUpdate).not.toBeCalled();

        node.awake();
        expect(spyDrawCompAwake).toBeCalled();

        node.update(0);
        expect(spyDrawCompUpdate).toBeCalled();
    })

    it ('should calculate the size', () => {
        expect(node.size.x).toBe<number>(end.x - start.x)
        expect(node.size.y).toBe<number>(end.y - start.y)
    })

})