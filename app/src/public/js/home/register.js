"use strict"

const id = document.querySelector("#id"), 
password = document.querySelector("#password"),
confirm_password = document.querySelector("#confirm-password"),
kr_name = document.querySelector("#name"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register() {

    if(!id.value){return alert("아이디를 입력해주세요.")}
    if(password.value !== confirm_password.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        password : password.value,
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