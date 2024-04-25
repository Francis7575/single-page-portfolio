
const Consultation = () => {
    return (
        <section className="mt-[6.25rem] px-[1rem] md:mt-[7.5rem] md:px-[2.43rem]">
            <div className="bg-black text-light-cream flex flex-col items-center text-center gap-[1.5rem] 
                rounded-[.625rem] py-12 px-[1.5rem] md:gap-[1.625rem] md:px-[4.688rem]">
                <h2 className="text-[1.625rem] font-bold md:text-[2rem]">
                    Book a call with me
                </h2>
                <p className="font-medium leading-[1.625rem] md:text-[1.12rem] md:leading-[1.75rem] ">
                    I'd love to have a chat to see how I can help you.
                    The best first step is for us to discuss your project
                    during a free consultation. Then we can move forward from there.
                </p>
                <a href="#" className="bg-light-red py-[.5rem] min-w-[11rem] rounded-[1.75rem] leading-[1.75rem] 
                        font-bold text-[.875rem] md:text-[1rem] md:py-[.875rem] md:min-w-[14.25rem]">
                    Free Consultation
                </a>
            </div>
        </section>
    )
}

export default Consultation