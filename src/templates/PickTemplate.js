import Intro from './introduce/Intro';
import Project from './project/Project';
import Military from './military/Military';
import Career from './career/Career';
import Career1 from './career/Career1';
import IntroduceMe from './introduce/IntroduceMe';

export function PickTemplate({ type, name, data ,display}) {
  const template = {
    intro: {
      intro: <Intro data={data} />,
      introduceMe: <IntroduceMe data={data} display={display}/>,
    },
    project: {
      project: <Project data={data} />,
    },
    military: {
      military: <Military data={data} />,
    },
    career: {
      career: <Career data={data} />,
      career1: <Career1 data={data} />,
    },
  };

  return template[type]?.[name] || <div className="text-center">NOT FOUND</div>;
}
