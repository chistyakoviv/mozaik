import "reflect-metadata";
import { container } from "./core/Container";
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';
import registries from './core/config/registries';
;
export * from './core/Container';
export { Component, ComponentFactory };
registries();
var Mozaik = (function () {
    function Mozaik(config) {
        if (config === void 0) { config = {}; }
        this.componentFactory = container.resolve('ComponentFactory');
        this.config = config;
    }
    Mozaik.prototype.instantiate = function () {
        this.componentFactory.instantiate();
    };
    Mozaik.prototype.run = function () {
        this.instantiate();
    };
    return Mozaik;
}());
export default Mozaik;
;
