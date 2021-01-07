import Mozaik from '../src/Mozaik';
import { Config } from '../src/Mozaik'
import './config/components';
import './config/services';

const config: Config = {
};

class Application extends Mozaik {
    constructor(config: Config) {
        super(config);
    }

    run(): void {
        super.run();
    }
}

export default (new Application(config)).run();
