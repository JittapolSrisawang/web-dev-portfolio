import photo2 from "../assets/PHOTO2.jpg";

const About = () => {
  return (
    <div id="about" className="align-element grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="title-section">About Me</h1>
        <p className="text-section">
          I have 3 years of experience as a web developer and 9 years as a
          freelance photographer{" "}
          <a
            href="http://www.facebook.com/PalaPolPhotographer"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-orange-600"
          >
            [Visit my fanpage]
          </a>
          . I have skills in HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap.
        </p>
      </div>
      <div className=" flex justify-center">
        <img src={photo2} alt="My_Photo" className="h-80 w-80 rounded-lg" />
      </div>
    </div>
  );
};
export default About;
