import React from "react";
import "./skills.css";

const skillData = [
  {
    id: 1,
    img: <i className="devicon-html5-plain colored"></i>,
    description: "HTML5",
  },
  {
    id: 2,
    img: <i className="devicon-bootstrap-plain colored"></i>,
    description: "Bootstrap",
  },
  {
    id: 3,
    img: <i className="devicon-css3-plain colored"></i>,
    description: "CSS3",
  },
  {
    id: 4,
    img: <i className="devicon-sass-original colored"></i>,
    description: "SASS",
  },
  {
    id: 5,
    img: <i className="devicon-less-plain-wordmark colored"></i>,
    description: "LESS",
  },
  {
    id: 6,
    img: <i className="devicon-tailwindcss-original colored"></i>,
    description: "Tailwind",
  },
  {
    id: 7,
    img: <i className="devicon-javascript-plain colored"></i>,
    description: "ES6",
  },
  {
    id: 8,
    img: <i className="devicon-react-original colored"></i>,
    description: "React.js",
  },
  {
    id: 8.1,
    img: <i className="devicon-redux-original colored"></i>,
    description: "redux",
  },
  {
    id: 9,
    img: <i className="devicon-nextjs-original-wordmark colored"></i>,
    description: "Next.js",
  },
  {
    id: 10,
    img: <i className="devicon-jquery-plain colored"></i>,
    description: "jQuery",
  },
  {
    id: 11,
    img: <i className="devicon-typescript-plain colored"></i>,
    description: "Typescript",
  },
  {
    id: 12,
    img: <i className="devicon-mongodb-plain colored"></i>,
    description: "MongoDB",
  },
  {
    id: 13,
    img: <i className="devicon-mysql-original colored"></i>,
    description: "MySQL",
  },
  {
    id: 14,
    img: <i className="devicon-webpack-plain colored"></i>,
    description: "Webpack",
  },
  {
    id: 15,
    img: <i className="devicon-gulp-plain colored"></i>,
    description: "Gulp",
  },
  {
    id: 16,
    img: <i className="devicon-npm-original-wordmark colored"></i>,
    description: "npm",
  },
  {
    id: 17,
    img: <i className="devicon-yarn-original colored"></i>,
    description: "yarn",
  },
  {
    id: 18,
    img: <i className="devicon-nodejs-plain colored"></i>,
    description: "Node.js",
  },
  {
    id: 19,
    img: <i className="devicon-github-original colored"></i>,
    description: "GitHub",
  },
  {
    id: 20,
    img: <i className="devicon-docker-plain colored"></i>,
    description: "Docker",
  },
  {
    id: 21,
    img: <i className="devicon-wordpress-plain colored"></i>,
    description: "WordPress",
  },
  {
    id: 22,
    img: <i className="devicon-woocommerce-plain colored"></i>,
    description: "Woocommerce",
  },
  {
    id: 23,
    img: <i className="devicon-illustrator-plain colored"></i>,
    description: "Illustrator",
  },
  {
    id: 24,
    img: <i className="devicon-photoshop-plain colored"></i>,
    description: "Photoshop",
  },
  {
    id: 25,
    img: <i className="devicon-figma-plain colored"></i>,
    description: "Figma",
  },
  {
    id: 26,
    img: <i className="devicon-vscode-plain colored"></i>,
    description: "VS Code",
  },
  {
    id: 27,
    img: <i className="devicon-amazonwebservices-plain-wordmark colored"></i>,
    description: "AWS",
  },
  {
    id: 28,
    img: <i className="devicon-jira-plain colored"></i>,
    description: "Jira",
  },
  {
    id: 29,
    img: <i className="devicon-trello-plain colored"></i>,
    description: "Trello",
  },
];

const Skills = () => {
  return (
    <section className="abilities container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
        {skillData.map(({ id, img, description }) => {
          return (
            <div key={id} className="skill__card">
              {img}
              <p className="skills__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
