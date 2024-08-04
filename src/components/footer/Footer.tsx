import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-500 p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" p-4">
          <h4>Information</h4>
        </div>
        <div className=" p-4">Section 2</div>
        <div className=" p-4">Section 3</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className=" p-4">Section 4</div>
        <div className=" p-4 ">section 5</div>
      </div>
    </div>
  );
};

export default Footer;
