import Intro from './introduce/Intro';
import Project from './project/Project';
import Military from './military/Military';
import Career from './career/Career';
import Career1 from './career/Career1';
import IntroduceMe from './introduce/IntroduceMe';

export function PickTemplate({ type, name, data, display}) {
  const template = {
    intro: {
      intro: <Intro data={data} display={display}/>,
      introduceMe: <IntroduceMe data={data} display={display}/>,
    },
    project: {
      project: <Project data={data} display={display}/>,
    },
    military: {
      military: <Military data={data} display={display}/>,
    },
    career: {
      career: <Career data={data} display={display}/>,
      career1: <Career1 data={data} display={display}/>,
    },
  };

  return template[type]?.[name] || <div className="text-center">NOT FOUND</div>;
}
