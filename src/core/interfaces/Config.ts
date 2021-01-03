import Component from "../Component";
import ComponentInterface from './ComponentInterface';

interface Config {
    components?: {[key: string]: ComponentInterface}
};

export default Config;
