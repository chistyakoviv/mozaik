"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Container_1 = require("./Container");
const tsyringe_1 = require("tsyringe");
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
        return Container_1.container.resolve(name);
    }
};
ComponentFactory = tslib_1.__decorate([
    tsyringe_1.singleton()
], ComponentFactory);
exports.default = ComponentFactory;
;
