import fs from 'fs';
import path from 'path';

const dirs = [
  'public/images/hero',
  'public/images/products',
  'public/images/industries',
  'public/images/about',
  'public/images/why-choose-us',
  'public/images/gallery',
  'public/images/partners'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// 1. HERO PACKAGING SVG
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520" fill="none">
  <defs>
    <linearGradient id="heroBg" x1="0" y1="0" x2="700" y2="520" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F1F38"/>
      <stop offset="100%" stop-color="#070D18"/>
    </linearGradient>
    <linearGradient id="foilPouch" x1="180" y1="80" x2="360" y2="440" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="35%" stop-color="#475569"/>
      <stop offset="70%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="amberPouch" x1="320" y1="120" x2="520" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="50%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>
    <linearGradient id="blueFilm" x1="50" y1="200" x2="300" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.3"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="700" height="520" rx="16" fill="url(#heroBg)"/>
  
  <!-- Technical Grid overlay -->
  <g stroke="#1E293B" stroke-width="1" opacity="0.6">
    <line x1="60" y1="40" x2="640" y2="40"/>
    <line x1="60" y1="160" x2="640" y2="160"/>
    <line x1="60" y1="280" x2="640" y2="280"/>
    <line x1="60" y1="400" x2="640" y2="400"/>
    <line x1="160" y1="40" x2="160" y2="480"/>
    <line x1="340" y1="40" x2="340" y2="480"/>
    <line x1="520" y1="40" x2="520" y2="480"/>
  </g>

  <!-- Film Roll Cylinder 1 (Left background) -->
  <g opacity="0.85">
    <ellipse cx="140" cy="180" rx="60" ry="25" fill="#1E293B" stroke="#475569" stroke-width="2"/>
    <rect x="80" y="180" width="120" height="180" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <ellipse cx="140" cy="360" rx="60" ry="25" fill="#1E293B" stroke="#475569" stroke-width="2"/>
    <!-- Film Core -->
    <ellipse cx="140" cy="180" rx="20" ry="9" fill="#0B132B" stroke="#64748B" stroke-width="1.5"/>
    <!-- Unwinding Film Layer -->
    <path d="M80 260 C120 280, 180 270, 260 320" stroke="#0284C7" stroke-width="3" stroke-dasharray="4 3" opacity="0.7"/>
  </g>

  <!-- Large Center Matte Foil Stand-Up Pouch -->
  <g filter="url(#shadow)">
    <!-- Main Pouch Body -->
    <path d="M220 140 L380 130 L400 420 C400 435, 380 445, 300 445 C220 445, 200 435, 200 420 Z" fill="url(#foilPouch)"/>
    <!-- Top Heat Seal Bar -->
    <path d="M218 135 L382 125 L382 165 L218 175 Z" fill="#475569" stroke="#64748B" stroke-width="1.5"/>
    <!-- Tear Notch Details -->
    <path d="M218 165 L226 168 L218 171 Z" fill="#0B132B"/>
    <path d="M382 155 L374 158 L382 161 Z" fill="#0B132B"/>
    <!-- Zipper Press Line Indication -->
    <line x1="225" y1="185" x2="375" y2="175" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6"/>
    <!-- Front Minimal Graphic & Window Pattern -->
    <rect x="250" y="220" width="100" height="120" rx="6" fill="#0B1528" stroke="#38BDF8" stroke-width="1.5" opacity="0.9"/>
    <!-- Spec Labels on Pouch -->
    <line x1="265" y1="250" x2="335" y2="250" stroke="#F8FAFC" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="265" y1="270" x2="315" y2="270" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    <line x1="265" y1="290" x2="325" y2="290" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    <!-- Pouch Bottom Gusset Crease -->
    <path d="M205 410 C250 430, 350 430, 395 410" stroke="#1E293B" stroke-width="2" fill="none"/>
  </g>

  <!-- Modern Gloss Amber / Orange Pouch (Overlapping Front Right) -->
  <g filter="url(#shadow)">
    <!-- Pouch Body -->
    <path d="M360 180 L510 170 L530 440 C530 455, 510 465, 440 465 C370 465, 350 455, 350 440 Z" fill="url(#amberPouch)"/>
    <!-- Top Heat Seal with Hang Hole -->
    <path d="M358 175 L512 165 L512 205 L358 215 Z" fill="#C2410C" stroke="#EA580C" stroke-width="1.5"/>
    <ellipse cx="435" cy="190" rx="7" ry="4" fill="#0B1528"/>
    <!-- Metallic Specular Highlight -->
    <path d="M380 220 L405 218 L415 440 L390 440 Z" fill="#FED7AA" opacity="0.25"/>
    <!-- Brand Mockup Panel -->
    <rect x="390" y="245" width="100" height="110" rx="4" fill="#7C2D12" opacity="0.6"/>
    <circle cx="440" cy="285" r="16" fill="#FDBA74" opacity="0.9"/>
    <line x1="410" y1="320" x2="470" y2="320" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="420" y1="335" x2="460" y2="335" stroke="#FED7AA" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Precision Micrometer / Technical Indicator Badge -->
  <g transform="translate(480, 60)">
    <rect width="160" height="64" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1" opacity="0.95"/>
    <circle cx="28" cy="32" r="12" fill="#0284C7" opacity="0.2"/>
    <circle cx="28" cy="32" r="5" fill="#38BDF8"/>
    <text x="50" y="28" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="12" font-weight="700">MULTI-LAYER</text>
    <text x="50" y="46" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="11">Barrier Protection</text>
  </g>

  <!-- Printing Registration Marks (Industrial Touch) -->
  <g transform="translate(80, 440)" opacity="0.7">
    <circle cx="20" cy="20" r="8" stroke="#38BDF8" stroke-width="1.5" fill="none"/>
    <line x1="20" y1="8" x2="20" y2="32" stroke="#38BDF8" stroke-width="1.5"/>
    <line x1="8" y1="20" x2="32" y2="20" stroke="#38BDF8" stroke-width="1.5"/>
    
    <circle cx="50" cy="20" r="8" stroke="#E06D28" stroke-width="1.5" fill="none"/>
    <line x1="50" y1="8" x2="50" y2="32" stroke="#E06D28" stroke-width="1.5"/>
    <line x1="38" y1="20" x2="62" y2="20" stroke="#E06D28" stroke-width="1.5"/>
  </g>
</svg>`;

fs.writeFileSync('public/images/hero/packaging-hero.svg', heroSvg);

// PRODUCT SVGS (6 Confirmed Products)
const makeProductSvg = (title, type, color1, color2, accent) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" fill="none">
  <defs>
    <linearGradient id="pgrad_${type}" x1="80" y1="40" x2="320" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <filter id="pShadow_${type}" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#070D18" flood-opacity="0.12"/>
    </filter>
  </defs>
  
  <!-- Subtle Technical Background Card -->
  <rect width="400" height="320" rx="8" fill="#F8FAFC"/>
  <rect x="12" y="12" width="376" height="296" rx="6" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>

  <!-- Pouch Illustration by Type -->
  ${type === 'center-seal' ? `
    <!-- Center Seal Pouch -->
    <g filter="url(#pShadow_${type})">
      <rect x="130" y="45" width="140" height="220" rx="3" fill="url(#pgrad_${type})"/>
      <!-- Top & Bottom Sealing -->
      <rect x="130" y="45" width="140" height="18" fill="${accent}" opacity="0.9"/>
      <rect x="130" y="247" width="140" height="18" fill="${accent}" opacity="0.9"/>
      <!-- Center Fin Seal Line in Front Representation -->
      <line x1="200" y1="63" x2="200" y2="247" stroke="${accent}" stroke-width="2.5" stroke-dasharray="4 3"/>
      <!-- Minimal Label Graphic -->
      <rect x="155" y="100" width="90" height="90" rx="4" fill="#FFFFFF" opacity="0.95"/>
      <rect x="170" y="120" width="60" height="6" rx="2" fill="${color2}"/>
      <rect x="170" y="135" width="45" height="4" rx="2" fill="#94A3B8"/>
      <circle cx="200" cy="165" r="8" fill="${accent}"/>
    </g>
  ` : type === 'three-side-seal' ? `
    <!-- 3-Side Seal Pouch -->
    <g filter="url(#pShadow_${type})">
      <rect x="120" y="45" width="160" height="220" rx="2" fill="url(#pgrad_${type})"/>
      <!-- Three Sealed Edges (Left, Right, Bottom) -->
      <path d="M120 45 L135 45 L135 250 L265 250 L265 45 L280 45 L280 265 L120 265 Z" fill="${accent}" opacity="0.9"/>
      <!-- Tear Notch on side -->
      <polygon points="120,70 126,73 120,76" fill="#FFFFFF"/>
      <polygon points="280,70 274,73 280,76" fill="#FFFFFF"/>
      <!-- Label Details -->
      <rect x="150" y="90" width="100" height="110" rx="4" fill="#FFFFFF" opacity="0.95"/>
      <rect x="165" y="115" width="70" height="8" rx="2" fill="${color2}"/>
      <rect x="165" y="135" width="50" height="4" rx="2" fill="#94A3B8"/>
      <line x1="165" y1="155" x2="235" y2="155" stroke="#CBD5E1" stroke-width="2"/>
    </g>
  ` : type === 'stand-up-zipper' ? `
    <!-- Stand-Up Pouch with Zipper -->
    <g filter="url(#pShadow_${type})">
      <!-- Pouch Body with Bottom Gusset Flares -->
      <path d="M140 50 L260 50 L285 240 C285 255, 260 265, 200 265 C140 265, 115 255, 115 240 Z" fill="url(#pgrad_${type})"/>
      <!-- Top Seal & Hang Hole -->
      <path d="M140 50 L260 50 L260 75 L140 75 Z" fill="${accent}"/>
      <ellipse cx="200" cy="62" rx="6" ry="3.5" fill="#FFFFFF"/>
      <!-- Zipper Track -->
      <line x1="142" y1="90" x2="258" y2="90" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="3 2"/>
      <!-- Bottom Gusset Fold Crease -->
      <path d="M120 238 C155 252, 245 252, 280 238" stroke="${accent}" stroke-width="2" fill="none"/>
      <!-- Showcase Window / Graphic -->
      <rect x="150" y="115" width="100" height="90" rx="6" fill="#FFFFFF" opacity="0.95"/>
      <circle cx="200" cy="150" r="14" fill="${accent}" opacity="0.9"/>
      <rect x="168" y="180" width="64" height="5" rx="2" fill="${color2}"/>
    </g>
  ` : type === 'three-d-pouch' ? `
    <!-- 3D Pouch / Box Pouch -->
    <g filter="url(#pShadow_${type})">
      <!-- Flat Bottom Base Area -->
      <polygon points="120,240 280,240 260,265 140,265" fill="#0F172A" opacity="0.3"/>
      <!-- Front Panel -->
      <rect x="140" y="55" width="120" height="190" fill="url(#pgrad_${type})"/>
      <!-- Left 3D Gusset Side Panel -->
      <polygon points="120,70 140,55 140,245 120,240" fill="${color2}" opacity="0.85"/>
      <!-- Right 3D Gusset Side Panel -->
      <polygon points="260,55 280,70 280,240 260,245" fill="${color1}" opacity="0.75"/>
      <!-- Top Box Seal -->
      <rect x="135" y="50" width="130" height="15" fill="${accent}"/>
      <!-- Front Product Design -->
      <rect x="155" y="95" width="90" height="100" rx="3" fill="#FFFFFF" opacity="0.95"/>
      <rect x="170" y="115" width="60" height="7" rx="2" fill="${accent}"/>
      <line x1="170" y1="135" x2="230" y2="135" stroke="#64748B" stroke-width="2"/>
      <line x1="170" y1="150" x2="215" y2="150" stroke="#94A3B8" stroke-width="2"/>
    </g>
  ` : type === 'quad-seal' ? `
    <!-- Quad Seal Pouch -->
    <g filter="url(#pShadow_${type})">
      <rect x="130" y="45" width="140" height="225" rx="2" fill="url(#pgrad_${type})"/>
      <!-- Four Reinforced Corner Edge Welds -->
      <rect x="127" y="45" width="7" height="225" fill="${accent}"/>
      <rect x="266" y="45" width="7" height="225" fill="${accent}"/>
      <rect x="145" y="45" width="4" height="225" fill="${accent}" opacity="0.3"/>
      <rect x="251" y="45" width="4" height="225" fill="${accent}" opacity="0.3"/>
      <!-- Top and Bottom Seal -->
      <rect x="127" y="45" width="146" height="16" fill="${accent}"/>
      <rect x="127" y="254" width="146" height="16" fill="${accent}"/>
      <!-- Front Display Graphic -->
      <rect x="155" y="95" width="90" height="110" rx="3" fill="#FFFFFF" opacity="0.95"/>
      <rect x="170" y="120" width="60" height="8" rx="2" fill="${color2}"/>
      <circle cx="200" cy="155" r="12" fill="${accent}" opacity="0.8"/>
      <line x1="175" y1="180" x2="225" y2="180" stroke="#94A3B8" stroke-width="2"/>
    </g>
  ` : `
    <!-- 2-Side Gusset Pouch -->
    <g filter="url(#pShadow_${type})">
      <!-- Main Face -->
      <rect x="145" y="50" width="110" height="215" fill="url(#pgrad_${type})"/>
      <!-- Left Expandable Pleat Gusset -->
      <polygon points="120,65 145,50 145,265 120,255" fill="${color2}" opacity="0.85"/>
      <line x1="132" y1="58" x2="132" y2="260" stroke="${accent}" stroke-width="1.5" stroke-dasharray="4 2"/>
      <!-- Right Expandable Pleat Gusset -->
      <polygon points="255,50 280,65 280,255 255,265" fill="${color1}" opacity="0.85"/>
      <line x1="268" y1="58" x2="268" y2="260" stroke="${accent}" stroke-width="1.5" stroke-dasharray="4 2"/>
      <!-- Top Fold Seal -->
      <rect x="140" y="45" width="120" height="15" fill="${accent}"/>
      <!-- Front Brand Panel -->
      <rect x="155" y="95" width="90" height="100" rx="3" fill="#FFFFFF" opacity="0.95"/>
      <rect x="170" y="115" width="60" height="7" rx="2" fill="${color2}"/>
      <line x1="170" y1="135" x2="230" y2="135" stroke="#CBD5E1" stroke-width="2"/>
      <line x1="170" y1="150" x2="210" y2="150" stroke="#94A3B8" stroke-width="2"/>
    </g>
  `}

  <!-- Subtle Badge indicator in corner -->
  <g transform="translate(24, 24)">
    <circle cx="12" cy="12" r="10" fill="${accent}" opacity="0.12"/>
    <path d="M8 12L11 15L16 9" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;
};

fs.writeFileSync('public/images/products/center-seal-pouch.svg', makeProductSvg('Center Seal Pouch', 'center-seal', '#1E293B', '#0F172A', '#E06D28'));
fs.writeFileSync('public/images/products/three-side-seal-pouch.svg', makeProductSvg('3-Side Seal Pouch', 'three-side-seal', '#0369A1', '#0C4A6E', '#0284C7'));
fs.writeFileSync('public/images/products/stand-up-zipper.svg', makeProductSvg('Stand-Up Pouch with Zipper', 'stand-up-zipper', '#334155', '#1E293B', '#E06D28'));
fs.writeFileSync('public/images/products/three-d-pouch.svg', makeProductSvg('3D Pouch', 'three-d-pouch', '#047857', '#064E3B', '#10B981'));
fs.writeFileSync('public/images/products/quad-seal-pouch.svg', makeProductSvg('Quad Seal Pouch', 'quad-seal', '#4338CA', '#312E81', '#6366F1'));
fs.writeFileSync('public/images/products/two-side-gusset.svg', makeProductSvg('2-Side Gusset Pouch', 'two-side-gusset', '#C2410C', '#7C2D12', '#EA580C'));

// 3. INDUSTRY SVGS
const makeIndustrySvg = (name, iconType, baseColor, accentColor) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none">
  <defs>
    <linearGradient id="indBg_${iconType}" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${baseColor}"/>
      <stop offset="100%" stop-color="#070D18"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#indBg_${iconType})"/>
  
  <!-- Subtle Industrial Pattern -->
  <g stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1.5">
    <circle cx="480" cy="120" r="160"/>
    <circle cx="480" cy="120" r="100"/>
    <circle cx="480" cy="120" r="40"/>
  </g>

  <!-- Pouch & Sector Graphic Representation -->
  <g transform="translate(360, 100)" opacity="0.9">
    <rect x="0" y="0" width="160" height="210" rx="6" fill="#1E293B" stroke="${accentColor}" stroke-width="2"/>
    <rect x="0" y="0" width="160" height="24" fill="${accentColor}"/>
    <circle cx="80" cy="12" r="4" fill="#FFFFFF"/>
    
    <!-- Sector specific motif on pouch -->
    ${iconType === 'nutra' ? `
      <!-- Capsule / Molecule -->
      <g transform="translate(45, 60)">
        <rect x="15" y="10" width="40" height="70" rx="20" fill="#38BDF8" opacity="0.3"/>
        <line x1="15" y1="45" x2="55" y2="45" stroke="${accentColor}" stroke-width="2"/>
        <circle cx="35" cy="28" r="8" fill="${accentColor}"/>
      </g>
    ` : iconType === 'beauty' ? `
      <!-- Cosmetic Dropper / Sleek Bottle Silhouette -->
      <g transform="translate(50, 60)">
        <rect x="10" y="25" width="40" height="60" rx="8" fill="#F472B6" opacity="0.3"/>
        <rect x="23" y="10" width="14" height="15" fill="${accentColor}"/>
        <circle cx="30" cy="55" r="10" fill="${accentColor}"/>
      </g>
    ` : iconType === 'ayurvedic' ? `
      <!-- Botanical Leaf Motif -->
      <g transform="translate(45, 60)">
        <path d="M35 15 C15 35, 15 65, 35 85 C55 65, 55 35, 35 15 Z" fill="#34D399" opacity="0.4"/>
        <line x1="35" y1="15" x2="35" y2="85" stroke="${accentColor}" stroke-width="2"/>
      </g>
    ` : `
      <!-- Healthcare Cross / Shield -->
      <g transform="translate(45, 60)">
        <circle cx="35" cy="45" r="32" fill="#38BDF8" opacity="0.2"/>
        <rect x="27" y="25" width="16" height="40" rx="3" fill="${accentColor}"/>
        <rect x="15" y="37" width="40" height="16" rx="3" fill="${accentColor}"/>
      </g>
    `}
  </g>
</svg>`;
};

fs.writeFileSync('public/images/industries/nutraceutical.svg', makeIndustrySvg('Nutraceutical', 'nutra', '#0F233A', '#38BDF8'));
fs.writeFileSync('public/images/industries/beauty-care.svg', makeIndustrySvg('Beauty & Personal Care', 'beauty', '#2B1428', '#F472B6'));
fs.writeFileSync('public/images/industries/ayurvedic.svg', makeIndustrySvg('Ayurvedic', 'ayurvedic', '#122B1E', '#34D399'));
fs.writeFileSync('public/images/industries/healthcare.svg', makeIndustrySvg('Life Science & Healthcare', 'health', '#101C38', '#60A5FA'));

// 4. ABOUT & WHY CHOOSE US SVGS
const aboutSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" fill="none">
  <defs>
    <linearGradient id="abGrad" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#16243B"/>
      <stop offset="100%" stop-color="#0B1528"/>
    </linearGradient>
  </defs>
  <rect width="600" height="500" rx="12" fill="url(#abGrad)"/>
  
  <!-- Facility & Multi-Roller Printing Concept Visual -->
  <g stroke="#334155" stroke-width="1.5" opacity="0.8">
    <!-- Cylinders -->
    <circle cx="150" cy="180" r="50" fill="#1E293B" stroke="#0284C7" stroke-width="2"/>
    <circle cx="280" cy="220" r="65" fill="#1E293B" stroke="#E06D28" stroke-width="2"/>
    <circle cx="430" cy="180" r="50" fill="#1E293B" stroke="#0284C7" stroke-width="2"/>
    <!-- Web/Film passing through rollers -->
    <path d="M50 180 C150 180, 210 280, 280 280 C350 280, 430 180, 550 180" stroke="#F8FAFC" stroke-width="4" fill="none"/>
  </g>

  <!-- Technical Overlay Box -->
  <g transform="translate(60, 360)">
    <rect width="480" height="90" rx="8" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
    <text x="30" y="38" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Precision Flexographic &amp; Rotogravure Compatibility</text>
    <text x="30" y="64" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Engineered for strict web tension control &amp; high barrier lamination.</text>
  </g>
</svg>`;
fs.writeFileSync('public/images/about/packaging-manufacturing.svg', aboutSvg);

const whyUsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 520" fill="none">
  <defs>
    <linearGradient id="whyGrad" x1="0" y1="0" x2="600" y2="520" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F1A2D"/>
      <stop offset="100%" stop-color="#070D18"/>
    </linearGradient>
  </defs>
  <rect width="600" height="520" rx="12" fill="url(#whyGrad)"/>

  <!-- Layer Microstructure (Substrate, Barrier, Heat-Seal Layer) -->
  <g transform="translate(70, 80)">
    <!-- Layer 1: Outer Print Film -->
    <path d="M50 40 L410 40 L370 90 L10 90 Z" fill="#0284C7" opacity="0.85"/>
    <text x="430" y="70" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Print Substrate (PET / BOPP)</text>

    <!-- Layer 2: Barrier Foil / Metalized Layer -->
    <path d="M50 120 L410 120 L370 170 L10 170 Z" fill="#E06D28" opacity="0.85"/>
    <text x="430" y="150" fill="#FB923C" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Barrier Layer (ALU / MET)</text>

    <!-- Layer 3: Sealing Layer -->
    <path d="M50 200 L410 200 L370 250 L10 250 Z" fill="#10B981" opacity="0.85"/>
    <text x="430" y="230" fill="#34D399" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Sealant Layer (PE / CPP)</text>

    <!-- Vertical Connector Lines showing lamination -->
    <line x1="200" y1="90" x2="200" y2="120" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="2 2"/>
    <line x1="200" y1="170" x2="200" y2="200" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="2 2"/>
  </g>

  <!-- Technical Spec Card -->
  <g transform="translate(70, 360)">
    <rect width="460" height="100" rx="8" fill="#16243B" stroke="#1E2E4A" stroke-width="1"/>
    <circle cx="45" cy="50" r="20" fill="#E06D28" opacity="0.2"/>
    <circle cx="45" cy="50" r="7" fill="#E06D28"/>
    <text x="85" y="44" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Custom Multi-Layer Lamination</text>
    <text x="85" y="68" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Tailored oxygen &amp; water vapor transmission rates (OTR/WVTR).</text>
  </g>
</svg>`;
fs.writeFileSync('public/images/why-choose-us/packaging-engineering.svg', whyUsSvg);

// 5. GALLERY SVGS (6 visual tiles for editorial grid)
const makeGalleryTile = (title, subtitle, bgGrad1, bgGrad2) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" fill="none">
  <defs>
    <linearGradient id="gal_${title.replace(/\\s+/g, '')}" x1="0" y1="0" x2="600" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${bgGrad1}"/>
      <stop offset="100%" stop-color="${bgGrad2}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" fill="url(#gal_${title.replace(/\\s+/g, '')})"/>
  
  <!-- Subtle Packaging Geometry -->
  <g stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="2">
    <rect x="80" y="60" width="440" height="280" rx="8"/>
    <line x1="80" y1="120" x2="520" y2="120"/>
    <line x1="300" y1="120" x2="300" y2="340"/>
  </g>

  <!-- Pouch graphic representation -->
  <g transform="translate(240, 110)">
    <rect width="120" height="170" rx="4" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>
    <rect width="120" height="18" fill="#E06D28" fill-opacity="0.8"/>
  </g>

  <!-- Title & Subtitle in tile -->
  <text x="40" y="385" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="700">${title}</text>
  <text x="40" y="412" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">${subtitle}</text>
</svg>`;
};

fs.writeFileSync('public/images/gallery/gallery-1.svg', makeGalleryTile('High-Speed Web Printing', 'Rotogravure & flexographic alignment', '#0F172A', '#1E293B'));
fs.writeFileSync('public/images/gallery/gallery-2.svg', makeGalleryTile('Stand-Up Zipper Pouch Format', 'Shelf-ready retail presentation', '#1E293B', '#0F2A4A'));
fs.writeFileSync('public/images/gallery/gallery-3.svg', makeGalleryTile('Barrier Film Rollstock', 'Moisture and oxygen protective substrates', '#111E33', '#1A365D'));
fs.writeFileSync('public/images/gallery/gallery-4.svg', makeGalleryTile('Quad Seal Industrial Pouches', 'Corner reinforced stability', '#18253E', '#162238'));
fs.writeFileSync('public/images/gallery/gallery-5.svg', makeGalleryTile('Specialized Surface Finishes', 'Matte, gloss, and metalized foils', '#1E1E2F', '#2D2D44'));
fs.writeFileSync('public/images/gallery/gallery-6.svg', makeGalleryTile('Custom Pouch Engineering', 'Precision die-cut handles & spouts', '#0B1B33', '#0F2E5C'));

console.log('All SVG assets generated successfully!');
