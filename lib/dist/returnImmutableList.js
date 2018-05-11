define(["require", "exports", "immutable"], function (require, exports, immutable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeWidgets = function (widgets) {
        return immutable_1.List(widgets.map(function (w) { return exports.makeWidget(w); }));
    };
    exports.makeWidget = function (widget) {
        var newWidget = {
            name: widget.name,
            age: widget.age,
            children: immutable_1.List(widget.children)
        };
        return newWidget;
    };
});
