import TimeSetter from "./TimeSetter";
import DeadlineSetter from "./DeadlineSetter";
import SubjectSelector from "./SubjectSelector";
import ExtraPrompt from "./ExtraPrompt";

export default function ScheduleForm() {
  return (
    <div className="p-4 border border-gray-300 rounded-lg space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <TimeSetter />
        <DeadlineSetter />
      </div>
      <SubjectSelector />
      <ExtraPrompt />
    </div>
  );
}
