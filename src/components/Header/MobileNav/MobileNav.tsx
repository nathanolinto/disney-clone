interface Item {
    id: number;
    title: string;
    image: string;
}

interface NavProps {
    items: Item[];
}

export function MobileNav({items}: NavProps,) {
    return (
        <div className="flex flex-col" style={{backgroundColor: "#070808"}}>
            {items.map(item => (
                <a key={item.id} href="/" className="flex items-center justify-center h-12 px-1 group">
                    <img className="h-5" src={item.image} alt={item.title} />
                    <span className="text-sm tracking-wide relative uppercase text-white">
                        {item.title}
                        <div className=" transition duration-500 ease-in-out absolute bg-white h-0.5 -bottom-1 right-0 left-0 transform scale-x-0 opacity-0 origin-left group-hover:scale-x-100 group-hover:opacity-100 "></div>
                    </span>
                </a>
            ))}
        </div>
    )
}
