import Nav from "./Nav";
import Avatar from "./Avatar";
import MobileNav from "./MobileNav";

import Logo from "../../images/logo.svg";
import IconHome from "../../images/home-icon.svg";
import IconSearch from "../../images/search-icon.svg";
import IconWatchlist from "../../images/watchlist-icon.svg";
import IconOriginal from "../../images/original-icon.svg";
import IconMovie from "../../images/movie-icon.svg";
import IconSeries from "../../images/series-icon.svg";
import { useState } from "react";


export function Header() {
    const navItems = [
        {
            id: 1,
            title: "Home",
            image: IconHome,
            page: ""
        },
        {
            id: 2,
            title: "Search",
            image: IconSearch,
            page: ""
        },
        {
            id: 3,
            title: "Watchlist",
            image: IconWatchlist,
            page: ""
        },
        {
            id: 4,
            title: "Originals",
            image: IconOriginal,
            page: ""
        },
        {
            id: 5,
            title: "Movies",
            image: IconMovie,
            page: ""
        },
        {
            id: 6,
            title: "Series",
            image: IconSeries,
            page: ""
        }
    ]

    const user = {
        image: "https://avatars.githubusercontent.com/u/12894407?v=4",
        name: "Nathan Olinto"
    }
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="flex h-16 w-full" style={{ backgroundColor: "#090b13" }}>
                <div className="flex justify-between items-center container mx-auto px-1 lg:max-w-screen-lg">
                    <div className="flex items-center gap-6">
                        <img className="h-10" src={Logo} alt="Disney" />
                        <div className="hidden sm:flex">
                            <Nav items={navItems} />
                        </div>
                    </div>

                    <div className="flex">
                        <Avatar user={user} />
                    </div>

                    <div className="flex sm:hidden ">
                        <button
                            className="flex items-center px-3 py-1"
                            onClick={() => handleShowMenu()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={(showMenu ? "scale-y-1 opacity-1 " : "scale-y-0 opacity-0") + " transform transition duration-500 ease-in-out origin-top sm:hidden"}>
                <MobileNav items={navItems} />
            </div>
        </>
    )
}
