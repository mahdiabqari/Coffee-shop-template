'use client'
import { createContext , useReducer } from "react";

export const BackgroundContext = createContext()

const themeReducer = ( state , action) => {
    if(action.type == 'change-bgcolorlight'){
        return {...state , bgcolor: 'rgba(255, 255, 255, 0.756)' , color: 'black' , bgbg : '#cccccc'}
    }
    else if(action.type == 'change-bgcolordark'){
        return {...state , bgcolor: 'rgba(0, 0, 0, 0.679)' , color: 'white' , bgbg : '#292929'}
    }
    else{
        return state
    }
} 

export function BackgroundProvider({children}) {

    const [state , dispatch] = useReducer( themeReducer ,{
        bgcolor : 'rgba(255, 255, 255, 0.756)',
        color: 'black',
        bgbg : '#cccccc',
    })

    const Changecolorlight = (bgcolor , color , bgbg) => {
        dispatch({type: 'change-bgcolorlight' , payload:bgcolor , payloadtow:color , payloadbg:bgbg})
    }
    const Changecolordark = (bgcolor , color , bgbg) => {
        dispatch({type: 'change-bgcolordark' , payload: bgcolor , payloadtow: color ,  payloadbg:bgbg})
    }


    return(
        <BackgroundContext.Provider value={ {...state , Changecolorlight , Changecolordark } }>
            {children}
        </BackgroundContext.Provider>
    )
}