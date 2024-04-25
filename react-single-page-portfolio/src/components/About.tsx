import Amyimage from '/assets/image-amy.webp'

const User = () => {
    return (
        <section className='flex flex-col md:flex-row md:justify-between items-center md:items-start px-[1rem] 
                md:px-0 mb-[6.25rem] gap-[4.23rem]'>
            <img src={Amyimage} alt="User Image" className='max-w-[18.75rem] md:-ml-[2.3rem] md:min'/>
            <div className='flex flex-col items-center md:items-start gap-[1.5rem] mt-[2.5rem] text-center 
                md:text-left md:max-w-[33.75rem] md:pr-[2.43rem] md:mt-0'>
                <h2 className='text-black text-[1.625rem] font-bold md:text-[2rem]'>
                    I'm Amy, and I'd love to work on your next project
                </h2>
                <p className='text-medium-brown font-medium leading-[1.625rem] md:text-[1.125rem]'>
                    I love working with others to create beautiful design solutions.
                    I've designed everything from brand illustrations to complete mobile apps.
                    I'm also handy with a camera!
                </p>
                <a href='#' className='bg-light-red text-light-cream py-[.5rem] min-w-[11rem] rounded-[1.75rem] font-bold
                        text-[.875rem] md:text-[1rem] leading-[1.75rem] md:py-[.875rem] md:min-w-[14.25rem] text-center'>
                    Free Consultation
                </a>
            </div>
        </section>
    )
}

export default User