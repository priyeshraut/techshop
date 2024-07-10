import useHeader from "../hooks/useHeader";
import useAsideNav from "../hooks/useAsideNav";
import TopHeaderBar from "./HeaderComponents/TopHeaderBar";
import MainHeader from "./HeaderComponents/MainHeader";
import MainNavigationMenu from "./HeaderComponents/MainNavigationMenu";
import SideBarNavigation from "./HeaderComponents/SideBarNavigation";

const Header = () => {
  const headerRef = useHeader();
  const { aside, showAside, hideAside } = useAsideNav();


  return (
    <header ref={headerRef}>
      <TopHeaderBar />
      <MainHeader showAside={showAside} />
      <MainNavigationMenu />
      <SideBarNavigation aside={aside} hideAside={hideAside} />
    </header>
  );
};

export default Header;
