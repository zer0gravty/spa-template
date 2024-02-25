import { NavLink } from "react-router-dom";

function Menu() {
  const style = "p-5 border-[3px] rounded border-cyan-500 text-2xl text-center";

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 p-5">
        <NavLink className={style} to="/grid_examples_one">
          Grid Examples 1
        </NavLink>
        <NavLink className={style} to="/full_example_one">
          Full Example 1
        </NavLink>
        <NavLink className={style} to="/header_and_card_example">
          Header with Card Example
        </NavLink>
        <NavLink className={style} to="/article_example">
          Article Example
        </NavLink>
        <NavLink className={style} to="/plugins_example">
          Plugins Example
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
