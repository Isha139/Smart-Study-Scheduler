export default function TimeSetter() {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1">Set Time:</label>
      <input type="time" className="border text-gray-500 border-gray-300 rounded p-2" />
    </div>
  );
}
