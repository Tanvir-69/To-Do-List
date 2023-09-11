import SearchComponent from "./components/search-component/SearchComponent";
import ListComponent from "./components/list-component/ListComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";

const App = () => {
  return (
    <div className=" h-screen">
      <HeaderComponent />
      <SearchComponent />
      <ListComponent />
    </div>
  );
};

export default App;
