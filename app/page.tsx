import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-white text-black text-center max-w-[1024px] mx-auto md:flex justify-between lg:mt-8">
    <h1>🌲Travel</h1>

    <button
        className="bg-green-700 rounded-md border-lime-600 text-xs text-center p-2 mt-3">
        Any Query?
      </button>

      <div className="lg:flex justify-center text-lg mt-2">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h3>Lorem consectetur adipisicing</h3>

          <h1>#TravelPhotograp #istatravel</h1>
          <h1>#TravelPhotograp #istatravel</h1>
          <h1>#TravelPhotograp #istatravel</h1>

          <button
        className="bg-blue-700 rounded-md border-lime-600 text-xs text-center p-2 mt-3">
        Find
      </button>


        </div>

    </div>
  )
}
