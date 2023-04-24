import { imgHandler } from "../Components/imgHandler";

const TransportationApplication = () => {
  const data = {
    solution_img: {
      image: imgHandler("/img/sub-solution.png"),
      alt: "一大塊太陽能板架設在停車場",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>
    </div>
  );
};

export default TransportationApplication;
