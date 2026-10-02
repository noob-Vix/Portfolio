
window.PROJECTS = [
  {
    id: "mice-crm",
    category: "private",
    visibility: "private",
    status: "Private · Live demo",
    name: "MICE CRM Pipeline",
    tagline: "Hotel MICE operations CRM: contacts, deals, proposals, rooms and function spaces, packages, RSVPs, and realtime chat.",
    role: "Fullstack builder — frontend workflows, backend APIs, Postgres schema and migrations, JWT auth, and Render deployment.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "React Query", "Node.js", "Express", "PostgreSQL", "JWT", "Render"],
    github: "",
    demo: "https://mice-crm-pipeline-frontend.onrender.com/",
    details: {
      problem: "Hotel MICE teams juggle contacts, deals, proposals, spaces, and events across spreadsheets.",
      built: "Fullstack CRM with pipeline views, role-based admin and guest areas, and DB-backed workflows for inventory and events. No proprietary logic disclosed here.",
      engineering: ["REST API with validated routes", "Postgres schema with idempotent migrations and seed", "JWT auth with role-based access", "Realtime chat and notifications surface"],
      outcome: "Private repository — live frontend demo linked; implementation details on request."
    }
  },
  {
    id: "foodnow",
    category: "featured",
    visibility: "public",
    status: "Complete",
    name: "FoodNow Ordering System",
    tagline: "Shopee-inspired food ordering with cart, checkout, receipts, and an admin dashboard.",
    role: "Solo builder — frontend, backend API, auth, and seed data.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/noob-Vix/FoodNow-FullstackEcommerce",
    demo: "",
    details: {
      problem: "Small food sellers need a simple ordering flow: browse without friction, buy after login, and let an admin manage products and order status.",
      built: "Monorepo with npm workspaces (client + server). Customers register/login, browse products, manage cart quantities, check out with cash-on-delivery, and view order history and receipts. Admin manages products and order status. Delivery fee comes from a backend env var.",
      engineering: ["JWT auth with seeded demo accounts", "Cart total computation + receipt output", "Admin product and order-status management", "Docker Compose for local MongoDB", "Vercel / Render / Atlas deploy plan in README"],
      outcome: "Working local dev flow: seed, run client on :5173 and API on :5001, demo admin + customer logins."
    }
  },
  {
    id: "booking-app",
    category: "featured",
    visibility: "public",
    status: "In progress",
    name: "Booking App",
    tagline: "Booking frontend with a backend folder reserved for the API.",
    role: "Builder — Flutter frontend structure; backend not yet implemented.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/noob-Vix/booking_app",
    demo: "",
    details: {
      problem: "Booking flows need a mobile frontend before the API exists.",
      built: "Flutter app scaffold under Frontend/booking_app. Backend/ currently holds only a placeholder file, so no API claims here.",
      engineering: ["Flutter app structure as the honest scope", "Backend folder present but empty — marked WIP, not demoed as done"],
      outcome: "Frontend scaffold verifiable in repo; backend is future work."
    }
  },
  {
    id: "masid-clothing",
    category: "featured",
    visibility: "public",
    status: "Complete",
    name: "MASID Clothing",
    tagline: "WEBSYS school project: storefront frontend plus a backend service.",
    role: "Student builder — storefront and backend in one repo.",
    tech: ["Frontend", "Backend", "Fullstack"],
    github: "https://github.com/noob-Vix/MASIDClothing-fullstack",
    demo: "",
    details: {
      problem: "Course project needed an end-to-end clothing store system.",
      built: "Repo holds masid-front-end and masid_backend side by side. README is minimal, so I keep claims to what the tree proves.",
      engineering: ["Frontend and backend separated in-repo", "Review needed: exact framework versions — see repo tree before citing them"],
      outcome: "School fullstack project, verifiable structure on GitHub."
    }
  },
  {
    id: "qr-attendance",
    category: "personal",
    visibility: "public",
    status: "Complete",
    name: "QR Attendance",
    tagline: "QR-based attendance with student/teacher dashboards and class management.",
    role: "Solo builder — PHP pages, auth, QR flow, MySQL schema.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "phpqrcode"],
    github: "https://github.com/noob-Vix/qr_attendance",
    demo: "",
    details: {
      problem: "Paper attendance is slow and error-prone for classes.",
      built: "Students register and get a unique QR code on their dashboard; teachers scan to mark attendance. Includes login/register, password reset, class and schedule management, scanner page, and attendance processing.",
      engineering: ["Session auth + password reset flow", "Student vs teacher dashboards", "QR generation and scan-to-record flow", "Class/schedule CRUD backing attendance records"],
      outcome: "Full attendance loop (register → QR → scan → record) in plain PHP/MySQL."
    }
  },
  {
    id: "flutter-project",
    category: "personal",
    visibility: "public",
    status: "Complete",
    name: "E-commerce App (Flutter Project)",
    tagline: "Mobile shopping capstone: catalog, cart, auth, and order tracking structure.",
    role: "Solo builder — Flutter UI and app structure.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/noob-Vix/second_capstone_flutter",
    demo: "",
    details: {
      problem: "Project required a realistic mobile commerce app.",
      built: "Standard Flutter project (lib/, android/, ios/, test/) for browsing products, cart, auth, categories, search, and order tracking per the project brief.",
      engineering: ["Cross-platform Flutter scaffold", "Mobile catalog/cart/auth structure"],
      outcome: "Capstone mobile app, verifiable Flutter tree on GitHub."
    }
  },
  {
    id: "library-system",
    category: "personal",
    visibility: "public",
    status: "Complete",
    name: "Library Management System",
    tagline: "Catalog, borrowing workflows, and admin views across frontend + backend.",
    role: "Builder — frontend and backend folders in one repo.",
    tech: ["Frontend", "Backend", "Fullstack"],
    github: "https://github.com/noob-Vix/LibraryManagementSystem",
    demo: "",
    details: {
      problem: "Small libraries need simple catalog and borrowing workflows.",
      built: "Repo holds frontend/ and backend/ for catalog, borrowing, and admin views. README is minimal, so claims stay at the structure level.",
      engineering: ["Frontend/backend split in-repo", "Review needed: exact stack versions before citing them"],
      outcome: "Working-structure project on GitHub; details follow the repo tree."
    }
  },
  {
    id: "null-world",
    category: "experiment",
    visibility: "public",
    status: "Experiment",
    name: "Null World (TypeScript Game)",
    tagline: "Small browser game experiment in TypeScript + Vite, with a tests folder.",
    role: "Solo experiment — game loop and TS types.",
    tech: ["TypeScript", "Vite"],
    github: "https://github.com/noob-Vix/Null_World-Typescript-Game",
    demo: "",
    details: {
      problem: "Learn TypeScript properly by building something with a loop and state.",
      built: "Vite + TypeScript scaffold with src/ and tests/. Small scope on purpose.",
      engineering: ["Strict TS via tsc + vite build", "Tests folder present — uncommon for my other repos"],
      outcome: "Learning experiment; read the src/ tree for the current state."
    }
  },
  {
    id: "blogging-app",
    category: "experiment",
    visibility: "public",
    status: "Experiment",
    name: "Blogging App",
    tagline: "Minimal blogging scaffold — kept as a learning snapshot.",
    role: "Solo experiment.",
    tech: ["JavaScript"],
    github: "https://github.com/noob-Vix/BloggingApp",
    demo: "",
    details: {
      problem: "Practice CRUD-style content app structure.",
      built: "Early scaffold; README is one line, so I make no feature claims beyond the tree.",
      engineering: ["Kept small on purpose"],
      outcome: "Reference experiment, not a flagship."
    }
  },
  {
    id: "lofi-player",
    category: "experiment",
    visibility: "public",
    status: "Experiment",
    name: "Lofi Player",
    tagline: "Tiny music-player page for coding sessions.",
    role: "Solo experiment.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/noob-Vix/LofiPlayer",
    demo: "",
    details: {
      problem: "Wanted a no-frills player page while coding.",
      built: "Small static player experiment per the repo description.",
      engineering: ["Static frontend only"],
      outcome: "Fun-sized experiment."
    }
  }
];

/* PRIVATE TEMPLATE — copy, uncomment, fill safe fields only.
{
  id: "booking-platform-private",
  category: "private",
  visibility: "private",
  status: "Private",
  name: "Booking Management Platform",
  tagline: "Booking administration with role-based access and realtime updates.",
  role: "Built admin workflows, backend APIs, and DB-backed booking flows.",
  tech: ["TypeScript", "Node.js", "SQL"],
  github: "",
  demo: "",
  details: {
    problem: "High-level problem context only.",
    built: "General responsibilities only — no proprietary detail.",
    engineering: ["Role-based access", "DB-backed workflows"],
    outcome: "Private repository — details on request."
  }
},
*/
