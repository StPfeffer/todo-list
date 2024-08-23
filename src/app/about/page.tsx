import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Welcome to our company! We are dedicated to providing the best services to our customers.
          Our team is made up of professionals with years of experience in the industry.
        </p>
        <p className="mt-2 text-lg">
          Our mission is to deliver high-quality products that meet the needs of our clients. 
          We value integrity, excellence, and innovation in all that we do.
        </p>
      </main>
    </>
  );
};

export default About;
