"use strict"

const id = document.querySelector("#id"), 
password = document.querySelector("#password"),
confirm_password = document.querySelector("#confirm-password"),
kr_name = document.querySelector("#name"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register() {
    const req = {
        id : id.value,
        password : password.value,
        confirm_password : confirm_password.value,
        name : kr_name.value
    };

    console.log(req);

    fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => 
            {
                if(res.success){
                    location.href = "/login";
                } else{
                    alert(res.msg);
                }
            })
            .catch((err) => {
                console.error("회원가입 중 에러 발생");
            });
}