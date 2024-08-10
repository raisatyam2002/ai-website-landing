import logo from "../img/Logo11.png";
export const Appbar = () => {
  return (
    <div className="flex justify-between mt-4 " style={{ height: "10%" }}>
      <div className="pl-16 pt-1">
        <img src={logo}></img>
      </div>
      <div className="flex gap-6 pt-[22px] text-white">
        <div>Home</div>
        <div>Service</div>
        <div>Contact</div>
        <div>About</div>
      </div>
      <div className="flex gap-2 pr-16 pt-4">
        <button className="rounded-2xl w-20 h-10 bg-transparent text-white border border-white ">
          Log in
        </button>
        <button className="rounded-2xl w-20 h-10 bg-[#2F80ED] text-white border-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};
