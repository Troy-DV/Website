export default function Footer() {
  return (
    <footer className="flex justify-between w-full max-w-[1280px] mx-auto px-6 py-9 wide:px-14 text-muted text-[13px]">
      <span>© 2026 Troy De Vries · Knoxville, TN</span>
      <span className="flex gap-[6px]">
        <a
          href="https://www.linkedin.com/in/troy-de-vries-141599411/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted no-underline hover:text-gold"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a
          href="https://github.com/Troy-DV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted no-underline hover:text-gold"
        >
          GitHub
        </a>
        <span>·</span>
        <a
          href="mailto:troydv@protonmail.com"
          className="text-muted no-underline hover:text-gold"
        >
          Email
        </a>
      </span>
    </footer>
  );
}
