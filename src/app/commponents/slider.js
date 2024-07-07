'use Client'
import { useState , useEffect } from "react";




function Slider(){

    const [slides , setSlides] = useState([
        { src: 'https://imgurl.ir/uploads/n63353_.jpg' , id:1 },
    ])
    const [change , setChange] = useState(true)


    
      useEffect(() => {
        const timer = setTimeout(() => {
          if (!change) {
            setSlides([{ src: 'https://imgurl.ir/uploads/n63353_.jpg', id: 1 }]);
            setChange(true);
          } else {
            setSlides([{ src: 'https://imgurl.ir/uploads/y8227_R.jpg', id: 2 }]);
            setChange(false);
          }
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [change]);



    const Changebg = (e) => {
        e.preventDefault()

        if(change){
            setSlides([
                { src: 'https://imgurl.ir/uploads/y8227_R.jpg' , id:2 }
            ])
            setChange(false)
        }
        else if(!change){
            setSlides([
                { src: 'https://imgurl.ir/uploads/n63353_.jpg' , id:1 },
            ])
            setChange(true)
        }
    }

    const Changebg_back = (e) => {
        e.preventDefault()
        if(!change){
            setSlides([
                { src: 'https://imgurl.ir/uploads/n63353_.jpg' , id:1 },
            ])
            setChange(true)
        }
        else if(change){
            setSlides([
                { src: 'https://imgurl.ir/uploads/y8227_R.jpg' , id:2 }
            ])
            setChange(false)
        }
    }

    return(
        <div className="banner w-full h-screen md:h-[15rem]">
            <div className="container-banner rounded-b-2xl w-full h-[35rem] flex justify-between items-center relative bottom-[4rem] md:h-[0rem] md:bottom-[5.5rem]">
                <div className="forward left">
                    <img onClick={Changebg} className="w-[3rem] rounded-full mx-2 md:hidden" src="https://imgurl.ir/uploads/f820892_next-icon-Top.jpg"/>
                </div>
                {slides.map((item) => {
                    return(
                        <div className="bg_banner w-full flex justify-center items-center">
                            <img className="bg_banner w-[90%] absolute h-[55rem] rounded-b-[40px] md:w-full md:h-[23rem] md:rounded-b-[8rem]" key={item.id} src={item.src}/>
                        </div>
                    )
                })}
                <div onClick={Changebg_back} className="forward right">
                    <img className="w-[3rem] rounded-full mx-2 md:hidden" src="https://imgurl.ir/uploads/p338323_next-icon-Top-revers.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Slider;