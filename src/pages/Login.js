import React from 'react';


function Login () {
  return (
    <div className="bg-gray mr-72 ml-72" >

        <div className="text-center text-3xl font-bold mt-8">SENDDOU</div>
        <div className="flex justify-around rounded-xl border-2 border-[#154EE1] mx-w-40 max-h-screen mt-20 content-center ">
          <div className="mt-20 mb-20">
            <div className=" text-3xl mb-10">
              <div className="mr-2 mb-4 "><b>"</b>첫인상의 판단은 <b>3초</b></div>
              <div className="ml-4 mb-4 ">나의 모든것을 담아보세요<b>"</b></div>
            </div>

            <div className="text-3xl font-bold ">
              <div className=" leading-loose text-center mt-7 ">우리는 보다 더 나은<br />당신의 미래를 응원합니다.<br />당신에게 보내요.</div>
              <div className="float-right mt-3 ">SENDDOU</div>
            </div>
          </div>

        <div className="mt-6">
          <div className="mb-4">
            <div className="text-center text-5xl font-bold">LOGIN</div>
            <div className="text-gray-300 text-xs  mt-1 text-center flex ml-20 mt-3">
              아직 회원이 아니신가요?
              <div className="text-xs text-blue-400 ml-2 ">회원가입하기</div>
            </div>
          </div>
          <div className=" w-96">
            <div className=" border-1 border-indigo-500/0 rounded-xl flex bg-kakao mb-3 h-14 filter drop-shadow-lg justify-center">
              <div><img className=" absolute left-0 h-14 rounded-xl" alt="kakao_login_large_narrow.png" src="img/kakao_login_large_narrow.png"/></div>
              <div className=" text-lg font-bold font-mono mt-4 text-stone-600">카카오 로그인</div>
            </div>
            <div className=" border-1 border-indigo-500/0 rounded-xl flex bg-naver mb-3 h-14 filter drop-shadow-lg justify-center">
              <div><img className="absolute left-0 h-14 rounded-xl" alt="btnG_아이콘사각.png" src="img/btnG_아이콘사각.png"/></div>
              <div className=" text-lg font-bold font-mono mt-4 text-stone-600">네이버 로그인</div>
            </div>
            <div className="border-1 border-indigo-500/0 rounded-xl flex bg-google mb-3 h-14 filter drop-shadow-lg justify-center">
                <img className=" absolute  left-0 h-14 rounded-xl" alt="btn_google_light_focus_ios@3x.png"  src="img/btn_google_light_focus_ios@3x.png"/>
              <div className=" text-lg font-bold font-mono mt-4 text-stone-600">구글 로그인</div>
            </div>
            flex al justify-center mb-6
          <div className="">
            <hr className="w-48 mt-3 mr-3" />
            or
            <hr className="w-48 mt-3 ml-3" />
          </div>
          <div className="border-1 border-indigo-500/0 rounded-xl flex bg-google mb-2 h-14 filter drop-shadow-lg justify-center">
            <i className="fas fa-envelope ml-2 mr-2 "></i>
            <div className="stroke-current text-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 mt-3 ml-1 w-12 mr-5 text-red-500 absolute left-0 " fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
              <div className=" text-lg font-bold font-mono mt-4 text-stone-600">이메일 로그인</div>
            </div>
          </div>
          <div className="float-right text-xs mb-5 text-gray-600 text-center mt-3">아이디/비밀번호찾기</div>

        </div>

      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
export default Login;
