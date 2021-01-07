import Component from '../../src/core/Component';
import MapService from '../services/MapService'
import { injectable, inject, container } from '../../src/core/Container';
import { ElementTransformer, ElementStack } from '../../src/core/ComponentFactory';
import { injectWithTransform } from '../../src/core/Container';

@injectable()
class Header extends Component {
    constructor(
        @injectWithTransform(ElementStack, ElementTransformer) el: Element,
        @inject('MapService') private mapService: MapService
    ) {
        super(el);
    }
};

export default Header;
