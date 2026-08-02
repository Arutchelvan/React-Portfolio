import { useState } from "react";

const initialGoal = [
  {
    id: 1,
    goal: "Running around the food ball ground",
    tag: "health",
    task: "running",
    target: 5,
    currentStatus: 0,
  },
  {
    id: 2,
    goal: "Reading my favorite story book today",
    tag: "learning",
    task: "reading",
    target: 10,
    currentStatus: 0,
  },
  {
    id: 3,
    goal: "Cleaning the whole house and washing cloth",
    tag: "cleaning",
    task: "room",
    target: 10,
    currentStatus: 0,
  },
];

export default function App() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[30%_70%] gap-1">
          <aside className="p-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex justify-between  mb-5">
              <h4 className="font-bold text-gray-900">My Goals</h4>
              <Button>Add Goal +</Button>
            </div>

            <GoalCardList />
          </aside>
          <main className="p-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <AddGoalForm />
          </main>
        </div>
      </div>
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="rounded-xl bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function GoalCardList() {
  const [goals, setGoals] = useState(initialGoal);

  return (
    <div>
      {goals.map((goal) => (
        <GoalCard details={goal} key={goal.id} />
      ))}
    </div>
  );
}

function GoalCard({ details }) {
  const percentage = (details.currentStatus / details.target) * 100;

  return (
    <div className="rounded-xl border border-green-400 bg-green-100 p-6 shadow-sm mb-5">
      <div className="flex justify-between align-center mb-2">
        <span className="text-[12px] text-green-900 uppercase font-600">
          {details.tag}
        </span>

        {percentage === 0 && (
          <span className="text-[12px] bg-red-600 text-white uppercase px-2 rounded-2xl">
            Start Now
          </span>
        )}
        {percentage > 0 && percentage <= 49 && (
          <span className="text-[12px] bg-yellow-400 text-black uppercase px-2 rounded-2xl">
            Behind
          </span>
        )}
        {percentage >= 50 && percentage < 100 && (
          <span className="text-[12px] bg-orange-500 text-white uppercase px-2 rounded-2xl">
            On Track
          </span>
        )}
        {percentage === 100 && (
          <span className="text-[12px] bg-green-900 text-white uppercase px-2 rounded-2xl">
            Completed
          </span>
        )}
      </div>
      <h4 className="text-black text-md mb-5">{details.goal}</h4>

      <div className="w-full max-w-md space-y-2 mb-5">
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="text-[12px] text-gray-500 font-normal">
            {percentage}%
          </span>
          <span className="text-[12px] text-gray-500 font-normal capitalize">
            {details.currentStatus} / {details.target} {details.task}
          </span>
        </div>

        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="h-full bg-green-900 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <Button>Update Progress</Button>
    </div>
  );
}

function AddGoalForm() {
  return (
    <form className="flex flex-wrap">
      <div className="mb-5 w-full">
        <label className="text-sm font-medium text-gray-700 w-full block mb-2">
          Goal Title
        </label>
        <input
          type="text"
          value={1}
          className="rounded-md border border-gray-300 bg-slate-100 px-3 py-3 text-sm focus:outline-indigo-600 block w-full"
        />
      </div>
      <div className="mb-5 lg:w-1/2 md:w-full w-full lg:pr-2 md:pr-0">
        <label className="text-sm font-medium text-gray-700 w-full block mb-2">
          Tag
        </label>
        <input
          type="text"
          value={1}
          className="rounded-md border border-gray-300 bg-slate-100 px-3 py-3 text-sm focus:outline-indigo-600 block w-full"
        />
      </div>
      <div className="mb-5 lg:w-1/2 md:w-full w-full lg:pl-2 md:pl-0">
        <label className="text-sm font-medium text-gray-700 w-full block mb-2">
          Task
        </label>
        <input
          type="text"
          value={1}
          className="rounded-md border border-gray-300 bg-slate-100 px-3 py-3 text-sm focus:outline-indigo-600 block w-full"
        />
      </div>
      <div className="mb-5 lg:w-1/2 md:w-full w-full lg:pr-2 md:pr-0">
        <label className="text-sm font-medium text-gray-700 w-full block mb-2">
          Target
        </label>
        <input
          type="text"
          value={1}
          className="rounded-md border border-gray-300 bg-slate-100 px-3 py-3 text-sm focus:outline-indigo-600 block w-full"
        />
      </div>
      <div className="mb-5 lg:w-1/2 md:w-full w-full lg:pl-2 md:pl-0">
        <label className="text-sm font-medium text-gray-700 w-full block mb-2">
          Current Status
        </label>
        <input
          type="text"
          value={1}
          className="rounded-md border border-gray-300 bg-slate-100 px-3 py-3 text-sm focus:outline-indigo-600 block w-full"
        />
      </div>
      <Button>Create A Goal</Button>
    </form>
  );
}
