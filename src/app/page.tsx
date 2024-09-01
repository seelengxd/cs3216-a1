import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-screen w-full flex flex-col">
        <div className="header bg-stone-100 w-full flex justify-between align-center h-12 px-4 py-2">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src="/cs3216-a1/no bg.png"
              width="40"
              height="40"
              className="h-8 w-auto"
              alt="logo"
            ></Image>
            <div className="font-bold">Aurora</div>
          </div>
          <div className="flex items-center">
            <a
              href="#cta"
              className="bg-orange-500 rounded-md text-white p-1 px-4 font-semibold"
            >
              Register Interest
            </a>
          </div>
        </div>
        <div
          id="home"
          className="text-center md:text-left grid md:grid-cols-2 md:gap-40 max-w-screen-xl m-auto h-[100vh-3rem] p-4"
        >
          <div className="flex flex-col justify-center gap-2 md:gap-8 pt-8 pb-4 md:py-32">
            <div className="justify-center md:justify-left flex gap-4 align-center">
              <h1 className="text-5xl md:text-8xl font-bold from-orange-600 via-amber-500 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent">
                Aurora
              </h1>
              <Image
                src="/cs3216-a1/no bg.png"
                width="200"
                height="200"
                className="h-14 w-auto rotate-[-20deg]"
                alt="logo"
              ></Image>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold">
              Your clothes shopping <br></br>partner.
            </h2>
            <div className="flex flex-col gap-1 md:gap-4 md:mt-8">
              <p className="text-lg md:text-2xl">
                Bring your closet{" "}
                <span className="text-orange-600 font-semibold">
                  on-the-go{" "}
                </span>
                for fitting.
              </p>
              <p className="text-lg md:text-2xl">
                <span className="text-orange-600 font-semibold">
                  Never regret
                </span>{" "}
                your purchases again.
              </p>
            </div>
          </div>

          <Image
            src="/cs3216-a1/pants photo-portrait.png"
            width="400"
            height="800"
            alt="pants"
          ></Image>
        </div>
      </div>
      <div
        id="features"
        className="bg-[#332622] w-full px-[20px] py-[40px] md:p-0"
      >
        <div className="flex flex-col max-w-screen-lg md:py-32 text-white m-auto gap-[6em] md:gap-8">
          {/* first feature */}
          <div className="flex flex-col-reverse gap-[20px] md:flex-row justify-evenly md:gap-40">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Customised models.</h2>
              <p className="text-lg mt-8 md:max-w-80">
                With our LIDAR technology, our fitting model will{" "}
                <span className="font-bold">
                  automatically calculate your measurements{" "}
                </span>{" "}
                for accurate fitting.
              </p>
            </div>
            <div>
              <Image
                src="/cs3216-a1/customised-models.png"
                width="400"
                height="800"
                alt="customised models"
              />
            </div>
          </div>
          <div className="flex justify-evenly gap-0 md:gap-40 flex-col-reverse md:flex-row-reverse">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Hassle-free fitting.</h2>
              <p className="text-lg mt-8 md:max-w-80">
                Visualise clothes on yourself with just pictures.{" "}
                <span className="font-bold">
                  No more queueing for fitting room.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 md:flex">
              <Image
                src="/cs3216-a1/pants photo-portrait.png"
                width="200"
                height="400"
                alt="pants"
              />
              <Image
                src="/cs3216-a1/confirmation-portrait.png"
                width="200"
                height="400"
                alt="confirmation"
              />
            </div>
          </div>
          {/* third feature */}
          <div className="flex justify-evenly gap-[20px] md:gap-40 flex-col-reverse md:flex-row">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Recommendations.</h2>
              <p className="text-lg mt-8 md:max-w-80">
                Our AI matches your store items with the clothes you already
                have.{" "}
                <span className="font-bold">
                  Figure out if it is a fit before it is too late.
                </span>
              </p>
            </div>
            <div className="min-w-[200px] flex justify-center">
              <Image
                alt="recommended"
                src="/cs3216-a1/recommended2-portrait.png"
                width="200"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="cta"
        className="h-screen w-full flex flex-col items-center justify-center bg-stone-100 gap-10 md:gap-20"
      >
        <div className="relative">
          <Image
            src="/cs3216-a1/no bg.png"
            width="80"
            height="80"
            className="h-12 w-auto m-auto mb-4 md:hidden "
            alt="logo"
          ></Image>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Register your interest<br></br>for{" "}
            <span className="from-orange-600 via-amber-500 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent">
              Aurora{" "}
            </span>
            today!
          </h1>
          <Image
            src="/cs3216-a1/no bg.png"
            width="80"
            height="80"
            className="hidden md:block h-12 w-auto absolute -right-[50px] -bottom-[10px] rotate-[-20deg]"
            alt="logo"
          ></Image>
        </div>

        <input
          className="mt-8 md:mt-0 placeholder:text-stone-600 bg-[#BFBFBF] w-[min(600px,90%)] p-4 rounded-xl shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
          placeholder="your email, please!"
        ></input>

        <button className="bg-orange-500 rounded-md text-white p-4 px-8 font-semibold text-2xl">
          Submit
        </button>
      </div>
    </main>
  );
}
