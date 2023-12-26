import IMAGE from "./src"

function Logo(){
    return<div className="flex w-auto">
        <div className=" w-96">
            <img className=" h-28 w-28 mx-60" src={IMAGE.imgLogo} alt="img"/>
        </div>
        <div className="relative w-7/12 h-16 m-6 border-l-2 left-28">
            <span className=" absolute text-orange-400 left-6 text-xl">LOREM IPSUM SIT AMET</span>
            <span className=" absolute text-gray-600 top-6 left-6 text-sm">consectcur adipisincing elit, set do eiusmod tempor incididunt</span>
        </div>
    </div>
}

export default Logo;