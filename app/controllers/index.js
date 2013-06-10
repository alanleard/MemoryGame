$.index.open();
Alloy.Globals.nextBtn = $.next;

function createTiles(params){
    
    for(var i in params){
        var tile = Alloy.createController("tile", params[i]);
        Alloy.Globals.tiles.push(tile);
        $.tileContainer.add(tile.getView());
    }
    setTimeout(function(){
        $.puzzleImage.show();
    }, 1000);
}

function next(){
    Alloy.Globals.next();
}

function reset(){
    Alloy.Globals.reset();
}

function setup(){
    
}

var data = [
    {title:1, answer:"Candy Cane"},
    {title:2, answer:"Gingerbread"},
    {title:3, answer:"Sleigh"},
    {title:4, answer:"Christmas Tree"},
    {title:5, answer:"North Pole"},
    {title:6, answer:"Ornament"},
    {title:7, answer:"Gingerbread"},
    {title:8, answer:"Elf"},
    {title:9, answer:"Ornament"},
    {title:10, answer:"Magic"},
    {title:11, answer:"Magic"},
    {title:12, answer:"Santa"},
    {title:13, answer:"North Pole"},
    {title:14, answer:"Hot Chocolate"},
    {title:15, answer:"Candy Cane"},
    {title:16, answer:"Christmas Tree"},
    {title:17, answer:"Sleigh"},
    {title:18, answer:"Santa"},
    {title:19, answer:"Elf"},
    {title:20, answer:"Hot Chocolate"}
];

createTiles(data);
