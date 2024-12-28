import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <nav className="pt-5 z-50 fixed w-full flex justify-between items-center sm:px-8 px-4 lg:px-8">
      <div className="flex gap-x-4">
        <img src="/Images/35-mace.png" alt="35 - MACE Logo"
          className='w-16 sm:w-20 md:w-28 pt-2'
        />
        <img src="/Images/logo.png" alt="35 - MACE Logo"
          className='w-32 sm:hidden'
        />
      </div>


      <div className="block sm:hidden z-10">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${isOpen
                ? "rotate-45 translate-y-3 opacity-50"
                : "opacity-50"
              }`}
          />
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50"}`} />
          <div
            className={`${genericHamburgerLine} ${isOpen
                ? "-rotate-45 -translate-y-3 opacity-50"
                : "opacity-50"
              }`}
          />
        </button>
      </div>


       <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 right-0 bg-[rgba(33,31,35,0.5)] px-16 pb-10 text-center text-white sm:hidden rounded-l-lg backdrop-blur-lg `}
      >
        <ul className="space-y-4 mt-20">
          <li>
            <a href="#home" className="block">Home</a>
          </li>
          <li>
            <a href="#about" className="block">About</a>
          </li>
          <li>
            <a href="#tickets" className="block">Tickets</a>
          </li>
          <li>
            <a href="#sessions" className="block">Sessions</a>
          </li>
        </ul>
      </div>
      <div className="hidden text-sm md:text-base sm:gap-x-3 lg:ml-10 text-white sm:flex lg:gap-x-10 bg-[rgba(33,31,35,0.6)] px-6 py-2 rounded-full uppercase font-medium shadow-navbar backdrop-blur-md">
        <ul className="cursor-pointer hover:bg-[#B429BE] rounded-full px-3 py-1 duration-500 ease-in-out"><a>Home</a></ul>
        <ul className="cursor-pointer hover:bg-[#B429BE] rounded-full px-3 py-1 duration-500 ease-in-out"><a>About</a></ul>
        <ul className="cursor-pointer hover:bg-[#B429BE] rounded-full px-3 py-1 duration-500 ease-in-out"><a>Tickets</a></ul>
        <ul className="cursor-pointer hover:bg-[#B429BE] rounded-full px-3 py-1 duration-500 ease-in-out"><a>Sessions</a></ul>
      </div>
      <img src="/Images/logo.png" alt="35 - MACE Logo"
        className='hidden sm:block w-16 sm:w-28 md:w-40'
      />
    </nav>
  )
}
export default Navbar 