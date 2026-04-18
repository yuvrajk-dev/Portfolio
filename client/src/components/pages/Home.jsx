import Author from "../Author/Author";
import Cards from "./Cards";
import Footer from "../routes/Footer";

const Home = () => {
  return (
    <div className="flex-1  ">
      <Author />
      <Cards />
    </div>
  );
};

export default Home;
