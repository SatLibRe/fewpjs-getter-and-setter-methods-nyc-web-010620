// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
    return 2 * (3.14 * this.radius )
  }
  
  get area(){
    return (3.14 * this.radius )**2
  }
}