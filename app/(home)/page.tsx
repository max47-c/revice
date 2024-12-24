"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image
import Footer from "@/components/homeComp/Footer";
import Navbar from "@/components/homeComp/Navbar";

const HomePage: React.FC = () => {
  const router = useRouter();

  const features = [
    { title: "Map of Blood Banks", description: "Find nearby blood banks easily.", icon: "🗺️" },
    { title: "Upcoming Campaigns", description: "Stay updated with upcoming donation events.", icon: "📅" },
    { title: "Donor Rewards", description: "Earn rewards for your contributions.", icon: "🏆" },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Summer Blood Drive",
      date: "August 15, 2024",
      time: "10:00 AM",
      location: "City Park",
      details: "Join us for a day of giving and help save lives!",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      name: "Fall Donation Campaign",
      date: "September 30, 2024",
      time: "9:00 AM",
      location: "Community Center",
      details: "Help us collect vital donations as the seasons change.",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 3,
      name: "Winter Blood Donation",
      date: "December 10, 2024",
      time: "11:00 AM",
      location: "City Hall",
      details: "Warm hearts during the cold months—donate blood!",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 4,
      name: "Spring Health Fair",
      date: "March 25, 2025",
      time: "10:00 AM",
      location: "Local School",
      details: "Participate in our health fair and donate blood to help others.",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  const faqs = [
    { question: "Who can donate blood?", answer: "Anyone between the ages of 18-65 and in good health can donate." },
    { question: "How often can I donate?", answer: "You can donate once every 56 days." },
    { question: "What happens to my blood donation?", answer: "Your blood is tested, processed, and distributed to hospitals." },
  ];

  const testimonials = [
    { name: "John Doe", message: "Donating blood is one of the most rewarding experiences of my life. I feel like I’m making a real difference!" },
    { name: "Jane Smith", message: "I’ve donated blood several times, and I appreciate how easy it is to find campaigns near me." },
    { name: "Alice Johnson", message: "The process was simple, and I loved the sense of community at the donation event!" },
  ];

  const handleButtonClick = () => {
    router.push("/sign-in"); // Replace "/sign-in" with the correct path for your sign-in page
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-red-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Join Us in Saving Lives</h1>
          <p className="mt-4 text-lg">Become a blood donor today and help those in need.</p>
          <button
            onClick={handleButtonClick}
            className="mt-6 inline-block rounded-lg bg-white text-red-600 px-6 py-3 font-semibold transition duration-300 hover:bg-gray-200"
          >
            Get Involved
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <h2 className="text-center text-3xl font-bold">App Features</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold">Upcoming Campaigns</h2>
        <div className="mt-8 px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="block rounded-lg overflow-hidden shadow-sm shadow-indigo-100">
              {/* <Image
                alt={campaign.name}
                src={campaign.image}
                width={800} // Set appropriate width
                height={400} // Set appropriate height
                className="h-40 w-full rounded-md object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-bold">{campaign.name}</h3>
                <p className="text-gray-500">{campaign.date} at {campaign.time}</p>
                <p className="mt-2 text-gray-700">{campaign.details}</p>
                <p className="mt-1 text-gray-500">Location: {campaign.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4 px-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold">What Our Donors Say</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition">
              <p className="text-center text-gray-600 italic">{testimonial.message}</p>
              <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
