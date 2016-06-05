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
  divGrid.setAttribute("id", "divGrid");

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
        onclick: colorTheDiv,
      });

      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  //document.getElementById('pixelPainter').appendChild(divGrid);
  return divGrid;
}

//if there are attributes that need to be added then it runs this function
function addAttributes(div, attributes){
  if(typeof attributes === "object"){
    // var attributeKeys = Object.keys(attributes);
    // for(var i = 0; i < attributeKeys.length; i++){
    //   div.setAttribute(attributeKeys[i], attributes[attributeKeys[i]]);
    // }
    Object.keys(attributes).forEach(function(attribute){
      div[attribute] = attributes[attribute];
    });
  }else if(attributes !== undefined){
    throw new Error('attributes must be an Object');
  }
}

//onclick function
function colorTheDiv(hexColorString){
  this.style.backgroundColor = "red";
  if(erasePressed === true){
    this.style.backgroundColor = "";
    cellColored = false;
  }else if(cellColored === false){
    cellColored = true;
  }
}

function clearGrid(){
    var cells = document.querySelectorAll('div > div > div > div');
    Array.prototype.forEach.call(cells, function(cell){
      cell.style.backgroundColor = "";
    });
}

function eraseOn(event){
  if(erasePressed === false){
    this.style.backgroundColor = "pink";
    erasePressed = true;
  }else if(erasePressed === true){
    this.style.backgroundColor = "";
    erasePressed = false;
  }

}

var divGrid = createGrid(10,10, {class: 'grid'});
document.getElementById('pixelPainter').appendChild(divGrid);
var button = document.getElementById('clearButton');
button.addEventListener('click', clearGrid);
var eraseButton = document.getElementById('eraseButton');
var erasePressed = false;
var cellColored = false;
eraseButton.addEventListener('click', eraseOn);