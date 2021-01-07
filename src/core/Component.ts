import State from "./interfaces/State";
import { ElementTransformer, ElementStack } from './ComponentFactory';
import { injectWithTransform } from './Container';

export default class Component {
    protected el?: Element;
    protected state: State = {};
    protected components: Component[] = [];

    constructor(@injectWithTransform(ElementStack, ElementTransformer, null) el?: Element) {
        this.el = el;

        this.onInit();
    }

    setElement(el: Element) {
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

    onInit(): void {}
    onCreate(): void {}
    onDestroy(): void {}
};
