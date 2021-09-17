import ViewersDisney from "../../images/viewers-disney.png";
import ViewersMarvel from "../../images/viewers-marvel.png";
import ViewersNational from "../../images/viewers-national.png";
import ViewersPixar from "../../images/viewers-pixar.png";
import ViewersStarwars from "../../images/viewers-starwars.png";

export function Viewers() {
    const viewrs = [
        {
            id: 1,
            image: ViewersDisney
        },
        {
            id: 2,
            image: ViewersMarvel
        },
        {
            id: 2,
            image: ViewersNational
        },
        {
            id: 4,
            image: ViewersPixar
        },
        {
            id: 5,
            image: ViewersStarwars
        }
    ]

    return (
        <div className="flex justify-between mx-auto px-1 relative mt-5 pb-6 w-full lg:max-w-screen-lg gap-8">
            {viewrs.map(view => (
                <div 
                    key={view.id}
                    className="border-2 border-gray-700 rounded-lg shadow-lg transform duration-200 hover:scale-105 hover:border-gray-200"
                >
                    <img src={view.image} alt="Viewers" />
                </div>
            ))}
        </div>
    )
}
