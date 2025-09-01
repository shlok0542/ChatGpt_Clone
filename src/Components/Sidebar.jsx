import { useState } from "react";
import { SquarePen, Search, Images, CirclePlay, Crown } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered,setIsHovered] = useState(false);
  return (
  <>
  {
    isOpen ? (
      <div className="w-[100%] h-screen py-4 flex flex-col items-center ">
        <button
          className="hover:bg-gray-200 hover:cursor-pointer rounded mb-8 relative right-1"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isHovered ? (
           <svg
              className="w-[27px] h-[27px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.6"
                d="m6 10 1.99994 1.9999-1.99994 2M11 5v14m-7 0h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"
              />
            </svg>
          ) : (
            <img
          className="hover:bg-gray-200 hover:cursor-pointer rounded"
          width="27"
          height="27"
          src="../public/Logo1.png"
          alt="chatgpt"
        />
          )}
        </button>
  <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2 justify-center">
          <SquarePen
            color="#787878"
            strokeWidth={2}
            absoluteStrokeWidth
            className="mr-2"
          />
        </h1>

        <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          <Search
            color="#787878"
            strokeWidth={1}
            absoluteStrokeWidth
            className="mr-2"
          />
        </h1>
        <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-6 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          <Images
            color="#787878"
            strokeWidth={1}
            absoluteStrokeWidth
            className="mr-2"
          />
        </h1>
      
    </div>
    ): ( <div className="w-[240px] h-full bg-gray-50 shadow-md   overflow-scroll flex flex-col">
      {/* Logo Section or Header */}
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-gray-50 p-4">
        <img
          className="hover:bg-gray-100 hover:cursor-pointer rounded"
          width="30"
          height="30"
          src="../public/Logo1.png"
          alt="chatgpt"
        />
        <button
          className="hover:bg-gray-100 hover:cursor-pointer rounded"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
            <svg
              className="w-[34px] h-[34px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.6"
                d="M7.99994 10 6 11.9999l1.99994 2M11 5v14m-7 0h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"
              />
            </svg>
        </button>
      </div>

    {/* Menu option */}
      <div className="p-4">
        <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-100 hover:cursor-pointer flex items-center p-2">
          <SquarePen
            color="#787878"
            strokeWidth={2}
            absoluteStrokeWidth
            className="mr-2"
          />
          New chat
        </h1>

        <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-100 hover:cursor-pointer flex items-center p-2">
          <Search
            color="#787878"
            strokeWidth={1}
            absoluteStrokeWidth
            className="mr-2"
          />
          Search Chats
        </h1>
        <h1 className="w-full text-md text-gray-800 font-semibold rounded mb-6 hover:bg-gray-100 hover:cursor-pointer flex items-center p-2">
          <Images
            color="#787878"
            strokeWidth={1}
            absoluteStrokeWidth
            className="mr-2"
          />
          Library
        </h1>
        <h1 className="w-full text-md text-gray-800 font-semibold rounded  hover:bg-gray-100 hover:cursor-pointer flex items-center p-2">
          <CirclePlay
            color="#787878"
            strokeWidth={1.25}
            absoluteStrokeWidth
            className="mr-2"
          />
          Sora
        </h1>
        <h1 className="w-full text-md text-gray-800 font-semibold rounded  hover:bg-gray-100 hover:cursor-pointer flex items-center p-2">
          <Crown
            color="#787878"
            strokeWidth={1.25}
            absoluteStrokeWidth
            className="mr-2"
          />
          GPTs
        </h1>
 {/* chat section  */}
        <div className="pt-6 border-t border-gray-200">
          <h4 className="text-sm text-gray-500 mb-2">Chats</h4>
          <div className="text-gray-800 text-sm space-y-1">
            
             <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Tech Journey Summary
        </p>
        <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Logical vs Physical Design
        </p>
         <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Tech Journey Summary
        </p>
        <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Logical vs Physical Design
        </p>
         <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Tech Journey Summary
        </p>
        <p className="w-full text-md text-gray-800 font-semibold rounded mb-2 hover:bg-gray-200 hover:cursor-pointer flex items-center p-2">
          Logical vs Physical Design
        </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 fixed bottom-0 left-0 ">
          <button className="flex w-full text-left text-sm text-gray-700  p-2 rounded hover:cursor-pointer items-center">
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/guarantee.png" alt="guarantee"/>
            <div>
              Upgrade plan <br />
            <span className="text-xs text-gray-400">
              More access to the best models
            </span>
            </div>
          </button>
        </div>
    </div>)
  }
  </> 
  );
};

export default Sidebar;
