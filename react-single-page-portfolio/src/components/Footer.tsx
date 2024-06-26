import logo from '/assets/logo.svg'

const Footer = () => {
    return (
        <footer className='flex items-center justify-between mt-[2.5rem] md:mt-[3.75rem] px-[1rem] pb-8 
                md:pb-[3.75rem] md:px-[2.43rem] lg:mt-[3.5rem] xl:px-[10.313rem] xl:mt-[3.75rem]'>
            <img src={logo} alt="Portfolio Logo" className='max-w-[3rem] md:max-w-[4rem]' />
            <div className='flex'>
                <a href='#' className='text-light-cream bg-black min-w-[11rem] py-[.5rem] rounded-[1.75rem] font-bold
                    text-[.875rem] leading-[1.75rem] text-center md:text-[1rem] md:py-[.875rem] md:min-w-[14.25rem]
                    hover:bg-galatic-blue'>
                    Free Consultation
                </a>
            </div>
        </footer>
    )
}

export default Footer