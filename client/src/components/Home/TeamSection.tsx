import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Ghislain from "../../../public/Ghislain.jpg";
import Eniola from "../../../public/Eniola.jpg";
import Emmanual from "../../../public/Emmanual.jpg";
import Omajuwa from "../../../public/Omajuwa.jpg";
import Dharambir from "../../../public/Dharambir.jpg";

const teamMembers = [
  {
    name: "Dharambir Agrawal",
    role: "Full Stack Developer",
    image: Dharambir,
    github: "https://github.com/DharambirAgrawal",
    linkedin: "https://linkedin.com/in/dharambirAgrawal",
  },
  {
    name: "Omajuwa Jalla",
    role: "Back-end Developer.",
    image: Omajuwa,
    github: "https://github.com/Pardo-xy",
    linkedin: "https://www.linkedin.com/in/omajuwa-jalla-a8b93b324",
  },
  {
    name: "Ghislain Nkundayezu",
    role: "Back-end Developer",
    image: Ghislain,
    github: "https://github.com/ghislainnkundayezu",
    linkedin: "https://linkedin.com/in/ghislainnkundayezu",
  },
  {
    name: "Emmanuel Acheampong",
    role: "Coordinator",
    image: Emmanual,
    github: "https://github.com/emman-A",
    linkedin: "https://linkedin.com/in/emmanuel-acheampong-1a8813246/",
  },
  {
    name: "Eniola Akinpelumi",
    role: "Product Manager",
    image: Eniola,
    github: "https://github.com/icey-tea",
    linkedin: "www.linkedin.com/in/eniola-akinpelumi-20259a324",
  },
];

export default function TeamSection() {
  return (
    <section id="teamSection" className="py-24 min-h-screen">
      <div className=" mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Hackathon Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a diverse group of innovators, ready to tackle any challenge
            and create groundbreaking solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-center justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className=" bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-start space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} className="text-black fill-white rounded-full" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <Linkedin size={16} className="text-black fill-white" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
