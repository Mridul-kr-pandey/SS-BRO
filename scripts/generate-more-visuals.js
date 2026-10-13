import fs from 'fs';

// 1. ULTRA-REALISTIC CENTER SEAL POUCH (Pillow Pouch)
const centerSealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <defs>
    <radialGradient id="csShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.36"/>
      <stop offset="60%" stop-color="#070D18" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#070D18" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="csPouchGrad" x1="180" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#24344D"/>
      <stop offset="35%" stop-color="#19273A"/>
      <stop offset="70%" stop-color="#111B28"/>
      <stop offset="100%" stop-color="#09101A"/>
    </linearGradient>

    <linearGradient id="csSheen" x1="220" y1="60" x2="340" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="80%" stop-color="#FFFFFF" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="csSealGrad" x1="180" y1="45" x2="420" y2="75" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E06D28"/>
      <stop offset="50%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>

    <linearGradient id="cardBgCS" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="60%" stop-color="#EDF2F7"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
  </defs>

  <rect width="600" height="480" fill="url(#cardBgCS)"/>
  
  <g stroke="#CBD5E1" stroke-width="0.8" opacity="0.45">
    <line x1="60" y1="100" x2="540" y2="100"/>
    <line x1="60" y1="200" x2="540" y2="200"/>
    <line x1="60" y1="300" x2="540" y2="300"/>
    <line x1="60" y1="400" x2="540" y2="400"/>
    <line x1="160" y1="40" x2="160" y2="440"/>
    <line x1="300" y1="40" x2="300" y2="440"/>
    <line x1="440" y1="40" x2="440" y2="440"/>
  </g>

  <!-- Ambient Shadow -->
  <ellipse cx="300" cy="428" rx="180" ry="20" fill="url(#csShadow)"/>
  <ellipse cx="300" cy="422" rx="120" ry="9" fill="#000000" opacity="0.3"/>

  <!-- Pillow Pouch Body (Bulging Air Cushion Curvature) -->
  <g id="center-seal-pouch-assembly">
    <!-- Main Curving Pillow Outline -->
    <path d="M190 70 C230 65, 370 65, 410 70 C425 180, 425 300, 410 410 C370 415, 230 415, 190 410 C175 300, 175 180, 190 70 Z" fill="url(#csPouchGrad)"/>

    <!-- Specular Light Reflection down curvature -->
    <path d="M210 72 C235 70, 290 70, 295 72 L260 408 C240 408, 205 408, 200 408 Z" fill="url(#csSheen)"/>

    <!-- Top Heat Seal Fin Bar -->
    <path d="M185 52 L415 52 L410 72 L190 72 Z" fill="url(#csSealGrad)"/>
    <g stroke="#FED7AA" stroke-width="1.2" opacity="0.7">
      <line x1="195" y1="58" x2="405" y2="58" stroke-dasharray="3 2"/>
      <line x1="195" y1="64" x2="405" y2="64" stroke-dasharray="3 2"/>
    </g>

    <!-- Bottom Heat Seal Fin Bar -->
    <path d="M190 408 L410 408 L415 426 L185 426 Z" fill="url(#csSealGrad)"/>
    <g stroke="#FED7AA" stroke-width="1.2" opacity="0.7">
      <line x1="195" y1="414" x2="405" y2="414" stroke-dasharray="3 2"/>
      <line x1="195" y1="420" x2="405" y2="420" stroke-dasharray="3 2"/>
    </g>

    <!-- Center Fin Seal Line (Back Seam Representation) -->
    <line x1="300" y1="72" x2="300" y2="408" stroke="#38BDF8" stroke-width="2" stroke-dasharray="5 3" opacity="0.35"/>

    <!-- Front Commercial Brand Art Panel -->
    <g transform="translate(230, 140)">
      <rect width="140" height="135" rx="8" fill="#0B1528" stroke="#38BDF8" stroke-width="1.2" opacity="0.95"/>
      <circle cx="70" cy="40" r="18" fill="#E06D28"/>
      <path d="M62 40 L68 46 L78 34" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="25" y="74" width="90" height="8" rx="2" fill="#F8FAFC"/>
      <rect x="35" y="90" width="70" height="5" rx="2" fill="#94A3B8"/>
      
      <rect x="20" y="106" width="100" height="16" rx="4" fill="#152238" stroke="#0284C7" stroke-width="1"/>
      <text x="70" y="118" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" letter-spacing="0.08em">PILLOW FIN-SEAL</text>
    </g>
  </g>

  <!-- Technical Spec Callout Badge -->
  <g transform="translate(36, 36)">
    <rect width="154" height="42" rx="6" fill="#0B1528" stroke="#1E293B" stroke-width="1"/>
    <circle cx="20" cy="21" r="5" fill="#E06D28"/>
    <text x="34" y="18" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CENTER SEAL POUCH</text>
    <text x="34" y="31" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9.5">Standard Pillow Pack</text>
  </g>
</svg>`;

// 2. ULTRA-REALISTIC NUTRACEUTICAL PACKAGING
const nutraSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <defs>
    <linearGradient id="nutraBackdrop" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0E2338"/>
      <stop offset="50%" stop-color="#0A1826"/>
      <stop offset="100%" stop-color="#060E17"/>
    </linearGradient>

    <linearGradient id="nutraPouchGrad" x1="180" y1="70" x2="420" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E324A"/>
      <stop offset="35%" stop-color="#142334"/>
      <stop offset="70%" stop-color="#0D1722"/>
      <stop offset="100%" stop-color="#080F16"/>
    </linearGradient>

    <linearGradient id="goldSheen" x1="190" y1="70" x2="380" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#FBBF24" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#D97706" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="nutraGoldBar" x1="180" y1="50" x2="420" y2="80" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="40%" stop-color="#F59E0B"/>
      <stop offset="80%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>

    <radialGradient id="nutraShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.5"/>
      <stop offset="70%" stop-color="#060E17" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#060E17" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="600" height="480" fill="url(#nutraBackdrop)"/>

  <!-- Molecular Ring Geometry in background -->
  <g stroke="#38BDF8" stroke-opacity="0.1" stroke-width="1.2">
    <polygon points="480,100 520,123 520,169 480,192 440,169 440,123"/>
    <polygon points="520,169 560,192 560,238 520,261 480,238 480,192"/>
    <polygon points="440,169 480,192 480,238 440,261 400,238 400,192"/>
  </g>

  <!-- Ambient Shadow -->
  <ellipse cx="300" cy="430" rx="190" ry="22" fill="url(#nutraShadow)"/>

  <!-- Nutraceutical Barrier Pouch Assembly -->
  <g id="nutra-pouch-assembly">
    <!-- Main Stand-Up Body -->
    <path d="M190 75 L410 75 L435 395 C435 415, 395 425, 300 425 C205 425, 165 415, 165 395 Z" fill="url(#nutraPouchGrad)"/>
    
    <!-- Gold Metallic Light Sheen -->
    <path d="M195 78 L280 76 L250 420 L180 405 Z" fill="url(#goldSheen)"/>

    <!-- Top Metallic Header with Tear Notch -->
    <path d="M188 54 L412 54 L410 75 L190 75 Z" fill="url(#nutraGoldBar)"/>
    <ellipse cx="300" cy="65" rx="7" ry="4" fill="#0B1528"/>
    <polygon points="188,62 196,65 188,68" fill="#0B1528"/>
    <polygon points="412,62 404,65 412,68" fill="#0B1528"/>

    <!-- Zipper Line -->
    <line x1="195" y1="88" x2="405" y2="88" stroke="#FDBA74" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6"/>

    <!-- Front Product Art (Supplement Nutrition Blend) -->
    <g transform="translate(215, 135)">
      <rect width="170" height="175" rx="8" fill="#070F1A" stroke="#F59E0B" stroke-width="1.2"/>
      
      <!-- Protein / Supplement Crest -->
      <polygon points="85,25 115,40 115,75 85,95 55,75 55,40" fill="#152336" stroke="#F59E0B" stroke-width="1.5"/>
      <path d="M73 52 L83 62 L97 45" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

      <text x="85" y="118" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="0.08em">WHEY &amp; PEPTIDES</text>
      <text x="85" y="134" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9" font-weight="600" text-anchor="middle">HIGH-BARRIER FRESHNESS</text>
      
      <!-- Quality Guarantee Pill -->
      <rect x="25" y="146" width="120" height="18" rx="4" fill="#152338" stroke="#38BDF8" stroke-width="0.8"/>
      <text x="85" y="158" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" letter-spacing="0.06em">MULTI-LAYER FOIL OTR/WVTR</text>
    </g>
  </g>

  <!-- Technical Spec Callout Badge -->
  <g transform="translate(36, 36)">
    <rect width="180" height="44" rx="6" fill="#071322" stroke="#F59E0B" stroke-width="1.2"/>
    <circle cx="22" cy="22" r="5" fill="#F59E0B"/>
    <text x="36" y="19" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="11" font-weight="700">NUTRACEUTICAL PACKAGING</text>
    <text x="36" y="32" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9.5">Vitamins, Whey &amp; Dietary Blends</text>
  </g>
</svg>`;

fs.writeFileSync('public/images/products/center-seal-pouch.svg', centerSealSvg);
fs.writeFileSync('public/images/industries/nutraceutical.svg', nutraSvg);

console.log('Successfully generated high-fidelity Center Seal Pouch and Nutraceutical SVGs!');
