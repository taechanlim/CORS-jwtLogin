//토큰 검증하는 부분
const axios = require('axios')

exports.Auth = async (req,res,next)=>{
    const { token } = req.cookies
    const body = {
        token:token
    }

    const response = await axios.post('http://localhost:4001/api/auth',body,{
                 'Content-type':'application/json'
        })

        if(response.data === true){
            next()
        }else{
            //검증이 안됨
            res.render('token')
        }
    }

// app.get('/board/list',async (req,res)=>{
//     //token을 읽어야함
//     const {token} = req.cookies 
//     const body = {
//         token:token
//     }
//     const response = await axios.post('http://localhost:4001/api/auth',body,{
//         'Content-type':'application/json'
//     })

//     console.log(response.data)
//     if(response.data === true){
//         res.render('board_list')
//     }else{
//         //검증이 안됨
//         res.render('token')
//     }
    
// })