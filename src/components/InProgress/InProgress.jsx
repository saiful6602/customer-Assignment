import imgLeft from "../../assets/vector1.png";

const InProgress = ({ inProgress }) => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 grid grid-cols-3 items-center justify-center rounded-2xl
          "
      >
        <img className="h-full" src={imgLeft} alt="" />

        <div className="w-full grid items-center justify-center md:text-2xl font-bold  text-center text-white">
          <p className="hidden md:block">In-Progress</p>
          <p className="md:hidden">InProgress</p>

          <p> {inProgress} </p>
        </div>

        <img className="h-full scale-x-[-1]" src={imgLeft} alt="" />
      </div>
    </>
  );
};

export default InProgress;
