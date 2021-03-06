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
  var gridElement = document.createElement("DIV");

  //this for loop goes through the passed in parameter "rows" and creates divs
  //for the amount of rows needed
  for(var i = 0; i < rows; i++){
    var divRows = document.createElement("DIV");

    //if attributes is an object then
    //it sets the attributes inside each row div that is created
    addAttributes(divRows, attributes);

    //after a divRow is created it gets appended into the HUGE div grid
    gridElement.appendChild(divRows);

    //this for loop goes through the passed in parameter "columns" and creates
    //divs for the amount of columns needed
    for(var j = 0; j < columns; j++){
      var divColumns = document.createElement("DIV");

      //if attributes is an object then
      //it sets the attributes inside each row div that is created
      addAttributes(divColumns, attributes);

      addAttributes(divColumns, {onclick: colorOneDiv});

      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  return gridElement;
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

//onclick function that colors one div at a time
function colorOneDiv(){
  if(erasePressed === false && fillPressed === true){
      this.style.backgroundColor = colorChosen;
  }else if(erasePressed === true && fillPressed === true){
      this.style.backgroundColor = "";
  }
  if(replacePressed === true && erasePressed === false && fillPressed === false){
    var cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.style.backgroundColor = colorChosen;
    });
  }
}

//function that paints while mouse is down
function clickDrag(){
  var cells = document.querySelectorAll('#divGrid > div > div');
  Array.prototype.forEach.call(cells, function(cell){
      cell.addEventListener('mousemove', clickDrag);
  });
  if(erasePressed === true && fillPressed === false){
      this.style.backgroundColor = "";
  }else if(erasePressed === false && fillPressed === false){
      this.style.backgroundColor = colorChosen;
  }
}

//function that stops painting when mouse is up
function stopDragging(){
  var cells = document.querySelectorAll('#divGrid > div > div');
  Array.prototype.forEach.call(cells, function(cell){
      cell.removeEventListener('mousemove', clickDrag);
  });
}


//function that clears the entire grid
function clearGrid(){
    var cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.style.backgroundColor = "";
    });
    var id = document.getElementById('divGrid');
    id.style.backgroundImage = "";
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

//function that sets the color that the user picks
function chooseColor(event){
  colorChosen = this.style.backgroundColor;
  erasePressed = false;
  document.getElementById('eraseButton').style.backgroundColor = "";
}

//function that checks if the replace button is pressed
function replaceOn(event){
  if(replacePressed === false){
    this.style.backgroundColor = "orange";
    replacePressed = true;
  }else if(replacePressed === true){
    this.style.backgroundColor = "";
    replacePressed = false;
  }
}

//saves the grid to location.hash
function saveGrid(event){
  window.location.hash = divGrid.outerHTML;
  alert('Grid Saved.');
}

//restores saved grid from location.hash
function restoreGrid(event){
  if(window.location.hash !== ""){
    var parent = document.getElementById('pixelPainter');
    parent.removeChild(document.getElementById('divGrid'));
    divGrid = $.parseHTML(window.location.hash.slice(1))[0];
    parent.appendChild(divGrid);

    var cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.addEventListener('mousedown', clickDrag);
      cell.addEventListener('mouseup', stopDragging);
      cell.addEventListener('click',colorOneDiv);
    });
  }
}

//function that uploads user's picture so the user can draw on it
function readImage(event){
  var imgFile = document.getElementById('imageChooser').files[0];
  var imgReader = new FileReader();
  imgReader.onloadend = function(){
    document.getElementById('divGrid').style.backgroundImage = "url(" + imgReader.result + ")";
  };
  if(imgFile){
    imgReader.readAsDataURL(imgFile);
  }
}

//resized the grid for the chosen image
function resizeGrid(event){
  if(resizePressed === false){
    this.style.backgroundColor = "green";
    resizePressed = true;

    //deletes the firstChild node (until there is none) but keeps the id divGrid
    var parent = document.getElementById('divGrid');
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    }
    divGrid = createGrid(120,250); //creates a new resized grid

    //adds all of the new grid's children into the divGrid div
    while(divGrid.children[0]){
      document.getElementById('divGrid').appendChild(divGrid.children[0]);
    }
    //sets all of the settings of the new resized grid
    var cells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.style.width = "2px";
      cell.style.height = "2px";
      cell.style.borderColor = "white";
      cell.addEventListener('mousedown', clickDrag);
      cell.addEventListener('mouseup', stopDragging);
    });
  }else if(resizePressed === true){ //resets the resized grid back to the original
    this.style.backgroundColor = "";
    resizePressed = false;

    //removes the children of the divGrid div
    var par = document.getElementById('divGrid');
    while(par.firstChild){
      par.removeChild(par.firstChild);
    }
    //creates the original sized grid
    divGrid = createGrid(40,83);
    while(divGrid.children[0]){ //adds all of the children to the divGrid div
      document.getElementById('divGrid').appendChild(divGrid.children[0]);
    }
    //adds the event listeners to each cell
    var orgCells = document.querySelectorAll('#divGrid > div > div');
    Array.prototype.forEach.call(orgCells, function(cell){
      cell.addEventListener('mousedown', clickDrag);
      cell.addEventListener('mouseup', stopDragging);
    });
  }
}

//variables for the title grid
var titleElement = document.createElement('DIV');
document.body.insertBefore(titleElement, document.body.firstChild);
titleElement.id = "titleDiv";
var titleGrid = createGrid(7,41);
var titleGridElement = document.getElementById('titleDiv').appendChild(titleGrid);
titleGridElement.id = "titleGrid";

//hardcoded the colors of border of the title
var titleRow = document.getElementById('titleGrid').children;
titleRow[0].style.backgroundColor = "rgb(0, 0, 128)";
titleRow[6].style.backgroundColor = "rgb(0, 0, 128)";

//set the onclick value of each cell to null;
var titleCells = document.querySelectorAll('#titleGrid > div > div');
  Array.prototype.forEach.call(titleCells, function(cell, index){
      cell.onclick = null;
      cell.id = 'cell' + index;
  });

//variables for divs and buttons
var divGrid = createGrid(40,83); //2px (120,250) //1px (170,320)
var gridElement = document.getElementById('pixelPainter').appendChild(divGrid);
gridElement.id = "divGrid";

var divCells = document.querySelectorAll('#divGrid > div > div');
Array.prototype.forEach.call(divCells, function(cell){
  cell.addEventListener('mousedown', clickDrag);
  cell.addEventListener('mouseup', stopDragging);
});
var button = document.getElementById('clearButton');
button.addEventListener('click', clearGrid);

//variables for eraser functionality
var eraseButton = document.getElementById('eraseButton');
var erasePressed = false;
eraseButton.addEventListener('click', eraseOn);

//variables for fill functionality
var fillButton = document.getElementById('fillButton');
fillButton.addEventListener('click', fillOn);
var fillPressed = false;

//variables for colorpalette
var colorChosen;
var colorPalette = createGrid(12, 12);
var paletteElement = document.getElementById('pixelPainter').appendChild(colorPalette);
colorPalette.id = "colorPalette";
fillPalette();

var paletteCells = document.querySelectorAll('#colorPalette > div > div');
Array.prototype.forEach.call(paletteCells, function(cell){
  cell.addEventListener('click',chooseColor);
});

//variables for replace functionality
var replaceButton = document.getElementById('replaceButton');
replaceButton.addEventListener('click', replaceOn);
var replacePressed = false;

//variables for save & restore functionality
var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveGrid);
var restoreButton = document.getElementById('restoreButton');
restoreButton.addEventListener('click', restoreGrid);

//variables for upload functionality
var uploadElement = document.getElementById('imageChooser');
uploadElement.addEventListener('change', readImage);
var resizeElement = document.getElementById('resizeButton');
resizeElement.addEventListener('click', resizeGrid);
var resizePressed = false;