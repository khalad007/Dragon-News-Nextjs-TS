import { getCategoryNews } from "@/utils/getCategoryNews";
import Image from "next/image";
import Link from "next/link";


const DynamicNewsPage = async ({ params, searchParams }) => {
    console.log(searchParams)
    const { data } = await getCategoryNews(searchParams.category)
    console.log(data)
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-5"><span className="text-red-700">{searchParams.category}</span> Category News</h1>

            <div className="grid grid-cols-2 gap-5">
                {
                    data.map((news) => (

                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <div key={news.id} className="card card-compact  bg-base-100 shadow-xl my-4">

                                <Image className="w-full h-[250px]" src={news.thumbnail_url} width={200} height={200} alt={news.category} />

                                <div className="card-body">
                                    <div className="badge bg-red-600 my-1 text-white">{news.category}</div>
                                    <h2 className="text-3xl font-semibold">{news.title}
                                    </h2>
                                    <p className="my-2">By {news.author.name} - {news.author.published_date}</p>
                                    <p> {news.details.length > 200 ? news.details.slice(0, 200) + "......" : news.details}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default DynamicNewsPage;