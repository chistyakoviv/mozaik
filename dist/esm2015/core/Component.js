export default class Component {
    constructor() {
        this.state = {};
        this.components = [];
    }
    setElement(el) {
        this.el = el;
    }
    setState(state) {
        Object.assign(this.state, state);
    }
    getComponents(type = Component) {
        if (type === Component)
            return this.components;
        return this.components.filter(component => component instanceof type);
    }
    setComponents(components) {
        this.components = components;
    }
    onCreate() { }
    onDestroy() { }
}
;
