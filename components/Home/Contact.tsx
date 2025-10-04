export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-primary section-dark"
    >
      <div className="px-6 py-18 md:py-24 lg:py-32 lg:px-8 min-h-[110svh]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold my-10 tracking-tight text-balance text-accent sm:text-5xl ">
            Contact us
          </h2>
          <p className="mt-2 text-lg/8 text-background/90 ">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-background "
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-background/90 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-background/80 placeholder:text-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent  "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-background "
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-background/90 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-background/80 placeholder:text-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent  "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-background "
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-background/90 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-background/80 placeholder:text-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent  "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-background "
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-background/90 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-background/80 placeholder:text-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent  "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-background "
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-background/90 outline-1 -outline-offset-1 outline-background/80 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-secondary  ">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="07123456789"
                    className="block min-w-0 grow py-1.5 px-3 text-base text-foreground placeholder:text-secondary focus:outline-none sm:text-sm/6   "
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-background "
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-background/90 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-background/80 placeholder:text-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent  "
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
