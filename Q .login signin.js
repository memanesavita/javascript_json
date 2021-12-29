
var fs= require('fs');
const readline=require('readline-sync');
var user = readline.question("DO YOU WANT TO LOGIN OR SIGN UP :")
var dic={}
var i=0
while (i<=0){
    if (user=="signin"){
        username= readline.question("ENTER THE USERNAME :")
        password = readline.question("ENTER THE PASSWORD :")
        passd=(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
            if (password.match(passd) ){
                password1= readline.question("CONFIRMED PASSWORD :")
                if (password==password1){
                    console.log("confirmed password") 
                    console.log("congracts"+ username +"you are sign up succesfully")

                }else{
                    console.log("incorrect password")
                break}
            }else{
                console.log("please add special chr")
            break}
            let firstname =  readline.question("ENTER YOUR FIRST NAME:")
            let lastname = readline.question("ENTER THE LAST NAME:")
            let dob = readline.question("ENTER YOUR DATE OF BIRTH")
            let gender = readline.question("ENTER YOUR GENDER:")
            console.log("YOU HAVE SUCCESFULLY SIGN UP")
            var dic =  {"username":username,"password":password,"userdetails":{"FIRST_NAME":firstname,"LAST_NAME":lastname,"DATE_OFBIRTH":dob,"GENDER":gender},}
            let myJsonstr = JSON.stringify(dic,null,4
                )
            fs.writeFileSync(username+".json",myJsonstr)
        break}

    
        
    else if(user=="login"){
        var username2 = readline.question("ENTER YOUR USER NAME:")
        var password2= readline.question("ENTER YOUR PASSWORD")
        var sc=fs.readFileSync(username2+".json");
        var fi=JSON.parse(sc);
        if (username2==fi["username"]){
            if (password2==fi["password"]){
                console.log("*HERE ARE YOUR DETAILS*")
                console.log("    **FIRST_NAME=",fi["userdetails"]["FIRST_NAME"])
                console.log("    **LAST_NAME=",fi["userdetails"]["LAST_NAME"])
                console.log("    **DATE_OF_BIRTH=",fi["userdetails"]["DATE_OFBIRTH"])
                console.log("    **GENDER=",fi["userdetails"]["GENDERr"])
                break}
            else{
                console.log("PASSWORD IS INCORRECT")
                break}
            }
        else{
            console.log("USERNAME IS INCORRECT")
            break}
        }

    
    }






