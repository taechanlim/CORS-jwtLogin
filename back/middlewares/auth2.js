const { createSignature } = require('../utils/jwt')

exports.Auth = (req,res,next) => {
    try{
        const { token } = req.cookies
        const [header,payload,sign] = token.split('.')
        const signature = createSignature(header,payload)

        if(sign !== signature) throw new Error('토큰 변조됨')

        const user = JSON.parse(Buffer.from(payload,'base64').toString('utf-8'))
        
        req.user={
            ...user
        }

    }catch(e){
        console.log(e.message)
    }
    next()
}