import { ArrowDownIcon } from "@heroicons/react/16/solid";
export default function Home() {
  return (
    <section id="hero" className="relative bg-primary bg-[url('/diagonal-striped-brick.png')] min-h-[100vh] flex flex-col justify-center items-center">
      <div className="group text-center flex flex-row sm:flex-col justify-center items-center">
        <p className="text-2xl sm:text-3xl sm:mb-5 text-background opacity-0 group-hover:opacity-50 duration-2500 hover:opacity-100">Bespoke</p>
        <div className="pl-5 text-center text-6xl items-center font-bold flex flex-col sm:flex-row">
          <h1 className="text-accent">No&nbsp;</h1>
        <h1 className="text-background"> Grout&nbsp;</h1>
        <h1 className="text-accent"> About&nbsp;</h1>
        <h1 className="text-background">It&nbsp;</h1>
      </div>
      <p className="text-2xl sm:text-3xl text-background sm:mt-6 ml-2 sm:ml-0 opacity-0 group-hover:opacity-50 duration-2500 hover:opacity-100"> Tiling</p>
    </div>
    <div className="absolute bottom-10 left-10">
      <ArrowDownIcon className="h-6 w-6 text-background animate-bounce" />
    </div>
  </section>
    
  );
}
