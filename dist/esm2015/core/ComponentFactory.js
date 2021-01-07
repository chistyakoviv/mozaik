import { __decorate } from "tslib";
import { container } from './Container';
import { singleton } from 'tsyringe';
let ComponentFactory = class ComponentFactory {
    instantiate(node = document.body) {
        const nodes = Array.from(node.querySelectorAll('[data-widget]'));
        for (let node of nodes) {
            const name = node.getAttribute('data-widget');
            const type = node.getAttribute('data-type');
            if (!name)
                continue;
            if (!type) {
                this.create(name);
                return;
            }
        }
    }
    create(name) {
        return container.resolve(name);
    }
};
ComponentFactory = __decorate([
    singleton()
], ComponentFactory);
export default ComponentFactory;
;
