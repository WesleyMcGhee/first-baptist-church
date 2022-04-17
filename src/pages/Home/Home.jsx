import Header from "../../conponents/Header/Header";
import churchBuilding from "../../photos/fbcphoto2.jpg";
import "./Home.css";
import GoogleMaps from "../../conponents/googlemaps/GoogleMaps";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content-div">
        <div className="content-header">
          <h1 className="welcome-header">Welcome to First Baptist Church</h1>
        </div>
        <div className="content-img">
          <p className="content-paragraph">
            Our prayer is that you will be blessed and strengthened by the power
            of Jesus, and that you will live a life of abundance in fellowship,
            joy and liberty. First Baptist church is here for you. It is not
            just a church; it is a fellowship of believers coming together to
            declare the glory of the Lord, and to celebrate Jesus as King. We
            study the Word of God, practice what we learn, and in the process
            grow together. May God richly bless you! May the Lord bless you and
            keep you! We hope to see you soon!
          </p>
          <img
            src={churchBuilding}
            alt="The church building"
            className="church-img"
          ></img>
        </div>
        <div className="content-bottom">
          <GoogleMaps />
          <div className="times">
            <table className="table">
              <tr className="table-header-box">
                <th className="table-header">Worship Times</th>
              </tr>
              <tr className="table-disc-box">
                <td className="table-disc">Sunday School</td>
                <td className="table-disc">9:00am</td>
              </tr>
              <tr className="table-disc-box">
                <td className="table-disc">Sunday Worship</td>
                <td className="table-disc">10:00am</td>
              </tr>
              <tr className="table-disc-box">
                <td className="table-disc">Sunday Bible Study</td>
                <td className="table-disc">11:30am</td>
              </tr>
              <tr className="table-disc-box">
                <td className="table-disc">Wednesday Night</td>
                <td className="table-disc">7:00pm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
