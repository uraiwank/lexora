import Link from "next/link";
export default function NewDeckPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-md">
<Link
  href="/decks"
  className="mb-4 inline-block text-blue-600">
  ← Back to Decks
</Link>

        <h1 className="mb-6 text-4xl font-bold">
          Create Deck
        </h1>

        <form className="space-y-4">
  <div>
    <label className="mb-2 block font-medium">
      Deck Name
    </label>

    <input
      className="w-full rounded-xl border p-4"
      placeholder="Biology Revision"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium">
      Description
    </label>

    <textarea
      className="w-full rounded-xl border p-4"
      rows={4}
      placeholder="Cells, DNA, Photosynthesis..."
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-700"
  >
    Create Deck
  </button>
</form>
      </div>
    </main>
  );
}