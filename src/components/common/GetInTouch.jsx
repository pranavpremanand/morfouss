import React, { useState, useEffect } from "react";
import gradientBlurImg1 from "../../assets/images/figma-home/gradient-blur1.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { companyDetails } from "../../content/constant";

const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "", visible: false });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: "all" });

  // Hide status message after 5 seconds
  useEffect(() => {
    let timer;
    if (statusMessage.visible) {
      timer = setTimeout(() => {
        setStatusMessage(prev => ({ ...prev, visible: false }));
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timer);
  }, [statusMessage.visible]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const body = `
      Name: ${data.name}\n
      Email: ${data.email}\n
      Phone: ${data.phone}\n
      Subject: ${data.subject}\n
      Message:\n${data.message}`;

      const payload = {
        body,
        name: "Morfouss",
        to: companyDetails.email,
        subject: data.subject
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );

      if (res.data.success) {
        setStatusMessage({
          text: "Your message was sent successfully! We'll get back to you soon.",
          type: "success",
          visible: true
        });
        // Reset the form
        reset();
      } else {
        setStatusMessage({
          text: "Something went wrong. Please try again later.",
          type: "error",
          visible: true
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      setStatusMessage({
        text: `Error: ${errorMessage}`,
        type: "error",
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex items-center relative z-[1] bg-black overflow-hidden"
    >
      <div className="wrapper z-0 min-h-[70vh] bg-black text-white py-[3.75rem] md:py-[5rem] relative h-full w-full">
        <div className="flex flex-col md:grid grid-cols-2 items-start gap-[1.75rem]">
          <div className="h-full relative flex items-start">
            <img
              src={gradientBlurImg1}
              className="top-0 md:top-[-7rem] scale-125 left-0 w-full object-contain absolute -z-[1]"
              alt=""
            />
            <div
              data-aos="fade-up"
              className="space-y-[1rem] md:space-y-10 w-full"
            >
              <h3 className="heading-2 !font-normal">Get in touch with us</h3>
              <p className="desc">
                We help businesses achieve sustainable growth, enhance their
                digital presence, and stay ahead of the curve in an increasingly
                competitive and fast-paced digital ecosystem.
              </p>
            </div>
          </div>
          <form
            data-aos="fade-up"
            className="flex flex-col gap-[0.75rem] w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <input
                type="text"
                className={`outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border ${errors.name ? "border-red-500" : "border-white/40"} p-[0.75rem] w-full ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                placeholder="Name"
                disabled={isSubmitting}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="email"
                className={`outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border ${errors.email ? "border-red-500" : "border-white/40"} p-[0.75rem] w-full ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                placeholder="Email"
                disabled={isSubmitting}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="tel"
                className={`outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border ${errors.phone ? "border-red-500" : "border-white/40"} p-[0.75rem] w-full ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                placeholder="Phone"
                disabled={isSubmitting}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                className={`outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border ${errors.subject ? "border-red-500" : "border-white/40"} p-[0.75rem] w-full ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                placeholder="Subject"
                disabled={isSubmitting}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div className="w-full">
              <textarea
                placeholder="Message"
                rows="5"
                className={`peer outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border ${errors.message ? "border-red-500" : "border-white/40"} p-[0.75rem] w-full ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] p-[0.125rem] tracking-wide hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full hover:border-white flex justify-center text-center transition-all duration-300 font-light text-[0.875rem] lg:text-sm w-[10rem] mx-auto group ${isSubmitting ? "opacity-70 cursor-not-allowed !from-gray-600 !via-gray-500 !to-gray-400" : ""
                }`}
            >
              <div className={`px-[1rem] lg:px-4 py-[0.75rem] lg:py-3 w-[10rem] bg-black rounded-full group-hover:bg-transparent transition-all duration-300 ${isSubmitting ? "text-gray-400" : ""
                }`}>
                {isSubmitting ? "Sending..." : "Submit"}
              </div>
            </button>
            {/* Status Message */}
            {statusMessage.visible && (
              <div
                className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${statusMessage.type === 'success'
                    ? 'bg-green-900/30 text-green-300 border border-green-500/50'
                    : 'bg-red-900/30 text-red-300 border border-red-500/50'
                  }`}
              >
                {statusMessage.text}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
