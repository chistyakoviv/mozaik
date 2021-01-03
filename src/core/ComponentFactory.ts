import { container } from './Container';
import Component from './Component';

export default class ComponentFactory {
    static init(node: HTMLElement = document.body): void {
        const nodes = Array.from(node.querySelectorAll('[data-widget]'));

        for (let node of nodes) {
            const name: string | null = node.getAttribute('data-widget');
            const type: string | null = node.getAttribute('data-type');

            if (name === null) continue;

            if (!type) {
                ComponentFactory.create(name);
                return;
            }
            
            
        }
    }

    static create(name: string): Component {
        return container.resolve(name);
    }
};
