import Link from "next/link";

type SystemRow = {
  name: string;
  status: string;
  amber?: boolean;
};

const systems: SystemRow[] = [
  { name: "ignite-agent", status: "running · railway" },
  { name: "daily-research-cron", status: "next run 8:00 ET" },
  { name: "vault-sync", status: "pushed 14m ago" },
  { name: "troydevries.com", status: "in development", amber: true },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-11 max-w-[1180px] mx-auto px-6 py-12 wide:grid-cols-[1.05fr_0.95fr] wide:items-center wide:gap-16 wide:px-14 wide:pt-20 wide:pb-16">
      <div>
        <div className="flex items-center gap-[14px] text-xs tracking-[0.24em] uppercase text-gold font-semibold mb-6">
          Operations × AI Systems
          <span className="h-px w-14 bg-gold" />
        </div>
        <h1 className="font-serif font-medium text-[38px] leading-[1.1] tracking-[-0.015em] wide:text-[54px]">
          The operator who <span className="italic text-gold">builds</span> the
          tools.
        </h1>
        <p className="text-muted text-[17px] leading-[1.7] mt-6 mb-[34px] max-w-[48ch]">
          I ran operations for ten years and got tired of the slow parts. So I
          started building tools to speed them up.
        </p>
        <div className="flex gap-[14px]">
          <Link
            href="/work"
            className="bg-navy text-paper px-[22px] py-[11px] rounded-full font-medium text-sm no-underline"
          >
            See the work <span className="text-gold-bright">→</span>
          </Link>
          <Link
            href="/blog"
            className="text-navy no-underline text-sm font-medium px-5 py-[11px] border border-[#cfc8b4] rounded-full hover:border-gold"
          >
            Read the build log
          </Link>
        </div>
      </div>

      <div className="bg-navy rounded-[20px] overflow-hidden border border-navy-2 shadow-[0_28px_70px_rgba(6,15,32,0.22)]">
        <div className="flex items-center justify-between px-[22px] py-4 border-b border-line-d">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-d">
            Systems · Live
          </span>
          <span className="w-2 h-2 rounded-full bg-gold-bright animate-pulse-ring" />
        </div>
        <div className="flex flex-col gap-[14px] p-[22px]">
          {systems.map((sys) => (
            <div
              key={sys.name}
              className="flex items-center gap-[14px] bg-navy-2 border border-line-d rounded-[10px] px-4 py-[14px]"
            >
              <span
                className={
                  sys.amber
                    ? "w-[7px] h-[7px] rounded-full bg-transparent border-[1.5px] border-gold-bright shrink-0"
                    : "w-[7px] h-[7px] rounded-full bg-gold-bright shrink-0"
                }
              />
              <span className="font-mono text-xs text-[#e8e4d8] tracking-[0.06em] flex-1">
                {sys.name}
              </span>
              <span className="font-mono text-[10.5px] text-muted-d tracking-[0.1em] uppercase">
                {sys.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
