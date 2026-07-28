export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold">
          Hi Alexis 👋
        </h1>

        <div className="mt-6 space-y-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">
              🔥 Current Streak
            </p>
            <p className="text-2xl font-bold">
              0 Days
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">
              🌳 Study Tree
            </p>
            <p className="text-2xl font-bold">
              Level 1
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">
              🎯 Today's Quest
            </p>
            <p>No active quest</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">
              🎁 Next Reward
            </p>
            <p>Not set</p>
          </div>

          <button className="w-full bg-blue-600 text-white rounded-xl py-4">
            Start Studying
          </button>
        </div>
      </div>
    </main>
  );
}