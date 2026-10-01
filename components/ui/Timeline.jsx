export default function Timeline({ steps }) {
  return (
    <ol className="relative space-y-6 border-l-2 border-navy-200 pl-8 dark:border-white/20">
      {steps.map(([label, title, text]) => (
        <li key={label} className="relative">
          <span aria-hidden className="absolute -left-[2.9rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white ring-4 ring-white dark:bg-gold-500 dark:text-navy-950 dark:ring-navy-950">{label.replace("Step ", "")}</span>
          <h3 className="font-sans text-lg font-semibold text-navy-800 dark:text-white"><span className="sr-only">{label}: </span>{title}</h3>
          <p className="mt-1 max-w-[65ch] leading-7">{text}</p>
        </li>
      ))}
    </ol>
  );
}
