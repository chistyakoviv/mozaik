import { container } from '../Container';
import ComponentFactory from '../ComponentFactory';

export default function registries(): void {
    container.register('ComponentFactory', { useClass: ComponentFactory });
};
