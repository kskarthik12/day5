class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

getRadius(){
return(`the radius of circle =${this.radius}`)
}
getColor(){
    return(`the color of circle =${this.color}`)
    }

setRadius(radius){
  this.radius=radius
   } 
setColor(color){
    this.color=color
     } 

getArea(){
    
    let area=3.14159265359*this.radius*this.radius;
    return area;
}  
getCircumference(){
    
    let circumference=2*3.14159265359*this.radius;
    return circumference;
}     
}
const circle1=new circle(1.0,"blue");
const circle2=new circle(1.0,"blue");
circle2.setRadius(5.0);
circle2.setColor("black");



console.log(circle1);
console.log(circle1.getRadius());
console.log(circle1.getColor());

console.log(circle2.getRadius());
console.log(circle2.getColor());

console.log(circle2.getArea());
console.log(circle2.getCircumference());