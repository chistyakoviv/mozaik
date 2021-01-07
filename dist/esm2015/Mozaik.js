import "reflect-metadata";
import { container } from "./core/Container";
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';
import registries from './core/config/registries';
;
export * from './core/Container';
export { Component, ComponentFactory };
registries();
export default class Mozaik {
    constructor(config = {}) {
        this.componentFactory = container.resolve('ComponentFactory');
        this.config = config;
    }
    instantiate() {
        this.componentFactory.instantiate();
    }
    run() {
        this.instantiate();
    }
}
;
