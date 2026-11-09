import { image_black_wave } from "@/data";

const posts = [
  {
    id: 1,
    title: "Modular Layout Architecture",
    href: "#",
    description:
      "Composable React layout primitives designed with strict separation of concerns, effortless theming, and responsive defaults.",
    date: "May 20, 2026",
    datetime: "2026-05-20",
    category: { title: "Architecture", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Senior Frontend Engineer",
      href: "#",
      imageUrl: image_black_wave,
    },
  },
  {
    id: 2,
    title: "Zero-Overhead Tailwind Patterns",
    href: "#",
    description:
      "Optimized utility class arrangements avoiding arbitrary selector bloat, container query traps, and layout recalculation issues.",
    date: "Jun 14, 2026",
    datetime: "2026-06-14",
    category: { title: "Performance", href: "#" },
    author: {
      name: "Sarah Chen",
      role: "Design Systems Lead",
      href: "#",
      imageUrl: image_black_wave,
    },
  },
  {
    id: 3,
    title: "Autonomous Agent Code Generation",
    href: "#",
    description:
      "Clean TypeScript interfaces and predictable JSX hierarchies enable AI coding agents to modify or extend components without hallucination.",
    date: "Jul 02, 2026",
    datetime: "2026-07-02",
    category: { title: "AI Tooling", href: "#" },
    author: {
      name: "David Miller",
      role: "Full Stack Engineer",
      href: "#",
      imageUrl: image_black_wave,
    },
  },
];

export default function OptionCompare() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frontend Excellence: Accelerated Delivery, Zero Friction
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            Streamlined React and Tailwind components for landing pages, marketing, and ecommerce.
            Framework-agnostic, easily modifiable, and built for modern teams.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
