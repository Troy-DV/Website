import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-6 py-5 wide:px-14 wide:py-6">
      <Link href="/" className="font-serif font-medium text-[19px] text-navy no-underline">
        Troy De Vries<span className="text-gold">.</span>
      </Link>
      <div className="flex items-center gap-[34px]">
        <Link
          href="/work"
          className="hidden wide:inline text-navy text-sm no-underline"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="hidden wide:inline text-navy text-sm no-underline"
        >
          About
        </Link>
        <a
          href="mailto:troydv@protonmail.com"
          className="bg-navy text-paper px-[22px] py-[11px] rounded-full font-medium text-sm no-underline"
        >
          Let&apos;s talk <span className="text-gold-bright">→</span>
        </a>
      </div>
    </nav>
  );
}
