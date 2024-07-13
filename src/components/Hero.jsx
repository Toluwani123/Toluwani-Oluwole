import {HERO_CONTENT} from '../constants'
import profilePic from "../assets/me.png"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Toluwani Oluwole</h1>
                    <span className="bg-gradient-to-r from from-yellow-400 via-beige-500 to-pink-300 bg-clip-text text-3xl tracking-tight text-transparent">FullStack Developer</span>
                    <p className='my-2 max-w-xl py-7 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </p>

                </div>

            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img className='rounded-2xl' src={profilePic} alt="Toluwani Oluwole"/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero