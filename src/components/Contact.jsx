import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="align-element">
      <h1 data-aos='zoom-in' className="title-section">Contact</h1>
      <div className="mt-4 text-xl text-slate-500 grid md:grid-cols-2 gap-8">
        <div data-aos='fade-right'>
          <div className="flex items-center gap-1">
            <FaMobileAlt />
            <p className="text-xl font-bold uppercase">Telephone</p>
          </div>
          <p className="text-section">081-2345678</p>
        </div>
        <div data-aos='fade-left'>
          <div className="flex items-center gap-1">
            <MdEmail />
            <p className="text-xl font-bold uppercase">Email</p>
          </div>
          <p className="text-section">portfolio.dev@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
