import React, { useReducer } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import { Context } from './context/context'
import Home from './components/Home/Home'
import run from './config/gemini'

function reducer(state, action) {
   switch (action.type) {
      case 'EXTENDED_TOGGLE': {
         return {
            ...state,
            extended: !state.extended
         }
      }
      case 'SET_INPUT':{
         return{
            ...state,
            input: action.payload.input
         }
      }
      case 'SET_RESPONSEG':{
         return{
            ...state,
            responseG:action.payload.response
         }
      }

   }

}
function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <div className='bg-white-950'>
         <Context.Provider value={{ state, dispatch ,run }}>
            <div className='flex '>
               <Sidebar />
               <Home />
            </div>
         </Context.Provider>
      </div>
   )
}

export default App

const initialState = {
   extended: false,
   input:'',
   responseG:''
}