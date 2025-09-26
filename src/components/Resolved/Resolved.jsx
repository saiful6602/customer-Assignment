import imgLeft from "../../assets/vector1.png";

const Resolved = ({ resolved }) => {
  return (
    <div
      className="bg-gradient-to-r from-emerald-400 to-teal-500 grid grid-cols-3 items-center justify-center rounded-2xl lg:
    "
    >
      <img className="h-full" src={imgLeft} alt="" />

      <div className="w-full py-4 grid items-center justify-center md:text-2xl font-bold  text-center text-white">
        <p>Resolved</p>
        <p> {resolved} </p>
      </div>

      <img className="h-full scale-x-[-1]" src={imgLeft} alt="" />
    </div>
  );
};

export default Resolved;
