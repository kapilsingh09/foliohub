"use client"

import { StickyScroll } from "./ui/sticky-scroll-reveal"

const data = [
    {
        title: "Passion for Music",
        description: "Our team is driven by a deep love for music, ensuring every project resonates with emotion and creativity."
    },
    {
        title: "Expert Musicians",
        description: "We collaborate with skilled musicians who bring years of experience and artistry to every performance."
    },
    {
        title: "Innovative Sound",
        description: "We embrace cutting-edge technology and techniques to deliver fresh, unique musical experiences."
    },
    {
        title: "Personalized Approach",
        description: "Every client receives tailored solutions to match their musical vision and goals."
    }
]
const whyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={data} />
    </div>
  )
}

export default whyChooseUs
