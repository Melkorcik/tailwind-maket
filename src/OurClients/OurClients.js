import './style/OurClients.css';
import IMAGE from '../Logo/src';

function Clients(){
    return<div className="main-container-four">
        <span className="line-top"></span>
        <h3 className="title-four">OUT CLIENTS</h3>
        <div className="container-icons">
            <img src={IMAGE.img_pin} className="icon-pin"/>
            <img src={IMAGE.img_js} className="icon-js"/>
            <img src={IMAGE.img_google} className="icon-google"/>
            <img src={IMAGE.img_visa} className="icon-visa"/>
        </div>
        <span className="line-top-two"></span>
        <img src={IMAGE.img_lorem_ipsum} className="LoremIpsum"/>
        <div className="Links">
            <h5 className="title-home">HOME</h5><span>|</span><h5 className="title-about">ABOUT</h5><span>|</span><h5 className="title-work">WORK</h5><span>|</span><h5 className="title-servies">SERVIES</h5><span>|</span><h5 className="title-contact">CONTACT</h5>
        </div>
    </div>
}

export default Clients;