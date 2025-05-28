interface SkillBarProps {
  name: string;
  percentage: number;
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h5 className="text-sm font-medium text-white">{name}</h5>
        <span className="text-xs font-light text-[#D4D4D8]">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-[#383838] rounded-xl">
        <div
          className={`h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl`}
          style={{width: `${percentage}%`}}
        />
      </div>
    </div>
  );
}

export default SkillBar;
