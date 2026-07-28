import Link from "next/link";

export default function DecksPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              My Decks
            </h1>
            <p className="text-gray-500">
              Review and manage your study decks
            </p>
          </div>

          <Link  href="/decks/new" className="rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
            + New </Link>
        </div>
        <div className="space-y-4">
          <div className="cursor-pointer rounded-2xl bg-white p-5 shadow transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                📚 Biology
              </h2>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                12 Cards
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              Cells, DNA, Photosynthesis
            </p>
          </div>

          <div className="cursor-pointer rounded-2xl bg-white p-5 shadow transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                📖 English
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                34 Cards
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              Vocabulary and Grammar
            </p>
          </div>
      </div>
      </div>
    </main>
  );
}