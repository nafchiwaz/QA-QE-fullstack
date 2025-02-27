//connecting to a database

function connectDB(db)
{



}

function fetchData(){

connectDB(mongoDBInstance)
// fetching data


}

//synchronous programming is blocking - one execution has to take place b4 the other


//while Asynchronous programming is  not blocking

async function fetchData(){

connectDB(mongoDBInstance)
//fetching data
}