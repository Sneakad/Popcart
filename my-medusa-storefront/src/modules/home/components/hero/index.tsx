import UnderlineLink from "@modules/common/components/underline-link"
// import Image from "next/image"
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
// ];

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      {/* <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div> */}
      {/* <Image
        src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      /> */}
      <div>
        <Carousel autoPlay interval={2500} infiniteLoop showThumbs={false} swipeable>
                <div>
                    <img src="https://user-images.githubusercontent.com/72182438/195152867-721ca98b-bc8e-474f-8085-c6593382bc30.png" />
                </div>
                <div>
                    <img src="https://user-images.githubusercontent.com/72182438/195152892-33d91384-a7fb-4c8a-bf17-aafc9017a49a.png" />
                    
                </div>
                <div>
                    <img src="https://user-images.githubusercontent.com/72182438/195152903-425d6a91-e7c7-4b51-82a4-377df8edaa82.png" />
                    
                </div>
            </Carousel>
      </div>
      {/* <AliceCarousel mouseTracking items={items} /> */}
    </div>
  )
}

export default Hero
