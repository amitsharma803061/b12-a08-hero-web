import { useState } from "react";
import useLoader from "../Hooks/UseLoadData";
import AppsCard from "./AppsCard";

const Apps = () => {

    const { apps } = useLoader();

    //   Search button a kicu khuje pawyar jonne
    // const [search, setSearch] = useState('')

    // const term = search.trim().toLocaleLowerCase()

    // const searchedProducts = term?products.filter((product) => product.name.toLocaleLowerCase().includes(term)) : products
    // console.log(searchedProducts)


    // Search button a apps ke khuje pete search option
    const [search, setSearch] = useState('')

    const button = search.trim().toLocaleLowerCase()

    const searchedApps = button ? apps.filter((app) => app.title.toLocaleLowerCase().includes(button)) : apps
    console.log(searchedApps)


    return (
       
            <div className="bg-gray-100 text-center ">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold pt-5">Our All Applications</h2>
                    <p className="text-xl text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="flex justify-between items-center pt-6 ml-8">
                    <h2 className="text-2xl font-semibold">{' '}
                        <span>({searchedApps.length}) All Apps</span>
                    </h2>
                    <label className="input mb-5 mr-8">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="Search"
                            placeholder="Apps Searching" />
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {
                        searchedApps.map((app) => (<AppsCard key={app.id} app={app}></AppsCard>))
                    }
                </div>

            </div>

    );
};

export default Apps;