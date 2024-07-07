'use Client'
import { useContext, useState } from "react";
import { BackgroundContext } from "../commponents/context/BackgroundContext";

function Header() {

    const [ check , setCheck ] = useState(true)
    const [ themename , setThemename ] = useState(  
      []
    )

    const Showmode = (e)=> {
      e.preventDefault()

      if(check){
        setThemename([
          {urlligth: 'https://imgurl.ir/uploads/u615186_Screenshot_54.png', namelight: 'Light', 
           urldark : 'https://imgurl.ir/uploads/g120170_Screenshot_55.png', namedark: 'Dark'},
        ])
        setCheck(false)
      }
      else{
        setThemename([])
        setCheck(true)
      }
    }


    const { color , bgcolor , Changecolorlight , Changecolordark } = useContext(BackgroundContext)

    const Changeall = () => {
      Changecolorlight()
    }

    const Changealltow = () => {
      Changecolordark()
    }

    return(
        <div style={{background: bgcolor , color: color}} className="header flex justify-center items-center w-[100%] h-[4rem] md:h-[17rem] md:mr-auto md:rounded-br-xl md:w-[20%] sticky top-0">
          <div className="flex justify-between items-center w-[80%] h-[4rem] rounded-b-2xl md:flex-col md:h-[17rem] md:w-[20%] md:mt-7">
            <div className="left flex gap-4 text-2xl justify-center items-center ml-4 md:hidden">
              Coffee Shop
            </div>
            <div className="center">
              <ul className="flex gap-4 text-xl justify-center items-center md:flex-col md:text-xl">
                <li>Home</li>
                <li>About</li>
                <li className="md:text-[18px]">Products</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="point right w-[2rem] h-[3rem] flex gap-4 text-xl justify-center items-center mr-7 md:m-0 md:mb-7">
               <div className="" onClick={Showmode}> 
                  <img className="w-20 rounded-full" src="https://imgurl.ir/uploads/b8486_OIP.jpg"/> 
               </div> 

              {themename.map((item) => {
                return(
                  <div style={{background: bgcolor}} className="mode rounded-b-xl flex py-2 px-2 flex-col absolute top-16 md:top-[15rem] md:left-[3.5rem] md:rounded-xl">
                    <div onClick={Changeall}  className="flex my-1 justify-center items-center gap-2 mx-2">
                      <img className="w-6 rounded-full mx-1" src={item.urlligth}/>
                      <h2 className="mx-2">{item.namelight}</h2>
                    </div>
    
                    <div onClick={Changealltow} className="flex my-1 justify-center items-center gap-2 mx-2">
                      <img className="w-6 rounded-full mx-1" src={item.urldark}/>
                      <h2 className="mx-2">{item.namedark}</h2>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
    )
}

export default Header;