import "reflect-metadata";
import { container } from "./core/Container";
import Config from './core/interfaces/Config';
import Component from './core/Component';
import ComponentFactory from './core/ComponentFactory';

export * from './core/Container';

export { Config };

export default class Mozaik {
    protected config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    protected init(): void {
        // this.register();
        this.resolve();
    }

    private register(): void {
        for (let key in this.config.components) {
            const type = this.config.components[key];
            container.register(key, { useClass: Component });
        }
    }

    private resolve(): void {
        ComponentFactory.init();
    }

    run(): void {

    }
};
