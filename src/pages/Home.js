import React, {useState} from 'react';
import Navbar from "../components/Common/Navbar";
import SimpleSlider from "./SimpleSlider";
import Fade from 'react-reveal/Fade';
import MultipleItems from "./MultipleItems";
import Multibottom from "./Multibottom";
import particlesOptions from "../config/particles";
import Particles from "react-tsparticles";
const Home = () => {
    return (
        <>

            <div className=" bg-black border-2">
                <div className="text-center text-4xl py-8 text-white font-bold"> SENDDOU </div>
            </div>

            <div className="bg">
                    <Particles  options={particlesOptions}/>
                <div className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto mb-24">
                        <div
                            className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl w-2/4 lg:pb-28 xl:pb-32">
                            <svg
                                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">

                            </svg>
                            <div id="particles-js  ">
                            <Fade bottom>

                                <main
                                    className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">

                                    <div className="sm:text-center lg:text-left bg-black rounded-3xl">
                                        <h1 className="text-4xl tracking-tight font-extrabold text-indigo-600 sm:text-5xl md:text-6xl">
                                            <span className="block xl:inline">SENDDOU</span> <br/>
                                            <span className="block text-indigo-400 mt-3 text-3xl xl:inline">Simplicity, everything is sent for you.</span>
                                        </h1>
                                        <p className="mt-3  py-2 px-2 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                            이력서는 보다 간편하게 제작되어야 합니다. <br/>누구나 쉽게 자신의 이력서를 완성시켜보세요!<br/>
                                            또한, 당신을 표현할수있는 개성 넘치는 디자인으로 이력서를 장식해보세요. </p>

                                    </div>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="/login"
                                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> 시작하기 </a>
                                        </div>
                                    </div>
                                </main>
                            </Fade>
                        </div>
                    </div>
                    <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img className="h-full w-3/5 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                             src="/img/01.png"
                             alt="01.png"/>
                    </div>
                        </div>


                </div>
                <div className=" ">

                    <div className=" w-full bg-black p-28 text-white  py-40  ">
                        <Fade bottom>
                        <h1 className=" -mt-24 text-5xl font-bold text-center leading-normal">누구나 자신을 쉽게 소개할 수 있습니다.</h1>
                        <p className="text-2xl py-12 text-center ">손쉽게 디자인 템플릿을 통해 이력서를 생성할수 있습니다. 편리하게 이력서를 생성해보세요</p>
                        </Fade>
                        </div>

                    <Fade bottom>
                    <div
                        className="  pb-24 -mt-28 px-40">
                        <div className=" md:px-10 sm:px-5">
                            <SimpleSlider/>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="mx-64 pt-96">
                    <div className="">
                        <Fade bottom>
                        <div className="py-52">
                            <h1 className="text-6xl relative  font-bold text-center leading-normal text-white">컴포넌트 기반 디자인</h1>
                        </div>
                        </Fade>
                    </div>
                </div>
                <div>
                    <div className="sm:flex align-text-top font-bold text-3xl">
                        <div className="w-6/12">
                            <img className="bg-cover rounded-r-3xl"
                                 src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                 alt="" />
                        </div>
                        <div className="pl-5 w-6/12 text-white">
                            <h1 className="mt-10 mb-20">제에에에에에에에에목</h1>
                            <p className="mb-2 md:mb-6 text-2xl pl-40">내용1<br/>
                                내용2<br/>
                                내용3</p>
                        </div>
                    </div>
                    <div>
                        <Fade bottom>
                        <div className="py-40">
                            <h1 className="text-5xl font-bold text-center leading-normal py-12 text-white">다양한 디자인의 이력서로<br/>
                                자신을 소개해보세요.</h1>

                        </div>
                        </Fade>
                    </div>

                    <div className=" py-24">
                        <div className="slick-slider-2">
                            <MultipleItems/>
                        </div>
                        <div className="slick-slider-2">
                             <Multibottom/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;