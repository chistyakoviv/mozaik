import "reflect-metadata";
import { container } from "./core/Container";
import Config from './core/interfaces/Config';
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';

export * from './core/Container';

export { Config };

export default class Mozaik {
    private componentFactory: ComponentFactory;

    protected config: Config;

    constructor(config: Config) {
        this.config = config;

        container.register('ComponentFactory', { useClass: ComponentFactory });

        this.componentFactory = container.resolve('factory');
    }

    protected resolve(): void {
        this.componentFactory.instantiate();
    }

    run(): void {
        this.resolve();
    }
};
