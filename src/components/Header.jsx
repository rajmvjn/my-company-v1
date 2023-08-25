import Search from "../assets/svg/Search.svg";
import Bag from "../assets/svg/Bag.svg";
import Nav from "../assets/svg/Nav.svg";
import Account from "../assets/svg/Account.svg";
import { LINK_ITEMS } from "../constants";

const Header = () => {
  return (
    <div className="ml-[18px] lg:ml-0 mr-4 lg:mr-0 flex justify-between h-[60px] items-center">
      <div className="text-[20px] hover:underline underline-offset-4 cursor-pointer leading-5">
        MY COMPANY.COM
      </div>
      <div className="hidden lg:inline">
        <ul className="flex gap-4 text-[14px]">
          {LINK_ITEMS.map((item, i) => (
            <li
              className="cursor-pointer hover:scale-110 ease-in-out duration-300"
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex gap-3">
          <li className="cursor-pointer hover:scale-110 ease-in-out duration-300">
            <img src={Search} alt="search" />
          </li>
          <li className="cursor-pointer hover:scale-110 ease-in-out duration-300">
            <img src={Bag} alt="bag" />
          </li>
          <li className="lg:hidden cursor-pointer hover:scale-110 ease-in-out duration-300">
            <img src={Nav} alt="navigation" />
          </li>
          <li className="hidden lg:inline cursor-pointer hover:scale-110 ease-in-out duration-300">
            <img src={Account} alt="account" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
