// frontend/app/dashboard/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const cardStyle = "flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-all duration-300";

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        SMART STUDY SCHEDULER
      </h1>

       {/* Navigation Bar */}
        <nav className="bg-blue-950 text-white mb-10 shadow rounded-xl">
          <ul className="flex justify-center mx-auto">
            {["Make Schedule", "Add Subjects", "Quiz", "Performance", "History"].map((item, idx) => {
              const path = item.toLowerCase().replace(/ /g, "-");
            return (
              <li key={idx} className="flex-1 text-center py-4 hover:bg-blue-800 transition-all duration-300">
                <a href={`/${path}`} className="block w-full h-full no-underline ">{item}</a>
              </li>
            );
           })}
          </ul>
        </nav>

      
      {/* Dasboard Cards */}
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/make-schedule">
          <div className={cardStyle}>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-xl text-xl text-red-500">Image</div>
            <p className="mt-4 font-semibold text-black">Make Schedule</p>
          </div>
        </Link>

        <Link href="/add-subjects">
          <div className={cardStyle}>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-xl text-xl text-red-500">Image</div>
            <p className="mt-4 font-semibold text-black">Add Subjects</p>
          </div>
        </Link>

        <Link href="/quiz">
          <div className={cardStyle}>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-xl text-xl text-red-500">Image</div>
            <p className="mt-4 font-semibold text-black">Quiz</p>
          </div>
        </Link>

        <Link href="/performance">
          <div className={cardStyle}>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-xl text-xl text-red-500">Image</div>
            <p className="mt-4 font-semibold text-black text-center">See your Performance</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          ⭐ 5 stars Review
        </button>
      </div>
    </main>
  );
}
