import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function addUser(formData: FormData) {
  "use server";
  const fullName = String(formData.get("fullName") ?? "").trim();
  const dob = String(formData.get("dateOfBirth") ?? "").trim();

  if (!fullName || !dob) return;

  await prisma.user.create({
    data: {
      fullName,
      dateOfBirth: new Date(dob),
    },
  });

  revalidatePath("/users");
}

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Add a user and they&apos;ll appear in the list below.
        </p>
      </div>

      <form action={addUser} className="space-y-4 max-w-md">
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-100"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium">
            Date of birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            className="w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-100"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
        >
          Add user
        </button>
      </form>

      <div className="space-y-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          {users.length} {users.length === 1 ? "user" : "users"}
        </h2>
        {users.length === 0 ? (
          <p className="text-sm text-neutral-500">No users yet.</p>
        ) : (
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {users.map((u) => (
              <li
                key={u.id}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="font-medium">{u.fullName}</span>
                <span className="text-neutral-500">
                  {u.dateOfBirth.toISOString().slice(0, 10)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
