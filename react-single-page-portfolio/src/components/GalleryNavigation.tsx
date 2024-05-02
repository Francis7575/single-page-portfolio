import leftArrow from '/assets/icon-arrow-left.svg'
import rightArrow from '/assets/icon-arrow-right.svg'
import { useEffect } from 'react'

type GalleryNavigationProps = {
    images: string[],
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const GalleryNavigation = ({ images, currentIndex, setCurrentIndex }: GalleryNavigationProps) => {

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const previousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    useEffect(() => {
        console.log("Current Index:", currentIndex);
    }, [currentIndex]);

    return (
        <div className='flex justify-center gap-4 mt-[1.81rem] md:mt-[3.5rem]'>
            <button
                className='bg-black py-[1.37rem] min-w-[4rem] flex justify-center rounded-[4rem] hover:bg-galatic-blue'
                onClick={previousImage}
                aria-label="Previous Image"
                title="Previous Image">
                <img src={leftArrow} alt="Previous Image" />
            </button>
            <button
                className='bg-black py-[1.37rem] min-w-[4rem] flex justify-center rounded-[4rem] hover:bg-galatic-blue'
                onClick={nextImage}
                aria-label="Next Image"
                title="Next Image">
                <img src={rightArrow} alt="Next Image" />
            </button>
        </div>
    )
}

export default GalleryNavigation