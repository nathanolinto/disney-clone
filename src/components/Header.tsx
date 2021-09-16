
import Logo from "../images/logo.svg";
import IconHome from "../images/home-icon.svg";


export function Header() {
    const navItens = [
        {
            id: 1,
            title: "Home",
            image: IconHome
        },
        {
            id: 2,
            title: "Search",
            image: IconHome
        },
        {
            id: 3,
            title: "Watchlist",
            image: IconHome
        },
        {
            id: 4,
            title: "Originals",
            image: IconHome
        },
        {
            id: 5,
            title: "Movies",
            image: IconHome
        },
        {
            id: 6,
            title: "Series",
            image: IconHome
        }
    ]

    return (
        <div className="flex bg-gray-900 h-16 w-full">
            <div className="flex justify-between items-center container mx-auto px-1 lg:max-w-screen-lg">
            <div className="flex">
                <img className="h-10" src={Logo} alt="Disney" />
            </div>
            <div className="flex hidden sm:flex">
                {navItens.map(item => (
                    <a key={item.id} href="/" className="flex items-center h-16 px-1 group">
                        <img className="h-5" src={item.image} alt={item.title} />
                        <span className="text-sm tracking-wide relative uppercase text-white">
                            {item.title}
                            <div className=" transition duration-500 ease-in-out absolute bg-white h-0.5 -bottom-1 right-0 left-0 transform scale-x-0 opacity-0 origin-left group-hover:scale-x-100 group-hover:opacity-100 "></div>
                        </span>
                    </a>
                ))}
            </div>
            <div className="flex h-14">
                <img className="rounded-full" src="https://avatars.githubusercontent.com/u/12894407?v=4" alt="Avatar" />
            </div>
            </div>
        </div>
    )
}
