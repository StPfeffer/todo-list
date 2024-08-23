import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="mt-4 flex items-center">
        <Image
          src="/avatar.png"
          alt="Your Name"
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Mateus Pfeffer</h2>
          <p className="mt-2 text-lg">Backend Software Developer II</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-2" />
            Visit my GitHub
          </a>
        </div>
      </div>
      <p className="mt-4 text-lg">
        Welcome to my personal page! I am dedicated to providing the best services and
        solutions in my field. With almost 6 of experience, I am passionate about delivering high-quality work and continuously learning and growing.
      </p>
    </main>
  );
};

export default About;
