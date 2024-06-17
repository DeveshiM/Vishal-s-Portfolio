
import react from 'React'
import sample1 from '../assets/image/sample1.png'
import sample2 from '../assets/image/sample2.png'
import sample3 from '../assets/image/sample3.png'
function Design(){
    return(
        <>
            <div className='m-10'>
                <div className='text-center text-5xl font-bold text-[#3b6893]  py-10'>UI/UX Projects</div>
                <div className='flex space-x-5 py-5'>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893] rounded-lg'>
                    <a href='https://1788doublebay.com.au/team/' >
                        <img src={sample1} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>DOUBLE BAY RESIDENCY</h1>
                        <p className='text-base pb-4'>These Residences are the benchmark of architecture and luxury interior design. No expense has been spared in creating the finest luxury living in the village.</p>
                    </a>
                    </div>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893] rounded-lg'>
                    <a href='https://kingandphillip.com.au/' >
                        <img src={sample2} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>KING & PHILLIPS RESIDENCY</h1>
                        <p className='text-base pb-4'>KING & PHILLIP HONOURS THE TRADITION OF ITS TIMELESS ARCHITECTURAL SURROUNDINGS THROUGH A DISTINCTIVE DESIGN THAT IS INSPIRED BY THE GOLDEN RATIO AND ENHANCED THROUGH PROGRESSIVE ARCHITECTURAL DETAILS.</p>
                    </a>
                    </div>
                </div>
                <div className='flex space-x-5 py-5'>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893]  rounded-lg'>
                    <a href='https://ozonecronulla.com.au/' >
                        <img src={sample3} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>Coastal Living Redefined</h1>
                        <p className='text-base pb-4'>This inspired coastal building and its showpiece architectural residences redefine standards for luxury living.From the moment you arrive, the quality and generosity of these residences is striking. They are amongst the most beautiful ever created in Cronulla, uniting architecture, design and inclusions in the most uplifting of ways.</p>
                    </a>
                    </div>
                    {/* <div className='w-1/2 border-2 text-center rounded-lg  shadow-lg shadow-[#3b6893]'>
                    <a href='https://kingandphillip.com.au/' >
                        <img src={sample2} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>KING & PHILLIPS RESIDENCY</h1>
                        <p className='text-xl pb-4'>KING & PHILLIP HONOURS THE TRADITION OF ITS TIMELESS ARCHITECTURAL SURROUNDINGS THROUGH A DISTINCTIVE DESIGN THAT IS INSPIRED BY THE GOLDEN RATIO AND ENHANCED THROUGH PROGRESSIVE ARCHITECTURAL DETAILS.</p>
                    </a>
                    </div> */}
                </div>
            </div> 
        </>
    )
}
export default Design;