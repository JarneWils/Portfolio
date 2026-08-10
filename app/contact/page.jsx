"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+32) 479 48 93 23",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jarnewils.werk@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adres",
    description: "Belgium, 3670 Oudsbergen",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Vul alle verplichte velden in.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Bericht succesvol verzonden!",
        });

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Er ging iets mis.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: "Er is een serverfout opgetreden.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 1,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-20">
          {/* FORM */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              Let's work together!
            </h2>

            <p className="text-white/60 mb-8 max-w-xl">
              Heb je een vraag, project of idee? Stuur me gerust een bericht.
              Ik neem zo snel mogelijk contact met je op.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="firstname"
                  placeholder="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="lastname"
                  placeholder="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="message"
                placeholder="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[180px]"
              />

              {status.message && (
                <div
                  className={`rounded-md px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="max-w-40 mt-2"
              >
                {isLoading ? "Verzenden..." : "Send"}
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-[52px] h-[52px] bg-[#27272e] text-accent rounded-md flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xl font-bold">
                      {item.title}
                    </p>

                    {item.title === "Email" ? (
                      <a
                        href="mailto:jarnewils.werk@gmail.com"
                        className="text-white/60 hover:text-accent transition-colors"
                      >
                        {item.description}
                      </a>
                    ) : item.title === "Phone" ? (
                      <a
                        href="tel:+32479489323"
                        className="text-white/60 hover:text-accent transition-colors"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-white/60">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;