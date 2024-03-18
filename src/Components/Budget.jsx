import React from "react";

const Budget = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center min-h-screen mx-8">
      <h2 className="font-bold text-2xl">
        How would you describe your budget?
      </h2>
      <div className="flex flex-col gap-y-2 justify-center">
        <div className="flex gap-2">
          <input type="radio" name="budget" id="moderate" className="" />
          <label htmlFor="moderate" className="">
            Moderate Budget
          </label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="budget" id="flexible" className="" />
          <label htmlFor="flexible" className="">
            Flexible Budget
          </label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="budget" id="not-sure" className="" />
          <label htmlFor="not-sure" className="">
            Not sure
          </label>
        </div>
      </div>
    </div>
  );
};

export default Budget;
