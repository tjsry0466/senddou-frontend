import React, { useReducer, createContext, useContext } from 'react';

const initialResumes = [
  {
    id: '0',
    company: '미선택',
    title: '이력서를 선택해주세요.',
    data: {},
  },
  {
    id: '1',
    company: 'apple',
    title: '애플 지원 이력서 입니다.',
    data: {
      intro: [{
        'title': '무엇이든지 해결하고자 하는 마음가짐',
        'content': ['앞에 놓여진 문제는 어떤 방법으로든 해결하고자 하는 마음가짐을 가지고 있습니다. 어떠한 문제에 대해서 다양한 시각으로 관찰하여 좀더 나은 방법으로 해결할 수 있을지 고민합니다.'],
      },
        {
          'title': '무엇이든지 해결하고자 하는 마음가짐2',
          'content': ['앞에 놓여진 문제는 어떤 방법으로든 해결하고자 '],
        }],
      career: '캐리어입니다.',
    },
  },
  {
    id: '2',
    company: 'google',
    title: '구글 지원 이력서 입니다.',
    data: {
      intro: [{
        'title': "무엇이든지 해결하고자 하는 마음가짐",
        "content": ["뚜루뚜 빠라빠라 어떠한 문제에 대해서 다양한 시각으로 관찰하여 좀더 나은 방법으로 해결할 수 있을지 고민합니다."]
      }],
    },
  },
];

function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_ALL_DATA':
      console.log(state, action);
      return action.data;
    case 'CREATE':
      return { items: state.items.concat(action.item) };
    case 'CHANGE':
      return {
        items: state.items.map((resume) =>
          resume.i === action.i
            ? {
                ...resume,
                name: action.name,
                type: action.design_type,
              }
            : resume,
        ),
      };
    case 'REMOVE':
      return { items: state.items.filter((resume) => resume.i !== action.i) };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ResumeStateContext = createContext();
const ResumeDispatchContext = createContext();

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialResumes);

  return (
    <ResumeStateContext.Provider value={state}>
      <ResumeDispatchContext.Provider value={dispatch}>
        {children}
      </ResumeDispatchContext.Provider>
    </ResumeStateContext.Provider>
  );
}

export function useResumeState() {
  return useContext(ResumeStateContext);
}

export function useResumeDispatch() {
  return useContext(ResumeDispatchContext);
}
