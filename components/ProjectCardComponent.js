import Link from "next/link";

export default function ProjectCardComponent({ title, desc, imgLink }) {
  return (
    <div className="grid grid-cols-1 border dark:border-black dark:bg-gray-800 bg-opacity-50 rounded-xl max-w-4xl">
      <Link href={"/"}>
        <img src={imgLink} className="rounded-t-xl"></img>
      </Link>

      <div className="flex flex-col m-5 drop-shadow-2xl">
        <h1 className="text-2xl self-center">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
