import { ArrowDownIcon } from "@heroicons/react/16/solid";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-primary z-0 min-h-[100vh] flex flex-col justify-center items-center max-w-screen section-dark"
    >

        <div className="absolute z-1 bg-fade-gradient inset-0 w-full h-full bg-[url('/diagonal-striped-brick.png')] pointer-events-none fade-in" />
          <div className="group z-2 text-center flex flex-row sm:flex-col justify-center items-center -ml-5 fade-in">
            <p className="text-xl sm:text-2xl text-background opacity-0 group-hover:opacity-50 duration-2500 hover:opacity-100">
              Bespoke
            </p>
            <div className="text-center text-6xl items-center font-bold flex flex-col sm:flex-row m-5">
              <h1 className="text-accent">No&nbsp;</h1>
              <h1 className="text-background"> Grout&nbsp;</h1>
              <h1 className="text-accent"> About&nbsp;</h1>
              <h1 className="text-background">It&nbsp;</h1>
            </div>
            <p className="text-xl sm:text-2xl mt-2 text-background opacity-0 group-hover:opacity-50 duration-2500 hover:opacity-100">
              Tiling
            </p>
          </div>


        <div className="absolute bottom-10 max-w-[100rem] w-full z-1">
          <div className="absolute left-10 lg:left-0">
            <ArrowDownIcon className="h-5 w-5 text-background animate-bounce" />
          </div>
          <div className="absolute invisible lg:visible right-10 xl:right-0">
            <ArrowDownIcon className="h-5 w-5 text-background animate-bounce" />
          </div>
        </div>

    </section>
  );
}
