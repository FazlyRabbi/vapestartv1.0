import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import Complements from "@/components/Testimonial/Complements";
import ReviewForm from "@/components/Testimonial/ReviewForm";
import TestimonialBanner from "@/components/Testimonial/TestimonialBanner";

export default function Testimonial() {
  return (
    <section>
      <Header />
      <TestimonialBanner>Testimonials</TestimonialBanner>
      <p className="font-eco lg:text-[45px] text-[23px] lg:w-3/4 mx-auto font-semibold w-3/4 md:w-5/6">
        We love getting feedbacks from our e-cig customers! If you've got
        opinions about how we're doing, a story about your Vapester shop
        experience, or even want to let us know how we can improve your
        experience, we would love to hear from you!
      </p>
      <Complements />
      <ReviewForm />
      <Footer />
    </section>
  );
}
