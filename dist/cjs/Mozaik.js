"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentFactory = exports.Component = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const Container_1 = require("./core/Container");
const Component_1 = require("./core/Component");
exports.Component = Component_1.default;
const ComponentFactory_1 = require("./core/ComponentFactory");
exports.ComponentFactory = ComponentFactory_1.default;
const registries_1 = require("./core/config/registries");
;
tslib_1.__exportStar(require("./core/Container"), exports);
registries_1.default();
class Mozaik {
    constructor(config = {}) {
        this.componentFactory = Container_1.container.resolve('ComponentFactory');
        this.config = config;
    }
    instantiate() {
        this.componentFactory.instantiate();
    }
    run() {
        this.instantiate();
    }
}
exports.default = Mozaik;
;
