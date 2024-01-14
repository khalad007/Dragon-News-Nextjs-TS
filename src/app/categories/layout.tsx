import CategoryList from "@/components/ui/CategoryList/CategoryList"

export default function CategoriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid grid-cols-4 mx-8 gap-8">

            <div>
                <CategoryList></CategoryList>
            </div>
            <div className="col-span-3">
                {children}
            </div>

        </div>
    )
}
