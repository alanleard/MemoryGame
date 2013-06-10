function Controller() {
    function createTiles(params) {
        for (var i in params) {
            var tile = Alloy.createController("tile", params[i]);
            Alloy.Globals.tiles.push(tile);
            $.tileContainer.add(tile.getView());
        }
        setTimeout(function() {
            $.puzzleImage.show();
        }, 1e3);
    }
    function next() {
        Alloy.Globals.next();
    }
    function reset() {
        Alloy.Globals.reset();
    }
    function setup() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.puzzleImage = Ti.UI.createView({
        backgroundImage: "bg.jpg",
        visible: false,
        height: 768,
        width: 1024,
        left: 0,
        id: "puzzleImage"
    });
    $.__views.index.add($.__views.puzzleImage);
    $.__views.tileContainer = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.FILL,
        width: 960,
        left: 0,
        id: "tileContainer"
    });
    $.__views.index.add($.__views.tileContainer);
    $.__views.menu = Ti.UI.createView({
        backgroundColor: "white",
        width: 64,
        right: 0,
        top: 0,
        bottom: 0,
        borderWidth: 1,
        borderColor: "blue",
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
    $.__views.next = Ti.UI.createButton({
        bottom: 0,
        right: 0,
        widht: 64,
        height: 64,
        title: "Next",
        visible: false,
        id: "next"
    });
    $.__views.menu.add($.__views.next);
    next ? $.__views.next.addEventListener("click", next) : __defers["$.__views.next!click!next"] = true;
    $.__views.reset = Ti.UI.createButton({
        top: 0,
        right: 0,
        widht: 64,
        height: 64,
        title: "Reset",
        id: "reset"
    });
    $.__views.menu.add($.__views.reset);
    reset ? $.__views.reset.addEventListener("click", reset) : __defers["$.__views.reset!click!reset"] = true;
    $.__views.setup = Ti.UI.createButton({
        top: 64,
        right: 0,
        widht: 64,
        height: 64,
        title: "Setup",
        visible: false,
        id: "setup"
    });
    $.__views.menu.add($.__views.setup);
    setup ? $.__views.setup.addEventListener("click", setup) : __defers["$.__views.setup!click!setup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    Alloy.Globals.nextBtn = $.next;
    var data = [ {
        title: 1,
        answer: "Candy Cane"
    }, {
        title: 2,
        answer: "Gingerbread"
    }, {
        title: 3,
        answer: "Sleigh"
    }, {
        title: 4,
        answer: "Christmas Tree"
    }, {
        title: 5,
        answer: "North Pole"
    }, {
        title: 6,
        answer: "Ornament"
    }, {
        title: 7,
        answer: "Gingerbread"
    }, {
        title: 8,
        answer: "Elf"
    }, {
        title: 9,
        answer: "Ornament"
    }, {
        title: 10,
        answer: "Magic"
    }, {
        title: 11,
        answer: "Magic"
    }, {
        title: 12,
        answer: "Santa"
    }, {
        title: 13,
        answer: "North Pole"
    }, {
        title: 14,
        answer: "Hot Chocolate"
    }, {
        title: 15,
        answer: "Candy Cane"
    }, {
        title: 16,
        answer: "Christmas Tree"
    }, {
        title: 17,
        answer: "Sleigh"
    }, {
        title: 18,
        answer: "Santa"
    }, {
        title: 19,
        answer: "Elf"
    }, {
        title: 20,
        answer: "Hot Chocolate"
    } ];
    createTiles(data);
    __defers["$.__views.next!click!next"] && $.__views.next.addEventListener("click", next);
    __defers["$.__views.reset!click!reset"] && $.__views.reset.addEventListener("click", reset);
    __defers["$.__views.setup!click!setup"] && $.__views.setup.addEventListener("click", setup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;