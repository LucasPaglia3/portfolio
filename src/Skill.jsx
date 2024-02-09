const Skill = ({ logo, skill }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {logo}
      <span className="text-white">{skill}</span>
    </div>
  );
};

export default Skill;
