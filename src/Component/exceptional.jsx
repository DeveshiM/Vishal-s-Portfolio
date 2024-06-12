
import react from 'react'
import erp from '../assets/image/erp.jpg';
import compliance from '../assets/image/compliance.jpeg';
import inventory from '../assets/image/inventory.jpg';
import customer from '../assets/image/customer.jpg';
import steamline from '../assets/image/steamline.jpg';
import delivery from '../assets/image/delivery.jpeg'
 function Exceptional (){
    return (
        <>
            <div className="p-5 bg-[#ffffff00]">
                <div className="mt-8 mb-8 "> 
                    <h1 className="text-5xl font-bold text-center text-[#3b6893]">Exceptional Portfolio</h1>
                    <p className="font-sm text-[#3b6893] text-center mt-5">Streamlined and user-friendly and our interface ensures a seamless experience</p>
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-8'>
                    <div className='w-1/2 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={steamline} alt="" className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'>Streamlines Vehicle and Compliance Management</h1>

                        <p className='text-justify text-[#3b6893] mt-3'>Vishal Rustagi utilized Microsoft Power Platform to create a comprehensive digital solution for efficient vehicle management. The system enables real-time vehicle tracking, facilitating continuous monitoring of their condition and potential fines. Additionally, Vishal designed an accompanying app ensuring car policy compliance through digital signatures for both existing and new car documents. The platform further enhances operations by automating driver assignment for stock delivery, with drivers utilizing built-in reporting features to update vehicle status and usage.</p>
                    </div>
                    <div className='w-1/2 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={erp} alt=""
                        className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'>Streamlines Manufacturing Process with a Low-Code ERP System</h1>
                        {/* <h2 className='text-xl text-[#3b6893] font-semibold text-center mt-4 mb-3'>ERP System Implementation</h2> */}
                        <p className='text-justify text-[#3b6893] mt-3'> Leveraging the power of low-code and no-code tools like Power Apps and Power Automate, Vishal Rustagi developed a comprehensive ERP system to streamline manufacturing operations. This centralized system integrates all aspects of production, from procurement to delivery, for real-time visibility and efficient management. The system automates various stages of the manufacturing process and provides custom dashboards for detailed analytics, ensuring a holistic view of operations.</p>
                    </div>
                    
                    
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10 mb-8'>
                <div className='w-1/2 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={compliance} alt=""
                        className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Compliance Management System</h1>
                        {/* <h2 className='text-xl text-[#3b6893] font-semibold text-center mt-4 mb-3'>Seat Assignment Application</h2> */}
                        <p className='text-justify text-[#3b6893] mt-3'>Vishal Rustagi implemented a robust compliance management system using Power Apps and Power Automate. This system streamlines the process of meeting regulatory requirements, significantly reducing the risk of non-compliance. By automating tasks and centralizing data, the system ensures a more efficient and effective approach to maintaining compliance.</p>
                    </div>
                    <div className='w-1/2 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={delivery} alt=""
                        className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Delivery Management System</h1>
                        {/* <h2 className='text-xl text-[#3b6893] font-semibold text-center mt-4 mb-3'>Streamlining Business Operations</h2> */}
                        <p className='text-justify text-[#3b6893] mt-3'>Leveraging the efficiency of Power Apps and Power Automate, Vishal Rustagi crafted a robust delivery management system. This innovative solution automates scheduling and tracking of deliveries, guaranteeing customers receive their orders on time and accurately.</p>
                    </div>
                    
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10 mb-8'>
                    <div className='w-1/2 border-2 rounded-lg h-34 bg-white p-3 shadow-custom-blue'>
                        <img src={inventory} alt=""
                        className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Inventory Management System </h1>
                        <p className='text-justify text-[#3b6893] mt-3'>Vishal leveraged Microsoft's Power Apps and Power Automate to create an inventory management system. This system offers real-time inventory tracking and automates stock management.</p>
                    </div>
                    <div className='w-1/2 border-2 rounded-lg h-34 bg-white p-3 shadow-custom-blue'>
                        <img src={customer} alt=""
                        className='rounded-lg h-72 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Customer Management System </h1>
                        <p className='text-justify text-[#3b6893] mt-3'>Vishal built a customer management system using Power Apps and Power Automate. This system streamlines customer data management and enhances his ability to interact with customers.</p>
                    </div>
                </div>
            </div>
        </>
    )
 }
 export default Exceptional;