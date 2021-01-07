
import { container } from '../../src/core/Container';
import GoogleMap from '../services/GoogleMap';

container.register('MapService', { useClass: GoogleMap });
