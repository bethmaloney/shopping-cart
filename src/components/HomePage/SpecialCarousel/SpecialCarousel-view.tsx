import React from "react";

const View: React.FC = () => {
  const imageLink = (text: string) => `https://via.placeholder.com/900x200.png?text=${text}`;

  return (
    <div id="carouseSpecialIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouseSpecialIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouseSpecialIndicators" data-slide-to="1"></li>
        <li data-target="#carouseSpecialIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={imageLink("Big Special")} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={imageLink("Another Special")}alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={imageLink("The Last Special")} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouseSpecialIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouseSpecialIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default View;
