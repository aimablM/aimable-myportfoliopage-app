const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowRight({ size = 18, strokeWidth = 2.2 }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={strokeWidth}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, strokeWidth = 2 }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={strokeWidth}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Check({ size = 14 }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={3}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function Menu({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={2}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function Close({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
