import fs from 'fs';

// 1. ULTRA-REALISTIC 3D FLAT BOTTOM BOX POUCH (3D Pouch)
// Features: 5-panel box structure, flat rectangular bottom, left & right gussets,
// reclosable pocket zipper, tear notch, realistic metallic studio lighting, 3D shadow.
const threeDPouchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <defs>
    <!-- Soft Studio Floor Shadow -->
    <radialGradient id="studioShadow3D" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#070D18" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#070D18" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic Charcoal Front Face Gradient -->
    <linearGradient id="frontFaceGrad" x1="200" y1="90" x2="380" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#223249"/>
      <stop offset="25%" stop-color="#182638"/>
      <stop offset="70%" stop-color="#0F1A29"/>
      <stop offset="100%" stop-color="#0A121D"/>
    </linearGradient>

    <!-- Front Face Specular Sheen (Curved Pouch Reflection) -->
    <linearGradient id="specularSheen" x1="240" y1="90" x2="330" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.22"/>
      <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <!-- Left 3D Gusset Side Panel Gradient -->
    <linearGradient id="leftGussetGrad" x1="140" y1="120" x2="210" y2="390" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#121D2C"/>
      <stop offset="50%" stop-color="#0D1622"/>
      <stop offset="100%" stop-color="#080E17"/>
    </linearGradient>

    <!-- Right 3D Gusset Side Panel Gradient -->
    <linearGradient id="rightGussetGrad" x1="390" y1="120" x2="450" y2="390" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2D415D"/>
      <stop offset="40%" stop-color="#1E2F46"/>
      <stop offset="100%" stop-color="#121D2C"/>
    </linearGradient>

    <!-- Flat Bottom Base Shadow / Crease Gradient -->
    <linearGradient id="baseShadowGrad" x1="160" y1="390" x2="440" y2="425" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#05090F"/>
      <stop offset="50%" stop-color="#0B131E"/>
      <stop offset="100%" stop-color="#05090F"/>
    </linearGradient>

    <!-- Top Pocket Zipper Header Gradient -->
    <linearGradient id="topZipperGrad" x1="200" y1="65" x2="400" y2="105" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="40%" stop-color="#EA580C"/>
      <stop offset="80%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>

    <!-- Foil Amber Accent Strip Gradient -->
    <linearGradient id="amberFoilGrad" x1="210" y1="180" x2="390" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>

    <!-- Studio Background Subtle Vignette -->
    <linearGradient id="cardBg3D" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="60%" stop-color="#EDF2F7"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
  </defs>

  <!-- Clean Studio Backdrop -->
  <rect width="600" height="480" fill="url(#cardBg3D)"/>
  
  <!-- Subtle Technical Grid Lines in background -->
  <g stroke="#CBD5E1" stroke-width="0.8" opacity="0.45">
    <line x1="60" y1="100" x2="540" y2="100"/>
    <line x1="60" y1="200" x2="540" y2="200"/>
    <line x1="60" y1="300" x2="540" y2="300"/>
    <line x1="60" y1="400" x2="540" y2="400"/>
    <line x1="160" y1="40" x2="160" y2="440"/>
    <line x1="300" y1="40" x2="300" y2="440"/>
    <line x1="440" y1="40" x2="440" y2="440"/>
  </g>

  <!-- Ground Ambient Contact Shadow -->
  <ellipse cx="300" cy="426" rx="200" ry="24" fill="url(#studioShadow3D)"/>
  <ellipse cx="300" cy="420" rx="140" ry="12" fill="#000000" opacity="0.3"/>

  <!-- ================= 3D BOX POUCH STRUCTURE ================= -->
  <g id="box-pouch-assembly">

    <!-- 1. FLAT BOTTOM BASE (Box Pouch Signature Feature) -->
    <!-- The flat bottom extends outward giving 3D stability -->
    <polygon points="170,410 430,410 405,426 195,426" fill="url(#baseShadowGrad)"/>
    <polygon points="195,426 405,426 395,432 205,432" fill="#03060A"/>

    <!-- 2. LEFT SIDE GUSSET PANEL (Folded Pleat in 3D Perspective) -->
    <polygon points="160,105 210,88 210,408 170,410" fill="url(#leftGussetGrad)"/>
    <!-- Left Gusset Inward Crease Line -->
    <line x1="185" y1="98" x2="190" y2="410" stroke="#060A10" stroke-width="2" opacity="0.8"/>
    <!-- Left Edge Highlight -->
    <line x1="160" y1="105" x2="170" y2="410" stroke="#334760" stroke-width="1.5" opacity="0.5"/>

    <!-- 3. RIGHT SIDE GUSSET PANEL (Illuminated 3D Perspective) -->
    <polygon points="390,88 440,105 430,410 390,408" fill="url(#rightGussetGrad)"/>
    <!-- Right Gusset Inward Crease Line -->
    <line x1="415" y1="98" x2="410" y2="410" stroke="#1A283B" stroke-width="2" opacity="0.8"/>
    <!-- Right Outer Edge Highlight -->
    <line x1="440" y1="105" x2="430" y2="410" stroke="#60A5FA" stroke-width="1.5" opacity="0.4"/>

    <!-- 4. MAIN FRONT PANEL (Curved Tension Realistic Box Face) -->
    <polygon points="210,88 390,88 390,408 210,408" fill="url(#frontFaceGrad)"/>

    <!-- Front Surface Specular Highlights (Photorealistic Light Reflection) -->
    <path d="M214 92 L285 90 L260 406 L214 406 Z" fill="url(#specularSheen)"/>
    <path d="M365 92 L386 90 L386 406 L375 406 Z" fill="#FFFFFF" opacity="0.06"/>

    <!-- Subtle Horizontal Curvature Shading -->
    <line x1="210" y1="404" x2="390" y2="404" stroke="#000000" stroke-width="2.5" opacity="0.6"/>

    <!-- 5. TOP SEAL & POCKET ZIPPER HEADER -->
    <!-- Top Heat-Sealed Fin -->
    <polygon points="190,62 410,62 390,88 210,88" fill="url(#topZipperGrad)"/>
    <polygon points="185,55 415,55 410,62 190,62" fill="#9A3412"/>

    <!-- Top Knurling / Heat Seal Teeth Pattern -->
    <g stroke="#FED7AA" stroke-width="1.2" opacity="0.65">
      <line x1="210" y1="68" x2="390" y2="68" stroke-dasharray="3 3"/>
      <line x1="210" y1="72" x2="390" y2="72" stroke-dasharray="3 3"/>
      <line x1="210" y1="76" x2="390" y2="76" stroke-dasharray="3 3"/>
    </g>

    <!-- Resealable Pocket Zipper Tear Strip & Pull Tab -->
    <rect x="220" y="81" width="160" height="4" rx="2" fill="#7C2D12"/>
    <rect x="220" y="82" width="160" height="2" rx="1" fill="#FDBA74" stroke-dasharray="4 2"/>
    
    <!-- Tear Notch Left and Right -->
    <polygon points="194,78 202,81 194,84" fill="#0B1528"/>
    <polygon points="406,78 398,81 406,84" fill="#0B1528"/>

    <!-- 6. BRAND & TECHNICAL SPECIFICATIONS ARTWORK ON POUCH -->
    <!-- Minimalist Premium B2B Brand Block -->
    <g transform="translate(235, 128)">
      <!-- Brand Seal Badge -->
      <rect x="0" y="0" width="130" height="135" rx="8" fill="#152238" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="65" cy="40" r="22" fill="#0284C7" opacity="0.2"/>
      <circle cx="65" cy="40" r="16" fill="url(#amberFoilGrad)"/>
      <path d="M57 40 L63 46 L73 34" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Clean Typography Simulation -->
      <rect x="20" y="74" width="90" height="9" rx="3" fill="#F8FAFC"/>
      <rect x="28" y="90" width="74" height="6" rx="2" fill="#94A3B8"/>
      
      <!-- 5-Panel Indicator Badge -->
      <rect x="18" y="106" width="94" height="16" rx="4" fill="#0B1528" stroke="#E06D28" stroke-width="1"/>
      <text x="65" y="118" fill="#FDBA74" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" letter-spacing="0.08em">5-PANEL 3D STRUCTURE</text>
    </g>

    <!-- Pouch Lower Capacity & Barrier Markings -->
    <g transform="translate(235, 290)">
      <line x1="10" y1="0" x2="120" y2="0" stroke="#334155" stroke-width="1"/>
      <circle cx="20" cy="18" r="6" fill="#38BDF8" opacity="0.2"/>
      <circle cx="20" cy="18" r="2.5" fill="#38BDF8"/>
      <rect x="34" y="15" width="76" height="6" rx="2" fill="#64748B"/>

      <circle cx="20" cy="38" r="6" fill="#10B981" opacity="0.2"/>
      <circle cx="20" cy="38" r="2.5" fill="#10B981"/>
      <rect x="34" y="35" width="60" height="6" rx="2" fill="#64748B"/>
      
      <line x1="10" y1="58" x2="120" y2="58" stroke="#334155" stroke-width="1"/>
    </g>

    <!-- Corner Chamfer Seams (3D Box Pouch Weld Lines) -->
    <line x1="210" y1="88" x2="210" y2="408" stroke="#38BDF8" stroke-width="1.2" opacity="0.4"/>
    <line x1="390" y1="88" x2="390" y2="408" stroke="#38BDF8" stroke-width="1.2" opacity="0.4"/>
  </g>

  <!-- Technical Spec Callout Tag in Corner -->
  <g transform="translate(36, 36)">
    <rect width="138" height="42" rx="6" fill="#0B1528" stroke="#1E293B" stroke-width="1"/>
    <circle cx="20" cy="21" r="5" fill="#10B981"/>
    <text x="34" y="18" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="11" font-weight="700">3D BOX POUCH</text>
    <text x="34" y="31" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9.5">Flat Bottom Format</text>
  </g>
</svg>`;

// 2. ULTRA-REALISTIC QUAD SEAL POUCH
// Features: 4 distinct reinforced corner weld edge seals, side gusset pleats,
// heavy-duty posture, realistic metallic foil lighting, crimped seal texture, drop shadow.
const quadSealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <defs>
    <!-- Soft Studio Shadow -->
    <radialGradient id="studioShadowQuad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.38"/>
      <stop offset="65%" stop-color="#070D18" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#070D18" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic Navy Main Pouch Body -->
    <linearGradient id="quadBodyGrad" x1="190" y1="70" x2="410" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E2E48"/>
      <stop offset="30%" stop-color="#152338"/>
      <stop offset="75%" stop-color="#0F1A2C"/>
      <stop offset="100%" stop-color="#09111E"/>
    </linearGradient>

    <!-- Specular Light Sheen Down Center -->
    <linearGradient id="quadSheen" x1="220" y1="70" x2="350" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="80%" stop-color="#FFFFFF" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <!-- 4 Corner Welds Gradient (Heavy Reinforced Seams) -->
    <linearGradient id="weldGradLeft" x1="175" y1="70" x2="195" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E06D28"/>
      <stop offset="40%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>

    <linearGradient id="weldGradRight" x1="405" y1="70" x2="425" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FB923C"/>
      <stop offset="40%" stop-color="#E06D28"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>

    <!-- Top & Bottom Heavy Crimp Seal Bars -->
    <linearGradient id="crimpGrad" x1="170" y1="50" x2="430" y2="80" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>

    <!-- Studio Background -->
    <linearGradient id="cardBgQuad" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="60%" stop-color="#EDF2F7"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
  </defs>

  <!-- Studio Floor & Grid -->
  <rect width="600" height="480" fill="url(#cardBgQuad)"/>
  
  <g stroke="#CBD5E1" stroke-width="0.8" opacity="0.45">
    <line x1="60" y1="100" x2="540" y2="100"/>
    <line x1="60" y1="200" x2="540" y2="200"/>
    <line x1="60" y1="300" x2="540" y2="300"/>
    <line x1="60" y1="400" x2="540" y2="400"/>
    <line x1="160" y1="40" x2="160" y2="440"/>
    <line x1="300" y1="40" x2="300" y2="440"/>
    <line x1="440" y1="40" x2="440" y2="440"/>
  </g>

  <!-- Ground Contact Shadow -->
  <ellipse cx="300" cy="425" rx="190" ry="22" fill="url(#studioShadowQuad)"/>
  <ellipse cx="300" cy="420" rx="130" ry="10" fill="#000000" opacity="0.32"/>

  <!-- ================= QUAD SEAL POUCH ASSEMBLY ================= -->
  <g id="quad-seal-assembly">

    <!-- 1. LEFT RECESSED GUSSET PLEAT SHADOW -->
    <polygon points="160,82 186,72 186,408 160,400" fill="#0B131E" opacity="0.9"/>
    <!-- Fold Crease -->
    <line x1="173" y1="78" x2="173" y2="404" stroke="#05080E" stroke-width="2"/>

    <!-- 2. RIGHT RECESSED GUSSET PLEAT -->
    <polygon points="414,72 440,82 440,400 414,408" fill="#182538"/>
    <!-- Fold Crease -->
    <line x1="427" y1="78" x2="427" y2="404" stroke="#0E1928" stroke-width="2"/>

    <!-- 3. MAIN FRONT CENTRAL PANEL -->
    <rect x="186" y="72" width="228" height="336" fill="url(#quadBodyGrad)"/>
    
    <!-- Specular Curvature Light Highlight -->
    <path d="M190 74 L275 74 L250 406 L190 406 Z" fill="url(#quadSheen)"/>
    <path d="M390 74 L410 74 L410 406 L395 406 Z" fill="#FFFFFF" opacity="0.07"/>

    <!-- 4. FOUR DISTINCT CORNER EDGE WELDS (Quad Seal Definitive Feature) -->
    <!-- Corner Weld 1: Front-Left Outer Edge Weld -->
    <rect x="180" y="70" width="12" height="340" rx="2" fill="url(#weldGradLeft)"/>
    <g stroke="#FED7AA" stroke-width="1.2" opacity="0.6">
      <line x1="183" y1="75" x2="189" y2="75"/>
      <line x1="183" y1="85" x2="189" y2="85"/>
      <line x1="183" y1="95" x2="189" y2="95"/>
      <line x1="183" y1="120" x2="189" y2="120"/>
      <line x1="183" y1="150" x2="189" y2="150"/>
      <line x1="183" y1="200" x2="189" y2="200"/>
      <line x1="183" y1="250" x2="189" y2="250"/>
      <line x1="183" y1="300" x2="189" y2="300"/>
      <line x1="183" y1="350" x2="189" y2="350"/>
      <line x1="183" y1="390" x2="189" y2="390"/>
    </g>

    <!-- Corner Weld 2: Front-Right Outer Edge Weld -->
    <rect x="408" y="70" width="12" height="340" rx="2" fill="url(#weldGradRight)"/>
    <g stroke="#FED7AA" stroke-width="1.2" opacity="0.6">
      <line x1="411" y1="75" x2="417" y2="75"/>
      <line x1="411" y1="85" x2="417" y2="85"/>
      <line x1="411" y1="95" x2="417" y2="95"/>
      <line x1="411" y1="120" x2="417" y2="120"/>
      <line x1="411" y1="150" x2="417" y2="150"/>
      <line x1="411" y1="200" x2="417" y2="200"/>
      <line x1="411" y1="250" x2="417" y2="250"/>
      <line x1="411" y1="300" x2="417" y2="300"/>
      <line x1="411" y1="350" x2="417" y2="350"/>
      <line x1="411" y1="390" x2="417" y2="390"/>
    </g>

    <!-- Corner Weld 3 & 4: Rear Welds (subtly indicated at back fold edges) -->
    <line x1="160" y1="82" x2="160" y2="400" stroke="#7C2D12" stroke-width="3" opacity="0.75"/>
    <line x1="440" y1="82" x2="440" y2="400" stroke="#C2410C" stroke-width="3" opacity="0.75"/>

    <!-- 5. TOP HEAVY-DUTY HEAT SEAL CRIMP BAR -->
    <rect x="175" y="48" width="250" height="26" rx="3" fill="url(#crimpGrad)" stroke="#64748B" stroke-width="1"/>
    
    <!-- Seal Texture Ridges -->
    <g stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" opacity="0.7">
      <line x1="190" y1="55" x2="410" y2="55" stroke-dasharray="4 2"/>
      <line x1="190" y1="61" x2="410" y2="61" stroke-dasharray="4 2"/>
      <line x1="190" y1="67" x2="410" y2="67" stroke-dasharray="4 2"/>
    </g>

    <!-- Tear Notch -->
    <polygon points="175,60 183,63 175,66" fill="#0B1528"/>
    <polygon points="425,60 417,63 425,66" fill="#0B1528"/>

    <!-- 6. BOTTOM HEAVY-DUTY SEAL CRIMP BAR -->
    <rect x="175" y="402" width="250" height="18" rx="2" fill="url(#crimpGrad)" stroke="#475569" stroke-width="1"/>
    <line x1="190" y1="410" x2="410" y2="410" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6"/>

    <!-- 7. BRANDING & SPECIFICATION DISPLAY ON POUCH -->
    <g transform="translate(225, 120)">
      <!-- Central Branding Window -->
      <rect x="0" y="0" width="150" height="150" rx="8" fill="#0B1528" stroke="#38BDF8" stroke-width="1.5" opacity="0.95"/>
      
      <!-- Precision Hexagon Icon -->
      <polygon points="75,28 95,40 95,64 75,76 55,64 55,40" fill="#0284C7" opacity="0.25" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="75" cy="52" r="10" fill="#E06D28"/>
      
      <!-- Industrial Label Lines -->
      <rect x="25" y="90" width="100" height="9" rx="3" fill="#F8FAFC"/>
      <rect x="35" y="106" width="80" height="6" rx="2" fill="#94A3B8"/>
      
      <!-- Quad Reinforced Tag -->
      <rect x="20" y="122" width="110" height="18" rx="4" fill="#1E293B" stroke="#E06D28" stroke-width="1"/>
      <text x="75" y="134" fill="#FDBA74" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="0.08em">4-CORNER RIGID SEAL</text>
    </g>

    <!-- Technical Barrier Indicators -->
    <g transform="translate(225, 305)">
      <rect width="150" height="64" rx="6" fill="#152238" stroke="#1E293B" stroke-width="1"/>
      <circle cx="24" cy="24" r="8" fill="#10B981" opacity="0.2"/>
      <circle cx="24" cy="24" r="3.5" fill="#10B981"/>
      <text x="40" y="27" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600">High Fill-Weight Capacity</text>

      <circle cx="24" cy="46" r="8" fill="#38BDF8" opacity="0.2"/>
      <circle cx="24" cy="46" r="3.5" fill="#38BDF8"/>
      <text x="40" y="49" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="10">Non-Bulging Side Profile</text>
    </g>
  </g>

  <!-- Technical Spec Callout Badge -->
  <g transform="translate(36, 36)">
    <rect width="144" height="42" rx="6" fill="#0B1528" stroke="#1E293B" stroke-width="1"/>
    <circle cx="20" cy="21" r="5" fill="#E06D28"/>
    <text x="34" y="18" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="11" font-weight="700">QUAD SEAL POUCH</text>
    <text x="34" y="31" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9.5">4-Corner Weld Structure</text>
  </g>
</svg>`;

// 3. ULTRA-REALISTIC LIFE SCIENCE & HEALTHCARE PACKAGING
// Features: Cleanroom sterile chevron peel pouch, Tyvek/foil medical laminate,
// surgical/diagnostic kit presentation, ISO sterile barrier icon, high-tech cyan/cobalt clinical depth.
const healthcareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <defs>
    <!-- Deep Cleanroom Cyan/Cobalt Gradient Backdrop -->
    <linearGradient id="medBackdrop" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#081A32"/>
      <stop offset="45%" stop-color="#0B2342"/>
      <stop offset="100%" stop-color="#050E1B"/>
    </linearGradient>

    <!-- Medical Sterile Pouch Body (Clean Tyvek White + Foil Shimmer) -->
    <linearGradient id="medPouchGrad" x1="180" y1="80" x2="420" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>

    <!-- Transparent Medical Film Layer (Showing Diagnostic Kit inside) -->
    <linearGradient id="clearFilmGrad" x1="190" y1="90" x2="410" y2="410" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.22"/>
      <stop offset="50%" stop-color="#0284C7" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#0369A1" stop-opacity="0.25"/>
    </linearGradient>

    <!-- Sterile Chevron Peel Seal Gradient -->
    <linearGradient id="chevronSealGrad" x1="190" y1="75" x2="410" y2="135" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Perimeter Hermetic Weld Gradient -->
    <linearGradient id="perimeterWeld" x1="170" y1="70" x2="430" y2="430" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.25"/>
    </linearGradient>

    <!-- Ambient Shadow -->
    <radialGradient id="medShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.55"/>
      <stop offset="70%" stop-color="#050E1B" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#050E1B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Deep Cleanroom Ambient Base -->
  <rect width="600" height="480" fill="url(#medBackdrop)"/>

  <!-- Technical Circular Crosshairs & Concentric Rings (Medical Diagnostic Feel) -->
  <g stroke="#38BDF8" stroke-opacity="0.12" stroke-width="1.2">
    <circle cx="460" cy="160" r="160"/>
    <circle cx="460" cy="160" r="110"/>
    <circle cx="460" cy="160" r="60"/>
    <line x1="460" y1="0" x2="460" y2="320"/>
    <line x1="300" y1="160" x2="600" y2="160"/>
  </g>

  <!-- Contact Shadow -->
  <ellipse cx="300" cy="432" rx="190" ry="24" fill="url(#medShadow)"/>

  <!-- ================= STERILE MEDICAL POUCH ASSEMBLY ================= -->
  <g id="sterile-pouch-assembly">

    <!-- 1. Tyvek Base Sheet (Back Layer) -->
    <rect x="180" y="70" width="240" height="348" rx="8" fill="url(#medPouchGrad)"/>

    <!-- 2. Perimeter Heat-Sealed Flange (Hermetic Weld) -->
    <rect x="180" y="70" width="240" height="348" rx="8" fill="none" stroke="url(#perimeterWeld)" stroke-width="14"/>
    <rect x="180" y="70" width="240" height="348" rx="8" fill="none" stroke="#0284C7" stroke-width="1" stroke-dasharray="3 3" opacity="0.4"/>

    <!-- 3. Chevron Peel Opening Indicator (Top Header of Medical Pouch) -->
    <!-- Distinctive V-shaped chevron opening engineered for aseptic peel presentation -->
    <path d="M195 85 L300 135 L405 85 L405 76 L195 76 Z" fill="url(#chevronSealGrad)" opacity="0.95"/>
    <!-- Chevron Peel Direction Arrows -->
    <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
      <path d="M295 96 L300 102 L305 96"/>
      <path d="M295 106 L300 112 L305 106"/>
      <path d="M295 116 L300 122 L305 116"/>
    </g>
    <text x="300" y="90" fill="#E0F2FE" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" letter-spacing="0.1em">PEEL HERE</text>

    <!-- 4. Transparent High-Barrier Front Film Window -->
    <rect x="194" y="142" width="212" height="262" rx="4" fill="url(#clearFilmGrad)"/>

    <!-- 5. Diagnostic Kit / Medical Device Contents Visible Through Film -->
    <!-- Sterile Diagnostic Cassette Mockup -->
    <g transform="translate(225, 168)" opacity="0.95">
      <rect width="150" height="96" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="14" y="20" width="40" height="56" rx="4" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
      <circle cx="34" cy="48" r="8" fill="#0284C7" opacity="0.25"/>
      <circle cx="34" cy="48" r="3" fill="#0284C7"/>
      <!-- Test Result Window Lines (C / T) -->
      <line x1="75" y1="36" x2="130" y2="36" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <line x1="75" y1="52" x2="115" y2="52" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <text x="75" y="75" fill="#64748B" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600">RAPID DIAGNOSTIC</text>
    </g>

    <!-- 6. Sterile Barrier Verification Symbols & Medical Print Layout -->
    <g transform="translate(210, 286)">
      <!-- Medical Cross Badge -->
      <circle cx="20" cy="20" r="14" fill="#0284C7"/>
      <rect x="17" y="10" width="6" height="20" rx="1.5" fill="#FFFFFF"/>
      <rect x="10" y="17" width="20" height="6" rx="1.5" fill="#FFFFFF"/>

      <!-- Cleanroom Classification Text -->
      <text x="44" y="16" fill="#0F172A" font-family="system-ui, sans-serif" font-size="11" font-weight="800">STERILE BARRIER POUCH</text>
      <text x="44" y="29" fill="#475569" font-family="system-ui, sans-serif" font-size="9" font-weight="600">ISO 11607 &amp; EN 868 High Barrier Film</text>

      <!-- Batch / Lot / Expiry Details Grid -->
      <rect x="10" y="44" width="160" height="42" rx="4" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
      <g fill="#64748B" font-family="system-ui, sans-serif" font-size="8">
        <text x="18" y="58">LOT: 2026-MED-098</text>
        <text x="18" y="74">EXP: 2029-09</text>
        <text x="96" y="58">BARRIER: CLASS A</text>
        <text x="96" y="74">METHOD: EO / IRRAD</text>
      </g>
    </g>

    <!-- Specular Light Sheen across Pouch Surface -->
    <path d="M185 75 L260 72 L230 412 L185 412 Z" fill="#FFFFFF" opacity="0.18"/>
  </g>

  <!-- Technical Spec Callout Badge -->
  <g transform="translate(36, 36)">
    <rect width="180" height="44" rx="6" fill="#071322" stroke="#0284C7" stroke-width="1.2"/>
    <circle cx="22" cy="22" r="5" fill="#38BDF8"/>
    <text x="36" y="19" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="11" font-weight="700">HEALTHCARE &amp; LIFE SCIENCE</text>
    <text x="36" y="32" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9.5">Hermetic Sterile Barrier Pouches</text>
  </g>
</svg>`;

// Write all generated realistic visuals
fs.writeFileSync('public/images/products/three-d-pouch.svg', threeDPouchSvg);
fs.writeFileSync('public/images/products/quad-seal-pouch.svg', quadSealSvg);
fs.writeFileSync('public/images/industries/healthcare.svg', healthcareSvg);

console.log('Successfully generated photorealistic 3D pouch, quad seal pouch, and healthcare packaging visuals!');
