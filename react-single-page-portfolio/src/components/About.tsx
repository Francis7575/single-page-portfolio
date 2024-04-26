import Amyimage from '/assets/image-amy.webp'

const About = () => {
    return (
        <section className='flex flex-col md:flex-row md:justify-between items-center md:items-start px-[1rem] 
                md:px-0 mb-[6.25rem] md:gap-[4.23rem] lg:px-[2.43rem] lg:items-center lg:mb-[5.5rem]
                xl:px-[10.313rem]'>
            <img
                className='max-w-[18.75rem] md:-ml-[2.3rem] lg:-ml-0 lg:max-w-[22.81rem] xl:max-w-[27.813rem]'
                src={Amyimage}
                alt="User Image" />
            <div className='flex flex-col items-center md:items-start gap-[1.5rem] mt-[2.5rem] text-center 
                md:text-left md:max-w-[33.75rem] md:pr-[2.43rem] md:mt-0 lg:pr-0'>
                <h2 className='text-black text-[1.625rem] font-bold md:text-[2rem] xl:text-[2.5rem]'>
                    I'm Amy, and I'd love to work on your next project
                </h2>
                <p className='text-medium-brown font-medium leading-[1.625rem] md:text-[1.125rem]'>
                    I love working with others to create beautiful design solutions.
                    I've designed everything from brand illustrations to complete mobile apps.
                    I'm also handy with a camera!
                </p>
                <a href='#' className='bg-light-red text-light-cream py-[.5rem] min-w-[11rem] rounded-[1.75rem] font-bold
                        text-[.875rem] md:text-[1rem] leading-[1.75rem] md:py-[.875rem] md:min-w-[14.25rem] text-center
                        hover:bg-summer-yellow'>
                    Free Consultation
                </a>
            </div>
        </section>
    )
}

export default About