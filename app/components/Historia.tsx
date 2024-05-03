export default function Header () {
    return( 
        <div className="mt-5 bg-white p-2 md:grid grid-cols-2 items-center text-left">
        <div className="mt-10 mx-5">
            <img src="/img/image2.jpg" alt="" />
        </div>
        <div className="mt-4">
          <h4 className="text-sm">A story about a journey</h4>
          <h5 className="font-bold text-2xl">Thailand trip in december</h5>
        <div className="mt-2 text-sm">
        <div className="grid grid-cols-2 mt-2">
            <h5>Jan-06-2023</h5> <h5>Adam Buleiver</h5>
        </div>
            <h5 className="mt-2 text-sm">Experience the magic of Thailand with GTravel in December! Our expertly curated trip will take you on an unforgettable journey through this vibrant and captivating country. Discover the stunning beaches of Thailand's southern islands, such as Phuket, Krabi, or Koh Samui, where you can bask in the warm tropical sun and indulge in water sports.</h5>
            <h5 className="mt-4 text-sm">GTravel, your trusted travel partner, ensures a seamless and well-planned itinerary,including accommodations, transportation,and expert guides. Book your Thailandadventure with GTravel today and createlasting memories in the Land of Smiles.</h5>
            <a href="https://terra.com.br">Read More</a>
        </div>
        </div>
        </div>
    )
}