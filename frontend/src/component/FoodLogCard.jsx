import React from "react";
import Kenkey from "../assets/img/Kenkey.jpg";
// StreakBlackIcon
import StreakIcon from "../assets/logo&icons/Vector.svg";

const FoodLogCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-2">
      <div className="flex items-center gap-3">
        <img
          src={Kenkey}
          alt="Kenkey with pepper"
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <h4 className="text-sm font-semibold">Kenkey with pepper</h4>
          <div className="flex items-center text-gray-500 text-xs gap-1">
            <img src={StreakIcon} alt="Fire" className="w-4 h-4" />
            <span>106 cal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodLogCard;
