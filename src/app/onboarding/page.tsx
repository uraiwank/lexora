export default function OnboardingPage() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Who are you?
      </h1>

      <div className="space-y-4">
        <button className="w-full border rounded p-4">
          Student
        </button>

        <button className="w-full border rounded p-4">
          Parent
        </button>

        <button className="w-full border rounded p-4">
          Teacher
        </button>
      </div>
    </main>
  );
}