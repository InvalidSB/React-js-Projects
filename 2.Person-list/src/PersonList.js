import React from 'react'
import Person from './Person'
function PersonList() {
    
const people =[
    {
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sikHPHOXJl33zB1p18uh3wHaFe%26pid%3DApi&f=1",
        name:"Sujan Bhattarai",
        job:"Web-Developer",
        desc:"A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET or Java in the server, and http for communications between client and server. A web content management system is often used to develop and maintain web applications."

    },
    {
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Inl4bV6CLp2WU8i-07pTAQHaFj%26pid%3DApi&f=1" ,
        name:"Nabin Neupane",
        job:"BusinessMan",
        desc:"A businessperson, businessman or businesswoman is a person involved in the business sector - in particular someone undertaking activities (commercial or industrial) for the purpose of generating cash flow, sales, and revenue by utilizing a combination of human, financial, intellectual and physical capital with a view to fueling economic development and growth."
    },
    {
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1QNID1nCWIYVZa_MBuVS2gHaLH%26pid%3DApi&f=1",
        name:"Santosh",
        job:"Computer Engineer",
        desc:"Computer Engineering is a branch of engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software. Computer engineers usually have training in electronic engineering, software design, and hardware-software integration instead of only software engineering or electronic engineering."
    },
    {
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nVDya73sGM47120OqOzTLwHaIp%26pid%3DApi&f=1",
        name:"Shashank",
        job:"Computer Engineer",
        desc:"Computer Engineering is a branch of engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software. Computer engineers usually have training in electronic engineering, software design, and hardware-software integration instead of only software engineering or electronic engineering."
    },
    {
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vw9xy8BBkLCKUdD9QxWn9AHaFj%26pid%3DApi&f=1" ,
        name:"Sushil",
        job:"Civil Engineer",
        desc:"A civil engineer is a person who practices civil engineering – the application of planning, designing, constructing, maintaining, and operating infrastructures while protecting the public and environmental health, as well as improving existing infrastructures that have been neglected."
    }
]

return (
    <>
        <h1>These are the man listed in my PersonList</h1>

        <Person person={people[0]}/>
        <Person person={people[1]}/>
        <Person person={people[2]}/>
        <Person person={people[3]}/>
        <Person person={people[4]}/>
    </>
    )
}

export default PersonList
 