import { AppWindow, Download, House } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    // // ১. রিটার্নের উপরে const দিয়ে আপনার আগের 'flex' সহ সব ক্লাস একসাথে রাখা হয়েছে
    // const getNavLinkClass = ({ isActive }) => {
    //     // এখানে 'flex' যোগ করা আছে, সাথে আইকন ও লেখার মাঝের গ্যাপের জন্য 'gap-2' দেওয়া হয়েছে
    //     const baseClass = "flex items-center gap-2 px-3 py-2 rounded-lg";

    //     const activeClass = "text-emerald-500 font-bold"; // একটিভ বাটনটির কালার (আপনার পছন্দমতো চেঞ্জ করতে পারেন)
    //     const inactiveClass = "text-gray-600"; // বাকি বাটনগুলোর কালার

    //     return `${baseClass} ${isActive ? activeClass : inactiveClass}`;

    // color change hoya 
    const changeColor = ({isActive}) => {
        const baseClass = "flex items-center gap-1";
        const activeClass = "bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] bg-clip-text text-transparent";
        const inactiveClass = "text-black";

        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    }


       // click the button and go to my github page
    const githubUrl = `https://github.com/amitsharma803061`;

    const handleClickGithub = () => {
        window.open(githubUrl, "_bank", "noopener,noreferrer")
    }



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/apps">Apps</NavLink>
                        <NavLink to="/installation">Installation</NavLink>
                    </ul>
                </div>
                <Link to="/" className="flex items-center text-2xl font-bold ml-5 gap-2">
                    <img className="w-10 h-10" src="/src/assets/logo.png" alt="" />
                    <span className="bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] bg-clip-text text-transparent">HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-8">
                    <NavLink to="/" className={changeColor}><House />Home</NavLink>
                    <NavLink to="/apps" className={changeColor}><AppWindow />Apps</NavLink>
                    <NavLink to="/installation" className={changeColor}><Download />Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <Link onClick={handleClickGithub} className="btn text-sm text-white bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)]">
                    <img src="/src/assets/Vector.png" alt="" />
                    <span>Contribute</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;