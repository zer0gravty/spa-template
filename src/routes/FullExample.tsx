import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaSearch,
  FaTwitter,
  FaWind,
} from "react-icons/fa";

function FullExample() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center sticky top-0 z-10 py-4 bg-blue-900">
        <div className="flex flex-shrink-0 ml-6 cursor-pointer gap-2">
          <FaWind size={40} className="text-yellow-500" />
          <span className="text-3xl font-semibold text-blue-200">Twitbook</span>
        </div>
        <ul className="flex overflow-x-hidden mr-10 font-semibold">
          <li className="mr-6 p-1 border-b-2 border-yellow-500">
            <a href="#" className="cursor-default text-blue-200">
              Home
            </a>
          </li>
          <li className="mr-6 p-1">
            <a href="#" className="text-white hover:text-blue-300">
              News
            </a>
          </li>
          <li className="mr-6 p-1">
            <a href="#" className="text-white hover:text-blue-300">
              Tutorials
            </a>
          </li>
          <li className="mr-6 p-1">
            <a href="#" className="text-white hover:text-blue-300">
              Videos
            </a>
          </li>
        </ul>
      </header>
      <div className="flex pb-4 bg-blue-100">
        <main className="flex flex-col w-2/3 pl-6 pr-4 pt-4">
          <article className="my-4 shadow">
            <a href="#">
              <img
                src="https://source.unsplash.com/xrVDYZRGdw4/1600x900"
                alt="mac-desktop"
                className="hover:opacity-75"
              />
            </a>
            <div className="flex flex-col p-6 pt-2 bg-white">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                Layout
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit maxime
                deserunt?
              </a>
              <p className="pb-3 text-sm">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  Some Guy
                </a>
                , Feb 31, 2902
              </p>
              <p className="pb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque modi obcaecati deleniti. A quos non sapiente tenetur
                autem iste iusto impedit, dolorem tempore! Nihil reiciendis
                beatae eveniet? Illum, nam nulla. Alias dicta sequi ex eum. Quia
                aut omnis maiores, odit perferendis libero provident architecto
                expedita earum fugit debitis iste aperiam perspiciatis ullam
                explicabo cumque consequuntur quaerat sit nesciunt doloribus!
                Libero?
              </p>
              <a
                href="#"
                className="flex uppercase text-xs text-blue-600 hover:text-yellow-500 gap-2 items-center"
              >
                <span>continue reading</span>
                <FaArrowRight />
              </a>
            </div>
          </article>
          <article className="my-4 shadow">
            <a href="#">
              <img
                src="https://source.unsplash.com/4UGmm3WRUoQ/1600x900"
                alt="some-stuff"
                className="hover:opacity-75"
              />
            </a>
            <div className="flex flex-col p-6 pt-2 bg-white">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                imagery
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <p className="pb-3 text-sm">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  Some Gal
                </a>
                , May 34, 2033
              </p>
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                minima facere autem officia, delectus a laudantium, consequatur
                culpa necessitatibus unde voluptatum voluptates, fuga atque?
                Accusamus perferendis alias beatae laborum voluptates. Possimus
                a nesciunt consectetur nisi laudantium reprehenderit praesentium
                suscipit consequatur. Ipsa laboriosam est, accusamus beatae
                animi alias nobis, molestias at consectetur impedit quidem ex,
                quos libero modi perferendis eum tempore.
              </p>
              <a
                href="#"
                className="uppercase text-xs text-blue-600 hover:text-yellow-500 flex items-center gap-2"
              >
                continue reading
                <FaArrowRight />
              </a>
            </div>
          </article>
        </main>
        <aside className="w-1/3 pl-4 pr-6 pt-8">
          <section>
            <form action="#" className="flex">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full px-3 py-2 rounded-1-lg focus:outline-none text-gray-800"
                placeholder="Search..."
              />
              <button
                aria-label="search-button"
                className="px-2 rounded-r-lg focus:outline-none text-center text-xl text-gray-400 hover:text-gray-900 bg-white"
                type="submit"
              >
                <FaSearch />
              </button>
            </form>
          </section>
          <section className="mt-8 text-white">
            <div className="p-4 rounded-lg shoadow-xl text-center bg-gradient-to-b from-red-400 to-red-200">
              <h3 className="font-semibold text-lg">Get the newsletter!</h3>
              <form action="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full mt-3 p-3 rounded shadow border border-gray-400 focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="w-full mt-4 p-4 rounded shadow font-semibold uppercase tracking-wider bg-green-600 hover:bg-green-"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
          <section className="mt-8">
            <h3 className="mb-4 pb-2 text-2xl font-semibold border-b-2 border-yellow-500 text-blue-600">
              Categories
            </h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-blue-900 hover:text-blue-500">
                  Topic 1
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-blue-900 hover:text-blue-500">
                  Topic 2
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-blue-900 hover:text-blue-500">
                  Topic 3
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
      <footer className="bg-blue-900">
        <div className="flex flex-wrap text-white">
          <div className="w-1/3 p-5 border-r border-blue-800">
            <div className="my-6 text-xl font-semibold uppercase">about us</div>
            <p className="text-gray-">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              hic dicta quis fugiat nobis? Deserunt a voluptatibus, sed
              repellendus iste distinctio? Commodi consectetur quos veniam
              aliquid voluptatibus, a impedit quibusdam.
            </p>
          </div>
          <div className="w-1/3 p-5 text-center border-r border-blue-800">
            <div className="my-6 text-xl font-semibold uppercase">
              contact us
            </div>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum natus ab at enim libero soluta unde corporis, adipisci quos
              quam iste amet suscipit quia vitae quae maxime aut architecto.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="w-10 h-10 p-1 rounded bg-blue-500 text-center"
                aria-label="facebook-button"
              >
                <FaFacebook className="w-full" size={25} />
              </button>
              <button
                className="w-10 h-10 p-1 rounded bg-blue-400 text-center"
                aria-label="twitter-button"
              >
                <FaTwitter className="w-full" size={25} />
              </button>
              <button
                className="w-10 h-10 p-1 rounded bg-gray-700 text-center"
                aria-label="github-button"
              >
                <FaGithub className="w-full" size={25} />
              </button>
            </div>
          </div>

          <div className="w-1/3 p-5">
            <div className="my-6 text-sl font-semibold uppercase">
              say hello
            </div>
            <form action="">
              <input
                type="email"
                name="contact-email"
                id="contact-email"
                className="w-full h-10 mb-4 p-2 border-b-2 border-blue-800 bg-blue-900"
                placeholder="Your email"
              />
              <textarea
                name="contact-msg"
                id="contact-msg"
                className="w-full h-24 mb-6 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900"
                placeholder="Your message..."
              ></textarea>
              <button
                type="button"
                className="w-full px-4 py-2 rounded font-semibold tracking-wider bg-yellow-600 hover:bg-yellow-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FullExample;
