const sgmail=require('@sendgrid/mail')



sgmail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
sgmail.send({
    to:email,
    from:'gouravhanumante@gmail.com',
    subject:`Welcome ${name} to our Task Manager Application!`,
    text:`Hello ${name}, Thanks for joining our application. Please let us know how we can improve this application.`
})
}


const sendExitEmail=(email,name)=>{
sgmail.send({
    to:email,
    from:'gouravhanumante@gmail.com',
    subject:`Thanks for being a part of Task Manager Application for so long. ${name}`,
    text:`Thanks ${name.split(' ')} for using this application! We'll be glad if you let us know how we can improve our application. `
})
}

module.exports={
    sendWelcomeEmail,
    sendExitEmail
}