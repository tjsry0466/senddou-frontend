import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Multibottom extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: true,
            swipeToSlide: true,
        };
        return (
                <div className="pr-24 pb-8">

                    <div className="sm:flex items-center shadow-md bg-gray-400 rounded-r-3xl relative">
                        <Slider {...settings}>

                        <div className="md:pr-10 sm:px-5">

                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                 className="rounded-3xl"></img>

                    </div>

                    <div className="md:pr-10 sm:px-5">
                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                 className="rounded-3xl"></img>
                    </div>

                    <div className="md:pr-10 sm:px-5">
                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                 className="rounded-3xl"></img>
                    </div>
                        </Slider>

                </div>

                </div>
        );
    }
}