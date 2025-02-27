'use client'
import Footer from "@/components/Footer/Footer1";
// import Footer from "@/components/Footer2";
import { useEffect } from "react";
import Lenis from 'lenis';
import Faq from "./Faq/Faq";

export default function Last() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Faq/>
      <Footer />
    </main>
  );
}