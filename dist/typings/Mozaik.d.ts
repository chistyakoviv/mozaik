import "reflect-metadata";
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';
interface Config {
    [key: string]: any;
}
export * from './core/Container';
export { Component, ComponentFactory, Config };
export default class Mozaik {
    private componentFactory;
    protected config: Config;
    constructor(config?: Config);
    private instantiate;
    run(): void;
}
