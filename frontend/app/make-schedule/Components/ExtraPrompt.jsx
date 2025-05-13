export default function ExtraPrompt() {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1">Include Extra:</label>
      <textarea
        className="text-black border border-gray-300 rounded p-2"
        placeholder="Write extra that you want to include in your schedule..."
      ></textarea>
    </div>
  );
}
