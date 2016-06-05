/**
 *
 *
 * returns one containing html element
 *    rows in the containing element
 *    columns in each row
 */

function createGrid(rows, columns, attributes){
  //checks if the rows passed in are negative, is a number or if it's NaN
  //if it is then it throws an error
  if(rows < 0 || typeof rows !== "number" || isNaN(rows)){
    throw new Error("Rows must be a positive number");
  }
  //checks if the parameter "columns" is an object
  //if it is then it sets the global variable attributes to columns
  if(typeof columns === "object"){
    attributes = columns;
  }

  //checks if the columns is undefined or is NaN
  //if it is then it sets the columns to the rows
  if(columns === undefined || isNaN(columns)){
    columns = rows;
  }

  //creates a HUGE grid div
  var divGrid = document.createElement("DIV");

  //this for loop goes through the passed in parameter "rows" and creates divs
  //for the amount of rows needed
  for(var i = 0; i < rows; i++){
    var divRows = document.createElement("DIV");

    //if attributes is an object then
    //it sets the attributes inside each row div that is created
    addAttributes(divRows, attributes);

    //after a divRow is created it gets appended into the HUGE div grid
    divGrid.appendChild(divRows);

    //this for loop goes through the passed in parameter "columns" and creates
    //divs for the amount of columns needed
    for(var j = 0; j < columns; j++){
      var divColumns = document.createElement("DIV");

      //if attributes is an object then
      //it sets the attributes inside each row div that is created
      addAttributes(divColumns, attributes);

      addAttributes(divColumns, {
        onmouseover: colorTheDiv,
      });

      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  return divGrid;
}

//if there are attributes that need to be added then it runs this function
function addAttributes(div, attributes){
  if(typeof attributes === "object"){
    Object.keys(attributes).forEach(function(attribute){
      div[attribute] = attributes[attribute];
    });
  }else if(attributes !== undefined){
    throw new Error('attributes must be an Object');
  }
}

//onclick function
function colorTheDiv(hexColorString){
  var cells = document.querySelectorAll('#divGrid > div > div');
  if(fillPressed === true && erasePressed === false){
    Array.prototype.forEach.call(cells, function(cell){
      cell.addEventListener('click',function(){
        this.style.backgroundColor = colorChosen;
        cellColored = true;
      });
    });
  }else if(erasePressed === true && fillPressed === true){
    cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.addEventListener('click',function(){
        if(cellColored === true){
          this.style.backgroundColor = "";
          cellColored = false;
        }
      });
    });
  }else if(erasePressed === true ){ //if eraser was pressed then erase the div
    this.style.backgroundColor = "";
    cellColored = false;
  }else{
    this.style.backgroundColor = colorChosen;
    cellColored = true;
  }
}

//function that clears the entire grid
function clearGrid(){
    var cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.style.backgroundColor = "";
    });
}

//function that checks if the erase button was clicked or not
function eraseOn(event){
  if(erasePressed === false){
    this.style.backgroundColor = "pink";
    erasePressed = true;
  }else if(erasePressed === true){
    this.style.backgroundColor = "";
    erasePressed = false;
  }
}

//function that checks if the fill button was clicked or not
function fillOn(event){
  if(fillPressed === false){
    this.style.backgroundColor = "yellow";
    fillPressed = true;
  }else if(fillPressed === true){
    this.style.backgroundColor = "";
    fillPressed = false;
  }
}

function createPalette(rows, columns, attributes){
  if(rows < 0 || typeof rows !== "number" || isNaN(rows)){
    throw new Error("Rows must be a positive number");
  }
  //checks if the parameter "columns" is an object
  //if it is then it sets the global variable attributes to columns
  if(typeof columns === "object"){
    attributes = columns;
  }

  //checks if the columns is undefined or is NaN
  //if it is then it sets the columns to the rows
  if(columns === undefined || isNaN(columns)){
    columns = rows;
  }

  //creates a HUGE grid div
  var divPalette = document.createElement("DIV");

  //this for loop goes through the passed in parameter "rows" and creates divs
  //for the amount of rows needed
  for(var i = 0; i < rows; i++){
    var divRows = document.createElement("DIV");

    //if attributes is an object then
    //it sets the attributes inside each row div that is created
    addAttributes(divRows, attributes);

    //after a divRow is created it gets appended into the HUGE div grid
    divPalette.appendChild(divRows);

    //this for loop goes through the passed in parameter "columns" and creates
    //divs for the amount of columns needed
    for(var j = 0; j < columns; j++){
      var divColumns = document.createElement("DIV");

      //if attributes is an object then
      //it sets the attributes inside each row div that is created
      addAttributes(divColumns, attributes);
      addAttributes(divColumns, {onclick: chooseColor});

      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  return divPalette;
}
//fill the palette with colors
function fillPalette(){
  var colors =['#000000','#c0c0c0','#808080','#ffffff','#800000','#ff0000',
  '#800080','#ff00ff','#008000','#00ff00','#808000','#ffff00','#000080',
  '#0000ff','#008080','#00ffff','#ffa500','#f0f8ff','#faebd7','#7fffd4',
  '#f0ffff','#f5f5dc','#ffe4c4','#ffe4c4','#8a2be2','#a52a2a','#deb887',
  '#5f9ea0','#7fff00','#d2691e','#ff7f50','#6495ed','#fff8dc','#dc143c',
  '#00008b','#008b8b','#b8860b','#a9a9a9','#006400','#a9a9a9','#bdb76b',
  '#8b008b','#556b2f','#ff8c00','#9932cc','#8b0000','#e9967a','#8fbc8f',
  '#483d8b','#2f4f4f','#2f4f4f','#00ced1','#9400d3','#ff1493','#00bfff',
  '#696969','#1e90ff','#b22222','#fffaf0','#228b22','#dcdcdc','#f8f8ff',
  '#ffd700','#daa520','#adff2f','#808080','#f0fff0','#ff69b4','#cd5c5c',
  '#4b0082','#fffff0','#f0e68c','#e6e6fa','#fff0f5','#7cfc00','#fffacd',
  '#add8e6','#f08080','#e0ffff','#fafad2','#d3d3d3','#90ee90','#d3d3d3',
  '#ffb6c1','#ffa07a','#20b2aa','#87cefa','#778899','#b0c4de','#ffffe0',
  '#32cd32','#faf0e6','#66cdaa','#0000cd','#ba55d3','#9370db','#3cb371',
  '#7b68ee','#00fa9a','#48d1cc','#c71585','#191970','#f5fffa','#ffe4e1',
  '#ffe4b5','#ffdead','#fdf5e6','#6b8e23','#ff4500','#da70d6','#eee8aa',
  '#98fb98','#afeeee','#db7093','#ffefd5','#ffdab9','#cd853f','#ffc0cb',
  '#dda0dd','#b0e0e6','#bc8f8f','#4169e1','#8b4513','#fa8072','#f4a460',
  '#2e8b57','#fff5ee','#a0522d','#87ceeb','#6a5acd','#708090','#708090',
  '#fffafa','#00ff7f','#4682b4','#d2b48c','#d8bfd8','#ff6347','#40e0d0',
  '#ee82ee','#f5deb3','#f5f5f5','#9acd32','#663399'
  ];
  var cells = document.querySelectorAll('#colorPalette > div > div');
  Array.prototype.forEach.call(cells, function(cell,index){
    cell.style.backgroundColor = colors[index];
  });
}

function chooseColor(event){
  colorChosen = this.style.backgroundColor;
}

var divGrid = createGrid(10,10);
var gridElement = document.getElementById('pixelPainter').appendChild(divGrid);
gridElement.id = "divGrid";
var button = document.getElementById('clearButton');
button.addEventListener('click', clearGrid);
var eraseButton = document.getElementById('eraseButton');
var erasePressed = false;
var cellColored = false;
eraseButton.addEventListener('click', eraseOn);
var fillButton = document.getElementById('fillButton');
fillButton.addEventListener('click', fillOn);
var fillPressed = false;

var colorChosen;
var colorPalette = createPalette(12, 12);
var paletteElement = document.getElementById('pixelPainter').appendChild(colorPalette);
colorPalette.id = "colorPalette";
fillPalette();


var colors =['#000000','#c0c0c0','#808080','#ffffff','#800000','#ff0000',
  '#800080','#ff00ff','#008000','#00ff00','#808000','#ffff00','#000080',
  '#0000ff','#008080','#00ffff','#ffa500','#f0f8ff','#faebd7','#7fffd4',
  '#f0ffff','#f5f5dc','#ffe4c4','#ffe4c4','#8a2be2','#a52a2a','#deb887',
  '#5f9ea0','#7fff00','#d2691e','#ff7f50','#6495ed','#fff8dc','#dc143c',
  '#00008b','#008b8b','#b8860b','#a9a9a9','#006400','#a9a9a9','#bdb76b',
  '#8b008b','#556b2f','#ff8c00','#9932cc','#8b0000','#e9967a','#8fbc8f',
  '#483d8b','#2f4f4f','#2f4f4f','#00ced1','#9400d3','#ff1493','#00bfff',
  '#696969','#1e90ff','#b22222','#fffaf0','#228b22','#dcdcdc','#f8f8ff',
  '#ffd700','#daa520','#adff2f','#808080','#f0fff0','#ff69b4','#cd5c5c',
  '#4b0082','#fffff0','#f0e68c','#e6e6fa','#fff0f5','#7cfc00','#fffacd',
  '#add8e6','#f08080','#e0ffff','#fafad2','#d3d3d3','#90ee90','#d3d3d3',
  '#ffb6c1','#ffa07a','#20b2aa','#87cefa','#778899','#b0c4de','#ffffe0',
  '#32cd32','#faf0e6','#66cdaa','#0000cd','#ba55d3','#9370db','#3cb371',
  '#7b68ee','#00fa9a','#48d1cc','#c71585','#191970','#f5fffa','#ffe4e1',
  '#ffe4b5','#ffdead','#fdf5e6','#6b8e23','#ff4500','#da70d6','#eee8aa',
  '#98fb98','#afeeee','#db7093','#ffefd5','#ffdab9','#cd853f','#ffc0cb',
  '#dda0dd','#b0e0e6','#bc8f8f','#4169e1','#8b4513','#fa8072','#f4a460',
  '#2e8b57','#fff5ee','#a0522d','#87ceeb','#6a5acd','#708090','#708090',
  '#fffafa','#00ff7f','#4682b4','#d2b48c','#d8bfd8','#ff6347','#40e0d0',
  '#ee82ee','#f5deb3','#f5f5f5','#9acd32','#663399'
  ];