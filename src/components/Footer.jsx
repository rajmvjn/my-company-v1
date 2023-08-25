import Line from "../assets/svg/D/Line 156.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center text-center gap-4 mt-[350px] lg:mt-[256px]">
      <div className="w-[339px] lg:w-[534px] text-sm font-bold">
        A NOTE FROM THE EDITOR
      </div>
      <div className="w-[339px] lg:w-[864px] text-xl lg:text-[32px] leading-5 lg:leading-[44.8px]">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </div>
      <div className="w-[339px] h-[17px] text-sm flex items-center justify-center gap-2">
        <div>
          <img src={Line} alt="line" className="w-10 lg:w-7" />
        </div>
        <div>By</div>
        <div className="underline">MINNA SHIM</div>
        <div>Fashion Editor</div>
      </div>
    </div>
  );
};

export default Footer;
