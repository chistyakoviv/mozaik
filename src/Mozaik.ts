import "reflect-metadata";
import { container } from "./core/Container";
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';
import registries from './core/config/registries';
import  { Config } from './core/interfaces/Config';

export * from './core/Container';

export  { Component, ComponentFactory, Config };

registries();

export default class Mozaik {
    private componentFactory: ComponentFactory = container.resolve('ComponentFactory');

    protected config: Config;

    constructor(config: Config = {}) {
        this.config = config;
    }

    private instantiate(): void {
        this.componentFactory.instantiate();
    }

    run(): void {
        this.instantiate();
    }
};
