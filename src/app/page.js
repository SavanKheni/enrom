"use client";

import Herosection from "@/components/Herosection/Herosection";
import Aboutsection from "@/components/About/Aboutsection";
import Speciality from "@/components/Speciality/Speciality";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Association from "@/components/Association/Association";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Aboutsection />
      <Speciality />
      <Services />
      <Testimonial />
      <Association />
    </main>
  );
}
