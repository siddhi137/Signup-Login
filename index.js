function signup(userName){
    let users = ["Bob","Ram","Smith"];

    if(users.includes(userName)){
        return "User Already Registerd, Please Login"
    }else{
        users.push(userName);
        return "Signup Sucessfull, Please Login"
    }
}
console.log(signup("Ram"));
console.log(signup("Riya"))



function login(userName,password){
    let users = ["Bob","Ram","Smith"];

    if (userName == "Bob" || userName == "Ram" || userName == "Smith"){
        if(password=="Emp@123"){
            return "login successful"
        }else{
            return "Wrong Password"
        }
    }
    else{
        return "User Not Found, Please Signup"
}
}
console.log(login("Ram","Emp@123"));
console.log(login("Cary","Emp@123"));
console.log(login("Ram","Emp123"));