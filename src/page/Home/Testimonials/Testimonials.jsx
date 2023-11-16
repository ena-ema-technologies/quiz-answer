import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './Testimonials.css';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="slick-next2"
        style={{ }}
        onClick={onClick}
      >
        <button className='btn btn-circle  bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>

      </div>

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-prev2"
        style={{  }}
        onClick={onClick}>
            <button className='btn btn-circle bg-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
</button>

        </div>
    
    );
  }
const Testimonials = () => {


      const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
                dots:true,
            }
          }
        ]
      }


    const users = [
     
        {"id":1, "name":"Marta " , "type": "Commander", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "color":"#33A474"},
        {"id":2, "name":"Samston" , "type": "Advocate", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "color":"#4298B4"},
        {"id":3, "name":"Era John" , "type": "Adventurer", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "color":"#88619A"},
        {"id":4, "name":"Auki" , "type": "Defender", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","color":"#E4AE3A"},
        {"id":5, "name":"Marta " , "type": "Commander", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","color":"#33A474"},
        {"id":6, "name":"Samston" , "type": "Advocate", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "color":"#4298B4"},
        {"id":7, "name":"Era John" , "type": "Adventurer", "review":" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "color":"#88619A"},
        {"id":8, "name":"Auki" , "type": "Defender", "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","image":"https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","color":"#E4AE3A"}
      

 ];


    return (
        <div className=' bg-[rgb(246,246,247)]'>
            <div className=' mx-auto py-16  '>
                <h1 className=' mx-10 text-center text-[#E4AE3A] font-bold '>TESTIMONIALS</h1>
                <h1 className=' mx-10 text-center font-medium my-2 text-4xl lg:text-5xl text-[#343C4B]'>See what others have to say</h1>
                <Slider {...settings} className=' grid grid-cols-1 md:grid-cols-3  w-full h-96 gap-4  mt-10  '>
                    {
                        users.map((user) => (<div className="card card-compact border-t-4 border-[#88619A] bg-white w-full hover:shadow-xl hover:shadow-slate-300   p-2">
                       
                        <div className="card-body  flex   ">
                            <div className='flex items-center  '>

                                <div className="avatar justify-start">
                                    <div className="w-24 mask mask-hexagon">
                                        <img src={user.image} />
                                    </div>
                                </div>

                                <div className=' flex justify-end'>

                            <div className='flex flex-col lg:flex-row   ml-7 lg:ml-5 lg:w-72 justify-between   '>
                            <div className=" ">
                                      <h2 className="md:text-lg font-medium ">{user.name}</h2>
                                      <h2 className=" md:text-lg font-medium text-[#E4AE3A]">{user.type}</h2>
                                  </div>


                                   
                                </div>

                            </div>
                                
                            
                            
                            </div>
                            
                        

                              <div className='justify-start m-2'>
                            <p className='text-slate-500 text-left'>{user.review}</p>
                              </div>

                        
                        </div>
                    </div>))
                    }
        
            </Slider>    
            

            
            </div>
        </div>
    );
};

export default Testimonials;