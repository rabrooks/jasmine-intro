// The describe block is required it takes a string and a function as arguments
describe("Calculator", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Calculator();

        this.addMatchers({
            toBeBetween: function(a,b) {
              return this.actual >= a && this.actual <= b;
            } 
        });

    });

    // The it block does all the heavy lifting and must be inside a describe block
    it("should be able to add 1 and 1", function() {
        expect(calc.add(1,1)).toBe(2);
    });

    // You can have multiple if blocks in a describe
    it("should be able to divide 6 and 2", function() {
        expect(calc.divide(6,2)).toBe(3);
    });

    it("should be able to divide a rational number", function() {
        expect(calc.divide(1,3)).toBeBetween(0.3, 0.34);
    });
});



/*
    Notice the code duplication you can use a 

    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });

*/


/* Write your own customer matcher in the before beforeEach

this.addMatchers({
    toBeBetween: function(a,b) {
      return this.actual >= a && this.actual <=b;
    } 
});


Now add a test case that checks for rational numbers when divide is called

it('should be able to divide a rational number', function() {
    expect(calc.divide(1,3)).toBeBetween(0.3, 0.34)) 
});


*/