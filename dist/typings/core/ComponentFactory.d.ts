import Component from './Component';
export default class ComponentFactory {
    instantiate(node?: HTMLElement): void;
    create(name: string): Component;
}
