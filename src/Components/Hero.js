import { Link } from "react-router-dom";

function Hero(){
return(
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black">
            WatchDogs
        </h1>
        <br/>
        <Link to="/register">
        <span className="py-6 px-10 bg-yellow-500 rounded-full hover:bg-yellow-300 lg:text-lg md:text-base text-sm transtion duration-300 ease-in-out flex flex-col items-center animate-bounce"> 
        Register To Your Building
        <svg class="w-4 h-4 "
         fill="none"
          stroke="currentColor"
           viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                 stroke-linejoin="round"
         stroke-width="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
              </path>
              </svg>
        </span>
        </Link>
    </div>
)
}
export default Hero;