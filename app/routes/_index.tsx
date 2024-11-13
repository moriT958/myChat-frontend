import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "myChat" },
    { name: "description", content: "Welcome to myChat!" },
  ];
};

export default function Index() {
  return (
    <div>
      <p className="p-6 text-cyan-400">Hello, myChat!</p>
    </div>
  );
}
