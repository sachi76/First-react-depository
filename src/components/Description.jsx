import React from "react"



export default function Description() {
    return (
        <div className="description">
            <h3>Sachidanand H Pramod</h3>
            <h4>FrontEnd Developer</h4>
            <h5> sachi.com </h5>
            <div className="btn">
                <a href="mailto:sachinph05@gmail.com" target={"_blank"}><button >E-mail</button></a>
                <a href="https://www.linkedin.com/in/sachidanand-h-pramod-834935183/" target={"_blank"}><button className="btn2">LinkedIn</button></a>
            </div>
            <div className="about">
                <h3>About</h3>
                <h4>I am a frontend Developer with passion for bringing imaginations of designers to life. I try writing cleaner codes and implement best practices of writing code in my project and I am always excited to learn newer technologies.</h4>
                <div className="interests">
                    <h3>Interests</h3>
                    <h4>Apart from coding, I love playing sports, clicking photos and watching YouTube.Also I love trekking</h4>
                </div>
            </div>
        </div>

    )
}