import React, { Dispatch, SetStateAction, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
const ShipmentStatus = ({
  setShow,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed w-full h-full bg-[#ffffff93] z-[999999] inset-0 flex justify-center items-center   ">
      <div className=" border border-gray-400 w-[70%] bg-[#ffffffe1] ">
        <div className="flex justify-end">
          <button
            className="-mt-3 bg-white -mr-3"
            onClick={() => {
              setShow(false);
            }}
          >
            <RxCrossCircled size={30} />
          </button>
        </div>
        <div className="px-5 pb-5">
          <div className="flex justify-between items-center">
            <img src="/img/logo.png" alt="logo" className="h-16 bg-cover" />
            <button className="px-4 h-10 bg-brand-color text-white font-bold rounded-lg">
              Print
            </button>
          </div>
          <div className="px-4 py-2 bg-brand-color2 text-white font-bold rounded-lg my-5">
            <h1 className="text-center">Shipment Status</h1>
          </div>
          <div className="border-b my-5">
            <h2 className="text-xl font-bold  underline ">
              Shipping Information
            </h2>
            <div className="grid grid-cols-3 justify-between gap-y-2 font-bold my-3">
              <p>Origin:</p>
              <p>
                Package:<span className="font-normal pl-2">documents</span>
              </p>
              <p>
                Destination:<span className="font-normal pl-2">documents</span>
              </p>
              <p>
                Type of shipment:
                <span className="font-normal pl-2">documents</span>
              </p>
              <p>
                Weight:<span className="font-normal pl-2">documents</span>
              </p>
              <p>
                Shipment Mode:
                <span className="font-normal pl-2">documents</span>
              </p>
              <p>
                Carier Reference no:
                <span className="font-normal pl-2">documents</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold  underline">Shipping History</h2>
            <table className="auto w-full text-center mt-3">
              <thead className="bg-slate-400">
                <tr>
                  <th>SN</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Remarks</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="bg-slate-300">
                {[0, 0].map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>1</td>
                      <td>Kathmand-Nepal</td>
                      <td>11.25:00</td>
                      <td>2023-01-12</td>
                      <td>good</td>
                      <td>Departed FAcility in</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatus;
