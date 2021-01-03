import State from "./interfaces/State";

export default class Component {
    private el: HTMLElement;
    private state: State = {};
    private components: Component[] = [];

    constructor(el: HTMLElement) {
        this.el = el;
    }

    setElement(el: HTMLElement) {
        this.el = el;
    }

    setState(state: State): void {
        Object.assign(this.state, state);
    }

    getComponents(type: any = Component): Component[] {
        return this.components.filter(c => c instanceof type);
    }

    setComponents(components: Component[]): void {
        this.components = components;
    }

    onCreate(): void {}
    onDestroy(): void {}
};
