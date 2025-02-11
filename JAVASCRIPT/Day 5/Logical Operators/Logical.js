let result = '2'||'3'||'90'
 if(result == '2' || result == '98' ){

console.log('available');

}

else {

    console.log('unavailable')
}




//logical &&

// checks if both sides are true

//if one side is false then result is false

console.log(true&&true);
console.log(true&&false);





let a= 5 , b=10;
console.log(a>b && b>a)



let user



= {  isLoggedIn: true , hasPermission : true}


//to view bank bal , one has to be logged ina adn has permission
if (user.isLoggedIn && user.hasPermission)
{


    console.log('View your Balance');
}


// logical operator 


let userName = ''
let displayName = userName || 'Guest'

console.log(displayName)



//! not operator checks the opposite of the operands 


console.log(!false);
console.log(!true);
console.log(!!!!78);




let isActive = false 
if(!isActive){

console.log('the system is not active')



}

else {

    console.log('the system is active');
}
