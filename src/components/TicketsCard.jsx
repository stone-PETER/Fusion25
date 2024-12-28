export default function TicketsCard({ position, forWhom }) {
  return (
    <div
      className={`mt-3 md:mt-0 ${
        position == "center" ? "h-full w-60" : " h-full md:h-4/5 w-60 md:w-48"
      } flex flex-col gap-4`}
    >
      <div className="relative tickets-card h-full md:h-4/5 rounded-xl px-3 py-6 flex items-center flex-col">
        <img src="public/Images/tickets-logo.png" alt="" className=" w-full" />
        <h6
          className={`text-white font-ClashDisplay font-extrabold ${
            position == "center" ? "text-sm md:text-base" : "text-sm"
          } tracking-widest text-center mt-2`}
        >
          DECEMBER 24 | 25
        </h6>
        <img
          src="public/Images/qr.png"
          alt=""
          className={`w-3/5 ${position == "center" ? " mt-3 md:mt-5" : "mt-3"}`}
        />
        <p
          className={`text-white font-RoverExplore text-center ${
            position == "center" ? "text-[9px] md:text-xs" : "text-[9px]"
          } font-bold`}
        >
          SCAN AND JOIN
        </p>
        <p
          className={`absolute text-white font-RoverExplore text-center ${
            position == "center"
              ? " text-xs md:text-base bottom-1 md:bottom-3"
              : "text-xs bottom-1"
          } font-bold`}
        >
          {forWhom}
        </p>
      </div>
      <div className=" hidden md:block h-1/5 rounded-2xl bg-white">
        <img src="public/Images/barcode.png" />
      </div>
    </div>
  );
}
