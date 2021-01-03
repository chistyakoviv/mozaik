import { container } from '../../src/Mozaik'
import Header from '../components/Header';

container.register<Header>('header', { useFactory: (c) => c.resolve(Header) });
