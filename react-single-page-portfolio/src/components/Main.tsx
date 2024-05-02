import GridItems from "./GridItems"
import About from './About'
import ImagesGallery from "./ImagesGallery"
import Consultation from "./Consultation"

const Main = () => {
    return (
        <main>
            <section className="px-4 md:px-[2.43rem] mb-[6.25rem] lg:mb-[8.5rem] xl:px-[10.313rem]">
                <div className="mb-8 md:mb-[4rem] lg:mb-[5rem] flex flex-col items-center text-center">
                    <h1 className="text-[2.25rem] md:text-[2.75rem] font-bold text-black mb-4 md:mb-[1.68rem] 
                        lg:text-[3.5rem] lg:leading-[3.4rem] lg:mb-[1.43rem]">
                        Design solutions made easy
                    </h1>
                    <p className="leading-[1.563rem] lg:laeding-[1.75rem] font-medium text-medium-brown px-[2.8rem] 
                        max-w-[36.7rem] lg:max-w-[48.62rem] mx-auto text-center md:text-[1.125rem]">
                        With over ten years of experience in various design disciplines,
                        I'm your one-stop shop for your design needs.
                    </p>
                </div>
                <GridItems />
            </section>
            <About />
            <ImagesGallery />
            <Consultation />
        </main>
    )
}

export default Main