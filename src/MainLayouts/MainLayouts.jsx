import { Outlet } from "react-router";
import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full bg-gray-100 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;