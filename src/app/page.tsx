import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-screen w-full flex flex-col">
        <div className="header bg-stone-100 w-full flex justify-between align-center h-12 px-4">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src="/no bg.png"
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
          className="grid grid-cols-2 gap-40 max-w-screen-xl m-auto h-[100vh-3rem]"
        >
          <div className="flex flex-col justify-center gap-8 py-32">
            <div className="flex gap-4 align-center">
              <h1 className="text-8xl font-bold from-orange-600 via-amber-500 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent">
                Aurora
              </h1>
              <Image
                src="/no bg.png"
                width="200"
                height="200"
                className="h-14 w-auto rotate-[-20deg]"
                alt="logo"
              ></Image>
            </div>
            <h2 className="text-5xl font-semibold">
              Your clothes shopping <br></br>partner.
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              <p className="text-2xl">
                Bring your closet{" "}
                <span className="text-orange-600 font-semibold">
                  on-the-go{" "}
                </span>
                for fitting.
              </p>
              <p className="text-2xl">
                <span className="text-orange-600 font-semibold">
                  Never regret
                </span>{" "}
                your purchases again.
              </p>
            </div>
          </div>

          <Image
            src="/pants photo-portrait.png"
            width="400"
            height="800"
          ></Image>
        </div>
      </div>
      <div id="features" className="bg-[#332622] w-full">
        <div className="flex flex-col max-w-screen-lg py-32 text-white m-auto gap-8">
          {/* first feature */}
          <div className="flex justify-evenly gap-40">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Customised models.</h2>
              <p className="text-lg mt-8 max-w-80">
                With our LIDAR technology, our fitting model will{" "}
                <span className="font-bold">
                  automatically calculate your measurements{" "}
                </span>{" "}
                for accurate fitting.
              </p>
            </div>
            <div>
              <Image src="/customised-models.png" width="400" height="800" />
            </div>
          </div>
          <div className="flex justify-evenly gap-40 flex-row-reverse">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Hassle-free fitting.</h2>
              <p className="text-lg mt-8 max-w-80">
                Visualise clothes on yourself with just pictures.{" "}
                <span className="font-bold">
                  No more queueing for fitting room.
                </span>
              </p>
            </div>
            <div className="flex">
              <Image src="/pants photo-portrait.png" width="200" height="400" />
              <Image
                src="/confirmation-portrait.png"
                width="200"
                height="400"
              />
            </div>
          </div>
          {/* third feature */}
          <div className="flex justify-evenly gap-40">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Recommendations.</h2>
              <p className="text-lg mt-8 max-w-80">
                Our AI matches your store items with the clothes you already
                have.{" "}
                <span className="font-bold">
                  Figure out if it is a fit before it is too late.
                </span>
              </p>
            </div>
            <div className="min-w-[200px] flex justify-center">
              <Image
                src="/recommended2-portrait.png"
                width="200"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="cta"
        className="h-screen w-full flex flex-col items-center justify-center bg-stone-100 gap-20"
      >
        <div className="relative">
          <h1 className="text-6xl font-bold text-center">
            Register your interest<br></br>for{" "}
            <span className="from-orange-600 via-amber-500 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent">
              Aurora{" "}
            </span>
            today!
          </h1>
          <Image
            src="/no bg.png"
            width="80"
            height="80"
            className="h-12 w-auto absolute -right-[50px] -bottom-[10px] rotate-[-20deg]"
            alt="logo"
          ></Image>
        </div>

        <input
          className=" placeholder:text-stone-600 bg-[#BFBFBF] w-[min(600px,90%)] p-4 rounded-xl shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
          placeholder="your email, please!"
        ></input>

        <button className="bg-orange-500 rounded-md text-white p-4 px-8 font-semibold text-2xl">
          Submit
        </button>
      </div>
    </main>
  );
}
