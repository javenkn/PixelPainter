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

    //I set the attribute of each row to an id of divRow number for counting
    //purposes
    //divRows.setAttribute("class", "divRows");

    //after a divRow is created it gets appended into the HUGE div grid
    divGrid.appendChild(divRows);

    //this for loop goes through the passed in parameter "columns" and creates
    //divs for the amount of columns needed
    for(var j = 0; j < columns; j++){
      var divColumns = document.createElement("DIV");

      //if attributes is an object then
      //it sets the attributes inside each row div that is created
      addAttributes(divColumns, attributes);

      //I set the attribute of each row to an id of divRow number for counting
      //purposes
      //divColumns.setAttribute("class", "divColumns");
      //after a divRow is created it gets appended into the HUGE div grid
      divRows.appendChild(divColumns);
    }
  }
  //document.getElementById('pixelPainter').appendChild(divGrid);
  return divGrid;
}

//if there are attributes that need to be added then it runs this function
function addAttributes(divs, attributes){
  if(typeof attributes === "object"){
    var attributesKeys = Object.keys(attributes);
    for(var i = 0; i < attributesKeys.length; i++){
      divs.setAttribute(attributesKeys[i], attributes[attributesKeys[i]]);
    }
  }else{
    return;
  }
}

var divGrid = createGrid(10,10, {class: 'grid'});
document.getElementById('pixelPainter').appendChild(divGrid);