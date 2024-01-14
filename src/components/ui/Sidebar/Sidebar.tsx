import sideImage from "@/assets/side-top-news.png"
import sidebarBottomImage from "@/assets/side-bottom-img.png"
import Image from "next/image";
import SidebarNews from "./SidebarNews";

const Sidebar = () => {
    return (
        <>
            <div className="card card-compact  bg-base-100 shadow-xl my-4 mb-12">

                <Image src={sideImage} layout="responsive" alt="Top News" />

                <div className="card-body">
                    <div className="badge bg-red-600 my-1 text-white">Technology</div>
                    <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                    </h2>
                    <p className="my-2">By Abir - Jan 14 2024</p>
                    <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

            <SidebarNews></SidebarNews>
            <SidebarNews></SidebarNews>
            <SidebarNews></SidebarNews>
            <SidebarNews></SidebarNews>

            <div>
                <Image src={sidebarBottomImage} alt="sidebar bottom image"/>
            </div>
        </>
    );
};

export default Sidebar;