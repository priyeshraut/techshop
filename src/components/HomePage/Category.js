import { Link } from "react-router-dom";

const Category = ({ catImg, catHeading, route }) => {
  return (
    <Link to={`/${route}`}>
      <div className="caterory">
        <div className="catImg">
          <img src={catImg} alt="" />
        </div>
        <h3 className="catName">{catHeading}</h3>
      </div>
    </Link>
  );
};

export default Category;
