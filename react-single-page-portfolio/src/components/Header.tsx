import logo from '/assets/logo.svg'

const Header = () => {
    return (
        <header className='flex items-center justify-between px-4 pt-[1rem] mb-8 md:mb-[4.25rem] md:px-[2.5rem] 
                md:pt-[2rem] xl:px-[10.313rem] xl:pt-[2.12rem]'>
            <img src={logo} alt="Portfolio Logo" className='max-w-[3rem] md:max-w-[4rem]' />
            <div className='flex'>
                <a href='#' className='text-light-cream bg-black min-w-[11rem] py-[.5rem] rounded-[1.75rem] font-bold
                        text-[.875rem] leading-[1.75rem] text-center md:text-[1rem] md:py-[.875rem] md:min-w-[14.25rem]
                        hover:bg-galatic-blue'>
                    Free Consultation
                </a>
            </div>
        </header>
    )
}

export default Header