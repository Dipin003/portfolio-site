import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 ">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-10 py-5">
                <div className="flex gap-6 items-center text-xl text-gray-500">
                    <a href="#"><BsTwitterX /></a>
                    <a href="https://github.com/Dipin003" rel="noopener noreferrer" target="_blank"><BsGithub /></a>
                    <a href="#"><BsInstagram /></a>
                    <a href="https://in.linkedin.com/in/dipin-kharayat-110b18255" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <MdEmail className="text-xl" />
                    <p className="text-sm">Get in Touch</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
