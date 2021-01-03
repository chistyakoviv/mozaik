import Component from '../../src/core/Component';
import MapService from '../services/MapService'
import { injectable, inject, registry } from '../../src/core/Container';

@injectable()
class Header extends Component {
    private mapService: MapService;

    constructor(mapService: MapService) {
        super();

        this.mapService = mapService;
    }
};

export default Header;
