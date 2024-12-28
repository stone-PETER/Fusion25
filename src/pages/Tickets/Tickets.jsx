import React from "react";
import Heading from "../../components/Heading";
import TicketsCard from "../../components/TicketsCard";

export default function Tickets() {
  return (
    <section id="tickets">
    <div className="w-full bg-black py-12 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="gradient-circle absolute z-10  left-10"></div>
      <div className="gradient-circle absolute z-10  right-10"></div>
      <div className="gradient-circle absolute z-10 bottom-0 left-1/4"></div>

      <Heading heading="grab your tickets now" />

      {/* tickets container */}
      <div className="z-30 w-full lg:w-3/5 md:h-[30rem] bg-white bg-opacity-15 rounded px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between flex-col md:flex-row">
        <TicketsCard position={"side"} forWhom={"NON-IEEE MEMBERS"} />
        <TicketsCard position={"center"} forWhom={"IEEE MEMBERS"} />
        <TicketsCard position={"side"} forWhom={"MACEians"} />
      </div>
    </div>
    </section>
  );
}
