import graphicPattern from '/assets/pattern-graphic-design.svg'
import uiuxPattern from '/assets/pattern-ui-ux.svg'
import appsPattern from '/assets/pattern-apps.svg'
import illustrationPattern from '/assets/pattern-illustrations.svg'
import photographyPattern from '/assets/pattern-photography.svg'
import motiongraphicsPattern from '/assets/pattern-motion-graphics.svg'

type patterns = {
    pattern: string,
    label: string,
    className: string | string[]
}

const patterns = [
    { pattern: graphicPattern, label: 'Graphic Design', className: ['col-span-2', 'row-span-2'] },
    { pattern: uiuxPattern, label: 'UI/UX', className: 'uiux-container' },
    { pattern: appsPattern, label: 'Apps', className: 'apps-container' },
    { pattern: illustrationPattern, label: 'Illustration', className: 'col-span-2' },
    { pattern: photographyPattern, label: 'Photography', className: 'col-span-2' },
    { pattern: motiongraphicsPattern, label: 'Motion Graphics', className: 'col-span-2' }
];

const GridItems = () => {
    const bgColors = ['bg-galatic-blue', 'bg-summer-yellow', 'bg-pale-red', 'bg-light-red', 'bg-cyan',
        'bg-purplish-red']

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 auto-rows-[182px] gap-6'>
            {patterns.map(({ pattern, label, className }, index) => (
                <div key={index} className={`flex flex-col justify-between items-start p-6 rounded-[.5rem] ${bgColors[index]} 
                    ${Array.isArray(className) ? className.join(' ') : className}`}>
                    <img src={pattern} alt="" className='self-end'/>
                    <p className='text-white text-[1.5rem] font-bold'>
                        {label}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default GridItems