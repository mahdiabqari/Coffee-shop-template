import { useContext } from "react"
import { BackgroundContext } from "../commponents/context/BackgroundContext"

function Footer() {

    const { color , bgcolor } = useContext(BackgroundContext)

    return(
        <div style={{ background:bgcolor , color:color }} className="flex justify-center items-center w-full h-[12rem] md:px-2">
            <div className="w-[33%] flex flex-col justify-center items-start ml-40 md:w-[50%] md:ml-0">
                <h1 className="text-2xl font-bold mb-3">Coffee Shop</h1>
                <h2 className="text-xl">-Espresso</h2>
                <h2 className="text-xl">-Mocha</h2>
                <h2 className="text-xl">-Cappuccino</h2>
            </div>
            <div className="w-[33%] flex justify-center items-center flex-col md:w-[50%]">
                <h1 className="text-3xl font-bold mb-3">Contact us</h1>
                <div className="flex gap-7">
                    <img className="icon w-14 rounded-full" src="https://uploadkon.ir/uploads/779116_24telegram.jpg"/>
                    <img className="icon w-14 rounded-full" src="https://uploadkon.ir/uploads/ae8216_24instagram.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Footer