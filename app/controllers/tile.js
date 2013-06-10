var args = arguments[0] || {}, current = false;

if(args.title){
    $.title.text = args.title;
}

if(args.answer){
    $.answer.text =args.answer;
}

function tileClick(){
    if($.title.visible){
        if(Alloy.Globals.next){
            Alloy.Globals.next();
            Alloy.Globals.nextBtn.hide();
        }
        $.container.animate({view:$.answer,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});   
        $.answer.show();
        $.title.hide();
        Alloy.Globals.count++;
        if(Alloy.Globals.count>2){
            current = true;
            Alloy.Globals.hideAll(); 
            Alloy.Globals.answer = $.answer.text;
            Alloy.Globals.current = $.title.text - 1;
        } else {
            if(Alloy.Globals.answer && Alloy.Globals.answer == $.answer.text){
                Alloy.Globals.nextBtn.show();
                Alloy.Globals.next = function(){
                    var tile1 = Alloy.Globals.tiles[Alloy.Globals.current].getView("background");
                    var tile2 = Alloy.Globals.tiles[$.title.text - 1].getView("background");
                    tile1.animate({
                        transform: Ti.UI.create2DMatrix({scale: 3.0}),
                        opacity: 0.0,
                        duration: 500
                    });
                    tile2.animate({
                        transform: Ti.UI.create2DMatrix({scale: 3.0}),
                        opacity: 0.0,
                        duration: 500
                    });
                    Alloy.Globals.next = null;
                    Alloy.Globals.nextBtn.hide();
                };
            } else {
                Alloy.Globals.answer = $.answer.text;
                Alloy.Globals.current = $.title.text - 1;
            } 
        }
    } else {
        $.container.animate({view:$.title,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});   
        $.title.show();
        $.answer.hide();
    }
}

function removeClick(evt){
    if($.background.visible){
        //$.background.hide();
    } else {
        $.background.show();
    }
}

$.hide = function(reset){
    if(reset || ($.answer.visible && !current)){

        $.container.animate({view:$.title,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});   
        $.title.show();
        $.answer.hide();
        if(reset){
            $.background.applyProperties({
                transform: null,
                visible:true,
                opacity:1.0
            });
        }
    } else {
        current = false;
    }
}
