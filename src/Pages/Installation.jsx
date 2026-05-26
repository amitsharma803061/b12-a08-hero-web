import { Download, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Installation = () => {

    const [install, setInstall] = useState([])
    const [savedItem, setSavedItem] = useState("none")
    // const [savedItem, setSavedItem] = useState("none")


    useEffect(() => {
        const savedInstalling = JSON.parse(localStorage.getItem("installation"))

        if (savedInstalling) {
            setInstall(savedInstalling);
        }
    }, [])

    // 2 time high theke low and low theke high 
    const installData = (
        () => {
            if (savedItem === 'size-asc') {
                return [...install].sort((a, b) => a.size - b.size)
            }
            else if (savedItem === 'size-desc') {
                return [...install].sort((a, b) => b.size - a.size)
            }
            else {
                return install;
            }
    });
  

    // M and K bananor style
    const changeData = (num) => {
        if (!num) return 0;
        if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
        if (num >= 1000) return (num / 1000).toFixed(0) + "K";
        return num;
    }

    //  const handleRemove = (id) => {
    //     // removeFromWishlist(id)
    //     const existingList = JSON.parse(localStorage.getItem("wishlist"))
    //     let updatedList = existingList.filter((p) => (p.id !== id))
    //     // for ui Instant update
    //     setWishlist(updatedList)
    //     // setWishlist(prev => prev.filter(p => p.id !== id))
    //     localStorage.setItem("wishlist", JSON.stringify(updatedList))
    // }

    // uninstall data
    const handleUninstall = (id) => {
        const removedData = JSON.parse(localStorage.getItem("installation"))
        let removedList = removedData.filter((a)=> (a.id !== id))

        setInstall(removedList)
        localStorage.setItem("installation", JSON.stringify(removedList))
    }


    return (
        <div className="bg-gray-100 text-center p-4">
            <div className="space-y-3">
                <h2 className="text-5xl font-bold pt-10">Your Installed Apps</h2>
                <p className="text-xl text-gray-400">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="w-11/12 mx-auto flex justify-between items-center mt-6 p-4">
                <h1 className="text-xl">
                    {''} <span>({install.length})Apps Found</span>
                </h1>
                <label className="form-control w-full max-w-xs">
                    {/* value={e} onChange={e} */}
                    <select className="select select-bordered" value={savedItem} onChange={a => setSavedItem(a.target.value)} >
                        <option value="none">Sort by price</option>
                        <option value="size-asc">Low-&gt;High</option>
                        <option value="size-desc">High-&gt;Low</option>
                    </select>
                </label>
            </div>

            <div className="w-11/12 mx-auto space-y-5">
                {
                    installData().map((a) => (
                        <div key={a.id} className="w-full h-40 bg-base-100 shadow rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-5">
                                    <figure className="p-4">
                                        <img src={a.image} className="w-40 h-32 rounded-xl" alt="image" />
                                    </figure>
                                    <div className="space-y-4">
                                        <h2 className="mt-8 text-3xl font-bold">{a.title}</h2>
                                        <div className="flex text-xl text-gray-500 gap-7">
                                            <h3 className="flex items-center gap-1 text-[#00D390]"><Download />{changeData(a.downloads)}</h3>
                                            <h3 className="flex items-center gap-1 text-[#FF8811]"><Star />{a.ratingAvg}</h3>
                                            <h3>{a.size}MB</h3>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=> handleUninstall(a.id)} className="btn text-white bg-[#00D390] mr-7">Uninstall</button>
                            </div>
                        </div>))
                }
            </div>

            

        </div>
    );
};

export default Installation;