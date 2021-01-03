import Mozaik from '../src/Mozaik';
import { Config } from '../src/Mozaik'
import './config/components';

const config: Config = {
};

class Application extends Mozaik {
    constructor(config: Config) {
        super(config);

        this.init();
    }
}

export default (new Application(config)).run();
