const Happycard = (props) => {
  return (
    <div className="group h-56 w-56 [perspective:1000px]">
      <div className="relative h-full w-full rounded-4xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={props.src}
          />
        </div>
      </div>
    </div>
  );
};
export default Happycard;
