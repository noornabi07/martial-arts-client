import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Reviews = () => {
    const [reviews, setRevies] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setRevies(data))
    }, [])

    return (
        <div>
            <div className='w-1/2 mx-auto text-center'>
                <h2 className='text-xl font-bold text-orange-500'>REVIEWS</h2>
                <h2 className='text-4xl font-bold my-3'>What they say about us</h2>
                <p className='text-lg text-gray-500'>Evaluate the training methods employed in the martial art style. Consider the balance between physical conditioning, flexibility, sparring, and drills. Look for structured progression and the inclusion of realistic.</p>
            </div>


            <div className='my-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <div key={review.id}>
                            <SwiperSlide>
                                <div className="card w-96 mb-10 bg-slate-700 border-4 border-gray-600 text-white">
                                    <figure><div className="avatar">
                                        <div className="w-24 my-2 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review.img} />
                                        </div>
                                    </div></figure>
                                    <div className="card-body text-center">
                                        <h2 className="text-xl font-bold -mt-6">{review.name}</h2>
                                        <p className='text-red-500 font-bold'>{review.title}</p>
                                        <div className="card-actions justify-center">
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>

                                            <p className=''>{review.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;