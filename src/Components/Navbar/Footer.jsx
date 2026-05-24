
const Footer = () => {
    return (
        <div className="w-full h-60 bg-[#001931]">
            <div className="w-11/12 mx-auto flex justify-between items-center text-white">
                <div className="flex mt-8">
                    <img className="w-7 h-7" src="/src/assets/logo.png" alt="" />
                    <h2 className="text-xl font-semibold">HERO.IO</h2>
                </div>
                <div className="space-y-4 mt-15 mr-20">
                    <h2>Social Links</h2>
                    <div className="flex gap-4">
                        <img src="/src/assets/X.png" alt="" />
                        <img src="/src/assets/in.png" alt="" />
                        <img src="/src/assets/f.png" alt="" />
                    </div>
                </div>
            </div>
             <div className="w-11/12 mx-auto border-t border-gray-500"></div>
             <div className="text-white text-center mt-12">
                <h2>Copyright © 2025 - All right reserved</h2>
             </div>
        </div>
    );
};

export default Footer;