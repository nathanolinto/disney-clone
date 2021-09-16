import Nav from "./Nav";
import Avatar from "./Avatar";

import Logo from "../../images/logo.svg";
import IconHome from "../../images/home-icon.svg";
import IconSearch from "../../images/search-icon.svg";
import IconWatchlist from "../../images/watchlist-icon.svg";
import IconOriginal from "../../images/original-icon.svg";
import IconMovie from "../../images/movie-icon.svg";
import IconSeries from "../../images/series-icon.svg";


export function Header() {
    const navItems = [
        {
            id: 1,
            title: "Home",
            image: IconHome
        },
        {
            id: 2,
            title: "Search",
            image: IconSearch
        },
        {
            id: 3,
            title: "Watchlist",
            image: IconWatchlist
        },
        {
            id: 4,
            title: "Originals",
            image: IconOriginal
        },
        {
            id: 5,
            title: "Movies",
            image: IconMovie
        },
        {
            id: 6,
            title: "Series",
            image: IconSeries
        }
    ]

    const user = {
        image: "https://avatars.githubusercontent.com/u/12894407?v=4",
        name: "Nathan Olinto"
    }

    return (
        <div className="flex bg-gray-900 h-16 w-full">
            <div className="flex justify-between items-center container mx-auto px-1 lg:max-w-screen-lg">
                <div className="flex">
                    <img className="h-10" src={Logo} alt="Disney" />
                </div>
                <Nav items={navItems}  />
                <Avatar user={user} />
            </div>
        </div>
    )
}
