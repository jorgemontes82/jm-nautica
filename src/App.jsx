import { useState, useEffect } from "react";

// ─── SVG FLAGS ────────────────────────────────────────────────────────────────
const FlagSVG = ({ letter, size = 56 }) => {
  const flags = {
    A: (<svg viewBox="0 0 60 40"><rect width="30" height="40" fill="#fff"/><polygon points="30,0 60,20 30,40" fill="#005bbb"/></svg>),
    B: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#cc0000"/></svg>),
    C: (<svg viewBox="0 0 60 40"><rect width="60" height="8" fill="#003399"/><rect y="8" width="60" height="8" fill="#fff"/><rect y="16" width="60" height="8" fill="#cc0000"/><rect y="24" width="60" height="8" fill="#fff"/><rect y="32" width="60" height="8" fill="#003399"/></svg>),
    D: (<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#ffcc00"/><rect x="20" width="20" height="40" fill="#003399"/><rect x="40" width="20" height="40" fill="#ffcc00"/></svg>),
    E: (<svg viewBox="0 0 60 40"><rect width="60" height="20" fill="#003399"/><rect y="20" width="60" height="20" fill="#cc0000"/></svg>),
    F: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/><rect x="20" y="10" width="20" height="20" fill="#cc0000"/></svg>),
    G: (<svg viewBox="0 0 60 40"><rect width="10" height="40" fill="#ffcc00"/><rect x="10" width="10" height="40" fill="#003399"/><rect x="20" width="10" height="40" fill="#ffcc00"/><rect x="30" width="10" height="40" fill="#003399"/><rect x="40" width="10" height="40" fill="#ffcc00"/><rect x="50" width="10" height="40" fill="#003399"/></svg>),
    H: (<svg viewBox="0 0 60 40"><rect width="30" height="40" fill="#fff"/><rect x="30" width="30" height="40" fill="#cc0000"/></svg>),
    I: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#ffcc00"/><circle cx="30" cy="20" r="10" fill="#000"/></svg>),
    J: (<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#003399"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#003399"/></svg>),
    K: (<svg viewBox="0 0 60 40"><rect width="30" height="40" fill="#ffcc00"/><rect x="30" width="30" height="40" fill="#003399"/></svg>),
    L: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#ffcc00"/><rect x="20" width="20" height="40" fill="#000"/><rect y="15" width="60" height="10" fill="#000"/></svg>),
    M: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#003399"/><rect x="15" y="10" width="30" height="20" fill="#fff"/></svg>),
    N: (<svg viewBox="0 0 60 40"><rect width="30" height="20" fill="#003399"/><rect x="30" width="30" height="20" fill="#fff"/><rect y="20" width="30" height="20" fill="#fff"/><rect x="30" y="20" width="30" height="20" fill="#003399"/></svg>),
    O: (<svg viewBox="0 0 60 40"><rect width="30" height="40" fill="#cc0000"/><rect x="30" width="30" height="40" fill="#ffcc00"/></svg>),
    P: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#003399"/><rect x="15" y="10" width="30" height="20" fill="#fff"/></svg>),
    Q: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#ffcc00"/></svg>),
    R: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#cc0000"/><rect x="20" y="15" width="20" height="10" fill="#ffcc00"/></svg>),
    S: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/><rect x="15" y="10" width="30" height="20" fill="#003399"/></svg>),
    T: (<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#cc0000"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#003399"/></svg>),
    U: (<svg viewBox="0 0 60 40"><rect width="30" height="20" fill="#cc0000"/><rect x="30" width="30" height="20" fill="#fff"/><rect y="20" width="30" height="20" fill="#fff"/><rect x="30" y="20" width="30" height="20" fill="#cc0000"/></svg>),
    V: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/><rect x="25" y="0" width="10" height="40" fill="#cc0000"/><rect x="0" y="15" width="60" height="10" fill="#cc0000"/></svg>),
    W: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#cc0000"/><rect x="15" y="10" width="30" height="20" fill="#fff"/><rect x="20" y="15" width="20" height="10" fill="#003399"/></svg>),
    X: (<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#003399"/><rect x="25" y="0" width="10" height="40" fill="#fff"/><rect x="0" y="15" width="60" height="10" fill="#fff"/></svg>),
    Y: (<svg viewBox="0 0 60 40"><rect width="10" height="40" fill="#ffcc00"/><rect x="10" width="10" height="40" fill="#cc0000"/><rect x="20" width="10" height="40" fill="#ffcc00"/><rect x="30" width="10" height="40" fill="#cc0000"/><rect x="40" width="10" height="40" fill="#ffcc00"/><rect x="50" width="10" height="40" fill="#cc0000"/></svg>),
    Z: (<svg viewBox="0 0 60 40"><rect width="30" height="20" fill="#000"/><rect x="30" y="20" width="30" height="20" fill="#000"/><rect x="30" width="30" height="20" fill="#ffcc00"/><rect y="20" width="30" height="20" fill="#ffcc00"/></svg>),
  };
  const svg = flags[letter];
  if (!svg) return null;
  return (
    <div style={{
      width: size, height: Math.round(size * 2/3),
      border: '1px solid #2a4060',
      borderRadius: 3,
      overflow: 'hidden',
      display: 'inline-block',
      boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
      flexShrink: 0,
    }}>
      {/* clone the svg with explicit dimensions */}
      <svg viewBox="0 0 60 40" width="100%" height="100%">
        {svg.props.children}
      </svg>
    </div>
  );
};

const NAV_SECTIONS = [
  { id: "ripa",       label: "RIPA",       icon: "⚓", subtitle: "Reglamento Internacional" },
  { id: "balizas",    label: "Balizas",    icon: "🔴", subtitle: "Sistema IALA" },
  { id: "banderas",   label: "Banderas",   icon: "🚩", subtitle: "Código Internacional" },
  { id: "luces",      label: "Luces",      icon: "💡", subtitle: "Señales luminosas" },
  { id: "pitidos",    label: "Pitidos",    icon: "📢", subtitle: "Señales acústicas" },
  { id: "marcas",     label: "Marcas",     icon: "🔶", subtitle: "Marcas de día" },
  { id: "maniobras",  label: "Maniobras",  icon: "🧭", subtitle: "Reglas de paso" },
  { id: "vhf",        label: "VHF",        icon: "📡", subtitle: "Radiocomunicaciones" },
  { id: "meteo",      label: "Meteo",      icon: "🌬️", subtitle: "Meteorología náutica" },
  { id: "nudos",      label: "Nudos",      icon: "🪢", subtitle: "Nudos marineros" },
  { id: "emergencia", label: "Emergencia", icon: "🆘", subtitle: "Maniobras de emergencia" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Code+Pro:wght@300;400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a1628;
    color: #d4c49a;
    font-family: 'Source Code Pro', monospace;
  }

  .app {
    min-height: 100vh;
    background: #0a1628;
    background-image:
      radial-gradient(ellipse at 20% 50%, rgba(30,60,100,0.4) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(15,40,80,0.5) 0%, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231a3050' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='25'/%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3Ccircle cx='30' cy='30' r='5'/%3E%3Cline x1='5' y1='30' x2='55' y2='30'/%3E%3Cline x1='30' y1='5' x2='30' y2='55'/%3E%3C/g%3E%3C/svg%3E");
    background-size: auto, auto, 60px 60px;
  }

  .header {
    background: linear-gradient(180deg, #061020 0%, #0d1f3a 100%);
    border-bottom: 2px solid #c8a84b;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 30px rgba(0,0,0,0.6);
  }

  .header-compass {
    width: 42px;
    height: 42px;
    border: 2px solid #c8a84b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    animation: spin 20s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .header-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 900;
    color: #c8a84b;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .header-sub {
    font-size: 10px;
    color: #a0b8d0;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .nav-scroll {
    display: flex;
    overflow-x: auto;
    background: #061020;
    border-bottom: 1px solid #1a3050;
    gap: 0;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .nav-scroll::-webkit-scrollbar { display: none; }

  .nav-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 12px 16px;
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    color: #8ba3c0;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    min-width: 80px;
    font-family: 'Source Code Pro', monospace;
  }

  .nav-btn:hover { color: #a08830; background: rgba(200,168,75,0.05); }

  .nav-btn.active {
    color: #c8a84b;
    border-bottom-color: #c8a84b;
    background: rgba(200,168,75,0.08);
  }

  .nav-btn-icon { font-size: 18px; }
  .nav-btn-label { font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }

  .content {
    padding: 20px 16px;
    max-width: 1100px;
    margin: 0 auto;
    animation: fadeIn 0.3s ease;
  }

  /* Tablet */
  @media (min-width: 600px) {
    .header { padding: 18px 28px; }
    .header-title { font-size: 26px; letter-spacing: 4px; }
    .header-compass { width: 48px; height: 48px; font-size: 22px; }
    .nav-scroll { padding: 0 8px; }
    .nav-btn { padding: 14px 22px; min-width: 100px; }
    .nav-btn-icon { font-size: 22px; }
    .nav-btn-label { font-size: 11px; }
    .content { padding: 28px 24px; }
    .section-title { font-size: 34px; }
    .section-sub { font-size: 12px; }
    .card { padding: 20px; }
    .card-title { font-size: 16px; }
    .card-body { font-size: 13px; }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .header { padding: 22px 40px; }
    .header-title { font-size: 30px; letter-spacing: 5px; }
    .header-compass { width: 54px; height: 54px; font-size: 26px; }
    .nav-scroll {
      justify-content: center;
      padding: 0;
    }
    .nav-btn { padding: 16px 26px; }
    .nav-btn-icon { font-size: 24px; }
    .content { padding: 36px 32px; }
    .section-title { font-size: 38px; }
    .card-body { font-size: 14px; line-height: 1.8; }
  }

  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 700;
    color: #c8a84b;
    margin-bottom: 4px;
  }

  .section-sub {
    font-size: 11px;
    color: #8ba3c0;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #1a3050;
  }

  .card {
    background: linear-gradient(135deg, #0d1f3a 0%, #0a1828 100%);
    border: 1px solid #1a3050;
    border-left: 3px solid #c8a84b;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 14px;
    transition: border-color 0.2s;
  }

  .card:hover { border-left-color: #e0c060; }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 700;
    color: #c8a84b;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .card-body {
    font-size: 12px;
    line-height: 1.7;
    color: #bccfe0;
  }

  .card-body strong { color: #d4c49a; }

  .rule-number {
    background: #c8a84b;
    color: #061020;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 3px;
    letter-spacing: 1px;
  }

  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 6px;
    margin-bottom: 4px;
  }

  .badge-red { background: #8b1a1a; color: #ffaaaa; border: 1px solid #cc3333; }
  .badge-green { background: #0d4a2a; color: #aaffcc; border: 1px solid #22aa55; }
  .badge-yellow { background: #5a4800; color: #ffdd88; border: 1px solid #c8a84b; }
  .badge-white { background: #1a2a3a; color: #ffffff; border: 1px solid #667788; }
  .badge-blue { background: #0d2a5a; color: #88aaff; border: 1px solid #3366cc; }

  .baliza-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #1a3050;
  }
  .baliza-row:last-child { border-bottom: none; }

  .baliza-visual {
    width: 44px;
    height: 44px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
  }

  .baliza-info { flex: 1; }
  .baliza-name { font-size: 13px; font-weight: 600; color: #d4c49a; margin-bottom: 2px; }
  .baliza-desc { font-size: 11px; color: #a0b8d0; line-height: 1.5; }
  .baliza-side { font-size: 10px; font-weight: 700; letter-spacing: 1px; }

  .flag-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 12px;
    margin-bottom: 20px;
  }

  .flag-card {
    background: #0d1f3a;
    border: 1px solid #1a3050;
    border-radius: 6px;
    padding: 12px;
    text-align: center;
    transition: border-color 0.2s;
  }

  .flag-card:hover { border-color: #c8a84b; }

  .flag-emoji { font-size: 28px; margin-bottom: 6px; }
  .flag-letter { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 900; color: #c8a84b; }
  .flag-meaning { font-size: 10px; color: #a0b8d0; margin-top: 4px; line-height: 1.4; }

  .signal-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid #1a3050;
  }
  .signal-row:last-child { border-bottom: none; }

  .signal-morse {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #c8a84b;
    width: 60px;
    flex-shrink: 0;
    text-align: center;
    letter-spacing: 2px;
  }

  .signal-text { flex: 1; }
  .signal-name { font-size: 13px; font-weight: 600; color: #d4c49a; margin-bottom: 3px; }
  .signal-desc { font-size: 11px; color: #a0b8d0; line-height: 1.5; }

  .luz-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #1a3050;
  }
  .luz-row:last-child { border-bottom: none; }
  .luz-dots { display: flex; gap: 4px; align-items: center; width: 70px; flex-shrink: 0; }
  .dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot-on { animation: blink 2s ease-in-out infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }

  .tag {
    display: inline-block;
    background: rgba(200,168,75,0.12);
    border: 1px solid rgba(200,168,75,0.3);
    color: #c8a84b;
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 3px;
    margin-top: 5px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .maniobra-card {
    background: #0d1f3a;
    border: 1px solid #1a3050;
    border-radius: 8px;
    padding: 18px;
    margin-bottom: 14px;
  }

  .maniobra-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .maniobra-num {
    background: #c8a84b;
    color: #061020;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 900;
    flex-shrink: 0;
  }

  .maniobra-title {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    color: #c8a84b;
    font-weight: 700;
  }

  .maniobra-rule {
    font-size: 11px;
    color: #bccfe0;
    line-height: 1.7;
    padding-left: 38px;
  }

  .priority-list { list-style: none; padding: 0; }
  .priority-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 0;
    border-bottom: 1px solid #1a3050;
    font-size: 12px;
    color: #bccfe0;
  }
  .priority-item:last-child { border-bottom: none; }
  .priority-pos {
    width: 22px;
    height: 22px;
    border: 1px solid #c8a84b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #c8a84b;
    font-weight: 700;
    flex-shrink: 0;
  }

  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #1a3050, transparent);
    margin: 20px 0;
  }

  .info-box {
    background: rgba(200,168,75,0.07);
    border: 1px solid rgba(200,168,75,0.25);
    border-radius: 6px;
    padding: 12px 14px;
    margin-bottom: 14px;
    font-size: 11px;
    color: #c8a84b;
    line-height: 1.7;
  }

  .marca-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 50px;
    flex-shrink: 0;
  }

  .marca-shape {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  .marca-topmark {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

// ─── SECTION DATA ────────────────────────────────────────────────────────────

function Accordion({ title, subtitle, rules, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [openRule, setOpenRule] = useState(null);
  return (
    <div style={{marginBottom: 10}}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: open ? 'rgba(200,168,75,0.12)' : '#0d1f3a',
          border: '1px solid', borderColor: open ? '#c8a84b' : '#1a3050',
          borderRadius: open ? '6px 6px 0 0' : 6,
          padding: '12px 16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left',
          transition: 'all 0.2s',
        }}
      >
        <span style={{
          fontSize: 18, width: 28, height: 28, borderRadius: '50%',
          background: open ? '#c8a84b' : '#1a3050',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? '#061020' : '#c8a84b', flexShrink: 0,
          transition: 'all 0.2s', fontWeight: 700,
        }}>{open ? '−' : '+'}</span>
        <div style={{flex: 1}}>
          <div style={{fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: open ? '#c8a84b' : '#d4c49a'}}>{title}</div>
          <div style={{fontSize: 10, color: '#8ba3c0', letterSpacing: '1px', marginTop: 2}}>{subtitle}</div>
        </div>
        <span style={{fontSize: 10, color: '#8ba3c0', letterSpacing: 1}}>{rules.length} reglas</span>
      </button>
      {open && (
        <div style={{border: '1px solid #1a3050', borderTop: 'none', borderRadius: '0 0 6px 6px', overflow: 'hidden'}}>
          {rules.map((r, i) => (
            <div key={i} style={{borderBottom: i < rules.length-1 ? '1px solid #1a3050' : 'none'}}>
              <button
                onClick={() => setOpenRule(openRule === i ? null : i)}
                style={{
                  width: '100%', background: openRule === i ? 'rgba(200,168,75,0.07)' : 'transparent',
                  border: 'none', padding: '11px 16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left',
                  transition: 'background 0.15s',
                }}
              >
                <span style={{
                  background: '#c8a84b', color: '#061020',
                  fontSize: 9, fontWeight: 700, padding: '2px 6px',
                  borderRadius: 3, letterSpacing: 1, flexShrink: 0,
                  fontFamily: "'Source Code Pro', monospace",
                }}>{r.num}</span>
                <span style={{flex: 1, fontSize: 12, color: '#d4c49a', fontWeight: 600}}>{r.title}</span>
                <span style={{fontSize: 14, color: '#c8a84b', flexShrink: 0}}>{openRule === i ? '▲' : '▼'}</span>
              </button>
              {openRule === i && (
                <div style={{
                  padding: '4px 16px 14px 16px',
                  fontSize: 12, color: '#bccfe0', lineHeight: 1.75,
                  borderTop: '1px solid #1a3050',
                  background: 'rgba(200,168,75,0.03)',
                }}>
                  {r.body}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RipaSection() {
  const chapters = [
    {
      title: "Parte A — Generalidades",
      subtitle: "Reglas 1–3: Aplicación, responsabilidad y definiciones",
      defaultOpen: true,
      rules: [
        { num: "R.1", title: "Aplicación", body: "El Reglamento se aplica a todos los buques en alta mar y en todas las aguas que sean navegables por buques de mar y estén comunicadas con ella. Nada impedirá que una Autoridad competente establezca reglas adicionales para radas, puertos, ríos, lagos o vías de navegación interior." },
        { num: "R.2", title: "Responsabilidad", body: "Ninguna disposición del Reglamento exime a un buque, armador, capitán o tripulación de las consecuencias de negligencia. Se dará debido efecto a todo peligro de navegación o de abordaje, así como a las circunstancias especiales, incluidas las limitaciones de los buques interesados." },
        { num: "R.3", title: "Definiciones generales", body: <><strong>Buque:</strong> todo artefacto flotante, incluidas las embarcaciones sin desplazamiento y los hidroaviones.<br/><strong>Buque de propulsión mecánica:</strong> todo buque movido por una máquina.<br/><strong>Buque de vela:</strong> el que navega a vela, aunque lleve máquina sin usarla.<br/><strong>Buque ocupado en pesca:</strong> el que pesca con redes, sedales u otros artes que limiten su maniobrabilidad (excluye caña y curricán).<br/><strong>Sin gobierno:</strong> incapaz de maniobrar como exige el Reglamento por alguna circunstancia excepcional.<br/><strong>Maniobrabilidad restringida:</strong> con capacidad de maniobra limitada por la naturaleza de su trabajo.</> },
      ]
    },
    {
      title: "Parte B — Derrota y Gobierno",
      subtitle: "Reglas 4–19: Vigilancia, velocidad, riesgo y maniobras",
      rules: [
        { num: "R.5", title: "Vigilancia", body: "Todo buque mantendrá en todo momento una apropiada vigilancia visual y auditiva, así como por todos los medios disponibles apropiados a las circunstancias y condiciones del momento, de modo que permita hacer una valoración completa de la situación y del riesgo de abordaje." },
        { num: "R.6", title: "Velocidad de seguridad", body: "Todo buque navegará en todo momento a una velocidad de seguridad tal que le permita ejecutar la maniobra adecuada y pararse en la distancia apropiada. Factores a considerar: visibilidad, densidad del tráfico, maniobrabilidad, luz de fondo, estado del mar, calado respecto a la profundidad disponible, limitaciones del radar." },
        { num: "R.7", title: "Riesgo de abordaje", body: "Todo buque empleará todos los medios disponibles para determinar si existe riesgo de abordaje. Si existe duda, se considerará que el riesgo existe. El marcado de una derrota en el radar es esencial. Marcaciones compás que no varíen apreciablemente de otro buque indican riesgo de abordaje." },
        { num: "R.8", title: "Maniobra para evitar abordaje", body: "Toda maniobra para evitar abordaje será amplia, efectuada con suficiente antelación y de manera decidida. No debe consistir en sucesión de pequeñas alteraciones. Si hay espacio suficiente, puede ser apropiado reducir la marcha, detener o invertir los medios de propulsión." },
        { num: "R.9", title: "Canales estrechos", body: "En canales o vías de acceso estrechos, los buques navegarán por la parte de estribor. Los buques de menos de 20 m o los de vela no obstaculizarán el paso de buques que solo pueden navegar con seguridad dentro del canal. Está prohibido fondear en un canal estrecho si es posible evitarlo." },
        { num: "R.10", title: "Dispositivos de separación del tráfico (TSS)", body: "Los buques utilizarán el sentido de tráfico apropiado a su carril. Evitarán el área de separación o la línea. Cruzarán en ángulo recto respecto a la dirección general del tráfico. Los buques de vela, pesca y menos de 20 m no impedirán el paso de los demás en los carriles." },
        { num: "R.13", title: "Buque que alcanza a otro", body: "Todo buque que alcance a otro navegará apartado del buque alcanzado. Se considera que alcanza cuando avista al otro en un ángulo de más de 22,5° a popa del través (sector del farol de alcance). La obligación persiste hasta que haya franqueado y despejado completamente al otro, sea cual sea la propulsión de ambos." },
        { num: "R.14", title: "Situación de buques en rumbos opuestos", body: "Dos buques de propulsión mecánica que se aproximen en rumbos opuestos o casi opuestos de modo que entrañe riesgo de abordaje, cada uno caerá a estribor para que pasen el uno al otro por la amura de babor. En caso de duda, se supondrá que existe esta situación y se actuará en consecuencia." },
        { num: "R.15", title: "Situación de cruce", body: "Cuando dos buques de propulsión mecánica se crucen de modo que entrañe riesgo de abordaje, el que tenga al otro por su costado de estribor se mantendrá apartado y, si las circunstancias lo permiten, evitará atravesar la proa del otro." },
        { num: "R.16", title: "Obligaciones del buque que cede el paso", body: "Todo buque que esté obligado a apartarse del camino de otro tomará con suficiente antelación una maniobra amplia para quedar bien apartado. La maniobra debe ser clara, decidida y ejecutada con tiempo suficiente para ser perceptible por el otro buque." },
        { num: "R.17", title: "Obligaciones del buque privilegiado", body: "El buque con derecho de paso mantendrá su rumbo y velocidad. Puede maniobrar para evitar abordaje por sus propios medios si el otro no toma acción suficiente. En situación de inminente abordaje, maniobre evitando caer a babor de un buque que venga por babor. No altere el rumbo a babor si el otro está en babor." },
        { num: "R.18", title: "Obligaciones entre distintas categorías", body: <><strong>Orden de prioridad (de mayor a menor):</strong><br/>1. Buque sin gobierno (NUC)<br/>2. Maniobrabilidad restringida (RAM)<br/>3. Condicionado por su calado (CBD)<br/>4. Buque ocupado en pesca<br/>5. Buque de vela<br/>6. Buque de propulsión mecánica<br/><br/>Los buques de vela no se apartarán ante embarcaciones de pesca, salvo en TSS. Un hidroavión en agua se apartará generalmente de todos los buques y no obstaculizará la navegación.</> },
        { num: "R.19", title: "Conducta en visibilidad reducida", body: "Todo buque navegará a velocidad de seguridad adaptada a las condiciones. Los de propulsión mecánica tendrán los motores listos para maniobra inmediata. Si detecta otro buque solo por radar, determinará si existe riesgo y tomará maniobra con suficiente antelación. No caerá a babor de un buque situado en su proa si no es para alcanzarlo. Evitará alterar rumbo hacia un buque que esté al través o a popa del través." },
      ]
    },
    {
      title: "Parte C — Luces y Marcas",
      subtitle: "Reglas 20–31: Exhibición y características",
      rules: [
        { num: "R.20", title: "Aplicación de luces", body: "Las luces se exhibirán desde la puesta hasta la salida del sol. También se exhibirán de día cuando la visibilidad sea reducida. Ninguna otra luz que pueda confundirse con las prescritas será exhibida, salvo que no pueda ser confundida." },
        { num: "R.21", title: "Definiciones de luces", body: <><strong>Luz de tope:</strong> blanca, visible en un arco de 225°, de proa a 22,5° a popa del través de cada costado.<br/><strong>Luces de costado:</strong> verde (estribor) y roja (babor), visibles en 112,5° hacia adelante.<br/><strong>Luz de alcance:</strong> blanca, visible en 135° centrado en la popa.<br/><strong>Luz todo horizonte:</strong> visible en todo el horizonte, 360°.<br/><strong>Luz centelleante:</strong> que destella a un ritmo de 120 o más destellos por minuto.</> },
        { num: "R.22", title: "Visibilidad de las luces", body: <><strong>Buques de más de 50 m:</strong> tope 6 mi, costado 3 mi, alcance 3 mi, fondeo 3 mi.<br/><strong>De 12 a 50 m:</strong> tope 5 mi (50m) o 3 mi (&lt;50m), costado 2 mi, alcance 2 mi, fondeo 2 mi.<br/><strong>Menos de 12 m:</strong> tope y alcance 2 mi, costado 1 mi, fondeo 2 mi.</> },
        { num: "R.23", title: "Buques de propulsión mecánica en marcha", body: "Exhibirán: una luz de tope en el palo de proa; si miden 50 m o más, una segunda luz de tope a popa y más alta; luces de costado; luz de alcance. Los de menos de 12 m pueden exhibir en sustitución una luz todo horizonte blanca más luces de costado." },
        { num: "R.25", title: "Buques de vela en marcha y a remo", body: "Los buques de vela en marcha exhibirán luces de costado y de alcance. Pueden además llevar en el tope de palo una luz todo horizonte roja sobre una verde. Los de menos de 7 m pueden usar una linterna con luz blanca para evitar el abordaje. Los de menos de 12 m pueden combinar las luces de costado en una sola linterna bicolor en el tope. Los buques a remo pueden usar las mismas luces que los veleros, o una linterna blanca." },
        { num: "R.26", title: "Buques de pesca", body: "Los arrastreros exhibirán: dos luces todo horizonte en vertical — verde sobre blanca — y, si tienen arrancada, luz de costado y alcance. Los que pescan con otros artes exhibirán roja sobre blanca (todo horizonte) y, si tienen arrancada, luces de costado y alcance. Si el arte se extiende más de 150 m, añadirán una luz blanca todo horizonte en la dirección del arte." },
        { num: "R.27", title: "Buques sin gobierno y de maniobrabilidad restringida", body: <><strong>Sin gobierno (NUC):</strong> dos luces rojas todo horizonte en vertical; si tiene arrancada, también luces de costado y alcance.<br/><strong>Maniobrabilidad restringida (RAM):</strong> roja-blanca-roja (todo horizonte) en vertical; si tiene arrancada, añade tope, costados y alcance.<br/><strong>Dragaminas:</strong> exhiben además tres luces verdes todo horizonte.</> },
        { num: "R.30", title: "Buques fondeados y varados", body: <><strong>Fondeado (&lt;50 m):</strong> luz blanca todo horizonte o esfera negra de día.<br/><strong>Fondeado (&gt;50 m):</strong> luz blanca todo horizonte en proa y otra de menor intensidad en popa.<br/><strong>Varado:</strong> luces de fondeo más dos rojas todo horizonte en vertical (o tres esferas negras en vertical de día).</> },
      ]
    },
    {
      title: "Parte D — Señales Acústicas y Luminosas",
      subtitle: "Reglas 32–37: Silbatos, campanas, gongs y señales",
      rules: [
        { num: "R.32", title: "Definiciones acústicas", body: <><strong>Silbato:</strong> cualquier aparato de señales acústicas capaz de producir los sonidos prescritos.<br/><strong>Pitido corto:</strong> sonido de aproximadamente 1 segundo de duración.<br/><strong>Pitido largo:</strong> sonido de 4 a 6 segundos de duración.</> },
        { num: "R.34", title: "Señales de maniobra e indicación", body: <><strong>Señales de maniobra (a la vista uno del otro):</strong><br/>· (1 corto): Estoy cayendo a estribor<br/>·· (2 cortos): Estoy cayendo a babor<br/>··· (3 cortos): Mis máquinas van a toda atrás<br/>····· (5 o más): Peligro/duda — el otro no toma medidas suficientes<br/><br/><strong>Para adelantar en canal estrecho:</strong><br/>··—·· (2 cortos-largo-2 cortos): Solicito adelantar por estribor del otro<br/>·—· (corto-largo-corto): Solicito adelantar por babor del otro<br/>—·—· (largo-corto-largo-corto): Conforme, puede adelantar</> },
        { num: "R.35", title: "Señales acústicas con visibilidad reducida", body: <><strong>Cada 2 minutos:</strong><br/>— (1 largo): Buque de propulsión mecánica con arrancada<br/>—— (2 largos): Buque de propulsión mecánica sin arrancada<br/>—· (largo-corto): Buque de vela, pesca, RAM, NUC o CBD<br/>—·· (largo-2 cortos): Último buque de un remolque<br/><br/><strong>Cada minuto:</strong><br/>🔔🔔🔔 (campana rápida 5s): Buque fondeado &lt;100 m<br/>🔔🔔🔔 + 🔕🔕🔕: Buque fondeado &gt;100 m (campana proa + gong popa)</> },
        { num: "R.36", title: "Señales de llamada de atención", body: "Todo buque puede hacer señales luminosas o acústicas para llamar la atención de otro, siempre que no puedan confundirse con ninguna señal autorizada por el Reglamento. También puede dirigir hacia el buque que la amenace el haz de su proyector, de modo que no moleste a los demás." },
        { num: "R.37", title: "Señales de socorro", body: "Cuando un buque necesite auxilio, podrá usar o exhibir las señales del Anexo IV del RIPA, entre ellas: disparos a intervalos de 1 minuto, señal SOS (··· — — — ···), llama con alquitrán, cohetes con estrellas rojas, señal MAYDAY por radiotelefonía, señal de socorro por NAVTEX o EPIRB." },
      ]
    },
    {
      title: "Parte E — Exenciones",
      subtitle: "Regla 38: Transitorios para buques existentes",
      rules: [
        { num: "R.38", title: "Exenciones", body: "Los buques que cumplieran los requisitos del Reglamento de 1960 antes de la entrada en vigor del Reglamento de 1972 pueden quedar exentos de ciertos requisitos relativos a la posición y visibilidad de las luces, por un período transitorio. Estas exenciones aplican específicamente a buques construidos o ya con quilla puesta en esa fecha, bajo las condiciones que especifica la regla." },
      ]
    },
  ];

  return (
    <div>
      <div className="section-title">RIPA</div>
      <div className="section-sub">Reglamento Internacional para Prevenir Abordajes en la Mar — COLREGS 72</div>
      <div className="info-box">
        ⚓ El RIPA (COLREGS 1972) establece las reglas de navegación para todos los buques en aguas internacionales. Toca cada capítulo para expandirlo y cada regla para leer su contenido.
      </div>
      {chapters.map((ch, i) => (
        <Accordion key={i} {...ch} />
      ))}
    </div>
  );
}

// ─── BUOY SVGs — cada una autocontenida ──────────────────────────────────────
const W = 64, H = 100;
const BLight = ({ color, dur = "2s" }) => (
  <circle cx="32" cy="6" r="4" fill={color}>
    <animate attributeName="opacity" values="1;0.15;1" dur={dur} repeatCount="indefinite"/>
  </circle>
);
const BMast = () => <line x1="32" y1="22" x2="32" y2="10" stroke="#aaa" strokeWidth="1.5"/>;
const BChain = () => <line x1="32" y1="90" x2="32" y2="99" stroke="#666" strokeWidth="1.5" strokeDasharray="2,2"/>;

// Cilindro (babor)
const BCan = ({ c1, c2 }) => (
  <g>
    <rect x="18" y="26" width="28" height="60" fill={c1} rx="3"/>
    {c2 && <rect x="18" y="44" width="28" height="12" fill={c2}/>}
    <ellipse cx="32" cy="26" rx="14" ry="4" fill={c1}/>
    <ellipse cx="32" cy="86" rx="14" ry="4" fill={c1} opacity="0.5"/>
  </g>
);
// Cono (estribor)
const BCone = ({ c1, c2 }) => (
  <g>
    <polygon points="18,86 46,86 40,26 24,26" fill={c1}/>
    {c2 && <polygon points="18,86 46,86 44,76 20,76" fill={c2}/>}
    <ellipse cx="32" cy="86" rx="14" ry="4" fill={c1} opacity="0.5"/>
  </g>
);
// Pilar (cardinales, peligro aislado, especial)
const BPilar = ({ bands }) => {
  const bh = 64 / bands.length;
  return (
    <g>
      {bands.map((col, i) => (
        <rect key={i} x="22" y={22 + i * bh} width="20" height={bh} fill={col}/>
      ))}
      <rect x="22" y="22" width="20" height="64" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
    </g>
  );
};
// Esfera (aguas seguras) con franjas verticales
const BSphere = () => (
  <g>
    <defs>
      <clipPath id="sc"><circle cx="32" cy="56" r="26"/></clipPath>
    </defs>
    <rect x="6"  y="30" width="13" height="52" fill="#cc2222" clipPath="url(#sc)"/>
    <rect x="19" y="30" width="13" height="52" fill="#ffffff" clipPath="url(#sc)"/>
    <rect x="32" y="30" width="13" height="52" fill="#cc2222" clipPath="url(#sc)"/>
    <rect x="45" y="30" width="13" height="52" fill="#ffffff" clipPath="url(#sc)"/>
    <circle cx="32" cy="56" r="26" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
  </g>
);

// Topmarks (posicionados sobre el mástil, cy~22)
const TmCylRed   = () => <rect x="25" y="13" width="14" height="9" rx="2" fill="#cc2222"/>;
const TmConeGrn  = () => <polygon points="32,13 24,22 40,22" fill="#22aa44"/>;
const Tm2ConeUp  = () => <g><polygon points="32,13 25,19 39,19" fill="#111"/><polygon points="32,20 25,26 39,26" fill="#111"/></g>;
const Tm2ConeDown= () => <g><polygon points="25,13 39,13 32,19" fill="#111"/><polygon points="25,20 39,20 32,26" fill="#111"/></g>;
const Tm2ConeBases=() => <g><polygon points="25,13 39,13 32,19" fill="#111"/><polygon points="32,20 25,26 39,26" fill="#111"/></g>;
const Tm2ConeTips =() => <g><polygon points="32,13 25,19 39,19" fill="#111"/><polygon points="25,20 39,20 32,26" fill="#111"/></g>;
const Tm2Spheres = () => <g><circle cx="32" cy="15" r="5" fill="#111"/><circle cx="32" cy="25" r="5" fill="#111"/></g>;
const TmSphRed   = () => <circle cx="32" cy="17" r="6" fill="#cc2222"/>;
const TmXYellow  = () => <g><line x1="24" y1="13" x2="40" y2="27" stroke="#ddcc00" strokeWidth="3.5" strokeLinecap="round"/><line x1="40" y1="13" x2="24" y2="27" stroke="#ddcc00" strokeWidth="3.5" strokeLinecap="round"/></g>;

const Buoy = ({ body, topmark, lightColor, dur }) => (
  <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{display:'block', overflow:'visible'}}>
    <BChain/>
    {body}
    <BMast/>
    {topmark}
    <BLight color={lightColor} dur={dur}/>
  </svg>
);

const BALIZAS_DATA = [
  {
    name: "Lateral de Babor",
    side: "BABOR · IALA A",
    luz: "Fl R — roja",
    desc: "Dejada a babor al entrar. Cuerpo cilíndrico rojo. Topmark: cilindro rojo. En IALA B se deja a estribor.",
    svg: <Buoy body={<BCan c1="#cc2222"/>} topmark={<TmCylRed/>} lightColor="#ff5555" dur="2s"/>,
  },
  {
    name: "Lateral de Estribor",
    side: "ESTRIBOR · IALA A",
    luz: "Fl G — verde",
    desc: "Dejada a estribor al entrar. Cuerpo cónico verde. Topmark: cono verde. En IALA B se deja a babor.",
    svg: <Buoy body={<BCone c1="#22aa44"/>} topmark={<TmConeGrn/>} lightColor="#44ff88" dur="2s"/>,
  },
  {
    name: "Canal Preferente Estribor",
    side: "PREF. BABOR",
    luz: "Fl(2+1) R",
    desc: "Roja con franja verde horizontal. Canal principal a estribor, secundario a babor.",
    svg: <Buoy body={<BCan c1="#cc2222" c2="#22aa44"/>} topmark={<TmCylRed/>} lightColor="#ff5555" dur="1.5s"/>,
  },
  {
    name: "Canal Preferente Babor",
    side: "PREF. ESTRIBOR",
    luz: "Fl(2+1) G",
    desc: "Verde con franja roja horizontal. Canal principal a babor, secundario a estribor.",
    svg: <Buoy body={<BCone c1="#22aa44" c2="#cc2222"/>} topmark={<TmConeGrn/>} lightColor="#44ff88" dur="1.5s"/>,
  },
  {
    name: "Cardinal Norte",
    side: "CARDINAL N",
    luz: "Q o VQ continua",
    desc: "Negra sobre amarilla. Topmark: 2 conos ▲▲ (puntas arriba). Pasar al NORTE del peligro.",
    svg: <Buoy body={<BPilar bands={["#111","#ffcc00"]}/>} topmark={<Tm2ConeUp/>} lightColor="#ffffff" dur="0.5s"/>,
  },
  {
    name: "Cardinal Sur",
    side: "CARDINAL S",
    luz: "Q(6)+LFl",
    desc: "Amarilla sobre negra. Topmark: 2 conos ▼▼ (puntas abajo). Pasar al SUR del peligro.",
    svg: <Buoy body={<BPilar bands={["#ffcc00","#111"]}/>} topmark={<Tm2ConeDown/>} lightColor="#ffffff" dur="1.2s"/>,
  },
  {
    name: "Cardinal Este",
    side: "CARDINAL E",
    luz: "Q(3) c/10s",
    desc: "Negra-amarilla-negra. Topmark: bases juntas ▼▲. Pasar al ESTE del peligro.",
    svg: <Buoy body={<BPilar bands={["#111","#ffcc00","#111"]}/>} topmark={<Tm2ConeBases/>} lightColor="#ffffff" dur="1s"/>,
  },
  {
    name: "Cardinal Oeste",
    side: "CARDINAL O",
    luz: "Q(9) c/15s",
    desc: "Amarilla-negra-amarilla. Topmark: puntas juntas ▲▼. Pasar al OESTE del peligro.",
    svg: <Buoy body={<BPilar bands={["#ffcc00","#111","#ffcc00"]}/>} topmark={<Tm2ConeTips/>} lightColor="#ffffff" dur="1.8s"/>,
  },
  {
    name: "Peligro Aislado",
    side: "PELIGRO AISLADO",
    luz: "Fl(2) blanca",
    desc: "Negra con franja roja. Topmark: 2 esferas negras. Peligro pequeño, aguas navegables alrededor.",
    svg: <Buoy body={<BPilar bands={["#111","#cc2222","#111"]}/>} topmark={<Tm2Spheres/>} lightColor="#ffffff" dur="2s"/>,
  },
  {
    name: "Aguas Seguras",
    side: "AGUAS SEGURAS",
    luz: "Iso/Oc/Mo(A) blanca",
    desc: "Franjas verticales rojas y blancas. Topmark: esfera roja. Aguas navegables a su alrededor.",
    svg: <Buoy body={<BSphere/>} topmark={<TmSphRed/>} lightColor="#ffffff" dur="3s"/>,
  },
  {
    name: "Marca Especial",
    side: "ESPECIAL",
    luz: "Fl(4) amarilla",
    desc: "Completamente amarilla. Topmark: aspa (X) amarilla. Zonas especiales: cables, deportes, vertidos.",
    svg: <Buoy body={<BPilar bands={["#ddcc00"]}/>} topmark={<TmXYellow/>} lightColor="#ffee00" dur="2.5s"/>,
  },
  {
    name: "Peligro Nuevo",
    side: "PELIGRO NUEVO",
    luz: "Fl(4)Y + Q",
    desc: "Azul con banda amarilla. Puede duplicarse. Peligro reciente no cartografiado.",
    svg: <Buoy body={<BPilar bands={["#003399","#ffcc00","#003399"]}/>} topmark={<TmXYellow/>} lightColor="#ffee44" dur="1s"/>,
  },
];

function BalizasSection() {
  const [selected, setSelected] = useState(null);
  const sel = selected !== null ? BALIZAS_DATA[selected] : null;

  return (
    <div>
      <div className="section-title">Balizas</div>
      <div className="section-sub">Sistema de Balizamiento Marítimo IALA — Región A (Europa, África, Asia, Australia)</div>
      <div className="info-box">
        📍 <strong>IALA A (Europa):</strong> Rojo a babor al entrar — «ROPE» (Red On Port Entry). Toca una baliza para ver el detalle.
      </div>

      {sel && (
        <div style={{
          background: 'rgba(200,168,75,0.08)', border: '1px solid #c8a84b',
          borderRadius: 10, padding: 16, marginBottom: 16,
          display: 'flex', gap: 18, alignItems: 'center',
        }}>
          <div style={{flexShrink:0}}>{sel.svg}</div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:'#c8a84b', marginBottom:3}}>{sel.name}</div>
            <div style={{fontSize:10, color:'#8ba3c0', letterSpacing:1, marginBottom:6, textTransform:'uppercase'}}>{sel.side}</div>
            <div style={{fontSize:12, color:'#bccfe0', lineHeight:1.7, marginBottom:5}}>{sel.desc}</div>
            <div style={{fontSize:11, background:'rgba(200,168,75,0.12)', border:'1px solid rgba(200,168,75,0.3)', borderRadius:4, padding:'3px 9px', display:'inline-block', color:'#c8a84b', letterSpacing:1}}>💡 {sel.luz}</div>
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: 10,
      }}>
        {BALIZAS_DATA.map((b, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            style={{
              background: selected === i ? 'rgba(200,168,75,0.1)' : '#0d1f3a',
              border: `1px solid ${selected === i ? '#c8a84b' : '#1a3050'}`,
              borderRadius: 8, padding: '10px 6px 8px',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 6, transition: 'all 0.15s',
            }}
          >
            {b.svg}
            <div style={{fontSize:9, color: selected === i ? '#c8a84b' : '#bccfe0', textAlign:'center', lineHeight:1.3, fontWeight:600, letterSpacing:0.3}}>{b.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function BanderasSection() {
  const [selected, setSelected] = useState(null);
  const flags = [
    { letter: "A", meaning: "Tengo un buceador; mantengan distancia y velocidad reducida", phonetic: "Alfa" },
    { letter: "B", meaning: "Estoy cargando, descargando o transportando mercancías peligrosas", phonetic: "Bravo" },
    { letter: "C", meaning: "Sí / Afirmativo", phonetic: "Charlie" },
    { letter: "D", meaning: "Manténgase apartado — estoy maniobrando con dificultad", phonetic: "Delta" },
    { letter: "E", meaning: "Estoy alterando mi rumbo a estribor", phonetic: "Echo" },
    { letter: "F", meaning: "Estoy averiado — comuníquense conmigo", phonetic: "Foxtrot" },
    { letter: "G", meaning: "Necesito un práctico / (Pesca) Tengo peces en mis redes", phonetic: "Golf" },
    { letter: "H", meaning: "Tengo práctico a bordo", phonetic: "Hotel" },
    { letter: "I", meaning: "Estoy alterando mi rumbo a babor", phonetic: "India" },
    { letter: "J", meaning: "¡Incendio a bordo! Mercancías peligrosas — manténganse alejados", phonetic: "Juliett" },
    { letter: "K", meaning: "Deseo comunicar con ustedes", phonetic: "Kilo" },
    { letter: "L", meaning: "Detengan su buque inmediatamente", phonetic: "Lima" },
    { letter: "M", meaning: "Mi buque está parado — no tengo arrancada", phonetic: "Mike" },
    { letter: "N", meaning: "No / Negativo", phonetic: "November" },
    { letter: "O", meaning: "Hombre al agua", phonetic: "Oscar" },
    { letter: "P", meaning: "En puerto: el buque va a hacerse a la mar. En pesca: mis redes están enganchadas", phonetic: "Papa" },
    { letter: "Q", meaning: "Mi buque es sano — solicito libre plática", phonetic: "Quebec" },
    { letter: "R", meaning: "He recibido su último mensaje", phonetic: "Romeo" },
    { letter: "S", meaning: "Mis motores van a toda atrás", phonetic: "Sierra" },
    { letter: "T", meaning: "No me rebase — estoy arrastrando con aparejo debajo del agua", phonetic: "Tango" },
    { letter: "U", meaning: "Se dirige usted hacia un peligro", phonetic: "Uniform" },
    { letter: "V", meaning: "Necesito asistencia", phonetic: "Victor" },
    { letter: "W", meaning: "Necesito asistencia médica", phonetic: "Whiskey" },
    { letter: "X", meaning: "Detengan la maniobra y presten atención a mis señales", phonetic: "X-ray" },
    { letter: "Y", meaning: "Estoy arrastrando el ancla", phonetic: "Yankee" },
    { letter: "Z", meaning: "Necesito un remolcador", phonetic: "Zulu" },
  ];

  const sel = selected !== null ? flags[selected] : null;

  return (
    <div>
      <div className="section-title">Banderas</div>
      <div className="section-sub">Código Internacional de Señales — CIS / ICS</div>
      <div className="info-box">
        🚩 Toca cualquier bandera para ver su significado. Cada letra tiene una bandera y un significado náutico propio cuando se iza sola.
      </div>

      {sel && (
        <div style={{
          background: 'rgba(200,168,75,0.1)', border: '1px solid #c8a84b',
          borderRadius: 8, padding: '16px', marginBottom: 16,
          display: 'flex', gap: 16, alignItems: 'center',
        }}>
          <FlagSVG letter={sel.letter} size={72} />
          <div>
            <div style={{fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:900, color:'#c8a84b'}}>{sel.letter}</div>
            <div style={{fontSize:11, color:'#a0b8d0', letterSpacing:1, marginBottom:4}}>{sel.phonetic}</div>
            <div style={{fontSize:13, color:'#d4c49a', lineHeight:1.6}}>{sel.meaning}</div>
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
        gap: 10,
      }}>
        {flags.map((f, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            style={{
              background: selected === i ? 'rgba(200,168,75,0.12)' : '#0d1f3a',
              border: `1px solid ${selected === i ? '#c8a84b' : '#1a3050'}`,
              borderRadius: 8, padding: '10px 6px', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              transition: 'all 0.15s',
            }}
          >
            <FlagSVG letter={f.letter} size={54} />
            <div style={{
              fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:900,
              color: selected === i ? '#c8a84b' : '#d4c49a',
            }}>{f.letter}</div>
            <div style={{fontSize:9, color:'#8ba3c0', letterSpacing:0.5}}>{f.phonetic}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Sector light diagram: cx,cy = center, sectors = [{startDeg, endDeg, color}], lights = [{y, color}] for vertical stacks
const LightDiagram = ({ sectors = [], lights = [], size = 72 }) => {
  const cx = size / 2, cy = size / 2, r = size * 0.38;
  const toRad = d => (d - 90) * Math.PI / 180;
  const arc = (start, end, radius) => {
    const s = toRad(start), e = toRad(end);
    const x1 = cx + radius * Math.cos(s), y1 = cy + radius * Math.sin(s);
    const x2 = cx + radius * Math.cos(e), y2 = cy + radius * Math.sin(e);
    const large = (end - start + 360) % 360 > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`;
  };
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{display:'block', flexShrink:0}}>
      {/* dark background circle */}
      <circle cx={cx} cy={cy} r={r+4} fill="#061020" stroke="#1a3050" strokeWidth="1"/>
      {/* sectors */}
      {sectors.map((s, i) => (
        <path key={i} d={arc(s.start, s.end, r)}
          fill={s.color} opacity="0.85"
          filter={`drop-shadow(0 0 4px ${s.color})`}/>
      ))}
      {/* ship silhouette */}
      <ellipse cx={cx} cy={cy} rx="5" ry="8" fill="#c8a84b" opacity="0.9"/>
      <polygon points={`${cx},${cy-11} ${cx-4},${cy-5} ${cx+4},${cy-5}`} fill="#c8a84b" opacity="0.9"/>
      {/* vertical light stack (for multi-light vessels) */}
      {lights.length > 0 && (
        <g>
          {lights.map((l, i) => (
            <circle key={i} cx={cx + 18} cy={cy - 10 + i * 12} r="5"
              fill={l.color} stroke="#061020" strokeWidth="1"
              filter={`drop-shadow(0 0 5px ${l.color})`}>
              <animate attributeName="opacity" values="1;0.3;1" dur={`${1.5 + i*0.3}s`} repeatCount="indefinite"/>
            </circle>
          ))}
        </g>
      )}
    </svg>
  );
};

function LucesSection() {
  const [sel, setSel] = useState(null);

  const luces = [
    {
      name: "Buque de propulsión mecánica",
      tag: "MECÁNICA EN MARCHA",
      desc: "Tope de proa blanco (225°) + costado rojo babor (112,5°) + costado verde estribor (112,5°) + alcance blanco popa (135°). Si >50m: segundo tope más alto.",
      diagram: <LightDiagram sectors={[
        {start:247,end:112,color:"#ffffff"},   // tope proa 225° centrado en proa
        {start:247,end:360,color:"#cc2222"},   // babor 112,5°
        {start:0,  end:112,color:"#22cc44"},   // estribor 112,5°
        {start:112,end:247,color:"rgba(255,255,255,0.18)"}, // alcance popa 135°
      ]}/>,
    },
    {
      name: "Buque de vela en marcha",
      tag: "VELA",
      desc: "Solo luces de costado (rojo babor, verde estribor) y alcance blanco popa. SIN luz de tope. Opcional: bicolor rojo+verde en el tope del palo.",
      diagram: <LightDiagram sectors={[
        {start:247,end:360,color:"#cc2222"},
        {start:0,  end:112,color:"#22cc44"},
        {start:112,end:247,color:"rgba(255,255,255,0.18)"},
      ]}/>,
    },
    {
      name: "Buque fondeado",
      tag: "FONDEO",
      desc: "Una luz blanca todo horizonte (360°) visible a 2 millas. Buques >50m: blanca en proa + blanca más baja en popa.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"#ffffff"}]}/>,
    },
    {
      name: "Costado de babor",
      tag: "ROJA · 112,5°",
      desc: "Luz roja visible desde la proa hasta 22,5° a popa del través de babor. Sector de 112,5°.",
      diagram: <LightDiagram sectors={[{start:247,end:360,color:"#cc2222"}]}/>,
    },
    {
      name: "Costado de estribor",
      tag: "VERDE · 112,5°",
      desc: "Luz verde visible desde la proa hasta 22,5° a popa del través de estribor. Sector de 112,5°.",
      diagram: <LightDiagram sectors={[{start:0,end:112,color:"#22cc44"}]}/>,
    },
    {
      name: "Luz de alcance",
      tag: "BLANCA POPA · 135°",
      desc: "Luz blanca centrada en la popa, visible en un sector de 135°. La ve el buque que alcanza por detrás.",
      diagram: <LightDiagram sectors={[{start:112,end:247,color:"#ffffff"}]}/>,
    },
    {
      name: "Sin gobierno (NUC)",
      tag: "2 ROJAS VERTICALES · 360°",
      desc: "Dos luces rojas todo horizonte en vertical. Si tiene arrancada añade costados y alcance. Prioridad máxima.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(30,10,10,0.5)"}]} lights={[{color:"#cc2222"},{color:"#cc2222"}]}/>,
    },
    {
      name: "Maniobrabilidad restringida (RAM)",
      tag: "ROJA-BLANCA-ROJA · 360°",
      desc: "Tres luces todo horizonte en vertical: roja-blanca-roja. Si tiene arrancada añade tope, costados y alcance.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(20,10,30,0.5)"}]} lights={[{color:"#cc2222"},{color:"#ffffff"},{color:"#cc2222"}]}/>,
    },
    {
      name: "Buque de pesca (arrastre)",
      tag: "VERDE+BLANCA · 360°",
      desc: "Verde sobre blanca todo horizonte. Si tiene arrancada añade costados y alcance. Si la red supera 150m: luz blanca extra en esa dirección.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(10,20,10,0.5)"}]} lights={[{color:"#22cc44"},{color:"#ffffff"}]}/>,
    },
    {
      name: "Buque de pesca (otros artes)",
      tag: "ROJA+BLANCA · 360°",
      desc: "Roja sobre blanca todo horizonte. Para palangre, cerco, nasas y artes distintos del arrastre.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(20,10,10,0.5)"}]} lights={[{color:"#cc2222"},{color:"#ffffff"}]}/>,
    },
    {
      name: "Practicaje",
      tag: "BLANCA+ROJA · 360°",
      desc: "Blanca sobre roja en vertical, todo horizonte. Indica que hay práctico a bordo.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(10,10,20,0.5)"}]} lights={[{color:"#ffffff"},{color:"#cc2222"}]}/>,
    },
    {
      name: "Buque varado",
      tag: "3 ROJAS VERTICALES · 360°",
      desc: "Luces de fondeo (blanca) más tres luces rojas todo horizonte en vertical. De día: marcas de fondeo + 3 esferas negras en vertical.",
      diagram: <LightDiagram sectors={[{start:0,end:360,color:"rgba(30,10,10,0.5)"}]} lights={[{color:"#cc2222"},{color:"#cc2222"},{color:"#cc2222"}]}/>,
    },
    {
      name: "Remolcador con remolque",
      tag: "TOPES EN VERTICAL",
      desc: "Si el remolque es <200m: 2 topes blancos en vertical. Si >200m: 3 topes. Rombo amarillo todo horizonte si el remolque supera 200m.",
      diagram: <LightDiagram sectors={[
        {start:247,end:112,color:"rgba(255,255,255,0.3)"},
        {start:112,end:247,color:"rgba(255,255,255,0.15)"},
      ]} lights={[{color:"#ffffff"},{color:"#ffffff"},{color:"#c8a84b"}]}/>,
    },
    {
      name: "Embarcación a remos",
      tag: "BLANCA O MIXTA",
      desc: "Pueden usar una linterna con blanco hacia proa y rojo/verde a los costados. O una luz blanca de emergencia para evitar abordaje.",
      diagram: <LightDiagram sectors={[
        {start:247,end:360,color:"#cc2222"},
        {start:0,  end:112,color:"#22cc44"},
        {start:112,end:247,color:"rgba(255,255,255,0.2)"},
      ]}/>,
    },
  ];

  return (
    <div>
      <div className="section-title">Luces</div>
      <div className="section-sub">Señales luminosas de navegación — Parte C del RIPA</div>
      <div className="info-box">
        💡 Las luces se exhiben de puesta a salida del sol. La rosa muestra el sector visible desde el barco. Las luces en columna (derecha del diagrama) son todo horizonte 360°.
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:12}}>
        {luces.map((l,i) => (
          <div key={i} onClick={()=>setSel(sel===i?null:i)} style={{
            background: sel===i ? 'rgba(200,168,75,0.07)' : '#0d1f3a',
            border:`1px solid ${sel===i ? '#c8a84b' : '#1a3050'}`,
            borderRadius:8, padding:12, cursor:'pointer',
            display:'flex', gap:12, alignItems:'center', transition:'all 0.15s',
          }}>
            {l.diagram}
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontSize:12, fontWeight:700, color:'#d4c49a', marginBottom:3, fontFamily:"'Playfair Display',serif"}}>{l.name}</div>
              <div style={{display:'inline-block', background:'rgba(200,168,75,0.12)', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontSize:9, padding:'1px 7px', borderRadius:3, letterSpacing:1, marginBottom:4}}>{l.tag}</div>
              {sel===i && <div style={{fontSize:11, color:'#bccfe0', lineHeight:1.7, marginTop:4}}>{l.desc}</div>}
              {sel!==i && <div style={{fontSize:10, color:'#8ba3c0', marginTop:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{l.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PitidosSection() {
  const signals = [
    { morse: "·", name: "1 pitido corto", desc: "Estoy alterando mi rumbo a estribor (en canal o en visibilidad reducida)" },
    { morse: "··", name: "2 pitidos cortos", desc: "Estoy alterando mi rumbo a babor" },
    { morse: "···", name: "3 pitidos cortos", desc: "Mis motores funcionan a toda atrás" },
    { morse: "····", name: "4 pitidos cortos", desc: "Señal de practicaje — reservada para uso de prácticos" },
    { morse: "·····+", name: "5 o más cortos", desc: "Señal de peligro o duda — el otro buque no toma las medidas suficientes (R.34d)" },
    { morse: "—", name: "1 pitido largo", desc: "Señal de presencia en niebla — buques en marcha con propulsión mecánica (cada 2 min)" },
    { morse: "——", name: "2 largos", desc: "Buque en marcha sin arrancada en visibilidad reducida (cada 2 min)" },
    { morse: "—·", name: "Largo + corto", desc: "Buque de vela, pesca, remolque en niebla (cada 2 min)" },
    { morse: "—··", name: "Largo + 2 cortos", desc: "Buque remolcado, o el último de una formación (cada 2 min)" },
    { morse: "—···", name: "Largo + 3 cortos", desc: "Pilotín o práctico en la zona de practicaje" },
    { morse: "·—·", name: "Corto-Largo-Corto", desc: "Señal de practicaje al aproximarse a un puerto" },
    { morse: "—···—", name: "Morse S.O.S.", desc: "Señal de socorro acústica — emergencia grave" },
    { morse: "····—", name: "Señal de 4+1", desc: "Buque que alcanza a otro solicitando franquear por su babor" },
    { morse: "——·", name: "2 largos + 1 corto", desc: "Buque fondeado en niebla — posición de advertencia (campana + gong)" },
    { morse: "🔔", name: "Campana (30 s)", desc: "Buques fondeados de menos de 100 m — durante niebla" },
    { morse: "🔔🔔", name: "Campana + gong", desc: "Buques fondeados de más de 100 m — campana en proa, gong en popa" },
  ];

  return (
    <div>
      <div className="section-title">Pitidos</div>
      <div className="section-sub">Señales acústicas — Parte D del RIPA (R.34–37)</div>

      <div className="info-box">
        📢 <strong>Duración:</strong> Pitido corto ≈ 1 segundo. Pitido largo: 4–6 segundos.<br />
        Las señales de maniobra se dan ANTES de ejecutar la maniobra, con la bocina. En niebla, las señales se dan con la bocina o silbato según el buque.
      </div>

      <div className="card">
        {signals.map((s, i) => (
          <div className="signal-row" key={i}>
            <div className="signal-morse">{s.morse}</div>
            <div className="signal-text">
              <div className="signal-name">{s.name}</div>
              <div className="signal-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DAY MARK SVGs ────────────────────────────────────────────────────────────
const MarcaSVG = ({ type, size = 56 }) => {
  const s = size;
  const cx = s / 2;
  const shapes = {
    // Cilindro rojo (babor lateral)
    cyl_red: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <rect x="14" y="12" width="28" height="34" fill="#cc2222" rx="4"/>
        <ellipse cx="28" cy="12" rx="14" ry="5" fill="#dd3333"/>
        <ellipse cx="28" cy="46" rx="14" ry="5" fill="#aa1111"/>
      </svg>
    ),
    // Cono verde (estribor lateral) — vértice arriba
    cone_grn: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <polygon points="28,8 10,48 46,48" fill="#22aa44"/>
        <ellipse cx="28" cy="48" rx="18" ry="5" fill="#118833"/>
      </svg>
    ),
    // Esfera negra (fondeo, NUC x1)
    sphere_blk: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <circle cx="28" cy="28" r="20" fill="#111"/>
        <ellipse cx="22" cy="22" rx="6" ry="4" fill="#333" opacity="0.5"/>
      </svg>
    ),
    // 2 esferas negras verticales (NUC)
    sphere2_blk: (
      <svg viewBox="0 0 56 70" width={s} height={Math.round(s*1.25)}>
        <circle cx="28" cy="16" r="13" fill="#111"/>
        <circle cx="28" cy="54" r="13" fill="#111"/>
        <ellipse cx="22" cy="12" rx="4" ry="3" fill="#333" opacity="0.5"/>
        <ellipse cx="22" cy="50" rx="4" ry="3" fill="#333" opacity="0.5"/>
      </svg>
    ),
    // 3 esferas negras verticales (varado)
    sphere3_blk: (
      <svg viewBox="0 0 56 88" width={s} height={Math.round(s*1.57)}>
        <circle cx="28" cy="12" r="11" fill="#111"/>
        <circle cx="28" cy="44" r="11" fill="#111"/>
        <circle cx="28" cy="76" r="11" fill="#111"/>
      </svg>
    ),
    // Esfera-rombo-esfera (RAM)
    sph_dia_sph: (
      <svg viewBox="0 0 56 88" width={s} height={Math.round(s*1.57)}>
        <circle cx="28" cy="11" r="10" fill="#111"/>
        <polygon points="28,32 14,44 28,56 42,44" fill="#111"/>
        <circle cx="28" cy="77" r="10" fill="#111"/>
      </svg>
    ),
    // Cilindro negro (CBD)
    cyl_blk: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <rect x="16" y="12" width="24" height="34" fill="#111" rx="3"/>
        <ellipse cx="28" cy="12" rx="12" ry="4" fill="#222"/>
        <ellipse cx="28" cy="46" rx="12" ry="4" fill="#0a0a0a"/>
      </svg>
    ),
    // Cono vértice abajo (vela con motor)
    cone_dn_blk: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <polygon points="10,10 46,10 28,48" fill="#111"/>
        <ellipse cx="28" cy="10" rx="18" ry="5" fill="#222"/>
      </svg>
    ),
    // 2 conos vértice a vértice (arrastre)
    cone2_vtv: (
      <svg viewBox="0 0 56 70" width={s} height={Math.round(s*1.25)}>
        <polygon points="10,8 46,8 28,34" fill="#111"/>
        <polygon points="10,62 46,62 28,36" fill="#111"/>
      </svg>
    ),
    // Cono + esfera (pesca otros artes)
    cone_sphere: (
      <svg viewBox="0 0 56 70" width={s} height={Math.round(s*1.25)}>
        <polygon points="10,8 46,8 28,32" fill="#111"/>
        <circle cx="28" cy="55" r="13" fill="#111"/>
      </svg>
    ),
    // Rombo (condicionado calado alternativo)
    diamond: (
      <svg viewBox="0 0 56 56" width={s} height={s}>
        <polygon points="28,4 52,28 28,52 4,28" fill="#111"/>
      </svg>
    ),
    // 3 esferas verdes (dragaminas)
    sphere3_grn: (
      <svg viewBox="0 0 80 56" width={Math.round(s*1.4)} height={s}>
        <circle cx="40" cy="14" r="12" fill="#22aa44"/>
        <circle cx="14" cy="44" r="12" fill="#22aa44"/>
        <circle cx="66" cy="44" r="12" fill="#22aa44"/>
      </svg>
    ),
  };
  return shapes[type] || null;
};

function MarcasSection() {
  const [sel, setSel] = useState(null);

  const marcasBalizas = [
    { type:"cyl_red",   name:"Baliza Lateral Babor",     tipo:"LATERAL IALA-A", desc:"Cilindro rojo. Dejada a babor al entrar. IALA-B: invertida. Equivalente de día a la baliza roja." },
    { type:"cone_grn",  name:"Baliza Lateral Estribor",  tipo:"LATERAL IALA-A", desc:"Cono verde con vértice arriba. Dejado a estribor al entrar. IALA-B: invertida." },
  ];

  const marcasBuques = [
    { type:"cone_dn_blk", name:"Vela con motor en uso",   tipo:"VELA + MOTOR",   desc:"Un cono negro con vértice hacia abajo en el palo. Obligatorio cuando el velero usa el motor." },
    { type:"sphere_blk",  name:"Buque fondeado",          tipo:"FONDEO",         desc:"Una esfera negra en la parte delantera del buque, visible desde todos los ángulos." },
    { type:"sphere2_blk", name:"Sin gobierno (NUC)",      tipo:"NUC",            desc:"Dos esferas negras en vertical. El buque no puede maniobrar: prioridad máxima." },
    { type:"sphere3_blk", name:"Buque varado",            tipo:"VARADO",         desc:"Tres esferas negras en vertical. Además lleva las marcas de fondeo." },
    { type:"sph_dia_sph", name:"Maniobrabilidad restringida", tipo:"RAM",        desc:"Esfera negra — rombo negro — esfera negra en vertical. Dragas, tendido de cables, levantamientos hidrográficos..." },
    { type:"cyl_blk",     name:"Condicionado por calado", tipo:"CBD",            desc:"Un cilindro negro. El barco no puede apartarse del canal por su calado." },
    { type:"cone2_vtv",   name:"Pesca — arrastre",        tipo:"PESCA ARRASTRE", desc:"Dos conos negros vértice a vértice (pajarita). Buque arrastrando redes." },
    { type:"cone_sphere", name:"Pesca — otros artes",     tipo:"PESCA OTROS",    desc:"Un cono negro + una esfera negra en vertical. Palangre, cerco, nasas y otros." },
    { type:"diamond",     name:"Remolcador (>200 m)",     tipo:"REMOLQUE LARGO", desc:"Un rombo negro en el mástil del remolcador cuando el remolque supera los 200 metros." },
    { type:"sphere3_grn", name:"Dragaminas",              tipo:"DRAGAMINAS",     desc:"Tres esferas verdes: una en el palo de proa y una en cada extremo del palo de señales. No se acerque a menos de 1000 m." },
  ];

  const s = sel;

  return (
    <div>
      <div className="section-title">Marcas</div>
      <div className="section-sub">Marcas de día — formas geométricas reglamentarias</div>
      <div className="info-box">
        🔶 Las marcas de día sustituyen a las luces durante las horas de luz. Son formas geométricas normalizadas: esferas, conos, cilindros, rombos. Toca cada marca para ver el detalle.
      </div>

      {s !== null && (
        <div style={{background:'rgba(200,168,75,0.08)', border:'1px solid #c8a84b', borderRadius:10, padding:14, marginBottom:16, display:'flex', gap:16, alignItems:'center'}}>
          <div style={{background:'#f5ead0', borderRadius:8, padding:10, border:'1px solid #c8a84b', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', minWidth:70}}>
            <MarcaSVG type={[...marcasBalizas,...marcasBuques][s].type} size={56}/>
          </div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:'#c8a84b', marginBottom:2}}>{[...marcasBalizas,...marcasBuques][s].name}</div>
            <div style={{fontSize:9, color:'#8ba3c0', letterSpacing:1, marginBottom:6, textTransform:'uppercase'}}>{[...marcasBalizas,...marcasBuques][s].tipo}</div>
            <div style={{fontSize:12, color:'#bccfe0', lineHeight:1.7}}>{[...marcasBalizas,...marcasBuques][s].desc}</div>
          </div>
        </div>
      )}

      <div style={{fontFamily:"'Playfair Display',serif", fontSize:15, color:'#c8a84b', marginBottom:10}}>Marcas de balizamiento</div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px,1fr))', gap:10, marginBottom:20}}>
        {marcasBalizas.map((m,i) => (
          <button key={i} onClick={()=>setSel(sel===i?null:i)} style={{
            background: sel===i ? 'rgba(200,168,75,0.1)' : '#0d1f3a',
            border:`1px solid ${sel===i ? '#c8a84b' : '#1a3050'}`,
            borderRadius:8, padding:'12px 8px', cursor:'pointer',
            display:'flex', flexDirection:'column', alignItems:'center', gap:8, transition:'all 0.15s',
          }}>
            <div style={{background:'#f5ead0', borderRadius:6, padding:8, display:'flex', alignItems:'center', justifyContent:'center', minHeight:64}}>
              <MarcaSVG type={m.type} size={52}/>
            </div>
            <div style={{fontSize:10, fontWeight:700, color:sel===i?'#c8a84b':'#d4c49a', textAlign:'center', lineHeight:1.3}}>{m.name}</div>
          </button>
        ))}
      </div>

      <div style={{fontFamily:"'Playfair Display',serif", fontSize:15, color:'#c8a84b', marginBottom:10}}>Marcas de buques</div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px,1fr))', gap:10}}>
        {marcasBuques.map((m,i) => {
          const idx = marcasBalizas.length + i;
          return (
            <button key={i} onClick={()=>setSel(sel===idx?null:idx)} style={{
              background: sel===idx ? 'rgba(200,168,75,0.1)' : '#0d1f3a',
              border:`1px solid ${sel===idx ? '#c8a84b' : '#1a3050'}`,
              borderRadius:8, padding:'12px 8px', cursor:'pointer',
              display:'flex', flexDirection:'column', alignItems:'center', gap:8, transition:'all 0.15s',
            }}>
              <div style={{background:'#f5ead0', borderRadius:6, padding:8, display:'flex', alignItems:'center', justifyContent:'center', minHeight:64}}>
                <MarcaSVG type={m.type} size={52}/>
              </div>
              <div style={{fontSize:10, fontWeight:700, color:sel===idx?'#c8a84b':'#d4c49a', textAlign:'center', lineHeight:1.3}}>{m.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ManiobraSection() {
  return (
    <div>
      <div className="section-title">Maniobras</div>
      <div className="section-sub">Reglas de paso y gobierno — Parte B del RIPA</div>

      <div className="info-box">
        🧭 Las maniobras deben ser <strong>amplias, decididas y ejecutadas con suficiente antelación</strong>. Una pequeña alteración de rumbo puede no ser percibida por el otro buque. Evita siempre cruzar la proa del buque privilegiado.
      </div>

      <div className="card" style={{marginBottom:16}}>
        <div className="card-title">⚖️ Orden de Prioridad (R.18)</div>
        <div className="card-body">
          <ul className="priority-list">
            {[
              ["1º", "Buque sin gobierno (NUC)", "2 luces/marcas rojas verticales"],
              ["2º", "Maniobrabilidad restringida (RAM)", "Esfera-rombo-esfera / rojo-blanco-rojo"],
              ["3º", "Condicionado por calado (CBD)", "Cilindro / 3 rojas verticales"],
              ["4º", "Buque de pesca", "Verde sobre blanca / roja sobre blanca"],
              ["5º", "Buque de vela", "Costados + alcance, sin tope"],
              ["6º", "Buque de propulsión mecánica", "Tope(s) + costados + alcance"],
            ].map(([pos, tipo, senal], i) => (
              <li className="priority-item" key={i}>
                <div className="priority-pos">{pos}</div>
                <div><strong style={{color:'#d4c49a'}}>{tipo}</strong> — {senal}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {[
        {
          num: 1, title: "Situación de alcance",
          rule: "El buque que alcanza cede siempre, sea cual sea la propulsión de ambos. El alcanzado tiene el derecho de paso. El buque alcanzador puede pasar por babor o estribor, pero debe señalizarlo con pitidos. La situación persiste hasta que se haya franqueado completamente."
        },
        {
          num: 2, title: "Situación de proas (rumbos opuestos)",
          rule: "Dos buques de propulsión mecánica en rumbos opuestos caerán cada uno a ESTRIBOR y se cruzarán por la amura de babor del otro. Si hay duda sobre si es situación de proas, se asumirá que SÍ y se actuará en consecuencia."
        },
        {
          num: 3, title: "Situación de cruce",
          rule: "El buque que tiene al otro por su costado de ESTRIBOR debe apartarse. El privilegiado (el que tiene al otro por babor) mantiene rumbo y velocidad. Mnemotecnia: 'el que ve luz roja, para' — si ves la luz roja del otro, tú eres el que cede."
        },
        {
          num: 4, title: "Vela vs. Vela",
          rule: "Si en amuras contrarias: cede el de babor. Si en la misma amura: cede el de barlovento. Si el barloventeado no sabe la amura del otro: si ve luz roja del otro, cede."
        },
        {
          num: 5, title: "Navegación en canales estrechos",
          rule: "Navegar por la banda de estribor del canal. Los buques pequeños (<20 m) y de vela no obstaculizarán a los grandes que solo pueden navegar dentro del canal. Se puede adelantar con consentimiento del otro (señales)."
        },
        {
          num: 6, title: "Visibilidad reducida (niebla)",
          rule: "Velocidad de seguridad reducida. Escucha activa y radar si disponible. Señales acústicas cada 2 minutos. Si detectas un buque por proa: no caerás a babor de un buque situado en tu babor. Si estás fondeado: campana durante 5 s cada minuto."
        },
        {
          num: 7, title: "Zonas de TSS (Dispositivos de separación)",
          rule: "Usa el sentido de circulación de tu carril. Evita cruzar los carriles; si es necesario, crúzalos perpendicularmente. No fondees en el área de separación. Los buques de vela, pesca y <20 m no obstaculizarán los carriles."
        },
        {
          num: 8, title: "Hombre al agua (MOB)",
          rule: "Iza bandera O. Lanza aros salvavidas. Marca posición en GPS. Maniobra de Williamson, Boutakov o círculo según la situación. Llama por VHF canal 16. Avisa a guardacostas."
        },
      ].map((m, i) => (
        <div className="maniobra-card" key={i}>
          <div className="maniobra-header">
            <div className="maniobra-num">{m.num}</div>
            <div className="maniobra-title">{m.title}</div>
          </div>
          <div className="maniobra-rule">{m.rule}</div>
        </div>
      ))}
    </div>
  );
}

// ─── APP SHELL ────────────────────────────────────────────────────────────────

// ─── VHF ─────────────────────────────────────────────────────────────────────
function VhfSection() {
  const [open, setOpen] = useState(null);
  const canales = [
    { ch:"16", uso:"SOCORRO / LLAMADA / ESCUCHA", color:"#cc2222", desc:"Canal de guardia obligatorio. Todas las embarcaciones deben escucharlo siempre. Usado para socorro (MAYDAY), urgencia (PAN PAN) y seguridad (SÉCURITÉ). Nunca hacer conversaciones ordinarias." },
    { ch:"09", uso:"Llamada entre embarcaciones de recreo", color:"#c8a84b", desc:"Canal de llamada alternativo para embarcaciones de recreo en algunos países. Se usa para establecer contacto y luego cambiar a un canal de trabajo." },
    { ch:"06", uso:"Comunicaciones entre buques (SAR)", color:"#3399ff", desc:"Canal interbúques para operaciones de búsqueda y salvamento. Recomendado para comunicaciones entre buques durante SAR coordinado por la Guardia Costera." },
    { ch:"08", uso:"Interbúques (trabajo)", color:"#a0b8d0", desc:"Canal de trabajo interbúques. Comunicaciones entre embarcaciones de recreo una vez establecido el contacto en canal 9 o 16." },
    { ch:"10", uso:"Interbúques / Lucha contra incendios", color:"#a0b8d0", desc:"Usado para comunicaciones entre buques y en coordinación de lucha contra incendios en algunos países." },
    { ch:"11", uso:"Control de tráfico portuario (VTS)", color:"#22aa44", desc:"Control de tráfico en puertos. Consultar NOTAMs locales ya que el canal VTS varía según el puerto." },
    { ch:"12", uso:"Control de tráfico portuario (VTS)", color:"#22aa44", desc:"Canal VTS alternativo en numerosos puertos españoles y europeos. Verificar siempre la guía del piloto local." },
    { ch:"13", uso:"Navegación — Puentes y esclusas", color:"#22aa44", desc:"Comunicación con puentes móviles, esclusas y operadores portuarios. Velocidad de seguridad y aviso de maniobra." },
    { ch:"14", uso:"Control portuario / Practicaje", color:"#22aa44", desc:"Canal de practicaje y control portuario en muchos puertos. Habitual en puertos de la cornisa cantábrica y Mediterráneo español." },
    { ch:"67", uso:"Guardia costera (UK/Francia)", color:"#3399ff", desc:"Canal de guardia secundario para comunicaciones con la Guardia Costera en el norte de Europa. En España, usar el 16 y el canal asignado al MRCC." },
    { ch:"70", uso:"DSC — Llamada Selectiva Digital", color:"#cc2222", desc:"SOLO para llamadas DSC (Digital Selective Calling). NUNCA para voz. Permite llamadas de socorro automáticas con posición GPS incluida si el VHF tiene GPS integrado." },
    { ch:"72", uso:"Recreo — Interbúques", color:"#a0b8d0", desc:"Canal de trabajo habitual entre embarcaciones de recreo en el Mediterráneo y Atlántico norte. Muy usado en regatas y travesías." },
    { ch:"77", uso:"Recreo — Interbúques", color:"#a0b8d0", desc:"Canal de trabajo entre embarcaciones de recreo. Alternativo al 72 en algunas zonas." },
  ];

  const procedimientos = [
    { title:"MAYDAY — Socorro", color:"#cc2222", steps:[
      "MAYDAY MAYDAY MAYDAY",
      "Aquí [nombre del barco] [nombre del barco] [nombre del barco]",
      "MAYDAY [nombre del barco]",
      "Posición: [coordenadas o referencia]",
      "Naturaleza del siniestro: [incendio / vía de agua / hombre al agua...]",
      "Número de personas a bordo: [N]",
      "Cualquier otra información útil [estado de la embarcación, EPIRB activado...]",
      "Cambio (over)",
    ]},
    { title:"PAN PAN — Urgencia", color:"#c8a84b", steps:[
      "PAN PAN PAN PAN PAN PAN",
      "Todos los buques (o nombre de la estación)",
      "Aquí [nombre del barco]",
      "Posición: [coordenadas]",
      "Naturaleza de la urgencia: [persona enferma / avería sin peligro inmediato...]",
      "Asistencia requerida",
      "Cambio",
    ]},
    { title:"SÉCURITÉ — Seguridad", color:"#22aa44", steps:[
      "SÉCURITÉ SÉCURITÉ SÉCURITÉ",
      "Todos los buques",
      "Aquí [nombre / estación costera]",
      "Mensaje de seguridad: [obstáculo a la navegación / temporal / derrumbe de baliza...]",
      "Cambio",
    ]},
    { title:"Llamada normal", color:"#3399ff", steps:[
      "Llamar en canal 16 (o 9 para recreo)",
      "[Estación llamada] [estación llamada], aquí [tu barco]",
      "Esperar respuesta",
      "Proponer canal de trabajo: 'cambiar al canal [XX]'",
      "Confirmar y cambiar de canal",
      "Realizar la comunicación",
      "Terminar: 'Terminado' o 'Fuera'",
    ]},
  ];

  return (
    <div>
      <div className="section-title">VHF</div>
      <div className="section-sub">Radiocomunicaciones náuticas — Banda marina 156–174 MHz</div>
      <div className="info-box">
        📡 El VHF marino es equipo de seguridad obligatorio. Canal 16 = escucha permanente. Canal 70 = solo DSC. Potencia: 25W (larga distancia) o 1W (corto alcance). Alcance típico: 20–40 millas.
      </div>

      <div style={{marginBottom:20}}>
        {canales.map((c,i) => (
          <div key={i} onClick={() => setOpen(open===i?null:i)} style={{
            background: open===i ? 'rgba(200,168,75,0.06)' : '#0d1f3a',
            border:`1px solid ${open===i ? '#c8a84b' : '#1a3050'}`,
            borderLeft:`4px solid ${c.color}`,
            borderRadius: open===i ? '6px 6px 0 0' : 6,
            marginBottom: open===i ? 0 : 8,
            cursor:'pointer', transition:'all 0.15s',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:12, padding:'11px 14px'}}>
              <div style={{
                background:c.color, color:'#fff', fontWeight:900, fontSize:14,
                width:38, height:38, borderRadius:6, display:'flex',
                alignItems:'center', justifyContent:'center', flexShrink:0,
                fontFamily:"'Source Code Pro',monospace",
              }}>{c.ch}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:12, fontWeight:700, color:'#d4c49a'}}>{c.uso}</div>
              </div>
              <span style={{color:'#c8a84b', fontSize:12}}>{open===i?'▲':'▼'}</span>
            </div>
            {open===i && (
              <div style={{padding:'0 14px 14px 66px', fontSize:12, color:'#bccfe0', lineHeight:1.7, borderTop:'1px solid #1a3050'}}>
                {c.desc}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{fontFamily:"'Playfair Display',serif", fontSize:18, color:'#c8a84b', marginBottom:14}}>Procedimientos de llamada</div>
      {procedimientos.map((p,i) => (
        <div key={i} style={{background:'#0d1f3a', border:`1px solid #1a3050`, borderLeft:`4px solid ${p.color}`, borderRadius:6, padding:14, marginBottom:12}}>
          <div style={{fontWeight:700, color:p.color, fontSize:13, marginBottom:10, fontFamily:"'Playfair Display',serif"}}>{p.title}</div>
          {p.steps.map((s,j) => (
            <div key={j} style={{display:'flex', gap:10, marginBottom:6}}>
              <div style={{width:20, height:20, borderRadius:'50%', background:'rgba(200,168,75,0.15)', border:'1px solid rgba(200,168,75,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, color:'#c8a84b', fontWeight:700, flexShrink:0}}>{j+1}</div>
              <div style={{fontSize:12, color:'#bccfe0', lineHeight:1.6, fontFamily:"'Source Code Pro',monospace"}}>{s}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── METEO ────────────────────────────────────────────────────────────────────
function MeteoSection() {
  const [tab, setTab] = useState("beaufort");

  const beaufort = [
    { f:0, n:"Calma",          kn:"<1",   ms:"0–0.2",  mar:"Como un espejo",                       symbol:"○" },
    { f:1, n:"Ventolina",      kn:"1–3",  ms:"0.3–1.5",mar:"Rizos sin espuma",                     symbol:"↑" },
    { f:2, n:"Flojito",        kn:"4–6",  ms:"1.6–3.3",mar:"Olas pequeñas, crestas sin romper",    symbol:"↑↑" },
    { f:3, n:"Flojo",          kn:"7–10", ms:"3.4–5.4",mar:"Olas pequeñas, algunas crestas blancas",symbol:"↑↑↑" },
    { f:4, n:"Bonancible",     kn:"11–16",ms:"5.5–7.9",mar:"Olas moderadas, muchas crestas blancas",symbol:"〰" },
    { f:5, n:"Fresquito",      kn:"17–21",ms:"8.0–10.7",mar:"Olas moderadas alargadas, espuma",    symbol:"〰〰" },
    { f:6, n:"Fresco",         kn:"22–27",ms:"10.8–13.8",mar:"Olas grandes, crestas espumosas extensas",symbol:"≋" },
    { f:7, n:"Frescachón",     kn:"28–33",ms:"13.9–17.1",mar:"El mar amontona, espuma en el viento", symbol:"≋≋" },
    { f:8, n:"Temporal",       kn:"34–40",ms:"17.2–20.7",mar:"Olas altas con crestas, espuma densa",symbol:"⚡" },
    { f:9, n:"Temporal fuerte",kn:"41–47",ms:"20.8–24.4",mar:"Olas muy altas, visibilidad reducida",symbol:"⚡⚡" },
    { f:10,n:"Temporal duro",  kn:"48–55",ms:"24.5–28.4",mar:"Olas enormes, el mar completamente blanco",symbol:"⛈" },
    { f:11,n:"Temporal muy duro",kn:"56–63",ms:"28.5–32.6",mar:"Olas excepcionales, visibilidad muy baja",symbol:"⛈⛈" },
    { f:12,n:"Huracán",        kn:"≥64",  ms:"≥32.7",  mar:"Aire lleno de espuma, visibilidad nula",symbol:"🌀" },
  ];

  const nubes = [
    { nombre:"Cúmulus (Cu)",    altura:"600–2000 m", tipo:"Desarrollo vertical", señal:"Buen tiempo si pequeños. Si crecen → cumulonimbus",      color:"#3399ff" },
    { nombre:"Cumulonimbus (Cb)",altura:"Base 600 m, top 12 km",tipo:"Tormenta",señal:"⚠️ Peligro: granizo, rayos, chubascos intensos, manga marina", color:"#cc2222" },
    { nombre:"Stratus (St)",    altura:"0–600 m",    tipo:"Capa baja",  señal:"Niebla, llovizna, visibilidad reducida",                  color:"#a0b8d0" },
    { nombre:"Stratocumulus (Sc)",altura:"600–2000 m",tipo:"Capa irregular",señal:"Nubosidad extensa, cielo gris. Lluvia ligera posible",      color:"#8ba3c0" },
    { nombre:"Altocumulus (Ac)",altura:"2000–7000 m",tipo:"Capa media", señal:"Si en mackerel sky → frente aproximándose en 24–36h",       color:"#bccfe0" },
    { nombre:"Altostratus (As)",altura:"2000–7000 m",tipo:"Capa media", señal:"Sol velado. Lluvia continua en pocas horas",               color:"#a0b8d0" },
    { nombre:"Nimbostratus (Ns)",altura:"500–3000 m",tipo:"Lluvia continua",señal:"Lluvia o nieve continua. Sin estructura visible",           color:"#4a5a6a" },
    { nombre:"Cirrus (Ci)",     altura:">7000 m",    tipo:"Alta / hielo",señal:"Filamentos blancos. Si aumentan → frente cálido en 24–48h", color:"#d4c49a" },
    { nombre:"Cirrocumulus (Cc)",altura:">7000 m",   tipo:"Alta / hielo",señal:"'Cielo empedrado'. Cambio de tiempo probable",             color:"#c8a84b" },
    { nombre:"Cirrostratus (Cs)",altura:">7000 m",   tipo:"Alta / hielo",señal:"Halo solar/lunar. Frente cálido aproximándose",           color:"#b0c4d8" },
  ];

  const frentes = [
    { nombre:"Frente cálido", simbolo:"───▲▲▲───", color:"#cc4444", desc:"Nubosidad progresiva: Ci → Cs → As → Ns. Lluvia continua moderada. Temperatura sube tras el paso. Viento gira en sentido horario (NE→SE→S)." },
    { nombre:"Frente frío",   simbolo:"───▼▼▼───", color:"#3399ff", desc:"Llegada brusca: Cb, chubascos, tormentas, visibilidad muy variable. Temperatura baja rápidamente. Viento gira en sentido horario (S→SW→NW). Mar de fondo." },
    { nombre:"Frente ocluido",simbolo:"───▲▼▲▼───",color:"#9933cc", desc:"Combinación de frente cálido y frío. Tiempo muy variable e impredecible. Típico en borrascas maduras del Atlántico norte." },
    { nombre:"Borrasca (L)",  simbolo:"     L",     color:"#cc2222", desc:"Centro de bajas presiones. Vientos en sentido antihorario (Hemisferio Norte). Tiempo inestable, lluvia, mares agitadas." },
    { nombre:"Anticiclón (H)",simbolo:"     H",     color:"#22aa44", desc:"Centro de altas presiones. Vientos débiles en sentido horario (HN). Tiempo estable, cielos despejados, calma chicha posible." },
  ];

  const tabs = [
    { id:"sada",     label:"⚓ Sada ahora" },
    { id:"beaufort", label:"Escala Beaufort" },
    { id:"nubes",    label:"Nubes" },
    { id:"frentes",  label:"Frentes" },
  ];

  // ── Predicción real Sada via Anthropic API ────────────────────────────────
  const [wx, setWx] = useState(null);
  const [wxLoading, setWxLoading] = useState(false);
  const [wxError, setWxError] = useState(null);

  const fetchSada = async () => {
    setWxLoading(true);
    setWxError(null);
    setWx(null);
    try {
      const params = new URLSearchParams({
        latitude: "43.358",
        longitude: "-8.247",
        hourly: "temperature_2m,precipitation_probability,precipitation,windspeed_10m,winddirection_10m,windgusts_10m,weathercode",
        current_weather: "true",
        wind_speed_unit: "kn",
        timezone: "Europe/Madrid",
        forecast_days: "2",
      });
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const d = await res.json();
      const hi = d.hourly;
      const now = new Date();
      let idx = hi.time.findIndex(t => new Date(t) >= now);
      if (idx < 0) idx = 0;

      const days = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
      const fmtDia = (iso) => {
        const dt = new Date(iso);
        return `${days[dt.getDay()]} ${dt.getDate()}`;
      };
      const fmtHora = (iso) => {
        const dt = new Date(iso);
        return `${dt.getHours().toString().padStart(2,"0")}:00`;
      };
      const beaufortNum = (kn) => {
        if (kn < 1) return 0; if (kn < 4) return 1; if (kn < 7) return 2;
        if (kn < 11) return 3; if (kn < 17) return 4; if (kn < 22) return 5;
        if (kn < 28) return 6; if (kn < 34) return 7; if (kn < 41) return 8;
        if (kn < 48) return 9; if (kn < 56) return 10; if (kn < 64) return 11;
        return 12;
      };
      const dirArrow = (deg) => {
        const dirs = ["N","NE","E","SE","S","SO","O","NO"];
        return dirs[Math.round(deg/45)%8];
      };
      const wmoInfo = (c) => {
        if (c===0) return {icono:"☀️", estado:"Despejado"};
        if (c<=2)  return {icono:"⛅", estado:"Nubes parciales"};
        if (c===3) return {icono:"☁️", estado:"Cubierto"};
        if (c<=49) return {icono:"🌫️", estado:"Niebla"};
        if (c<=59) return {icono:"🌦️", estado:"Llovizna"};
        if (c<=69) return {icono:"🌧️", estado:"Lluvia"};
        if (c<=79) return {icono:"🌨️", estado:"Nieve"};
        if (c<=82) return {icono:"🌦️", estado:"Chubascos"};
        if (c<=84) return {icono:"🌨️", estado:"Chubascos nieve"};
        if (c<=99) return {icono:"⛈️", estado:"Tormenta"};
        return {icono:"❓", estado:"—"};
      };

      const buildHora = (i) => {
        const w = wmoInfo(hi.weathercode[i]);
        return {
          hora: fmtHora(hi.time[i]),
          dia: fmtDia(hi.time[i]),
          temp: Math.round(hi.temperature_2m[i]),
          viento_kn: Math.round(hi.windspeed_10m[i]),
          dir: dirArrow(hi.winddirection_10m[i]),
          rafagas_kn: Math.round(hi.windgusts_10m[i]),
          lluvia_pct: hi.precipitation_probability[i] ?? 0,
          lluvia_mm: hi.precipitation[i] ?? 0,
          estado: w.estado,
          icono: w.icono,
          beaufort: beaufortNum(hi.windspeed_10m[i]),
        };
      };

      const horas = [];
      for (let i = idx; i < Math.min(idx + 24, hi.time.length); i++) {
        horas.push(buildHora(i));
      }

      setWx({
        ahora: horas[0],
        horas: horas,
      });
    } catch (e) {
      setWxError(`No se pudo cargar la predicción: ${e.message}`);
    } finally {
      setWxLoading(false);
    }
  };

  useEffect(() => {
    if (tab === "sada" && !wx && !wxLoading) fetchSada();
  }, [tab]);

  const beaufortNum = (kn) => {
    if (kn < 1) return 0; if (kn < 4) return 1; if (kn < 7) return 2;
    if (kn < 11) return 3; if (kn < 17) return 4; if (kn < 22) return 5;
    if (kn < 28) return 6; if (kn < 34) return 7; if (kn < 41) return 8;
    if (kn < 48) return 9; if (kn < 56) return 10; if (kn < 64) return 11;
    return 12;
  };
  const bftColor = (b) => b<=3?'#22aa44':b<=5?'#c8a84b':b<=7?'#ff8800':'#cc2222';
  const wmoIcon = (c) => {
    if (c===0) return {icon:"☀️",label:"Despejado"};
    if (c<=2)  return {icon:"⛅",label:"Nubes parciales"};
    if (c===3) return {icon:"☁️",label:"Cubierto"};
    if (c<=49) return {icon:"🌫️",label:"Niebla"};
    if (c<=59) return {icon:"🌦️",label:"Llovizna"};
    if (c<=69) return {icon:"🌧️",label:"Lluvia"};
    if (c<=79) return {icon:"🌨️",label:"Nieve/granizo"};
    if (c<=82) return {icon:"🌦️",label:"Chubascos"};
    if (c<=84) return {icon:"🌨️",label:"Chubascos nieve"};
    if (c<=99) return {icon:"⛈️",label:"Tormenta"};
    return {icon:"❓",label:"Desconocido"};
  };
  const dirArrow = (deg) => {
    const dirs = ["N","NE","E","SE","S","SO","O","NO"];
    return dirs[Math.round(deg/45)%8];
  };
  const fmtHour = (iso) => {
    const d = new Date(iso);
    return `${d.getHours().toString().padStart(2,"0")}:00`;
  };
  const fmtDay = (iso) => {
    const d = new Date(iso);
    const days = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
    return `${days[d.getDay()]} ${d.getDate()}`;
  };

  return (
    <div>
      <div className="section-title">Meteo</div>
      <div className="section-sub">Meteorología náutica — Sada, Ría de Betanzos</div>
      <div className="info-box">
        🌬️ Predicción horaria para Sada vía Open-Meteo. Beaufort calculado del viento a 10m. Consulta también Meteomar AEMET en VHF 26/27.
      </div>

      <div style={{display:'flex', gap:6, marginBottom:16, flexWrap:'wrap'}}>
        {tabs.map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            background: tab===t.id ? '#c8a84b' : '#0d1f3a',
            color: tab===t.id ? '#061020' : '#bccfe0',
            border:`1px solid ${tab===t.id ? '#c8a84b' : '#1a3050'}`,
            borderRadius:4, padding:'6px 14px', cursor:'pointer',
            fontSize:11, fontWeight:700, letterSpacing:1,
            fontFamily:"'Source Code Pro',monospace",
          }}>{t.label}</button>
        ))}
      </div>

      {tab==="sada" && (
        <div>
          {wxLoading && (
            <div style={{textAlign:'center', padding:40, color:'#c8a84b', fontSize:13}}>
              <div style={{fontSize:36, marginBottom:12}}>⚓</div>
              <div>Consultando predicción de Sada...</div>
              <div style={{fontSize:10, color:'#8ba3c0', marginTop:6}}>Buscando datos meteorológicos actuales</div>
            </div>
          )}
          {wxError && (
            <div style={{background:'rgba(204,34,34,0.1)', border:'1px solid #cc2222', borderRadius:8, padding:16, marginBottom:12, fontSize:12, color:'#ffaaaa'}}>
              {wxError}
              <button onClick={fetchSada} style={{display:'block', marginTop:10, background:'#cc2222', color:'#fff', border:'none', borderRadius:4, padding:'6px 14px', cursor:'pointer', fontSize:11}}>Reintentar</button>
            </div>
          )}
          {wx && !wxLoading && (() => {
            const a = wx.ahora;
            const col = bftColor(a.beaufort);
            return (
              <div>
                {/* NOW card */}
                <div style={{background:'linear-gradient(135deg,#0d1f3a,#0a1828)', border:`1px solid ${col}`, borderRadius:12, padding:18, marginBottom:16}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12}}>
                    <div>
                      <div style={{fontSize:11, color:'#8ba3c0', letterSpacing:2, marginBottom:2}}>AHORA · SADA</div>
                      <div style={{fontFamily:"'Playfair Display',serif", fontSize:32, color:'#d4c49a'}}>{a.temp}°C</div>
                      <div style={{fontSize:13, color:'#bccfe0', marginTop:3}}>{a.icono} {a.estado}</div>
                    </div>
                    <div style={{fontSize:48}}>{a.icono}</div>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10}}>
                    {[
                      {label:"Viento",   val:`${a.viento_kn} kn`,  sub:`${a.dir} · rfg ${a.rafagas_kn} kn`, color:col},
                      {label:"Beaufort", val:`B${a.beaufort}`,      sub:beaufort[a.beaufort]?.n||"",          color:col},
                      {label:"Lluvia",   val:`${a.lluvia_pct}%`,    sub:`${a.lluvia_mm} mm`,                  color:'#3399ff'},
                    ].map((item,j) => (
                      <div key={j} style={{background:'rgba(0,0,0,0.3)', borderRadius:8, padding:'8px 10px', borderTop:`2px solid ${item.color}`}}>
                        <div style={{fontSize:9, color:'#8ba3c0', letterSpacing:1, marginBottom:2}}>{item.label}</div>
                        <div style={{fontSize:18, fontWeight:700, color:item.color}}>{item.val}</div>
                        <div style={{fontSize:9, color:'#a0b8d0', marginTop:1}}>{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hourly table */}
                <div style={{fontFamily:"'Playfair Display',serif", fontSize:14, color:'#c8a84b', marginBottom:10}}>Próximas 24 horas</div>
                <div style={{background:'#0d1f3a', border:'1px solid #1a3050', borderRadius:8, overflow:'hidden'}}>
                  <div style={{display:'grid', gridTemplateColumns:'52px 26px 1fr 72px 52px', gap:4, padding:'7px 12px', borderBottom:'1px solid #1a3050', background:'rgba(200,168,75,0.06)'}}>
                    {["Hora","","Tiempo","Viento","Lluvia"].map((h,j)=>(
                      <div key={j} style={{fontSize:9, color:'#8ba3c0', letterSpacing:1, textAlign:j>=3?'right':'left'}}>{h}</div>
                    ))}
                  </div>
                  {(wx.horas||[]).map((h,i) => {
                    const col = bftColor(h.beaufort);
                    const isNow = i===0;
                    return (
                      <div key={i} style={{
                        display:'grid', gridTemplateColumns:'52px 26px 1fr 72px 52px',
                        gap:4, padding:'9px 12px', alignItems:'center',
                        borderBottom: i<wx.horas.length-1 ? '1px solid #1a3050':'none',
                        background: isNow?'rgba(200,168,75,0.06)':i%2===0?'transparent':'rgba(255,255,255,0.01)',
                      }}>
                        <div>
                          <div style={{fontSize:11, fontWeight:isNow?700:400, color:isNow?'#c8a84b':'#a0b8d0'}}>{h.hora}</div>
                          <div style={{fontSize:9, color:'#6080a0'}}>{h.dia}</div>
                        </div>
                        <div style={{fontSize:16}}>{h.icono}</div>
                        <div>
                          <div style={{fontSize:11, color:'#bccfe0'}}>{h.temp}°C</div>
                          <div style={{fontSize:9, color:'#8ba3c0'}}>{h.estado}</div>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <div style={{fontSize:11, fontWeight:700, color:col}}>B{h.beaufort} · {h.viento_kn}kn</div>
                          <div style={{fontSize:9, color:'#8ba3c0'}}>{h.dir} rfg {h.rafagas_kn}kn</div>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <div style={{fontSize:11, color:'#3399ff'}}>{h.lluvia_pct}%</div>
                          <div style={{fontSize:9, color:'#8ba3c0'}}>{h.lluvia_mm}mm</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{textAlign:'right', fontSize:9, color:'#6080a0', marginTop:6}}>
                  Sada · 43.358N 8.247O
                  <button onClick={fetchSada} style={{marginLeft:10, background:'transparent', border:'1px solid #1a3050', color:'#8ba3c0', borderRadius:3, padding:'2px 8px', cursor:'pointer', fontSize:9}}>↻ Actualizar</button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {tab==="beaufort" && (
        <div style={{background:'#0d1f3a', border:'1px solid #1a3050', borderRadius:8, overflow:'hidden'}}>
          {beaufort.map((b,i) => {
            const pct = Math.min(100, (b.f/12)*100);
            const col = b.f<=3 ? '#22aa44' : b.f<=6 ? '#c8a84b' : b.f<=9 ? '#ff8800' : '#cc2222';
            return (
              <div key={i} style={{
                display:'flex', alignItems:'center', gap:10, padding:'9px 14px',
                borderBottom: i<12 ? '1px solid #1a3050' : 'none',
                background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.02)',
              }}>
                <div style={{width:28, height:28, borderRadius:4, background:col, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:13, color:'#fff', flexShrink:0}}>{b.f}</div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:3}}>
                    <span style={{fontSize:12, fontWeight:700, color:'#d4c49a'}}>{b.n}</span>
                    <span style={{fontSize:10, color:'#8ba3c0'}}>{b.kn} kn</span>
                  </div>
                  <div style={{height:3, background:'#1a3050', borderRadius:2}}>
                    <div style={{height:'100%', width:`${pct}%`, background:col, borderRadius:2}}/>
                  </div>
                  <div style={{fontSize:10, color:'#8ba3c0', marginTop:3}}>{b.mar}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab==="nubes" && (
        <div>
          {nubes.map((n,i) => (
            <div key={i} style={{background:'#0d1f3a', border:'1px solid #1a3050', borderLeft:`3px solid ${n.color}`, borderRadius:6, padding:12, marginBottom:10}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4}}>
                <span style={{fontSize:13, fontWeight:700, color:'#d4c49a', fontFamily:"'Playfair Display',serif"}}>{n.nombre}</span>
                <span style={{fontSize:9, color:'#8ba3c0', letterSpacing:1, textAlign:'right'}}>{n.tipo}</span>
              </div>
              <div style={{fontSize:10, color:n.color, marginBottom:4, letterSpacing:1}}>↕ {n.altura}</div>
              <div style={{fontSize:11, color:'#bccfe0', lineHeight:1.6}}>{n.señal}</div>
            </div>
          ))}
        </div>
      )}

      {tab==="frentes" && (
        <div>
          {frentes.map((f,i) => (
            <div key={i} style={{background:'#0d1f3a', border:'1px solid #1a3050', borderLeft:`4px solid ${f.color}`, borderRadius:6, padding:14, marginBottom:12}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
                <span style={{fontFamily:"'Playfair Display',serif", fontSize:15, fontWeight:700, color:f.color}}>{f.nombre}</span>
                <code style={{fontSize:12, color:f.color, letterSpacing:2, background:'rgba(0,0,0,0.3)', padding:'2px 8px', borderRadius:3}}>{f.simbolo}</code>
              </div>
              <div style={{fontSize:12, color:'#bccfe0', lineHeight:1.7}}>{f.desc}</div>
            </div>
          ))}
          <div className="info-box" style={{marginTop:8}}>
            💡 <strong>Regla del viento:</strong> En el Hemisferio Norte, si pones el viento en la espalda, la borrasca está a tu izquierda (Ley de Buys-Ballot). La presión baja a más de 1 hPa/hora indica temporal en desarrollo.
          </div>
        </div>
      )}
    </div>
  );
}

// ─── NUDOS ────────────────────────────────────────────────────────────────────
const KnotSVG = ({ type }) => {
  const knots = {
    as: ( // As de guía (bowline)
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 20 60 C 20 60 25 20 50 30 C 65 36 55 55 45 50 C 35 45 38 32 50 35 C 60 37 58 48 50 45" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 50 45 C 42 42 38 55 50 60 C 62 65 70 55 65 45 C 60 38 50 35 50 35" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 65 45 L 80 40" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 20 60 L 10 65" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    ocho: ( // Nudo de ocho
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 15 55 C 15 55 20 30 40 35 C 55 38 52 55 40 52 C 28 49 30 35 45 35 C 62 35 70 55 60 62 C 48 70 30 62 25 50 C 18 36 30 22 45 25 C 60 28 72 42 75 52 L 85 58" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    ballestrinque: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <rect x="10" y="35" width="80" height="10" rx="5" fill="#2a4060" stroke="#6080a0" strokeWidth="1"/>
        <path d="M 30 35 C 30 20 50 20 50 35" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 50 35 L 50 45 C 50 60 70 60 70 45" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 70 45 L 70 35 C 70 20 50 20 50 35" fill="none" stroke="#e0d090" strokeWidth="2" strokeDasharray="2,2" strokeLinecap="round"/>
        <path d="M 30 35 L 15 28" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 70 45 L 85 52" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    correa: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 15 40 L 35 40 C 35 40 38 25 50 25 C 62 25 65 40 65 40 L 85 40" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 35 40 C 35 40 32 55 40 58 C 48 61 55 55 50 45 C 47 38 38 40 38 48 C 38 56 46 60 52 56 C 60 51 58 40 65 40" fill="none" stroke="#e0d090" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    vueltaRedonda: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <rect x="10" y="37" width="80" height="6" rx="3" fill="#2a4060" stroke="#6080a0" strokeWidth="1"/>
        <path d="M 25 37 C 25 25 40 20 50 25 C 60 30 60 37 60 37" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 60 37 C 60 43 55 50 45 48 C 35 46 30 37 30 43 C 30 55 50 60 65 50 C 75 43 75 37 75 37" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 25 37 L 15 32" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 75 37 L 85 32" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    escota: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 20 30 L 80 30" fill="none" stroke="#3a5a8a" strokeWidth="5" strokeLinecap="round"/>
        <path d="M 20 50 L 80 50" fill="none" stroke="#3a5a8a" strokeWidth="5" strokeLinecap="round"/>
        <path d="M 15 65 C 20 65 30 55 30 30" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 30 50 C 30 65 40 70 50 65" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 50 65 L 85 50" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    cote: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 15 40 L 35 40" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 35 40 C 35 25 50 22 55 30 C 60 38 52 45 45 42 C 38 39 40 30 50 30 C 60 30 65 40 60 50 C 55 60 40 62 35 55 C 30 48 32 40 35 40" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 60 50 L 85 50" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    dobleAs: (
      <svg viewBox="0 0 100 80" width="100" height="80">
        <path d="M 10 50 C 15 50 20 35 30 35 C 40 35 42 50 50 50 C 58 50 60 35 70 35 C 80 35 85 50 90 50" fill="none" stroke="#c8a84b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 30 35 C 30 25 50 20 50 35" fill="none" stroke="#e0d090" strokeWidth="2" strokeLinecap="round"/>
        <path d="M 70 35 C 70 25 50 20 50 35" fill="none" stroke="#e0d090" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };
  return knots[type] || null;
};

function NudosSection() {
  const [sel, setSel] = useState(null);
  const nudos = [
    { id:"as", nombre:"As de Guía", ingles:"Bowline", uso:"El nudo más importante. Forma un gaza fijo que no se corre ni se afirma. Para amarrar, izar personas, anclar.", tip:"Recuerda: la culebra sale del agujero, rodea el árbol y vuelve al agujero.", dificultad:"⭐⭐" },
    { id:"ocho", nombre:"Nudo de Ocho", ingles:"Figure-Eight Knot", uso:"Tope al final de una escota o driza para que no se escape por un bloque o gancho.", tip:"Forma la figura de un 8. Fácil de deshacer tras tensión. Sustituye al nudo simple.", dificultad:"⭐" },
    { id:"ballestrinque", nombre:"Ballestrinque", ingles:"Cleat / Clove Hitch", uso:"Amarrar a pilones, estachas provisionales, defensas. Rápido pero puede aflojarse con tensión variable.", tip:"Dos vueltas cruzadas alrededor del objeto. Asegurar con media llave si queda mucho tiempo.", dificultad:"⭐" },
    { id:"correa", nombre:"Nudo de Correa", ingles:"Sheet Bend", uso:"Unir dos cabos de distinto grosor. Imprescindible cuando el as de guía no es práctico.", tip:"El cabo más grueso forma la gaza. El delgado pasa por dentro y rodea por fuera.", dificultad:"⭐⭐" },
    { id:"vueltaRedonda", nombre:"Vuelta Redonda y dos cotes", ingles:"Round Turn & 2 Half Hitches", uso:"Amarrar a norayes, argollas, anclas. Muy seguro, aguanta tensión mantenida.", tip:"Dar la vuelta completa al objeto primero (absorbe tensión), luego los dos cotes.", dificultad:"⭐" },
    { id:"escota", nombre:"Nudo de Escota", ingles:"Sheet Bend", uso:"Empalmar dos cabos, especialmente de diferente grosor. Muy usado en vela.", tip:"Si los cabos son muy distintos en grosor, usar doble nudo de escota.", dificultad:"⭐⭐" },
    { id:"cote", nombre:"Cote o Presilla", ingles:"Overhand / Half Hitch", uso:"Nudo base de muchos otros. Asegurar una vuelta. Solo o en combinación.", tip:"Base del ballestrinque y de la vuelta redonda. Nunca usar solo para carga.", dificultad:"⭐" },
    { id:"dobleAs", nombre:"As de Guía Doble", ingles:"Double Bowline", uso:"Izar personas o rescate en el agua. Forma dos gazas en las que meter las piernas.", tip:"Igual que el as de guía normal pero con doble seno inicial. Distribuye el peso.", dificultad:"⭐⭐⭐" },
  ];

  const s = sel !== null ? nudos[sel] : null;

  return (
    <div>
      <div className="section-title">Nudos</div>
      <div className="section-sub">Nudos marineros esenciales — Toca uno para ver el detalle</div>
      <div className="info-box">
        🪢 Un buen marinero conoce pocos nudos pero los hace bien. Practica hasta que seas capaz de hacerlos a oscuras y con una sola mano.
      </div>

      {s && (
        <div style={{background:'rgba(200,168,75,0.07)', border:'1px solid #c8a84b', borderRadius:10, padding:16, marginBottom:16, display:'flex', gap:16, alignItems:'flex-start'}}>
          <div style={{flexShrink:0, background:'#0d1f3a', borderRadius:8, border:'1px solid #1a3050', padding:4}}>
            <KnotSVG type={s.id}/>
          </div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:'#c8a84b', marginBottom:2}}>{s.nombre}</div>
            <div style={{fontSize:10, color:'#8ba3c0', letterSpacing:1, marginBottom:8}}>{s.ingles} · {s.dificultad}</div>
            <div style={{fontSize:12, color:'#d4c49a', marginBottom:6}}><strong style={{color:'#bccfe0'}}>Uso:</strong> {s.uso}</div>
            <div style={{fontSize:12, color:'#bccfe0', background:'rgba(200,168,75,0.08)', borderRadius:4, padding:'6px 10px', borderLeft:'2px solid #c8a84b'}}>💡 {s.tip}</div>
          </div>
        </div>
      )}

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px,1fr))', gap:10}}>
        {nudos.map((n,i) => (
          <button key={i} onClick={()=>setSel(sel===i?null:i)} style={{
            background: sel===i ? 'rgba(200,168,75,0.1)' : '#0d1f3a',
            border:`1px solid ${sel===i ? '#c8a84b' : '#1a3050'}`,
            borderRadius:8, padding:10, cursor:'pointer',
            display:'flex', flexDirection:'column', alignItems:'center', gap:6, transition:'all 0.15s',
          }}>
            <div style={{background:'#061020', borderRadius:6, padding:2}}>
              <KnotSVG type={n.id}/>
            </div>
            <div style={{fontSize:11, fontWeight:700, color: sel===i ? '#c8a84b' : '#d4c49a', textAlign:'center', lineHeight:1.3}}>{n.nombre}</div>
            <div style={{fontSize:9, color:'#8ba3c0'}}>{n.dificultad}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── EMERGENCIA ───────────────────────────────────────────────────────────────
function EmergenciaSection() {
  const [open, setOpen] = useState(0);
  const emergencias = [
    {
      icon:"🧍", title:"Hombre al agua (MOB)",color:"#cc2222",
      pasos:[
        { t:"¡Hombre al agua!", d:"Gritar 'Hombre al agua'. Lanzar inmediatamente aro salvavidas con rabiza y luz." },
        { t:"Asignar observador", d:"Una persona mantiene contacto visual con el náufrago en todo momento. No perderlo de vista nunca." },
        { t:"Marcar posición", d:"Pulsar MOB en el GPS/cartógrafo. Anotar hora y posición. Activar AIS si disponible." },
        { t:"Canal 16 — MAYDAY", d:"Emitir MAYDAY si el náufrago no puede ser recuperado de inmediato. Dar posición." },
        { t:"Maniobra de recuperación", d:"Williamson: avante toda, cae 60° al lado de caída, luego rumbo opuesto. O maniobra en círculo. Aproximarse desde sotavento." },
        { t:"Recuperación", d:"Aproximarse lentamente, detener máquinas antes del contacto. Usar escala, cabo o red. Si está inconsciente: izar horizontalmente." },
        { t:"Hipotermia", d:"Retirar ropa mojada. Cubrir con mantas. No frotar. Posición horizontal. Calor gradual. Evacuar si síntomas graves." },
      ]
    },
    {
      icon:"🔥", title:"Incendio a bordo", color:"#ff6600",
      pasos:[
        { t:"Cortar combustible", d:"Cerrar válvulas de combustible. Apagar el motor. Desconectar batería si es seguro." },
        { t:"Alejar del viento", d:"Virar para que el fuego quede a sotavento. El humo y las llamas deben alejarse de la tripulación." },
        { t:"Emitir señal", d:"Canal 16: MAYDAY. Izar bandera B. Activar EPIRB si el barco va a hundirse." },
        { t:"Atacar el fuego", d:"Extintor CO₂ para motor/eléctrico. Polvo seco para líquidos inflamables. Agua para madera. Nunca agua en incendios eléctricos." },
        { t:"Preparar abandono", d:"Reunir documentación, EPIRB, radiobaliza, agua, raciones, bengalas. Inflar balsa si necesario." },
        { t:"Abandono del buque", d:"Solo si es inevitable. La balsa es el último recurso. Nunca abandonar hasta que no haya alternativa." },
      ]
    },
    {
      icon:"💧", title:"Vía de agua", color:"#3399ff",
      pasos:[
        { t:"Localizar la vía", d:"Inspeccionar quilla, pasacascos, bocina de eje, escobenes. Escuchar y buscar con linterna." },
        { t:"Achique de emergencia", d:"Activar bomba de achique eléctrica. Usar bomba manual si falla la eléctrica. Baldes si es necesario." },
        { t:"Taponar", d:"Materiales a bordo: tapones cónicos de madera en cada pasacascos. Ropa, estopa, silicona. Tablillas y tornillos si la vía es en casco." },
        { t:"Redistribuir peso", d:"Escorar el barco para sacar la vía del agua si es posible." },
        { t:"Emitir señal", d:"Canal 16. Si no se puede controlar: PAN PAN (urgencia) o MAYDAY (peligro grave)." },
        { t:"Evaluar abandono", d:"Si el caudal supera la capacidad de achique, preparar abandono. Tener la balsa lista." },
      ]
    },
    {
      icon:"⚓", title:"Varada", color:"#c8a84b",
      pasos:[
        { t:"No forzar la máquina", d:"Detener inmediatamente. Evaluar situación. Forzar puede empeorar la varada o dañar el casco." },
        { t:"Sondear alrededor", d:"Con bichero o sonda, determinar dónde hay más agua. Identificar la dirección de salida." },
        { t:"Aligerar el barco", d:"Pasar tripulación y peso a la popa o al costado de más agua. Pasar agua a otro recipiente." },
        { t:"Esperar la marea", d:"Si hay mareas, esperar a la pleamar. Mantener el barco perpendicular a la playa con ancla de popa." },
        { t:"Ancla de espía", d:"Llevar el ancla en la dirección de salida con el bote. Virando el ancla se puede extraer el barco." },
        { t:"Pedir remolque", d:"Si no se puede salir solo: PAN PAN en canal 16. Contactar con la Guardia Costera o Salvamento Marítimo (900 202 202)." },
      ]
    },
    {
      icon:"🌊", title:"Tiempo severo", color:"#a0b8d0",
      pasos:[
        { t:"Prevención", d:"Consultar el parte ANTES de salir. Si hay aviso de temporal, no salir. Si estás en la mar, buscar refugio con antelación." },
        { t:"Preparar el barco", d:"Recoger velas. Asegurar todo en cubierta. Verificar escotillas y portillos cerrados. Tripulación con arneses y chalecos." },
        { t:"Reducir vela", d:"Tomar rizos antes de necesitarlos. Mejor pronto que tarde. Con B7+: navegar con solo trinquete o capa." },
        { t:"Capa", d:"Con temporal severo: capa con muy poca vela. El barco se mantiene estable al través. Tripulación a cubierto." },
        { t:"Ancla de capa", d:"Dispositivo de freno en agua que mantiene la proa al viento y reduce la deriva. Lanzar por la proa." },
        { t:"Gobierno", d:"Evitar entrar en la ola de través (riesgo de zozobra). Mantener la proa o la popa a las olas." },
      ]
    },
    {
      icon:"🚨", title:"Señales de socorro", color:"#cc2222",
      pasos:[
        { t:"MAYDAY por VHF (Canal 16)", d:"Primera opción. MAYDAY x3 + nombre + posición + naturaleza + personas a bordo." },
        { t:"EPIRB / PLB", d:"Baliza de posición de emergencia. Activar manualmente o dejar que se active sola al contacto con el agua. Señal via satélite a MRCC." },
        { t:"Bengalas rojas", d:"De noche: bengala de mano roja (visible ~5 millas). Cohetes con paracaídas (visible ~20 millas a 300m altura)." },
        { t:"Señal de humo naranja", d:"De día: señal de humo naranja. Muy visible desde el aire. Usar solo si hay medios de rescate a la vista." },
        { t:"Espejo de señales", d:"De día con sol: espejo o superficie reflectante. Visible hasta 15 millas. Dirigir el reflejo al rescatador." },
        { t:"Salvamento Marítimo España", d:"900 202 202 (gratuito). VHF canal 16. Cobertura completa de aguas españolas." },
      ]
    },
  ];

  return (
    <div>
      <div className="section-title">Emergencia</div>
      <div className="section-sub">Maniobras de emergencia — Protocolos de actuación a bordo</div>
      <div className="info-box" style={{borderColor:'#cc2222', background:'rgba(204,34,34,0.07)'}}>
        🆘 <strong>Salvamento Marítimo España: 900 202 202</strong> — Canal VHF 16 — Gratuito 24h. Antes de salir: deja un plan de navegación en tierra con ruta, destino y hora de regreso prevista.
      </div>

      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:16}}>
        {emergencias.map((e,i) => (
          <button key={i} onClick={()=>setOpen(i)} style={{
            background: open===i ? e.color : '#0d1f3a',
            color: open===i ? '#fff' : '#bccfe0',
            border:`1px solid ${open===i ? e.color : '#1a3050'}`,
            borderRadius:6, padding:'6px 12px', cursor:'pointer', fontSize:12,
            fontWeight:700, display:'flex', alignItems:'center', gap:6, transition:'all 0.15s',
          }}>
            <span>{e.icon}</span><span>{e.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {emergencias[open] && (() => {
        const e = emergencias[open];
        return (
          <div style={{background:'#0d1f3a', border:`1px solid ${e.color}`, borderRadius:10, overflow:'hidden'}}>
            <div style={{background:e.color, padding:'12px 16px', display:'flex', alignItems:'center', gap:10}}>
              <span style={{fontSize:22}}>{e.icon}</span>
              <span style={{fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:'#fff'}}>{e.title}</span>
            </div>
            {e.pasos.map((p,i) => (
              <div key={i} style={{display:'flex', gap:12, padding:'12px 16px', borderBottom: i<e.pasos.length-1 ? '1px solid #1a3050' : 'none', alignItems:'flex-start'}}>
                <div style={{
                  width:26, height:26, borderRadius:'50%', background:e.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:12, fontWeight:900, color:'#fff', flexShrink:0,
                }}>{i+1}</div>
                <div>
                  <div style={{fontSize:13, fontWeight:700, color:'#d4c49a', marginBottom:3}}>{p.t}</div>
                  <div style={{fontSize:11, color:'#bccfe0', lineHeight:1.7}}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("ripa");

  const sectionMap = {
    ripa:       <RipaSection />,
    balizas:    <BalizasSection />,
    banderas:   <BanderasSection />,
    luces:      <LucesSection />,
    pitidos:    <PitidosSection />,
    marcas:     <MarcasSection />,
    maniobras:  <ManiobraSection />,
    vhf:        <VhfSection />,
    meteo:      <MeteoSection />,
    nudos:      <NudosSection />,
    emergencia: <EmergenciaSection />,
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <div className="header-compass">🧭</div>
          <div>
            <div className="header-title">JM Náutica</div>
            <div className="header-sub">Guía de Navegación de Bolsillo</div>
          </div>
        </div>

        <div className="nav-scroll">
          {NAV_SECTIONS.map(s => (
            <button
              key={s.id}
              className={`nav-btn${active === s.id ? " active" : ""}`}
              onClick={() => setActive(s.id)}
            >
              <span className="nav-btn-icon">{s.icon}</span>
              <span className="nav-btn-label">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="content" key={active}>
          {sectionMap[active]}
        </div>
      </div>
    </>
  );
}
