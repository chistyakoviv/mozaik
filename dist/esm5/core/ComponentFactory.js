import { __decorate, __values } from "tslib";
import { container } from './Container';
import { singleton } from 'tsyringe';
var ComponentFactory = (function () {
    function ComponentFactory() {
    }
    ComponentFactory.prototype.instantiate = function (node) {
        var e_1, _a;
        if (node === void 0) { node = document.body; }
        var nodes = Array.from(node.querySelectorAll('[data-widget]'));
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node_1 = nodes_1_1.value;
                var name_1 = node_1.getAttribute('data-widget');
                var type = node_1.getAttribute('data-type');
                if (!name_1)
                    continue;
                if (!type) {
                    this.create(name_1);
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ComponentFactory.prototype.create = function (name) {
        return container.resolve(name);
    };
    ComponentFactory = __decorate([
        singleton()
    ], ComponentFactory);
    return ComponentFactory;
}());
export default ComponentFactory;
;
