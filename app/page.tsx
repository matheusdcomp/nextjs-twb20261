import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row content-center justify-center items-center m-auto h-full">
      <Image
        src="/tatu-laranja.png"
        alt="HTML"
        height={300}
        width={300}
      />
    </div>
  );
}
