export default function Header () {
    return( 
        <div className="mx-3 md:grid grid-cols-2 items-center text-left">
        <div className="mt-10 mx-5">
            <img src="/img/kombi.png" alt="" />
        </div>
        <div className="mt-4">
          <h4 className="text-sm">Choose your plan</h4>
          <h5 className="font-bold text-2xl">Make your best tour plan with us</h5>
        <div className="mt-2 text-sm">
            <h5>Select or Search your best plans</h5>
            <h5>#TravelPhotography #InstaTravel</h5>
            <h5>#TravelCouples #TravelGoals #SoloTravel</h5>
            <h5>#TravelInspiration #PassportReady</h5>
            <button className="mt-2 bg-black rounded-lg text-white px-3">Find</button>
        </div>
        </div>
        </div>
      
    )
}