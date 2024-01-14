import { getAllCategories } from "@/utils/getAllCategories";
import Link from "next/link";

interface Category {
    id: number;
    title: string;
}

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories();

    console.log(allCategories)
    return (
        <div>
            <h1>Categories </h1>

            <div className="my-6">
                {
                    allCategories.map((category: Category) => (
                        <Link href={category.title}>
                            <button key={category.id} className="btn btn-outline btn-wide my-3">
                                {category.title}
                            </button>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryList;