import LeftPanel from "../components/LeftPanel";
import ImgViewver from "../components/ImgViewver";
import PriceDetails from "../components/PriceDetails";

const ProductDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <LeftPanel />
      <ImgViewver />
      <PriceDetails />
    </div>
  );
};

export default ProductDetails;
