import { Outlet } from "react-router";
import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;