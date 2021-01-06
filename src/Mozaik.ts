import "reflect-metadata";
import { container, registry } from "./core/Container";
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';
// import  { Config } from './core/interfaces/Config';

interface Config {
    [key: string]: any
};

export * from './core/Container';

export  { Component, ComponentFactory, Config };

@registry([
    { token: "ComponentFactory", useClass: ComponentFactory }
])
export default class Mozaik {
    private componentFactory: ComponentFactory;

    protected config: Config;

    constructor(config: Config = {}) {
        this.config = config;
        this.componentFactory = container.resolve('ComponentFactory');
    }

    protected resolve(): void {
        this.componentFactory.instantiate();
    }

    run(): void {
        this.resolve();
    }
};
