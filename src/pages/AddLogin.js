import React from 'react';
import { LockClosedIcon } from '@heroicons/react/outline';


function AddLogin() {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-8">SENDDOU</div>

      <div className="flex justify-around ">
        <div className="mt-20 mb-20">
          <div className=" text-3xl mb-10 mt-5">
            <div className="mr-2 mb-4 "><b>"</b>첫인상의 판단은 <b>3초</b></div>
            <div className="ml-4 mb-4 ">나의 모든것을 담아보세요<b>"</b></div>
          </div>

          <div className="text-3xl font-bold py-6">
            <div className=" leading-loose text-center mt-7 ">우리는 보다 더 나은<br />당신의 미래를 응원합니다.<br />당신에게 보내요.</div>
            <div className="float-right mt-3 ">SENDDOU</div>
          </div>
        </div>
        <div className="mt-20 border-4 w-auto py-4 px-14 rounded-xl border-indigo-800">
          <div className="mb-4">
            <div className="text-center text-5xl font-bold mt-5">LOGIN</div>
            <div className="text-gray-300 text-xs text-center flex ml-12 mt-3">아직 회원이 아니신가요?
              <div><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-2">회원가입하기</a>
              </div>
            </div>

            <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">


                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true"/>
                    <div className="-space-y-px">
                      <div >
                        <label htmlFor="email-address" className="sr-only">email-address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required
                               className=" rounded-xl relative block w-full px-3 py-3 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                               placeholder="이메일을 입력해주세요"/>
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                               className=" rounded-xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                               placeholder="비밀번호를 입력해주세요" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="text-xs mr-16">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          아이디/비밀번호찾기
                        </a>
                      </div>

                      <div className="text-xs">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          회원가입하기
                        </a>
                      </div>
                    </div>

                    <div>
                      <button type="submit"
                              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#51C5B7] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                        로그인
                      </button>
                    </div>
                </form>
                <div className="flex justify-center  ">
                  <hr className="w-2/4 mt-3 mr-3" />
                  or
                  <hr className="w-2/4 mt-3 ml-3" />
                </div>
                <div className="text-lg text-center">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    SNS로 로그인
                  </a>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddLogin;