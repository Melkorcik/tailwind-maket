import './style/ContentMain.css'
import IMAGE from "../Logo/src";

function ContentMain(){
    return<div className="main-container-three">
        <div className="container-one">
            <h3 className="title-three-one">LATEST NEWS</h3>
            <div>
                <h3 className="children-title-one">An early access preview</h3>
                <div>
                    <span className="text-content-three-one">
                        An early access preview of the Orlin Data<br/>
                        <span className="text-content-three-one-1">Manager is available anager is available</span>
                    </span>
                </div>
                <h3 className="children-title-one">An early access preview</h3>
                <div>
                    <span className="text-content-three-one">
                        An early access preview of the Orlin Data<br/>
                        <span className="text-content-three-one-1">Manager is available anager is available</span>
                    </span>
                </div>
                <h3 className="children-title-one">An early access preview</h3>
                <div>
                    <span className="text-content-three-one">
                        An early access preview of the Orlin Data<br/>
                        <span className="text-content-three-one-1">Manager is available anager is available</span>
                    </span>
                </div>
            </div>
        </div>

        <div className="container-two">
            <h3 className="title-three-two">WHO WE ARE ?</h3>
            <p className="text-content-three-two">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
            </p>
            <button className="btn-two">More</button>
        </div> 
           
        <div>
            <h3 className="title-text-version">Contact Us</h3>
            <div className="container-three-three-one">
                <img src={IMAGE.img_phone} className="phone"/>
                <span className="number-phone-one">(626) 921-4592</span>
                <span className="dashed-line"></span>
            </div>
            <div className="container-three-three-one">
                <img src={IMAGE.img_house} className="home"/>
                    <span className="number-phone-two">(626) 921-4592</span>
                    <span className="dashed-line-two"></span>
                </div>
            <div className="container-three-three-one">
                <img src={IMAGE.img_conver} className="conver"/>
                    <span className="number-phone-three">info@orlian.com</span>
                    <span className="dashed-line-three"></span>
            </div>
        </div>
    </div>
}

export default ContentMain;