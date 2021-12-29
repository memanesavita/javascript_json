
// function date (DateTime) 

// const value = DateTime
//   .fromFormat("2014-08-20 15:30:00", "yyyy-MM-dd HH:mm:ss")
//   .toFormat('MM/dd/yyyy h:mm a');

// console.log(value); // 08/20/2014 3:30 PM



var time = new Date().toLocaleTimeString();

var store=flow.set("currenttime", time); //store at "currenttime"

//var hh = new Date(time).getHours();

//var mm = new Date(time).getMinutes();

var hh = time.getHours();

var mm = time.getMinutes();

msg.payload =

{"hour": hh,

"minute": mm,

};