import { container } from './Container';
import Component from './Component';
import { singleton } from 'tsyringe';
import Transform from 'tsyringe/dist/typings/types/transform';

let stack: Element | undefined = undefined;

export class ElementStack {
    push(el: Element): void {
        stack = el;
    }

    pop(): Element | undefined {
        return stack;
    }
}

export class ElementTransformer implements Transform<ElementStack, Element | undefined> {
    public transform(stack: ElementStack): Element | undefined {
        return stack.pop();
    }
}

@singleton()
export default class ComponentFactory {
    private stack: ElementStack = new ElementStack();

    instantiate(node: Element = document.body): void {
        const nodes = Array.from(node.querySelectorAll('[data-widget]'));

        for (let node of nodes) {
            const name: string | null = node.getAttribute('data-widget');
            const type: string | null = node.getAttribute('data-type');

            if (!name) continue;

            if (!type) {
                this.create(name, node);
                continue;
            }
            
            
        }
    }

    create(name: string, el: Element): Component {
        this.stack.push(el);
        return container.resolve(name);
    }
};
