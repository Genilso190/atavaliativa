export default function Header () {
    return( 
        <div className="gap-5 mx-3 mt-20 bg-sky-50 md:grid grid-cols-3">
            <div>
                <div className="font-bold">
                    <p>About Us</p>
                </div>
                <div>
                    <p>GTravel is your trusted travel agent specializing in booking packages around the world. We provide exceptional service to cater to your travel needs and preferences.</p>
                    <p className="mt-5">Book your next adventure with us and embark on a transformative journey that will create cherished memories for a lifetime.</p>
                </div>
            </div>    
            <div className="mt-4"> 
                <div className="font-bold">
                    <p>Travel Info</p>
                </div>
                <div>
                    <p>Menu</p>
                    <p>Travel Guides</p>
                    <p>Plans</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="mt-4"> 
                <div className="font-bold">
                    <p>Information</p>
                </div>
                <div>
                    <p>Gift Cards</p>
                    <p>Find a Package</p>
                    <p>Discounts</p>
                </div>
            </div>

        </div>
    )
}