import { useState } from "react";

import Front from "../assets/img/imageF.png";
import Side from "../assets/img/imageL.png";
import Rear from "../assets/img/imageBk.png";
import CloseUp from "../assets/img/FrameN.png";
import Full from "../assets/img/FrameFull.png";
import Selected from "../assets/svg/RectangleF.svg";
import NotSelected from "../assets/svg/RectangleS.svg";
import Heart from "../assets/svg/Heart/Unfilled.svg";

const IMGS = [Front, Side, Rear, CloseUp, Full];

function ImgViewver() {
  const [selImg, setSelImg] = useState(
    IMGS.map((img, i) => {
      return { image: img, selected: i === 0 ? true : false };
    })
  );

  const [sX, setSX] = useState(null);

  const touchStartHandler = (e) => {
    setSX(e.touches[0].clientX);
  };

  const tounchMoveHandler = (e) => {
    if (sX === null) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - sX;

    const len = selImg.length;
    const cpy = [...selImg];

    /*

    As we get the swipe direction we use the same img state to move to the next item.

    */

    if (diffX > 0) {
      for (let i = len - 1; i >= 0; i--) {
        if (cpy[i].selected === true) {
          if (cpy[i - 1]) {
            cpy[i].selected = false;
            cpy[i - 1].selected = true;
            break;
          } else {
            cpy[0].selected = false;
            cpy[len - 1].selected = true;
          }
        }
      }
    } else if (diffX < 0) {
      for (let i = 0; i < len; i++) {
        if (cpy[i].selected === true) {
          if (cpy[i + 1]) {
            cpy[i].selected = false;
            cpy[i + 1].selected = true;
            break;
          } else {
            cpy[i].selected = false;
            cpy[0].selected = true;
          }
        }
      }
    }
    setSelImg([...cpy]);
    setSX(null);
  };

  const imgSelectHandler = (selImgObj) => {
    setSelImg((p) =>
      p.map((obj) => {
        if (obj.image === selImgObj.image)
          return { image: obj.image, selected: true };
        else return { image: obj.image, selected: false };
      })
    );
  };

  return (
    <>
      {/* Large device view */}
      <div className="w-[540px] h-[2381px] mt-[14px] lg:ml-[54px] hidden lg:block">
        <img
          className="fixed w-5 h-[18px] left-[960px] top-[94px]"
          src={Heart}
          alt="heart"
        />
        <div className="h-[675px]">
          <img src={Front} alt="front" loading="lazy" />
        </div>
        <div className="h-[332px] flex justify-evenly mt-2">
          <div className="w-[266px]">
            <img src={Side} alt="side" />
          </div>
          <div className="w-[266px]">
            <img src={Rear} alt="rear" />
          </div>
        </div>
        <div className="h-[675px] mt-2 relative text-center">
          <img src={CloseUp} alt="close up" />
          <div className="absolute h-[1493.22px] w-[297px] top-[-10.22px] left-0 right-0 m-auto flex flex-col justify-between">
            <div className="text-sm font-bold">VIEW MORE LIKE THIS PRODUCT</div>

            <div className="flex justify-between text-sm">
              <span className="underline">JONATHAN SIMKAI</span>
              <span className="underline">BLAZERS</span>
              <span className="underline">VISCOSE</span>
            </div>
          </div>
        </div>
        <div className="h-[675px] mt-2">
          <img src={Full} alt="full" />
        </div>
      </div>

      {/* small device view */}

      <div className="lg:hidden">
        <div
          className="w-[375px]"
          onTouchStart={touchStartHandler}
          onTouchMove={tounchMoveHandler}
        >
          {selImg.map((imgObj) =>
            imgObj.selected ? (
              <img
                className="w-[375px] h-[468px]"
                key={1}
                src={imgObj.image}
                alt={imgObj.image}
              />
            ) : (
              ""
            )
          )}
          <div className="mt-3 flex gap-2 justify-center h-[2px]">
            {selImg.map((imgObj, i) =>
              imgObj.selected ? (
                <img key={i} src={Selected} alt="selected" />
              ) : (
                <img
                  key={i}
                  className="cursor-pointer"
                  src={NotSelected}
                  alt="not selected"
                  onClick={() => imgSelectHandler(imgObj)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgViewver;
