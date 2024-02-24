import React from "react";
import "./skills.css";

const skillData = [
  {
    id: 1,
    img: <i class="devicon-html5-plain colored"></i>,
    description: "HTML5",
  },
  {
    id: 2,
    img: <i class="devicon-bootstrap-plain colored"></i>,
    description: "Bootstrap",
  },
  {
    id: 3,
    img: <i class="devicon-css3-plain colored"></i>,
    description: "CSS3",
  },
  {
    id: 4,
    img: <i class="devicon-sass-original colored"></i>,
    description: "SASS",
  },
  {
    id: 5,
    img: <i class="devicon-less-plain-wordmark colored"></i>,
    description: "LESS",
  },
  {
    id: 6,
    img: <i class="devicon-tailwindcss-original colored"></i>,
    description: "Tailwind",
  },
  {
    id: 7,
    img: <i class="devicon-javascript-plain colored"></i>,
    description: "ES6",
  },
  {
    id: 8,
    img: <i class="devicon-react-original colored"></i>,
    description: "React.js",
  },
  {
    id: 9,
    img: <i class="devicon-nextjs-original-wordmark colored"></i>,
    description: "Next.js",
  },
  {
    id: 10,
    img: <i class="devicon-jquery-plain colored"></i>,
    description: "jQuery",
  },
  {
    id: 11,
    img: <i class="devicon-typescript-plain colored"></i>,
    description: "Typescript",
  },
  {
    id: 12,
    img: <i class="devicon-mongodb-plain colored"></i>,
    description: "MongoDB",
  },
  {
    id: 13,
    img: <i class="devicon-mysql-original colored"></i>,
    description: "MySQL",
  },
  {
    id: 14,
    img: <i class="devicon-webpack-plain colored"></i>,
    description: "Webpack",
  },
  {
    id: 15,
    img: <i class="devicon-gulp-plain colored"></i>,
    description: "Gulp",
  },
  {
    id: 16,
    img: <i class="devicon-npm-original-wordmark colored"></i>,
    description: "npm",
  },
  {
    id: 17,
    img: <i class="devicon-yarn-original colored"></i>,
    description: "yarn",
  },
  {
    id: 18,
    img: <i class="devicon-nodejs-plain colored"></i>,
    description: "Node.js",
  },
  {
    id: 19,
    img: <i class="devicon-github-original colored"></i>,
    description: "GitHub",
  },
  {
    id: 20,
    img: <i class="devicon-docker-plain colored"></i>,
    description: "Docker",
  },
  {
    id: 21,
    img: <i class="devicon-wordpress-plain colored"></i>,
    description: "WordPress",
  },
  {
    id: 22,
    img: <i class="devicon-woocommerce-plain colored"></i>,
    description: "Woocommerce",
  },
  {
    id: 23,
    img: <i class="devicon-illustrator-plain colored"></i>,
    description: "Illustrator",
  },
  {
    id: 24,
    img: <i class="devicon-photoshop-plain colored"></i>,
    description: "Photoshop",
  },
  {
    id: 25,
    img: <i class="devicon-figma-plain colored"></i>,
    description: "Figma",
  },
  {
    id: 26,
    img: <i class="devicon-vscode-plain colored"></i>,
    description: "VS Code",
  },
  {
    id: 27,
    img: <i class="devicon-amazonwebservices-plain-wordmark colored"></i>,
    description: "AWS",
  },
  {
    id: 28,
    img: <i class="devicon-jira-plain colored"></i>,
    description: "Jira",
  },
  {
    id: 29,
    img: <i class="devicon-trello-plain colored"></i>,
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
