import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { updateSizeToLS } from "../store/product/productSE";

import Light from "../assets/img/imageLight.png";
import Dark from "../assets/img/imageClDark.png";
import Arrow from "../assets/svg/Arrow/Line 6.svg";
import Angled from "../assets/svg/LineAngled.svg";

const SIZES = ["XS", "S", "M", "L", "XXL"];

const SIZE_STYLE =
  "w-[82px] lg:w-[78px] h-[30px] border rounded-[100px] flex justify-center items-center cursor-pointer";

const PriceDetails = () => {
  const [colSel, setColSel] = useState("");

  const dispatch = useDispatch();

  const getSelection = useCallback(() => {
    dispatch(updateSizeToLS());
  }, []);

  useEffect(() => {
    getSelection();
  }, [getSelection]);

  const selectionHandler = (s) => {
    dispatch(updateSizeToLS(s));
  };

  const sizeSelection = useSelector((state) => state.product.selectedSize);

  return (
    <>
      <div className="ml-[18px] w-[339px] lg:ml-[45px] lg:w-[324px] mt-[30px] lg:mt-[95px]">
        <div className="w-[333px] lg:w-[288px]  text-[32px] leading-[30.72px] lg:text-[48px] lg:leading-[46.08px]">
          JONATHAN SIMKHAI
        </div>
        <div className="mt-2 text-sm">
          Lurex Linen Viscose Jacket in Conchiglia
        </div>
        <div className="mt-2 text-sm font-bold">$225</div>
        <div className="mt-6">
          <div className="w-[130px] h-[88px]">
            <div className="flex gap-1 text-sm">
              <span className="font-bold">COLOR</span> <span>CONCHIGLIA</span>
            </div>
            <div className="flex mt-2">
              <div
                className={
                  colSel === "LIGHT"
                    ? "w-[53px] h-[65px] border flex justify-center items-center border-black"
                    : "w-[53px] h-[65px] border flex justify-center items-center"
                }
                onClick={() => setColSel("LIGHT")}
              >
                <img
                  className={
                    colSel === "LIGHT"
                      ? "w-[52.85px] h-[63.42px]"
                      : "w-[41.85px] h-[47.82px]"
                  }
                  src={Light}
                  alt="light"
                />
              </div>
              <div
                className={
                  colSel === "DARK"
                    ? "w-[53px] h-[65px] border flex justify-center items-center ml-1 border-black"
                    : "w-[53px] h-[65px] border flex justify-center items-center ml-1"
                }
                onClick={() => setColSel("DARK")}
              >
                <img
                  className={
                    colSel === "DARK"
                      ? "w-[52.85px] h-[63.42px]"
                      : "w-[41.85px] h-[47.82px]"
                  }
                  src={Dark}
                  alt="dark"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm">
            <div className="font-bold">SIZE</div>
            <span className="mr-1 text-sm">SIZE GUIDE</span>
          </div>

          <div className="flex flex-wrap gap-[2.5px] text-sm mt-2">
            <div
              className={
                sizeSelection === SIZES[0]
                  ? SIZE_STYLE + " bg-black text-white"
                  : SIZE_STYLE
              }
              onClick={() => selectionHandler(SIZES[0])}
            >
              XS
            </div>
            <div
              className={
                sizeSelection === SIZES[1]
                  ? SIZE_STYLE + " bg-black text-white"
                  : SIZE_STYLE
              }
              onClick={() => selectionHandler(SIZES[1])}
            >
              {SIZES[1]}
            </div>
            <div className={SIZE_STYLE + " relative cursor-not-allowed"}>
              <img className="absolute" src={Angled} alt="crossed" />
              {SIZES[2]}
            </div>
            <div
              className={
                sizeSelection === SIZES[3]
                  ? SIZE_STYLE + " bg-black text-white"
                  : SIZE_STYLE
              }
              onClick={() => selectionHandler(SIZES[3])}
            >
              {SIZES[3]}
            </div>
            <div
              className={
                sizeSelection === SIZES[4]
                  ? SIZE_STYLE + " bg-black text-white"
                  : SIZE_STYLE
              }
              onClick={() => selectionHandler(SIZES[4])}
            >
              {SIZES[4]}
            </div>
          </div>
        </div>
        <div className="bg-black text-white flex h-12 rounded-[100px] justify-center items-center cursor-pointer text-sm mt-5">
          <div className="pr-2">ADD TO BAG </div>

          <img src={Arrow} alt="arrow" />
          {">"}
        </div>

        <div className="w-[324px] h-[71px] text-sm mt-6">
          <div>
            Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
          </div>
          <div className="mt-4">Speak to a Personal Stylist CHAT NOW</div>
        </div>
      </div>
      <div className=" absolute lg:hidden w-[297px] h-[1031.94px] -z-10 left-7 top-[316.06px] flex flex-col justify-between">
        <div>{""}</div>

        <div className="flex justify-between text-sm">
          <span className="underline">JONATHAN SIMKAI</span>
          <span className="underline">BLAZERS</span>
          <span className="underline">VISCOSE</span>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
