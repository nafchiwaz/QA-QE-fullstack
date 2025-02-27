const name = 'Maina'

const number = 56
const info =[name, number]

console.log(info)


const mark =[13, 34, 45, 90, 893];

//access modifiers in arrays

console.log(mark[0]);

const fullName = ['Jack','Faith']

fullName[2] = 'Olam'
console.log(fullName);



//modification of arrays

//arrayName[index] = newValue


const marks =[23, 34, 345, 748, 88884, 9994]

let marksAtIndex2 = mark[2]

marksAtIndex2= 56
console.log(marks);



const dennisInfo = []


dennisInfo.push({idNumber:774774, country: 'Kenya'})
console.log('Dennis Info', dennisInfo);


//INDEXOF
const cowInfo = ['Fresian', 'moo']
console.log(cowInfo.indexOf());
console.log(cowInfo.indexOf('fresian'));

//HOW DO YOU JOIN ARRAYS

  // 1. CONCAT


  const markMwangi = ['Mark', 8848939]

  const stanley = ['stanley', 93930]
  const combinedArray= markMwangi.concat(stanley)
  console.log(combinedArray);


  //2. using Join() method
  const months = ["January", "February", "March", "June"]; 
  console.log(months.join(''))
