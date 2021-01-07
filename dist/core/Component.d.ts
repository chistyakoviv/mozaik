import State from "./interfaces/State";
export default class Component {
    protected el?: HTMLElement;
    protected state: State;
    protected components: Component[];
    setElement(el: HTMLElement): void;
    setState(state: State): void;
    getComponents(type?: any): Component[];
    setComponents(components: Component[]): void;
    onCreate(): void;
    onDestroy(): void;
}
