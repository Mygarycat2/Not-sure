let username;
let password;

let attempts = 3;

let CORRECT_USERNAME = "28djdunn";
let CORRECT_PASSWORD = "D2028021!";


document.getElementById("submit").onclick = function(){

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    console.log(`${username} : ${password}`);


    if(username == "" || password == ""){

        document.getElementById("message").textContent = "Please fill all fields.";

    }
    else
    {

        if(username == CORRECT_USERNAME && password == CORRECT_PASSWORD){

            document.location.replace("dashboard.html")
    
        }
        else
        {

            document.getElementById("message").textContent = "Access Denied!";

            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
    
        }

    }

}