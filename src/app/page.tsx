import LatestNews from "@/components/ui/LatestNews/LatestNews";


export default function Home() {
  return (
    <div className="grid grid-cols-3 mx-8 gap-8">

      <div className="col-span-2">
        <LatestNews></LatestNews>
      </div>
      <div>
        side bar
      </div>

    </div>
  )
}
