var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.tiles = [];

Alloy.Globals.count = 0;

Alloy.Globals.hideAll = function() {
    for (var i in Alloy.Globals.tiles) Alloy.Globals.tiles[i].hide();
    Alloy.Globals.count = 1;
};

Alloy.Globals.reset = function() {
    var alertDialog = Ti.UI.createAlertDialog({
        title: "Reset Game?",
        message: "Are you sure you want to reset the game?",
        buttonNames: [ "Reset", "Cancel" ]
    });
    alertDialog.show();
    alertDialog.addEventListener("click", function(e) {
        if (0 == e.index) for (var i in Alloy.Globals.tiles) Alloy.Globals.tiles[i].hide(true);
    });
};

Alloy.createController("index");