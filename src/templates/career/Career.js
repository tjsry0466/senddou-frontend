import React from 'react';

function Career({ data }) {
  return (
    <div className="h-full  border-black justify-center align-middle">
      <div>[Career]</div>
      <div className= "border-b-2  w-fit px-3 py-2">title:{data}</div>
        <ul className="list-disc list-inside px-2">
            <li> {data}</li>
        </ul>

    </div>
  );
}

Career.defaultProps = {
  data: '기본 제목',
};

export default Career;
