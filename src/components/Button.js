const Button = () => {
  return (
    <button
      onClick={() => voteMe1(votes1)}
      className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer"
    >
      <span className="text-base text-slate-50 font-medium ">Vote</span>
    </button>
  );
};

export default Button;
