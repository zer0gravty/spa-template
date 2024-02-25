const box = {
  color: "white",
  backgroundColor: "green",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "150px",
  fontSize: "2rem",
  fontWeight: 700,
};

function GridExamples() {
  return (
    <div className="mx-auto p-8 w-full lg:w-1/2 border-[5px] border-red-800">
      <h1 className="text-3xl font-bold">Grid Layout Example</h1>
      <h2 className="my-6 text-2xl underline underline-offset-4">Example #1</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-2">
        <div className="row-span-2 col-span-2" style={box}>
          1
        </div>
        <div style={box}>2</div>
        <div style={box}>3</div>
      </div>
      <h2 className="text-2xl my-6 underline underline-offset-4">Example #2</h2>
      <div className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-2">
        <div className="row-span-4" style={box}>
          1
        </div>
        <div style={box}>2</div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
      </div>
      <h2 className="text-2xl my-6 underline underline-offset-4">Example #3</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-4">
        <div className="col-span-2" style={box}>
          1
        </div>
        <div className="col-span-2" style={box}>
          2
        </div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
      </div>
      <h2 className="text-2xl underline underline-offset-4 my-6">Example #4</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-2">
        <div className="row-span-2" style={box}>
          1
        </div>
        <div className="row-span-4" style={box}>
          2
        </div>
        <div className="row-span-2" style={box}>
          3
        </div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
        <div style={box}>7</div>
      </div>
      <hr className="my-6 border-[2px] border-cyan-500" />
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-2">
        <div className="row-span-2" style={box}>
          1
        </div>
        <div className="row-start-3" style={box}>
          2
        </div>
        <div className="row-start-4" style={box}>
          3
        </div>
        <div className="row-span-4" style={box}>
          4
        </div>
        <div className="row-span-2" style={box}>
          5
        </div>
        <div style={box}>6</div>
        <div style={box}>7</div>
      </div>
      <h2 className="text-2xl my-6 underline underline-offset-4">Example #5</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <div className="col-start-1 col-end-3" style={box}>
          1
        </div>
        <div className="row-start-2 row-end-4" style={box}>
          2
        </div>
        <div className="row-start-2" style={box}>
          3
        </div>
        <div className="row-start-1 row-end-3" style={box}>
          4
        </div>
        <div className="col-start-2 col-end-4" style={box}>
          5
        </div>
      </div>
    </div>
  );
}

export default GridExamples;
