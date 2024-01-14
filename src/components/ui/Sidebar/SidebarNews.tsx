import Image from "next/image";
import BlankImage from "@/assets/blankImage.png"

const SidebarNews = () => {
    return (
        <div className="grid grid-cols-4 mb-5">
            <div>
                <Image src={BlankImage} alt="Blank image"/>
            </div>
            <div className="col-span-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius tenetur  
            </div>
        </div>
    );
};

export default SidebarNews;