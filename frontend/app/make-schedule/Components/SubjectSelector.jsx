export default function SubjectsSelector() {
  const subjects = ["Math", "Science", "English", "History"];

  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1">Choose Subjects:</label>
      <select className="border border-gray-300 text-gray-500 rounded p-2">
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}
