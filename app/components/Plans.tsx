export default function Plans () {
    return( 
        <div className="mx-3 mt-10">
            <div className="mt-3">
            <h4 className="text-sm">Pricing</h4>
          <h5 className="font-bold text-2xl">Check your tour plans</h5>
            </div>
            <div className="md:grid grid-cols-4 gap-4 mx-2 mt-3">
            <div className="mt-6">
                    <img src="/img/img1.png" alt="" />
                    <div className="mt-2 flex justify-between">
                    <h5>Team tour</h5> <h5>$455/Person</h5>
                    </div>
                    <h6 className="mt-2 font-bold">Confirm your group tour recent packages</h6>
                    <h6>📍Morocco</h6>
                </div>
                <div className="mt-6">
                    <img src="/img/img2.png" alt="" />
                    <div className="mt-2 flex justify-between">
                    <h5>Team tour</h5> <h5>$405/Person</h5>
                    </div>
                    <h6 className="mt-2 font-bold">Get secured tour plan with your spouse</h6>
                    <h6>📍Singapore</h6>
                </div>
                <div className="mt-6">
                    <img src="/img/img3.png" alt="" />
                    <div className="mt-2 flex justify-between">
                    <h5>Team tour</h5> <h5>$355/Person</h5>
                    </div>
                    <h6 className="mt-2 font-bold">Make your adventures comfortable</h6>
                    <h6>📍Switzerland</h6>
                </div>
                <div className="mt-6">
                    <img src="/img/img4.png" alt="" />
                    <div className="mt-2 flex justify-between">
                    <h5>Team tour</h5> <h5>$455/Person</h5>
                    </div>
                    <h6 className="mt-2 font-bold">Explore the paris streets at peace</h6>
                    <h6>📍Paris</h6>
                </div>
                </div>
        </div>
    )
}