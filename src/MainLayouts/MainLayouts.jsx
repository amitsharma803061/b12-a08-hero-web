import { Outlet } from "react-router";
import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            // akhane toast
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainLayouts;