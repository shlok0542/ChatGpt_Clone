import React, { useState } from "react";
import {
  MessageCircleDashed,
  CircleUserRound,
  ChevronDown,
  Sparkles,
  Atom,
  Check,
  ChartNoAxesGantt,
} from "lucide-react";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-[100%] flex justify-between items-center px-4 py-2 bg-white">
      <ChartNoAxesGantt className="sm:hidden hover:cursor-pointer"/>
      <div className="hidden  sm:block ">
        <h1
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className="flex items-center text-xl font-bold text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl hover:cursor-pointer"
        >
          ChatGPT
          <ChevronDown
            color="#787878"
            strokeWidth={1.25}
            absoluteStrokeWidth
            size={30}
          />
        </h1>
        {isClicked ? (
          <div className="absolute top-12 shadow-sm p-4 rounded-xl flex flex-col gap-2 bg-white">
            <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-violet-100 px-2 py-1 rounded-xl">
              <Sparkles
                color="#000000"
                strokeWidth={1.25}
                absoluteStrokeWidth
              />
              <div>
                <p className="text-sm text-gray-500">ChatGpt Plus</p>
                <p className="text-xs text-gray-400">
                  Our Smartest model and more
                </p>
              </div>
              <button className="bg-violet-100  px-2 py-1 rounded-full font-medium">
                Upgrade
              </button>
            </div>
            <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-violet-100 px-2 py-1 rounded-xl">
              <Atom color="#000000" strokeWidth={1.25} absoluteStrokeWidth />
              <div>
                <p className="text-sm text-gray-500">ChatGpt</p>
                <p className="text-xs text-gray-400">Great for Every tasks</p>
              </div>
              <button className="ml-auto ">
                <Check color="#000000" strokeWidth={1.25} absoluteStrokeWidth />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="hidden sm:block">
        <button className="bg-violet-100 text-violet-700 px-4 py-1 rounded-full font-medium hover:bg-violet-200 hover:cursor-pointer transition-all duration-200 ease-in-out">
          ✦ Get Plus
        </button>
      </div>
      <div className="flex items-center gap-4">
        <MessageCircleDashed
          color="#787878"
          strokeWidth={1.25}
          absoluteStrokeWidth
          size={30}
          className="hover:cursor-pointer hover:scale-104"
        />
        <CircleUserRound
          color="#787878"
          strokeWidth={1.25}
          absoluteStrokeWidth
          size={35}
          className="hover:cursor-pointer hover:scale-104"
        />
      </div>
    </div>
  );
};

export default Header;
