import { State } from "./types";

export default class Component {
    private el: HTMLElement;
    private state: State = {};
    private components: Component[] = [];

    constructor(el: HTMLElement) {
        this.el = el;
    }

    setState(state: State): void {
        Object.assign(this.state, state);
    }

    getComponents(): Component[] {
        return this.components;
    }

    setComponents(components: Component[]): void {
        this.components = components;
    }

    onCreate(): void {}
    onDestroy(): void {}
};
