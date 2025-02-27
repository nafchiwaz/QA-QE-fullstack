

const getRectangleArea = (rectangle: { width: number; height: number }) => {
    return rectangle.width * rectangle.height;
  };
  
  const getRectanglePerimeter = (rectangle: {
    width: number;
    height: number;
  }) => {
    return 2 * (rectangle.width + rectangle.height);
  };



type Rectangle = { 
    width: number, 
    height: number
 };


 let newRec: Rectangle= {
    width: 12,
    height: 20
 }

  console.log(getRectangleArea(newRec))

  
  console.log(getRectanglePerimeter(newRec))
