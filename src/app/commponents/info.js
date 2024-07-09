'use client'
import { useState , useEffect, useContext } from "react"
import { BackgroundContext } from "../commponents/context/BackgroundContext";

export default function Info() {

const { color , Changecolor , bgcolor } = useContext(BackgroundContext);
    
//------------------------------------------------------------------    

    const [ num , setNum ] = useState( [
        { num: 0  , id:4},
    ] )
    useEffect(() => {
        const handleScroll = () => {
          setTimeout(changenum , 50)
          console.log('اسکرول انجام شد!');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const changenum = () => {
        if (num[0].id == 4){
            setNum([
                { num: 75  , id:5},
            ])
        }
        else if (num[0].id == 5){
            setNum([
                { num: 378  , id:6},
            ])
        }
        else if (num[0].id == 6){
            setNum([
                { num: 369  , id:7},
            ])
        }
        else if (num[0].id == 7){
            setNum([
                { num: 347  , id:8},
            ])
        }
        else if (num[0].id == 8){
            setNum([
                { num: 345  , id:9},
            ])
        }
        else if (num[0].id == 9){
            setNum([
                { num: 312  , id:10},
            ])
        }
        else if (num[0].id == 10){
            setNum([
                { num: 422  , id:11},
            ])
        }
        else if (num[0].id == 11){
            setNum([
                { num: 423  , id:12},
            ])
        }
        else if (num[0].id == 12){
            setNum([
                { num: 424  , id:13},
            ])
        }
        else{
            setNum([
                { num: 425 , id:100}
            ])
        }  
    }
    useEffect(() => {
        const timer = setTimeout(changenum , 50);
    
        return () => clearTimeout(timer);
    }, [changenum]);    

//------------------------------------------------------------------

    const [ numT , setNumT ] = useState( [
        { num: 0  , id:4},
    ] )
    useEffect(() => {
        const handleScrollT = () => {
          setTimeout(changenumT , 50)
          console.log('اسکرول انجام شد!');
        };
        window.addEventListener('scroll', handleScrollT);
        return () => {
            window.removeEventListener('scroll', handleScrollT);
        };
      }, []);
    const changenumT = () => {
        if (numT[0].id == 4){
            setNumT([
                { num: 0  , id:5},
            ])
        }
        else if (numT[0].id == 5){
            setNumT([
                { num: 8  , id:6},
            ])
        }
        else if (numT[0].id == 6){
            setNumT([
                { num: 9  , id:7},
            ])
        }
        else if (numT[0].id == 7){
            setNumT([
                { num: 11  , id:8},
            ])
        }
        else if (numT[0].id == 8){
            setNumT([
                { num: 12  , id:9},
            ])
        }
        else if (numT[0].id == 9){
            setNumT([
                { num: 13  , id:10},
            ])
        }
        else if (numT[0].id == 10){
            setNumT([
                { num: 14  , id:11},
            ])
        }
        else if (numT[0].id == 11){
            setNumT([
                { num: 15  , id:12},
            ])
        }
        else if (numT[0].id == 12){
            setNumT([
                { num: 16  , id:13},
            ])
        }
        else{
            setNumT([
                { num: 17 , id:100}
            ])
        }  
    }
    useEffect(() => {
        const timerT = setTimeout(changenumT , 50);
    
        return () => clearTimeout(timerT);
    }, [changenumT]);    

//------------------------------------------------------------------

    const [ numB , setNumB ] = useState( [
        { num: 0  , id:4},
    ] )
    useEffect(() => {
        const handleScrollB = () => {
          setTimeout(changenumB , 50)
          console.log('اسکرول انجام شد!');
        };
        window.addEventListener('hover', handleScrollB);
        return () => {
            window.removeEventListener('hover', handleScrollB);
        };
      }, []);

    const changenumB = () => {
        if (numB[0].id == 4){
            setNumB([
                { num: 0  , id:5},
            ])
        }
        else if (numB[0].id == 5){
            setNumB([
                { num: 0  , id:6},
            ])
        }
        else if (numB[0].id == 6){
            setNumB([
                { num: 1  , id:7},
            ])
        }
        else if (numB[0].id == 7){
            setNumB([
                { num: 2  , id:8},
            ])
        }
        else if (numB[0].id == 8){
            setNumB([
                { num: 3  , id:9},
            ])
        }
        else if (numB[0].id == 9){
            setNumB([
                { num: 4  , id:10},
            ])
        }
        else if (numB[0].id == 10){
            setNumB([
                { num: 5  , id:11},
            ])
        }
        else if (numB[0].id == 11){
            setNumB([
                { num: 6  , id:12},
            ])
        }
        else if (numB[0].id == 12){
            setNumB([
                { num: 7  , id:13},
            ])
        }
        else{
            setNumB([
                { num: 8 , id:100}
            ])
        }  
    }
    useEffect(() => {
        const timerB = setTimeout(changenumB , 50);
    
        return () => clearTimeout(timerB);
    }, [changenumB]);  



    return(
        <div className="container_info w-[80%] flex justify-center items-center mt-[10rem] mb-[7rem] md:flex-col md:w-[95%]">
            
            <div className="left flex flex-col gap-7 justify-center items-center w-[30%] md:w-full md:flex-row md:mb-10">

                <div style={{background: bgcolor , color: color}} className="users w-[250px] md:w-[150px] bg-white text-black flex justify-center items-center flex-col p-7 rounded-xl md:p-2">
                    {num.map((thing) => {
                        return(
                            <h1 key={thing.id} className="num text-[60px] font-bold md:text-[24px]">
                                {thing.num}
                            </h1>
                        )
                    })}
                    <span className="text-2xl md:text-[17px]">Customers</span>
                </div>

                <div style={{background: bgcolor , color: color}} className="users w-[250px] md:w-[150px] bg-white text-black flex justify-center items-center flex-col p-7 rounded-xl md:p-2">
                    {numT.map((thing) => {
                        return(
                            <h1 key={thing.id} className="num text-[60px] font-bold md:text-[24px]">
                                {thing.num}
                            </h1>
                        )
                    })}
                    <span className="text-2xl md:text-[17px]">Branches</span>
                </div>

                <div style={{background: bgcolor , color: color}} className="users w-[250px] md:w-[250px] bg-white text-black flex justify-center items-center flex-col p-7 rounded-xl md:p-2">
                    {numB.map((thing) => {
                        return(
                            <h1 key={thing.id} className="num text-[60px] font-bold md:text-[24px]">
                                {thing.num}
                            </h1>
                        )
                    })}
                    <span className="text-xl md:text-[15px] md:text-center">years of experience</span>
                </div>

            </div>

            <div className="right flex flex-col justify-center items-center w-[70%] md:w-full">
                <div style={{background: bgcolor , color: color}} className="title bg-white text-black flex flex-col justify-center items-center w-[100%] rounded-2xl">
                    <h1 className="text-3xl my-4 font-bold md:text-2xl">What we do?</h1>
                    <span className="text-xl mb-5 md:text-[20px] md:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing </span>
                </div>
                <div style={{background: bgcolor , color: color}} className="info mt-2 bg-white text-black w-full flex flex-col justify-center items-center rounded-xl">
                    <div style={{borderBlockColor: color}} className="border-b-solid border-b-2 border-black">
                        <h1 className="text-2xl my-4 md:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    </div>
                    <div className="mx-8 my-4 md:mx-2">
                        <p className="par text-xl text-center my-4 mx-4 md:text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}