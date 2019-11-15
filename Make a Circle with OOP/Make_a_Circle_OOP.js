class Rectangle {
    constructor(sideA,sideB){
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea(){return this.sideA*this.sideB};
    getPerimeter(){return (this.sideA + this.sideB) *2 };
  }
  
  
  class Circle {
      //put code here
      constructor(r){
          this.r = r;
      }
      getArea(){return Math.pow(this.r, 2) * Math.PI};
      getPerimeter(){return 2 * Math.PI * this.r};
  }
  
  //unquote and use run to test these cases
  /*let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  */

  /*
 Examples
 let circy = new Circle(11);
 circy.getArea();
 
 // Should return 380.132711084365
 
 let circy = new Circle(4.44);
 circy.getPerimeter();
 
 // Should return 27.897342763877365