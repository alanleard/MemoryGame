function Controller() {
    function tileClick() {
        if ($.title.visible) {
            if (Alloy.Globals.next) {
                Alloy.Globals.next();
                Alloy.Globals.nextBtn.hide();
            }
            $.container.animate({
                view: $.answer,
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
            $.answer.show();
            $.title.hide();
            Alloy.Globals.count++;
            if (Alloy.Globals.count > 2) {
                current = true;
                Alloy.Globals.hideAll();
                Alloy.Globals.answer = $.answer.text;
                Alloy.Globals.current = $.title.text - 1;
            } else if (Alloy.Globals.answer && Alloy.Globals.answer == $.answer.text) {
                Alloy.Globals.nextBtn.show();
                Alloy.Globals.next = function() {
                    var tile1 = Alloy.Globals.tiles[Alloy.Globals.current].getView("background");
                    var tile2 = Alloy.Globals.tiles[$.title.text - 1].getView("background");
                    tile1.animate({
                        transform: Ti.UI.create2DMatrix({
                            scale: 3
                        }),
                        opacity: 0,
                        duration: 500
                    });
                    tile2.animate({
                        transform: Ti.UI.create2DMatrix({
                            scale: 3
                        }),
                        opacity: 0,
                        duration: 500
                    });
                    Alloy.Globals.next = null;
                    Alloy.Globals.nextBtn.hide();
                };
            } else {
                Alloy.Globals.answer = $.answer.text;
                Alloy.Globals.current = $.title.text - 1;
            }
        } else {
            $.container.animate({
                view: $.title,
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
            $.title.show();
            $.answer.hide();
        }
    }
    function removeClick() {
        $.background.visible || $.background.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: 192,
        width: 192,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    removeClick ? $.__views.main.addEventListener("longpress", removeClick) : __defers["$.__views.main!longpress!removeClick"] = true;
    $.__views.background = Ti.UI.createView({
        backgroundColor: "white",
        id: "background"
    });
    $.__views.main.add($.__views.background);
    $.__views.container = Ti.UI.createView({
        borderColor: "blue",
        borderWidth: 2,
        backgroundColor: "white",
        id: "container"
    });
    $.__views.background.add($.__views.container);
    tileClick ? $.__views.container.addEventListener("click", tileClick) : __defers["$.__views.container!click!tileClick"] = true;
    $.__views.title = Ti.UI.createLabel({
        visible: true,
        font: {
            fontSize: 32
        },
        textAlign: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        id: "title"
    });
    $.__views.container.add($.__views.title);
    $.__views.answer = Ti.UI.createLabel({
        visible: false,
        backgroundColor: "blue",
        font: {
            fontSize: 24
        },
        color: "white",
        textAlign: "center",
        height: "100%",
        width: "100%",
        id: "answer"
    });
    $.__views.container.add($.__views.answer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, current = false;
    args.title && ($.title.text = args.title);
    args.answer && ($.answer.text = args.answer);
    $.hide = function(reset) {
        if (reset || $.answer.visible && !current) {
            $.container.animate({
                view: $.title,
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
            $.title.show();
            $.answer.hide();
            reset && $.background.applyProperties({
                transform: null,
                visible: true,
                opacity: 1
            });
        } else current = false;
    };
    __defers["$.__views.main!longpress!removeClick"] && $.__views.main.addEventListener("longpress", removeClick);
    __defers["$.__views.container!click!tileClick"] && $.__views.container.addEventListener("click", tileClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;