import { getSingleNews } from "@/utils/getSingleNews";
import Image from "next/image";


const NewsDetailPage = async ({ params }) => {

    const { data: news } = await getSingleNews(params.newsId)
    console.log(news)
    return (

        <div className="grid grid-cols-4 mb-5 gap-4 my-5">
            <div className="col-span-2">
                <Image src={news.thumbnail_url} width={800} height={500} alt="thumbnail image"></Image>
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div>
                        <Image src={news.image_url} width={800} height={500} alt="thumbnail image"></Image>

                    </div>
                    <div>
                        <Image src={news.image_url} width={800} height={500} alt="thumbnail image"></Image>

                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <h1 className="text-2xl font-semibold">{news.title}</h1>
                <div className="flex items-center my-5">
                    <Image src={news.author.img} alt="author img" className="w-16 h-16 rounded mr-2" width={300} height={300}></Image>
                    <h1 className="font-semibold">By {news.author.name}</h1>
                    <h1 className="font-semibold">- Publish {news.author.published_date}</h1>
                </div>

                <h1 style={{ textAlign: "justify", whiteSpace: "pre-line", margin: "10px 0px"}}> {news.details}</h1>
            </div>
        </div>

    );
};

export default NewsDetailPage;