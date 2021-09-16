import { Component, ReactNode } from "react";

interface Item {
    id: number;
    title: string;
    image: string;
}

interface NavProps {
    items: Item[];
}

export function Nav({items}: NavProps) {
    return (
        <div className="flex hidden sm:flex">
            {items.map(item => (
                <a key={item.id} href="/" className="flex items-center h-16 px-1 group">
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
