import blur1 from "../../../assets/images/contact/left.png";
import blur2 from "../../../assets/images/contact/right.png";
import { allServices, companyDetails } from "../../../content/constant";
import { useState, useEffect, memo } from "react";
import { ReactComponent as Mail } from "../../../assets/svg/contact/Mail.svg";
import { ReactComponent as Address } from "../../../assets/svg/contact/Address.svg";
import { ReactComponent as Phone } from "../../../assets/svg/contact/Phone.svg";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import LazyImage from "../../../components/common/LazyImage";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "", visible: false });
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm(
    { mode: "all" }
  );

  // Set the selected service in the form when it changes
  useEffect(() => {
    if (selectedService) {
      // Set the value and trigger validation
      setValue("service", selectedService, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true
      });
    }
  }, [selectedService, setValue]);
  
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
      Name : ${data.firstName} ${data.lastName}\n
      Email : ${data.email}\n
      Subject : ${data.subject}\n
      Service : ${data.service}\n
      Message :\n${data.message}`

      const payload = {
        body,
        name: "KheyaMind AI",
        to: companyDetails.email,
        subject: data.subject,
        name: "Morfouss"
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
        setSelectedService(null);
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
    <div className="bg-black">
      <section className="flex flex-col w-screen relative pb-[10rem] overflow-hidden">
        <LazyImage src={blur1} className="absolute left-0 top-0" alt="Background blur effect" priority={true} />
        <LazyImage src={blur2} className="absolute right-0 top-0 md:block hidden" alt="Background blur effect" priority={true} />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto md:mt-[-2rem]">
          <h1
            data-aos="zoom-in"
            className="text-[2.8rem] sm:text-[6rem] md:text-[8rem] lg:text-[10.5rem] xl:text-[12.5rem] sm:tracking-[-0.8rem] md:tracking-[-1.2rem] xl:tracking-[-1.6rem] leading-none font-extrabold inline-block sm:ml-[-2rem] uppercase select-none"
          >
            contact <span className="ml-5"> us</span>
          </h1>
        </div>
        <LazyImage
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt="Noise texture"
          priority={true}
        />
        <div className="wrapper">
          <form
            data-aos="fade-up"
            className="space-y-[1.5rem] lg:space-y-6 md:!max-w-5xl desc !px-[1.5rem] !py-[2rem] lg:!px-24 lg:!py-8 z-[1] rounded-3xl mt-[2.8125rem] w-full text-white border border-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-[0.1875rem]">
                <label className="desc">First Name</label>
                <input
                  type="text"
                  className={`border ${errors.firstName ? "border-red-500" : "border-gray-500"} desc w-full rounded-[0.5rem] lg:rounded-lg p-[0.375rem] lg:py-2 lg:px-4 outline-none bg-transparent ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="First Name"
                  disabled={isSubmitting}
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-[0.1875rem]">
                <label className="desc">Last Name</label>
                <input
                  type="text"
                  className={`border ${errors.lastName ? "border-red-500" : "border-gray-500"} desc w-full rounded-[0.5rem] lg:rounded-lg p-[0.375rem] lg:py-2 lg:px-4 outline-none bg-transparent ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="Last Name"
                  disabled={isSubmitting}
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-[0.1875rem]">
                <label className="desc">Email</label>
                <input
                  type="email"
                  className={`border ${errors.email ? "border-red-500" : "border-gray-500"} desc w-full rounded-[0.5rem] lg:rounded-lg p-[0.375rem] lg:py-2 lg:px-4 outline-none bg-transparent ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
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
              <div className="space-y-[0.1875rem]">
                <label className="desc">Subject</label>
                <input
                  type="text"
                  className={`border ${errors.subject ? "border-red-500" : "border-gray-500"} desc w-full rounded-[0.5rem] lg:rounded-lg p-[0.375rem] lg:py-2 lg:px-4 outline-none bg-transparent ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="Subject"
                  disabled={isSubmitting}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-[0.1875rem]">
              <label className="desc">Service</label>
              <input
                type="hidden"
                {...register("service", { required: "Please select a service" })}
              />
              <div className="flex flex-wrap gap-[0.75rem] lg:gap-4">
                {allServices.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item.title)}
                    type="button"
                    disabled={isSubmitting}
                    className={`${selectedService === item.title
                      ? "bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] text-white"
                      : "bg-transparent"
                      } border border-gray-500 py-[0.1875rem] lg:py-[.4rem] px-[1.5rem] lg:px-6 rounded-[0.5rem] lg:rounded-lg desc font-medium ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>
            <div className="space-y-[0.1875rem]">
              <label className="desc">Message</label>
              <textarea
                rows="5"
                className={`border ${errors.message ? "border-red-500" : "border-gray-500"} bg-transparent text-start w-full rounded-[0.5rem] lg:rounded-lg p-[0.375rem] lg:py-2 lg:px-4 outline-none ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                placeholder="Message"
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
              className={`gradient-btn from-[#7338AC] via-[#239CE4] to-[#87F3FF] text-white !font-normal px-[1.5rem] lg:!px-8 mx-auto w-full sm:w-fit ${isSubmitting ? "opacity-70 cursor-not-allowed !bg-gray-500 !from-gray-600 !via-gray-500 !to-gray-400" : ""
                }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
          
          {/* Status Message */}
          {statusMessage.visible && (
            <div 
              className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${
                statusMessage.type === 'success' 
                  ? 'bg-green-900/30 text-green-300 border border-green-500/50' 
                  : 'bg-red-900/30 text-red-300 border border-red-500/50'
              }`}
            >
              {statusMessage.text}
            </div>
          )}
        </div>
        <div className="py-[1.5rem] relative z-[1] text-white lg:!py-6 flex gap-[1.25rem] lg:gap-8 justify-center">
          <Link
            to=""
            className="w-[2.5rem] h-[2.5rem] !min-w-[2.5rem] lg:w-10 lg:h-10 lg:!min-w-10 !p-2 flex justify-center items-center rounded-full gradient-btn from-[#7338AC] via-[#239CE4] to-[#87F3FF]"
          >
            <Linkedin strokeWidth={1.2} className="" />
          </Link>
          <Link
            to=""
            className="w-[2.5rem] h-[2.5rem] !min-w-[2.5rem] lg:w-10 lg:h-10 lg:!min-w-10 !p-2 flex justify-center items-center rounded-full gradient-btn from-[#7338AC] via-[#239CE4] to-[#87F3FF]"
          >
            <Facebook strokeWidth={1.2} className="" />
          </Link>
          <Link
            to=""
            className="w-[2.5rem] h-[2.5rem] !min-w-[2.5rem] lg:w-10 lg:h-10 lg:!min-w-10 !p-2 flex justify-center items-center rounded-full gradient-btn from-[#7338AC] via-[#239CE4] to-[#87F3FF]"
          >
            <Instagram strokeWidth={1.2} className="" />
          </Link>
          <Link
            to=""
            className="w-[2.5rem] h-[2.5rem] !min-w-[2.5rem] lg:w-10 lg:h-10 lg:!min-w-10 !p-2 flex justify-center items-center rounded-full gradient-btn from-[#7338AC] via-[#239CE4] to-[#87F3FF]"
          >
            <Twitter strokeWidth={1.2} className="" />
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="wrapper z-[1] mt-[4.0625rem] md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-0 rounded-2xl w-full py-[1.875rem] md:py-6 text-white border border-gray-500"
        >
          <div className="flex flex-col items-center gap-4 md:border-r w-full">
            <Mail className="w-[2.5rem] h-[2.5rem] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Email</h5>
              <p className="desc link">
                <Link to={`mailto:${companyDetails.email}`}>
                  {companyDetails.email}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:border-r w-full">
            <Address className="w-[2.5rem] h-[2.5rem] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Address</h5>
              <p className="desc">{companyDetails.address}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <Phone className="w-[2.5rem] h-[2.5rem] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Phone</h5>
              <p className="desc link">
                <Link to={`tel:${companyDetails.phone}`}>
                  {companyDetails.phone}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ContactUs);
