const About = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🌸 Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-8 text-center">
          About StyleUp
        </h1>

        {/* 🌸 Intro */}
        <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mb-12">
          StyleUp is a modern fashion-focused e-commerce platform designed to make
          online shopping elegant, simple, and enjoyable. From trendy dresses to
          everyday essentials, we bring you carefully curated styles at affordable
          prices — all in one place.
        </p>

        {/* 🌸 Values Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-14">

          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Premium Quality
            </h3>
            <p className="text-slate-600">
              Every product at StyleUp is handpicked to meet high standards of
              quality, comfort, and durability.
            </p>
          </div>

          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Fast & Secure Delivery
            </h3>
            <p className="text-slate-600">
              We ensure safe packaging and reliable delivery so your fashion
              reaches you on time, every time.
            </p>
          </div>

          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Customer First
            </h3>
            <p className="text-slate-600">
              Our support team is always here to help you before, during, and
              after your purchase.
            </p>
          </div>

        </div>

        {/* 🌸 Mission Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            At StyleUp, our mission is to redefine online fashion shopping by
            combining modern design, trusted products, and seamless user
            experience. We believe style should be accessible, expressive,
            and enjoyable for everyone.
          </p>
        </div>

        {/* 🌸 CTA */}
        <div className="flex flex-col items-center text-center">
          <p className="text-slate-600 text-lg mb-6">
            Discover styles that define you — elevate your look with StyleUp.
          </p>
          <a
            href="/product"
            className="bg-pink-600 text-white px-10 py-3 rounded-full 
            hover:bg-pink-700 transition font-semibold"
          >
            Explore Collections
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
