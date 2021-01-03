import "reflect-metadata";
import { container } from "tsyringe";
import Config from './core/interfaces/Config';

export default class Mozaik {
    private config: Config;

    constructor(config: Config) {
        this.config = config;

        this.init();
    }

    private init(): void {
        
    }
};
