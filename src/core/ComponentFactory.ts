import { container } from './Container';
import Component from './Component';
import { singleton } from 'tsyringe';

@singleton()
export default class ComponentFactory {
    instantiate(node: HTMLElement = document.body): void {
        const nodes = Array.from(node.querySelectorAll('[data-widget]'));

        for (let node of nodes) {
            const name: string | null = node.getAttribute('data-widget');
            const type: string | null = node.getAttribute('data-type');

            if (!name) continue;

            if (!type) {
                this.create(name);
                return;
            }
            
            
        }
    }

    create(name: string): Component {
        return container.resolve(name);
    }
};
