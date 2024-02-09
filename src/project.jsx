const Project = ({ title, desc, web, img }) => {
  return (
    <a
      href={web !== undefined ? `${web}` : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex p-1 bg-slate-900 hover:bg-slate-800 hover:cursor-pointer w-full rounded-xl"
    >
      <div className="flex items-center justify-center w-24 pl-4 text-white">
        {img}
      </div>
      <div className="flex flex-col w-full p-5">
        <span className="text-white ">{`${title}`}</span>
        <span className="text-gray-400 text-sm">{`${desc}`}</span>
      </div>
    </a>
  );
};

export default Project;
