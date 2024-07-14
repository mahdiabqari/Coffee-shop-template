'use client'
import { useContext, useState } from "react"
import { BackgroundContext } from "../commponents/context/BackgroundContext"

export default function Product () {

    const [info , setInfo] = useState([
        { src: 'https://imgurl.ir/uploads/d915007_.jpg' , title: 'Espresso' , link:'/Coffie' , id: 1 },
        { src: 'https://imgurl.ir/uploads/p59957_.jpg' , title: 'Mocha', link:'' , id: 2 },
        { src: 'https://imgurl.ir/uploads/k385594_.jpg', link:'' , title: 'Cappuccino' , id: 3 },
        { src: 'https://imgurl.ir/uploads/d437927_.jpg' , title: 'Tea', link:'' , id: 4 },
        { src: 'https://imgurl.ir/uploads/n63353_.jpg', link:'' , title: 'Latte' , id: 5 },
        { src: 'https://imgurl.ir/uploads/x310361_.jpg' , title: 'Americano', link:'' , id: 6 }
    ])

    const { color , bgcolor } = useContext(BackgroundContext)

    return(
        <div className="md:w-[95%] flex flex-col justify-center items-center">
            <div  style={ { background: bgcolor , color: color } } className="title bg-white text-black flex flex-col justify-center items-center w-[80%] rounded-2xl md:w-[95%] md:px-[1px]">
                <h1 className="text-3xl my-4 font-bold"> Products </h1>
                <span className="text-xl mb-5 md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>

            <div className="products w-[80%] flex justify-between items-center flex-wrap gap-7 mt-12 md:flex-col md:w-[95%]">
                {info.map((item) => {
                    return(
                        <div key={item.id} style={ { background: bgcolor , color: color } } className="card rounded-xl w-[21rem] bg-white text-black flex flex-col justify-center items-center px-4 py-3 md:w-[90%]">
                            <div className="ja rounded-xl w-[97%] bg-black mb-4 h-[14rem]"><img className="js rounded-xl mb-4 h-[14rem] w-[100%] mx-auto" src={item.src} alt="png"/></div>
                            <h1 className="text-2xl font-bold mr-auto ml-2">{item.title}</h1>
                            <p className="w-[95%]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, maxime aperiam 
                                suscipit veniam nulla autem assumenda 
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}