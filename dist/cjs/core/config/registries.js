"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("../Container");
const ComponentFactory_1 = require("../ComponentFactory");
function registries() {
    Container_1.container.register('ComponentFactory', { useClass: ComponentFactory_1.default });
}
exports.default = registries;
;
