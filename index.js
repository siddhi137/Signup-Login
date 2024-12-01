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