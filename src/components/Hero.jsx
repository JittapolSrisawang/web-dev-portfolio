import html from "../assets/HTML.svg";
import css from "../assets/CSS.svg";
import js from "../assets/JavaScript.svg";
import react from "../assets/React-Dark.svg";
import tailwind from "../assets/TailwindCSS-Dark.svg";
import bootstrap from "../assets/Bootstrap.svg";
import photo from "../assets/PHOTO.jpg";
import photoshop from "../assets/Photoshop.svg";
import premiere from "../assets/Premiere.svg";

const Hero = () => {
  return (
    <div id="home" className="bg-slate-100 py-24">
      <div className="align-element grid md:grid-cols-2 gap-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="flex justify-center hover:scale-105 duration-300"
        >
          <img
            src={photo}
            alt="My_Photo"
            className="h-80 w-80 rounded-full drop-shadow-[10px_10px_12px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div>
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-5xl text-slate-800 font-bold tracking-wider"
          >
            Front-End Developer
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-section"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            a ab sit, deserunt fugit aliquam illum minus eum quam sequi cum quod
            officiis, vitae mollitia voluptatem perspiciatis quasi autem
            obcaecati?
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="flex items-center gap-4 mt-14 text-base text-slate-800"
          >
            <p className="border-r-4 border-slate-500 px-2">Tech Stack</p>
            <div className="flex flex-wrap gap-4">
              <img src={html} alt="HTML" title="HTML" className="h-10 w-10" />
              <img src={css} alt="CSS" title="CSS" className="h-10 w-10" />
              <img
                src={js}
                alt="Javascript"
                title="Javascript"
                className="h-10 w-10"
              />
              <img
                src={react}
                alt="React"
                title="React"
                className="h-10 w-10"
              />
              <img
                src={tailwind}
                alt="Tailwind CSS"
                title="Tailwind CSS"
                className="h-10 w-10"
              />
              <img
                src={bootstrap}
                alt="Bootstrap"
                title="Bootstrap"
                className="h-10 w-10"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            className="flex items-center gap-4 mt-10 text-base text-slate-800"
          >
            <p className="border-r-4 border-slate-500 px-2">Other Skills</p>
            <div className="flex flex-wrap gap-4">
              <img
                src={photoshop}
                alt="Photoshop"
                title="Photoshop"
                className="h-10 w-10"
              />
              <img
                src={premiere}
                alt="Premiere_Pro"
                title="Premiere Pro"
                className="h-10 w-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
