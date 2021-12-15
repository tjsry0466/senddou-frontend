import React from 'react';
import Navbar from "../components/Common/Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="flex justify-center py-14 mx-auto">
                <div className="w-6/12">
                    <h1 className="text-6xl font-bold ">간편하게 이력서를 만들어 보세요.</h1>
                    <p className="text-2xl py-6 ">손쉽게 디자인 템플릿을 통해 이력서를 생성할수 있습니다. 편리하게 이력서를 생성해보세요</p>
                </div>
                <div className="w-6/12">2</div>
            </div>
        </>
    );
};

export default Home;
