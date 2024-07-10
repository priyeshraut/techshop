import CategoryNavigation from "./CategoryNavigation";

const MainNavigationMenu = () => {

  const addStyle = {
    caterories: "caterories",
    bigScreenPadding: "bigScreenPadding",
  }


  return (
    <div className="cateroriesBg">
      <CategoryNavigation addStyle={addStyle} />
    </div>
  );
};

export default MainNavigationMenu;
