import "./App.scss";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import Shelf from "./components/Shelf/Shelf";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Search />
        <Main />
      </div>
      <Shelf />
      <Carousel />
    </div>
  );
}

export default App;
