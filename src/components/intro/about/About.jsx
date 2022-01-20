import "./About.css";
import img from "../../../img/img.jpg";
import Award from "../../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="about">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">
            {" "}
            used to demonstrate the visual form of a document
          </p>
          <p className="a-desc">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div className="a-award">
            <img src={Award} alt="award" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
              best design Award{" "}
              </h4>
              <p className="a-award-desc">
                {" "}
                commonly used to demonstrate the visual form of a document 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
