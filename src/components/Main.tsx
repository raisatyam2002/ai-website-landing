import chaosgpt from "../img/chaosgpt--scaled copy 1 (1).png";
import arrow from "../img/Arrow 1.png";
import frame7 from "../img/Frame 7.png";
import group2 from "../img/Group 2.png";
import group1 from "../img/Group 1.png";
export const Main = () => {
  return (
    <div
      className="flex relative justify-space  text-white pt-32 pl-24 "
      style={{ height: "90%" }}
    >
      <div style={{ width: "557px", height: "582", gap: "4px" }}>
        <h1 className="text-2xl mb-4 font-thin">INTRODUICNG</h1>
        <h1 className="text-6xl mb-4 ">CHAT BOT </h1>
        <h1 className="text-6xl mb-4">AI GENERETED </h1>
        <p className="">Lorem Ipsum is simply dummy text of the printing</p>
        <p className="">and typesetting industry. Lorem Ipsum has been</p>
        <p>the industry's standard dummy text ever since the</p>
        <p className="mb-4">1500s.</p>
        <button className="border border-white rounded-2xl w-28 h-10">
          Get Started
        </button>
      </div>
      <div
        className="absolute"
        style={{ width: "759px", height: "650px", left: "340px", top: "90px" }}
      >
        <img src={chaosgpt} style={{ height: "100%", width: "100%" }}></img>
      </div>
      <div className="absolute" style={{ left: "1030px", top: "230px" }}>
        <h1 className="text-xl  font-thin">
          Effect Conversation <img src={arrow} className="inline ml-2"></img>
        </h1>
        <img src={frame7} className="mt-6"></img>
        <p className="mt-6">Lorem Ipsum is simply dummy text of the</p>
        <p> printing and typesetting industry. Lorem Ipsum </p>
        <p> has been the industry's standard dummy text </p>
        <p> ever since the 1500s. </p>
        <div className="mt-6 flex gap-2">
          <img src={group2}></img>
          <img src={group1}></img>
        </div>
      </div>
    </div>
  );
};
