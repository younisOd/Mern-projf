export default function Contactcom() {
  return (
    <div className="text-gray-800">

      {/* Hero Image + Title */}
      <section className="relative h-[500px] w-full">
        <img
          src="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg/v1/fill/w_1225,h_986,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl italic font-light">Contact Us</h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h2 className="text-center text-2xl italic font-light mb-8 border-t border-gray-400 pt-4">
            You're Welcome to Visit
          </h2>

          <p className="italic font-medium mb-2">Have a Question? We're Here to Help</p>
          <p className="text-sm mb-6">
            Email us at <a href="mailto:info@my-domain.com" className="underline text-gray-700">info@my-domain.com</a> or send us a message via the contact form below and we’ll get back to you.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="flex-1 border border-gray-300 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="flex-1 border border-gray-300 px-4 py-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-300 px-4 py-2"
            />
            <textarea
              placeholder="Type your message here... *"
              className="w-full border border-gray-300 px-4 py-2 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 w-full hover:bg-gray-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column - Info */}
        <div className="space-y-10 text-sm">
          <div>
            <h3 className="italic font-medium mb-2">Our Stores</h3>
            <p>
              500 Terry Francine Street<br />
              San Francisco, CA 94158<br />
              Tel: 123-456-7890
            </p>
            <hr className="my-4 w-12 border-t-2 border-gray-400" />
            <p>
              500 Terry Francine Street<br />
              San Francisco, CA 94158<br />
              Tel: 123-456-7890
            </p>
          </div>
          <div>
            <h3 className="italic font-medium mb-2">Opening Hours</h3>
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 9pm</p>
            <p>Sunday: 9am - 10pm</p>
          </div>
        </div>
      </section>
    </div>
  );
}
