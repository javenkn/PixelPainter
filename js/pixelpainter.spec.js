var expect = chai.expect;

describe('createGrid', function(){
  it('should be a function called createGrid', function(){
    expect(createGrid).to.be.a('function'); // typeof
    expect(createGrid).to.be.an.instanceof(Function); // instanceof
  });

  var grid = createGrid(1,10);
  var grid10 = createGrid(10,10);
  it('should return a HTML element', function(){
    expect(grid.tagName).to.equal("DIV");
  });

  describe('rows parameter', function(){
    it('should accept non-negative values', function(){
      expect(createGrid.bind(null, '')).to.throw();
      expect(createGrid.bind(null, {})).to.throw();
      expect(createGrid.bind(null, -1)).to.throw();
      expect(createGrid.bind(null, 1)).to.not.throw();
    });

    it('should return a HTML element', function(){
      expect(grid.tagName).to.equal("DIV");
    });

    it('should return an HTML Element with 1 child', function(){
      expect(grid.children.length).to.equal(1);
    });

    it('should return an HTML Element with 10 children', function(){
      expect(grid10.children.length).to.equal(10);
    });
  });

  describe('columns parameter', function(){
    it('should return an html element with 1 row, each with 1 column.', function(){
      var grid = createGrid(1);
      expect(grid.children.length).to.equal(1);
    });

    it('should return an html element with 10 rows, each with 10 columns.', function(){
      var grid = createGrid(10);
      expect(grid.children.length).to.equal(10);
    });

    it('should return an html element with 1 row, each with 10 columns.', function(){
      var grid = createGrid(1, 10);
      for(var i = 0; i < grid.children.length; i++){
        expect(grid.children[i].children.length).to.equal(10);
      }
    });

    it('should return an html element with 10 rows, each with 5 columns.', function(){
      var grid = createGrid(10, 5);
      for(var i = 0; i < grid.children.length; i++){
        expect(grid.children[i].children.length).to.equal(5);
      }
    });
  });

  describe('attributes parameter', function(){
  //If no column value is provided, all attributes should get applied to each
  //grid element

    it('should return an html element with 1 row, each with 1 column, each with no attributes.', function(){
      var noAttributes = createGrid(1, {});
      expect(noAttributes.children.length).to.equal(1);
      for(var i = 0; i < noAttributes.children.length; i++){
        expect(noAttributes.children[i].children.length).to.equal(1);
        expect(noAttributes.children[i].hasAttribute('*')).to.equal(false);
      }
    });

    it('should return an html element with 10 rows, each with 10 columns, each with the class of grid.', function(){
      var gridAttributes = createGrid(10, {className: 'grid'});
      for(var i = 0; i < gridAttributes.children.length; i++){
        //rows
        expect(gridAttributes.children.length).to.equal(10);
        //columns
        expect(gridAttributes.children[i].children.length).to.equal(10);

        expect(gridAttributes.children[i].getAttribute("class")).to.equal("grid");
        for(var j = 0; j < gridAttributes.children[i].children.length; j++){
          expect(gridAttributes.children[i].children[j].getAttribute("class")).to.equal("grid");
        }
      }
    });

    it('should return an html element with 10 rows, each with 10 columns, each with the class of grid and style of background-color: black.', function(){
      var grid = createGrid(10, {className: 'grid', style: 'background-color: black;'});
      //rows
      expect(grid.children.length).to.equal(10);

      for(var i = 0; i < grid.children.length; i++){
        //columns
        expect(grid.children[i].children.length).to.equal(10);
        //attributes
        expect(grid.children[i].getAttribute("class")).to.equal("grid");
        expect(grid.children[i].getAttribute("style")).to.equal("background-color: black;");
        for(var j = 0; j < grid.children[i].children.length; j++){
          //attributes
          expect(grid.children[i].children[j].getAttribute("class")).to.equal("grid");
          expect(grid.children[i].children[j].getAttribute("style")).to.equal("background-color: black;");
        }
      }
    });

  //If a column value is provided, that should be the number of columns
  //returned, along with the attributes applied.

    it('should return an html element with 10 rows, each with 5 columns, each with the class of grid.', function(){
      var grid = createGrid(10, 5, {className: 'grid'});
      //rows
      expect(grid.children.length).to.equal(10);

      for(var i = 0; i < grid.children.length; i++){
        //columns
        expect(grid.children[i].children.length).to.equal(5);
        //attributes
        expect(grid.children[i].getAttribute("class")).to.equal("grid");

        for(var j = 0; j < grid.children[i].children.length; j++){
          expect(grid.children[i].children[j].getAttribute("class")).to.equal("grid");
        }
      }
    });

  });
});