import react from 'react';
import img1 from '../assets/image/image-1.png'
import img2 from '../assets/image/image-1.png'
import img3 from '../assets/image/image-1.png'
import img4 from '../assets/image/image-1.png'
import img5 from '../assets/image/image-1.png'
import img6 from '../assets/image/image-1.png'
import img7 from '../assets/image/image-1.png'
import img8 from '../assets/image/image-1.png'
import img9 from '../assets/image/image-1.png'
import img10 from '../assets/image/image-1.png'
import img11 from '../assets/image/image-1.png'
import img12 from '../assets/image/image-1.png'
import img13 from '../assets/image/image-1.png'
import img14 from '../assets/image/image-1.png'
import img15 from '../assets/image/image-1.png'

 function client(){
    return (
        <>
            <div className='py-20' id='client'>
                <div className='p-10 mx-20 border-2 shadow-lg shadow-[#3b6893]'>
                    <div>
                        <h1 className='py-10 text-[#3b6893] text-5xl text-center font-bold'>Our Clients</h1>
                    </div>
                    <div className='flex p-8 text-center'>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div>
                            <img src={img4} alt="" />
                        </div>
                        <div>
                            <img src={img5} alt="" />
                        </div>

                    </div>
                    <div className='flex p-8 text-center'>
                        <div>
                            <img src={img6} alt="" />
                        </div>
                        <div>
                            <img src={img7} alt="" />
                        </div>
                        <div>
                            <img src={img8} alt="" />
                        </div>
                        <div>
                            <img src={img9} alt="" />
                        </div>
                        <div>
                            <img src={img10} alt="" />
                        </div>

                    </div>
                    <div className='flex p-8 text-center'>
                        <div>
                            <img src={img11} alt="" />
                        </div>
                        <div>
                            <img src={img12} alt="" />
                        </div>
                        <div>
                            <img src={img13} alt="" />
                        </div>
                        <div>
                            <img src={img14} alt="" />
                        </div>
                        <div>
                            <img src={img15} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
 }
 export default client;