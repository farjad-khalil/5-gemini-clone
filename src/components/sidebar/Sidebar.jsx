import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

function Sidebar() {
    const { state, dispatch } = useContext(Context)
    function toggle() {
        dispatch({ type: 'EXTENDED_TOGGLE' })
    }
    return (
        <div className={`flex flex-col justify-between bg-slate-100 ${state.extended ? 'w-60' : 'w-20'} transition-all ease-in-out h-screen`}>

            {/* Menu Icon */}
            <div className='inline-flex items-center justify-center mt-6 h-10 w-10 ml-4 hover:bg-slate-300 rounded-full transition'>
                <img src={assets.menu_icon} alt='logo' className='w-[25px]' onClick={toggle} />
            </div>

            {/* New Chat Button */}
            <div className={`inline-flex items-center justify-center bg-slate-200 rounded-full ml-4 hover:bg-slate-300 ${state.extended ? 'w-32' : 'w-10'}`}>
                <img src={assets.plus_icon} className='w-[20px] m-1' />
                {state.extended ?
                    <p className='text-slate-600 m-1 cursor-default'>new chat</p>
                    : null}
            </div>

            {/* Spacer for Recent Section */}
            <div style={{ paddingTop: state.extended ? '0px' : '55px' }} className='hover:bg-slate-300 rounded-full transition'>
                {state.extended ? (
                    <div className='ml-6'>
                        <p className='text-slate-600 font-bold '>Recent</p>
                        <img src={assets.message_icon} className='w-[30px] hover:bg-slate-300 rounded-full transition ' />
                    </div>
                ) : null}
            </div>

            <div className='flex flex-col justify-around ml-3 h-40  mb-10 space-y-6'>
                <div className='inline-flex items-center justify-center w-[55px] h-[45px] hover:bg-slate-300 rounded-full transition '>
                    <img src={assets.history_icon} className='w-[20px]' />
                </div>
                <div className='inline-flex items-center justify-center w-[55px] h-[45px] hover:bg-slate-300 rounded-full transition'>
                    <img src={assets.question_icon} className='w-[20px]' />
                </div>
                <div className='inline-flex items-center justify-center w-[55px] h-[45px] hover:bg-slate-300 rounded-full transition'>
                    <img src={assets.setting_icon} className='w-[20px]' />
                </div>
            </div>
        </div >
    )

}

export default Sidebar
