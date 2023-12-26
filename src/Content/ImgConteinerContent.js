import IMAGE from "../Logo/src";

function ImgConteinerContent(){
    return<div className=" mx-44">
        <h5 className="text-sm mb-6">FEATURED PRODUCTS</h5>
        <div className=" relative flex justify-between">
            <div>
                <img src={IMAGE.img_block}/>
                <div className="flex text-center my-3 justify-between">
                    <img className=" w-6 h-6 border-r-2 hover:cursor-pointer" src={IMAGE.img_back} alt="img-back"/>
                    <span>Lipsum comoodo Manager</span>
                    <img className=" w-6 h-6 border-r-2 hover:cursor-pointer" src={IMAGE.img_next} alt="img-next"/>
                </div>
            </div>
            <div className=" right-0 absolute">
                <img src={IMAGE.img_block}/>
                <div className=" relative text-center my-3">
                    <span className=" w-96">Lipsum comoodo Manager </span>
                    <button className="absolute top-10 right-0 pb-3 border w-12 h-6 hover:cursor-pointer bg-black text-white">More</button>
                </div>
            </div>
            <div></div>
        </div>
    </div>
}

export default ImgConteinerContent;