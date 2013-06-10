// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.tiles = [];
Alloy.Globals.count = 0;
Alloy.Globals.hideAll = function(){
    for(var i in Alloy.Globals.tiles){
        Alloy.Globals.tiles[i].hide();
    }
    Alloy.Globals.count = 1;
}

Alloy.Globals.reset = function(){
    var alertDialog = Ti.UI.createAlertDialog({
        title:"Reset Game?",
        message:"Are you sure you want to reset the game?",
        buttonNames:["Reset", "Cancel"]
    });
    
    alertDialog.show();
    
    alertDialog.addEventListener("click", function(e){
        if(e.index == 0){
            for(var i in Alloy.Globals.tiles){
                Alloy.Globals.tiles[i].hide(true);
            }
        }
    });
    
}
