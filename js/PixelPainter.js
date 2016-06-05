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
        this.style.backgroundColor = "red";
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
    this.style.backgroundColor = "red";
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

      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  return divPalette;
}
//fill the palette with colors
function fillPalette(){
  var colors = ['#00FFFF', '#000000', '#0000FF', '#FFFF00', '#FF0000', '  #FFC0CB','#FFA500', '#D3D3D3', '#F0E68C', '#008000', '#808080', '#FFD700', '#9400D3',
  '#9ACD32', '#EE82EE', '#FF6347', '#008080', '#00FF7F', '#6A5ACD', '#8B4513'];
  var cells = document.querySelectorAll('#colorPalette > div > div');
  Array.prototype.forEach.call(cells, function(cell,index){
    cell.style.backgroundColor = colors[index];
  });
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

var colorPalette = createPalette(10, 2);
var paletteElement = document.getElementById('pixelPainter').appendChild(colorPalette);
colorPalette.id = "colorPalette";
fillPalette();
