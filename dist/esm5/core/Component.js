var Component = (function () {
    function Component() {
        this.state = {};
        this.components = [];
    }
    Component.prototype.setElement = function (el) {
        this.el = el;
    };
    Component.prototype.setState = function (state) {
        Object.assign(this.state, state);
    };
    Component.prototype.getComponents = function (type) {
        if (type === void 0) { type = Component; }
        if (type === Component)
            return this.components;
        return this.components.filter(function (component) { return component instanceof type; });
    };
    Component.prototype.setComponents = function (components) {
        this.components = components;
    };
    Component.prototype.onCreate = function () { };
    Component.prototype.onDestroy = function () { };
    return Component;
}());
export default Component;
;
