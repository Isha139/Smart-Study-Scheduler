export default function DeadlineSetter() {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1">Set Deadline:</label>
      <input type="date" className="border text-gray-500 border-gray-300 rounded p-2" />
    </div>
  );
}
