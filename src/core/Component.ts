import State from "./interfaces/State";
import ComponentInterface from './interfaces/ComponentInterface'

export default class Component implements ComponentInterface {
    protected el?: HTMLElement;
    protected state: State = {};
    protected components: Component[] = [];

    setElement(el: HTMLElement) {
        this.el = el;
    }

    setState(state: State): void {
        Object.assign(this.state, state);
    }

    getComponents(type: any = Component): Component[] {
        if (type === Component)
            return this.components;

        return this.components.filter(component => component instanceof type);
    }

    setComponents(components: Component[]): void {
        this.components = components;
    }

    onCreate(): void {}
    onDestroy(): void {}
};
