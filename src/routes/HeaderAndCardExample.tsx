import Alert from "../components/Alert";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

const recipes = [
  {
    ariaLabel: "margherita-pizza-recipe-card",
    imgUrl: "https://source.unsplash.com/x00CzBt4Dfk/1600x900",
    imgAlt: "margherita pizza",
    title: "Margherita Pizza",
    titleUrl: "#",
    description:
      "Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world.",
    time: "1h 15m",
    servings: 4,
    level: "Easy",
  },
];

const alertType = "info";

function HeaderAndCardExample() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="m-2">
        <Alert variant={alertType} text={`${alertType} alert`} />
      </div>
      <div className="flex p-2 gap-2">
        {recipes.map((r) => {
          return <RecipeCard {...r} key={r.ariaLabel} />;
        })}
      </div>
    </div>
  );
}

export default HeaderAndCardExample;
