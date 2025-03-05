import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-blue-500" />,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "hello@merakiui.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />,
      title: "Office",
      description: "Come say hello at our office HQ.",
      contact: "100 Smith Street, Collingwood VIC 3066 AU",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-blue-500" />,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 000-0000",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="p-3 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {contact.icon}
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                {contact.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{contact.description}</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">{contact.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
