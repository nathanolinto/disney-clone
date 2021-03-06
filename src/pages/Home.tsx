import Header  from "../components/Header";
import Banner  from "../components/Banner";

import HomeBg from "../images/home-background.png";

export function Home() {
    return (
            <div 
                className="flex flex-col bg-home min-h-screen min-h-screen bg-no-repeat 
                bg-center bg-cover"
                style={{backgroundImage: `url(${HomeBg})`, backgroundColor: "#040714"}}
            >
                <Header />
                <Banner />
            </div>
        
    )
}
