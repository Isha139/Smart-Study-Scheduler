import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const outerCardStyle =
    "flex flex-col items-center justify-center bg-blue-950 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300";

  const innerCardStyle =
    "w-full h-40 bg-white flex items-center justify-center rounded-xl overflow-hidden";

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        SMART STUDY SCHEDULER
      </h1>

      {/* Navigation Bar */}
      <nav className="bg-blue-950 text-white mb-10 shadow rounded-xl">
        <ul className="flex justify-center mx-auto w-full">
          {["Make Schedule", "Add Subjects", "Quiz", "Performance", "History"].map((item, idx) => {
            const path = item.toLowerCase().replace(/ /g, "-");
            return (
              <li
                key={idx}
                className="flex-1 text-center py-2 hover:bg-blue-800 transition-all duration-300"
              >
                <Link href={`/${path}`} className="block w-full h-full no-underline">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/make-schedule">
          <div className={outerCardStyle}>
            <div className={`${innerCardStyle} relative`}>
              <Image src="/dashboard/Schedule.jpeg" alt="Make Schedule" width={300} height={160} className="rounded-xl object-cover w-full h-full"
                priority
              />
            </div>
            <p className="mt-4 font-semibold text-white text-center">Make Schedule</p>
          </div>
        </Link>

        <Link href="/add-subjects">
          <div className={outerCardStyle}>
            <div className={`${innerCardStyle} relative`}>
               <Image
                src="/dashboard/add-subjects.gif"
                alt="Add Subjects"
                width={300}
                height={160}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 font-semibold text-white text-center">Add Subjects</p>
          </div>
        </Link>

        <Link href="/quiz">
          <div className={outerCardStyle}>
            <div className={`${innerCardStyle} relative`}>
              <Image src="/dashboard/Quiz.gif" alt="Quiz" width={1000} height={900} className="rounded-xl object-contain w-full h-full"/>
            </div>
            <p className="mt-4 font-semibold text-white text-center">Quiz</p>
          </div>
        </Link>

        <Link href="/performance">
          <div className={outerCardStyle}>
            <div className={`${innerCardStyle} relative`}>
              <Image src="/dashboard/Performance.gif" alt="Performance" width={300} height={160}className="rounded-xl object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 font-semibold text-white text-center">See your Performance</p>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-8">
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          ⭐ 5 stars Review
        </button>
      </div>
    </main>
  );
}
