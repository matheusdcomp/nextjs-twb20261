import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row content-center justify-center items-center m-auto h-full">
      <Image
        src="/tatu-laranja.png"
        alt="HTML"
        loading="eager"
        height={600}
        width={600}
      />
    </div>
  );
}
