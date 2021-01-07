import { container } from '../Container';
import ComponentFactory from '../ComponentFactory';
export default function registries() {
    container.register('ComponentFactory', { useClass: ComponentFactory });
}
;
