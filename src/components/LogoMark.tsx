import Image from "next/image";

export function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="w-56 h-16 relative shrink-0">
      <Image
        src={dark ? "/images/logo-black.png" : "/images/logo-white.png"}
        alt="Cargo Maritime"
        fill
        className="object-contain"
        sizes="224px"
      />
    </div>
  );
}
