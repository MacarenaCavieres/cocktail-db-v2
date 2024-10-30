import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-footer text-primary flex md:flex-row flex-col justify-around items-center gap-10 py-20">
            <p className="text-xl font-bold">
                Desarrollado por <span className="text-spanFooter drop-shadow-name-footer">MCavieres</span>
            </p>
            <div className="flex gap-3 ">
                <a href="https://www.linkedin.com/in/macarena-cavieres-rubio/">
                    <FaLinkedin size={"2rem"} height={"2rem"} />
                </a>
                <a href="https://github.com/MacarenaCavieres">
                    <FaGithub size={"2rem"} height={"2rem"} />
                </a>
            </div>
        </footer>
    );
}
