import React from 'react'
import { Link } from 'react-router-dom' 
export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            About Us
                            <span className="hidden sm:block text-4xl color-orange">This is learning about react router</span>
                        </h2>

                        
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://th.bing.com/th?id=OIP.gdYoLqz3FKT2Oo0dqZ0LXgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2.2&pid=3.1&rm=2" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://cdn.pixabay.com/photo/2019/08/09/15/10/flowers-4395240_1280.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">About Page</h1>
        </div>
    );
}
 
