import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from "next/image";

const LatestNews = () => {
    return (
        <>
            <div className="card card-compact  bg-base-100 shadow-xl my-4">

                <Image src={topNews} layout="responsive" alt="Top News" />

                <div className="card-body">
                    <div className="badge bg-red-600 my-1 text-white">Technology</div>
                    <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                    </h2>
                    <p className="my-2">By Abir - Jan 14 2024</p>
                    <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="card card-compact  bg-base-100 shadow-xl my-4">

                    <Image src={topNews2} layout="responsive" alt="Top News" />

                    <div className="card-body">
                        <div className="badge bg-red-600 my-1 text-white">Technology</div>
                        <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                        </h2>
                        <p className="my-2">By Abir - Jan 14 2024</p>
                        <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl my-4">

                    <Image src={topNews2} layout="responsive" alt="Top News" />

                    <div className="card-body">
                        <div className="badge bg-red-600 my-1 text-white">Technology</div>
                        <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                        </h2>
                        <p className="my-2">By Abir - Jan 14 2024</p>
                        <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl my-4">

                    <Image src={topNews2} layout="responsive" alt="Top News" />

                    <div className="card-body">
                        <div className="badge bg-red-600 my-1 text-white">Technology</div>
                        <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                        </h2>
                        <p className="my-2">By Abir - Jan 14 2024</p>
                        <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl my-4">

                    <Image src={topNews2} layout="responsive" alt="Top News" />

                    <div className="card-body">
                        <div className="badge bg-red-600 my-1 text-white">Technology</div>
                        <h2 className="text-3xl font-semibold">Bitcoin climbs as wlon musk says tesla likely to accept it again!
                        </h2>
                        <p className="my-2">By Abir - Jan 14 2024</p>
                        <p> If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNews;