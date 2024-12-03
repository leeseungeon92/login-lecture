"use strict";

const users = {
    id : ["oksktmddjs", "tmddjs11"],
    password : ["gudwns11", "0119962"]
};

const output = { 
    home : (req, res) => {
        // 기능
        res.render("home/index")
    },
    
    login : (req,res) => {
        res.render("home/login")
    }
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
        password = req.body.password;
        
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하였습니다."
        })
    }
};

module.exports = {
    output,
    process
};