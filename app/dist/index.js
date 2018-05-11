define(["require", "exports", "lib"], function (require, exports, lib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getList = function () {
        return new Promise(function (resolve, reject) {
            var widget = {
                name: "whatevs",
                age: 5,
                children: ["olimar", "al"]
            };
            resolve(lib_1.makeWidgets([widget]));
        });
    };
});
//# sourceMappingURL=index.js.map