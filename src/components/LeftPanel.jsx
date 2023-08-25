function LeftPanel() {
  return (
    <div className="w-[325px] h-[259.86px] hidden lg:block mt-[6.86px] sticky">
      <div>
        <ul className="flex gap-[25px]">
          <li className="w-[57px] h-[17px] text-sm font-bold">DETAILS</li>
          <li className="w-[69px] h-[17px] text-sm">DELIVERY</li>
          <li className="w-[21px] h-[17px] text-sm">FIT</li>
          <li className="w-[49px] h-[17px] text-sm">SHARE</li>
        </ul>
      </div>
      <div className="text-sm mt-[5.86px] h-[237px] flex flex-col justify-between">
        <div className="leading-[19.6px]">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the{" "}
          <s>sky. it has</s> a straight fit with well defined shoulders and a
          shawl collar culminating in a button and has been flawlessly finished
          with three jet pockets with a sartorial feel.
        </div>
        <div>
          See the{" "}
          <span className="underline underline-offset-1">EDITOR’S NOTE</span>
        </div>
        <div>
          Learn about the{" "}
          <span className="underline underline-offset-1">DESIGNER</span>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
