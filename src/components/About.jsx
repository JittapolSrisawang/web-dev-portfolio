import photo2 from "../assets/PHOTO2.jpg";

const About = () => {
  return (
    <div id="about" className="align-element grid md:grid-cols-2 gap-8">
      <div>
        <h1 data-aos='fade-up' className="title-section">About Me</h1>
        <p data-aos='fade-up' className="text-section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus illum iste quas eum voluptas, ipsum beatae maiores?
          Rem, dolores vitae. Animi adipisci dignissimos doloremque dolorum
          beatae ipsum architecto quia unde.
        </p>
      </div>
      <div
        data-aos="zoom-in"

        className=" flex justify-center hover:scale-105 duration-300 shadow-md"
      >
        <img
          src={photo2}
          alt="My_Photo"
          className="h-70 w-120 rounded-lg drop-shadow-[10px_10px_12px_rgba(0,0,0,0.2)]"
        />
      </div>
    </div>
  );
};
export default About;
