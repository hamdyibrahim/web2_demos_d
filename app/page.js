import Link from "next/link";
export default function Page() {
  let a = 10;
  let b = 20;
  return (
    <main>
      <h1 className="text-4xl text-blue-600 font-bold">Week Dev 2 Demos</h1>
      <p>
        Sum of {a} and {b} is {a + b}
      </p>
      <Link href="week-2" className="text-xl font-bold">
        Week 2
      </Link>
      <br />
      <Link href="week-3" className="text-xl font-bold">
        Week 3
      </Link>
      <br />
      <Link href="week-4" className="text-xl font-bold">
        Week 4
      </Link>
      <br />
      <Link href="week-5" className="text-xl font-bold">
        Week 5
      </Link>
    </main>
  );
}
