import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

function Home() {
    let result = ''
    const { state, dispatch, run } = useContext(Context)
    async function handleSubmit(e) {
        e.preventDefault();
        let prompt = e.target[0].value
        e.target[0].value = ''
        dispatch({ type: 'SET_RESPONSEG', payload: { response: 'loading...' } })

        result = await run(prompt)
        console.log('result::', result)
        dispatch({ type: 'SET_RESPONSEG', payload: { response: result } })
    }
    return (
        // Full Screen
        <div className='p-7 w-full h-screen flex flex-col items-center'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h2 className='text-2xl'>Gemini</h2>
                <img src={assets.profile_icon} className='w-10' />
            </div>
            <div className='w-full h-2/3 flex flex-col justify-center items-center'>
                <div>
                    <div className="text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-flex">
                        Hello, Dev.
                    </div>
                    <div className='text-4xl font-semibold text-gray-300'>
                        How can I help you today?
                    </div>
                </div>
            </div>
            <div className='max-w-4xl m-5 p-9 rounded-3xl bg-slate-100'>
                <p>{state.responseG}</p>
            </div>
            <div className='w-full h-1/4 flex items-center justify-center'>
                <form className='w-full flex items-center justify-center' onSubmit={(e) => handleSubmit(e)}>
                    <input className='w-2/3 p-5 px-9 rounded-full bg-slate-100 focus:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200' placeholder="ask gemini" />
                </form>
            </div>
        </div>

    )
}

export default Home
