//Interfaces 

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

function getArea(rect: Rectangle): number { // Take a Rectangle as an argument
  const area = rect.height * rect.width; // Access properties from the argument
  return area;
}

const area = getArea(rectangle); // Call getArea with the rectangle object
console.log(area);



///////////////////////////



