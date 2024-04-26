
const Consultation = () => {
    return (
        <section className="mt-[6.25rem] px-[1rem] md:mt-[7.5rem] md:px-[2.43rem] lg:mt-[5.5rem] xl:px-[10.313rem]">
            <div className="bg-black text-light-cream px-[1.5rem] md:px-[4.688rem] py-12 rounded-[.625rem] 
                lg:flex lg:items-center lg:justify-between lg:py-[5rem] xl:pl-[4.063rem] xl:pr-[5.938rem]">
                <div className="flex flex-col items-center text-center gap-[1.5rem] md:gap-[1.625rem] lg:text-left
                    lg:items-start max-w-[33.75rem] lg:gap-[1.56rem]">
                    <h2 className="text-[1.625rem] font-bold md:text-[2rem] lg:text-[2.5rem] lg:leading-[1.95rem]">
                        Book a call with me
                    </h2>
                    <p className="font-medium leading-[1.625rem] md:text-[1.12rem] md:leading-[1.75rem] ">
                        I'd love to have a chat to see how I can help you.
                        The best first step is for us to discuss your project
                        during a free consultation. Then we can move forward from there.
                    </p>
                </div>

                <div className="flex justify-center text-center mt-[1.5rem] md:mt-[1.625rem]">
                    <a href="#" className="bg-light-red py-[.5rem] min-w-[11rem] rounded-[1.75rem] leading-[1.75rem] 
                        font-bold text-[.875rem] md:text-[1rem] md:py-[.875rem] md:min-w-[14.25rem] hover:bg-summer-yellow">
                        Free Consultation
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Consultation