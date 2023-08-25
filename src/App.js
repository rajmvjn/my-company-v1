import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="lg:ml-[71px] lg:mr-6 w-[375px] lg:w-[1440px] h-[1900px] lg:h-[3041px]">
        <Header />
        <ProductDetails />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
