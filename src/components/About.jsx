const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 bg-zinc-100 rounded-2xl shadow-lg">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
        About Shopsy
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10">
        Shopsy is a modern e-commerce platform designed to make online shopping simple, fast, 
        and reliable. From the latest gadgets to everyday essentials, we bring you quality 
        products at affordable prices — all in one place.
      </p>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Premium Quality
          </h3>
          <p className="text-gray-600">
            Every product on Shopsy is carefully selected to meet high quality and durability standards.
          </p>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Fast & Secure Delivery
          </h3>
          <p className="text-gray-600">
            We ensure safe packaging and quick delivery so your orders reach you without delays.
          </p>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Customer First
          </h3>
          <p className="text-gray-600">
            Our support team is always ready to assist you before, during, and after your purchase.
          </p>
        </div>

      </div>

      {/* Mission Section */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Shopsy, our mission is to create a seamless online shopping experience by combining 
          trusted products, intuitive design, and reliable service. We aim to make technology 
          accessible and shopping enjoyable for everyone.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center text-center">
        <p className="text-gray-700 text-lg mb-4">
          Discover products you’ll love — shop smarter with Shopsy.
        </p>
        <a
          href="/product"
          className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition font-medium"
        >
          Explore Products
        </a>
      </div>

    </div>
  );
};

export default About;
