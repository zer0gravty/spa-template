function ArticleExample() {
  return (
    (<div className="m-6 md:mx-auto p-8 space-y-6 md:w-1/2 xl:w-1/3 bg-sky-200 text-black">
      <h1 class='text-3xl font-carter-one'>Extending Font Example</h1>
      <p className="first-letter:text-cyan-400 first-line:text-cyan-600 first-letter:uppercase first-letter:font-bold first-letter:text-7xl first-letter:mr-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aspernatur
        quo rerum commodi asperiores? Atque eius reiciendis sunt a magni debitis
        fuga eos, sapiente delectus earum dolorem voluptates ratione distinctio!
      </p>
      <blockquote className="px-4 py-2 block border-l-[4px] border-sky-400 font-light italic bg-gradient-to-r from-teal-200 to-cyan-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo
        reprehenderit accusantium labore eveniet suscipit necessitatibus quam
        perspiciatis iste commodi! Saepe explicabo illum consectetur pariatur
        impedit quia perspiciatis molestiae quasi?
      </blockquote>
      <p className="indent-6">
        Aliquam id nulla dignissim felis bibendum aliquam. Cras vulputate
        blandit semper
      </p>
      <img
        src="https://source.unsplash.com/ZEfzyduAyJU"
        className="mr-3 w-1/2 float-left rounded [clip-path:circle(80%_at_30%_20%)] [shape-outside:circle(80%_at_30%_20%)] hover:sepia hover:drop-shadow-lg"
      />
      <p className="indent-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis
        molestias sequi consequatur reiciendis eos fugit commodi rerum excepturi
        nulla est deleniti dolorum doloribus ex tempore quia necessitatibus
        obcaecati inventore. Dignissimos ab cumque error, voluptatum iure sed,
        fugiat at amet ea distinctio quia, non animi quo totam rem. Eos, vel
        voluptatibus! Accusamus labore ullam numquam temporibus officia omnis
        atque ipsa.
      </p>
      <p className="indent-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis
        molestias sequi consequatur reiciendis eos fugit commodi rerum excepturi
        nulla est deleniti dolorum doloribus ex tempore quia necessitatibus
        obcaecati inventore. Dignissimos ab cumque error, voluptatum iure sed,
        fugiat at amet ea distinctio quia, non animi quo totam rem. Eos, vel
        voluptatibus! Accusamus labore ullam numquam temporibus officia omnis
        atque ipsa.
      </p>
      <ul className="ml-6 pl-6 space-y-3 list-disc marker:text-cyan-400 text-gray-600">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
      <p>
        Pellentesque tincidunt non orci id congue. Donec blandit pulvinar leo et
        tincidunt...
      </p>
      <hr className="text-cyan-600" />
      <div className="flex pt-6">
        <img
          className="mr-6 mb-6 w-24 h-24 rounded border-4 border-b-[16px] border-red-500 shadow-md shadow-red-900 origin-bottom-left rotate-6 hover:rotate-0 hover:scale-110 transition-transform duration-500"
          src="https://source.unsplash.com/WNoLnJo7tS8"
          alt="great picture"
        />
        <div>
          <p className="mt-3 font-semibold text-sm text-stone-900">
            David Smith
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas{" "}
            <a
              href="#"
              className="underline underline-offset-1 decoration-1 decoration-wavy hover:text-cyan-600"
            >
              varius vitae
            </a>{" "}
            ipsum et commodo.
          </p>
        </div>
      </div>
    </div>)
  );
}

export default ArticleExample;
