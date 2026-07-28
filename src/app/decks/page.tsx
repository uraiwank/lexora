
export default function DecksPage() {
  return (
    <main className="p-6 pb-24">
      <h1 className="text-3xl font-bold mb-4">
        My Decks
      </h1>

      <div className="rounded-xl border p-4">
        Biology
      </div>

      <div className="mt-2 rounded-xl border p-4">
        English
      </div>

      <BottomNav />
    </main>
  );
}