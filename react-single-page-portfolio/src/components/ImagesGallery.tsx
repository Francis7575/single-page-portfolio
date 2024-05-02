import GalleryNavigation from './GalleryNavigation'
import slideOne from '/assets/image-slide-1.jpg'
import slideTwo from '/assets/image-slide-2.jpg'
import slideThree from '/assets/image-slide-3.jpg'
import slideFour from '/assets/image-slide-4.jpg'
import slideFive from '/assets/image-slide-5.jpg'
import { useState } from 'react'

const ImagesGallery = () => {
    const images = [slideOne, slideTwo, slideThree, slideFour, slideFive];
    const [currentIndex, setCurrentIndex] = useState<number>(2);
    const gap = -15;

    const calculateTransform = () => {
        return `translateX(calc(${-100 * currentIndex}% + ${gap * currentIndex}px))`;
    };

    return (
        <section>
            <h2 className='text-center text-black text-[1.5rem] md:text-[2rem] font-bold'>
                My Work
            </h2>
            <div className='flex overflow-hidden gap-[.938rem] md:gap-[1.875rem] mt-8 lg:mt-[3.5rem]'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" className={`w-[270px] md:w-[540px] rounded-[.625rem] ml-[1.1rem]`}
                        style={{ transform: calculateTransform() }} />
                ))}
            </div>
            <GalleryNavigation images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </section>
    )
}

export default ImagesGallery