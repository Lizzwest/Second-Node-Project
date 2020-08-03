// // node keyword require allows us to import modules
// // console.log("Hola Tierra")
// // const myModule = require('./myModule.js')
// // const fs = require("fs")
// // myModule.count()

// // fs.readFile("story.txt", "utf8",(err, data)=>{

// //     if(err){
// //         console.log("whoops, there it is", err)
// //     }else{
// //         console.log(data)
// //     }


// // })


// // console.log(myModule.beBasic())


// let i = 0



// const count = () => {
//     console.log(i)
//     i++
// }

// const myTimer = setInterval(count, 1000)

 const moment = require("moment")
//  var day = moment("1993-10-31");
// console.log(moment().format("MMM Do YYYY"))

// moment().add(3, "days").calendar();

moment().set({'month': 10, 'year': 1993, 'date': 31})

console.log(moment(("1993-10-31")).format('dddd [the] Do [of] MMMM [in the year] YYYY'))
