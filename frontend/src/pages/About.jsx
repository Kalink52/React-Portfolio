// TODO
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

const paragraphWithPictureList = [
  {
    id: 1,
    imageUrl: "/assets/aboutPictures/selfieP.jpg",
    paragraph:
      "I am a junior developer with a strong foundation in full-stack web development, specializing in JavaScript, Node.js, and database management. With a background in both SQL and NoSQL databases, I have experience designing and optimizing data structures to support dynamic applications. My experience extends to front-end technologies like React and Angular, allowing me to create interactive and responsive user interfaces. I am passionate about building efficient, scalable solutions and continuously expanding my knowledge of modern development practices.",
  },
  {
    id: 2,
    imageUrl: "/assets/aboutPictures/selfieP2.png",
    paragraph:
      "In addition to my technical skills, I have a strong problem-solving mindset and a keen eye for detail. I enjoy breaking down complex challenges and implementing practical, well-structured solutions. My experience working on diverse projects, from character builders to task management applications, has given me a deep understanding of user needs and application workflows. I also have experience integrating APIs, managing authentication, and ensuring seamless communication between front-end and back-end systems.",
  },
  // {
  //   id: 3,
  //   imageUrl: "/assets/aboutPictures/selfieP3.png",
  //   paragraph:
  //     "I am always eager to learn and grow as a developer, staying up to date with the latest technologies and best practices in software development. Whether working independently or collaborating with a team, I strive to deliver high-quality code that meets project requirements and enhances user experience. My goal is to contribute to innovative projects that make an impact, leveraging my skills to create intuitive and efficient applications.",
  // },
];
function PicOnLeft(content) {
  return (
    <div
      key={content.id}
      className="grid grid-flow-row grid-cols-2 py-10 gap-10 px-20 justify-items-center items-center lg:grid-cols-3"
    >
      <img
        className="h-96 w-96 rounded-full object-cover object-center col-span-2 order-2 lg:col-span-1 lg:order-1"
        src={content.imageUrl}
        alt=""
      />
      <p key={content.id} className="col-span-2 order-1 ">
        {content.paragraph}
      </p>
    </div>
  );
}
function PicOnRight(content) {
  return (
    <div
      key={content.id}
      className="grid grid-flow-row grid-cols-2 py-10 gap-10 px-20 justify-items-center items-center  lg:grid-cols-3"
    >
      <p key={content.id} className="col-span-2">
        {content.paragraph}
      </p>
      <img
        className="h-96 w-96 rounded-full object-cover object-center col-span-2 lg:col-span-1"
        src={content.imageUrl}
        alt=""
      />
    </div>
  );
}
function About() {
  return (
    <>
      <div className="flex justify-center text-4xl font-bold ">
        Meet the Programmer
      </div>
      <div className="grid grid-flow-row grid-cols-1 grid-rows-3">
        {paragraphWithPictureList.map((content) => {
          if (content.id % 2 !== 0) {
            return PicOnLeft(content);
          } else {
            return PicOnRight(content);
          }
        })}
      </div>
    </>
  );
}

export default About;
