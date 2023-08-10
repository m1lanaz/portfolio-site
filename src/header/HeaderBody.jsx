import { Download } from "react-bootstrap-icons"

export default function HeaderBody(){
    return(
        <div className="headerBody__background">
            <div>
                <img src="./pic.png" />
            </div>
            <div className="headerBody__words">
                <h1>MILANA</h1>
                <h2>ZABOROVSKA</h2>
                <h4>Aspiring full stack developer</h4>
                <p>Hey there, I'm Milana I have a keen eye for design and a knack for coding. </p>
                <p>I thrive on crafting seamless user experiences through the power of technology.</p>
                <div className="headerBody__cvDownload">
                    <div>
                        <div className="headerBody__circle"> </div>
                        <span>Download CV <Download/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}