export const projects = [
  {
    name: "A version control system inspired by Git.",
    tech: ["Rust", "VCS", "Git"],
    description: `A Git-like version control system with staging area, branches and other Git features built in Rust.`,
    link: "https://github.com/adam-alberty/jit",
  },

  {
    name: "Monkey language interpreter",
    tech: ["Rust", "Interpreter Design", "Language Implementation"],
    description: `A complete interpreter for the Monkey programming language, implemented in Rust while working through Thorsten Ball's book. Covers lexing, parsing and AST evaluation.`,
    link: "https://github.com/adam-alberty/rust-monkey",
  },
  {
    name: "Reliable UDP Protocol",
    tech: ["Python", "Networking", "UDP", "Multithreading", "P2P"],
    description: `Designed and implemented a reliable data transfer protocol on top of UDP, featuring acknowledgements, retransmissions, flow control, and peer-to-peer operation. Achieved 1GB+ file transfers in under one minute in a simulated unreliable network, supporting both text and binary data.`,
    link: "",
  },
  {
    name: "Ad-Blocking DNS Server",
    tech: ["Go", "Networking", "DNS"],
    description: `A forwarding DNS server built using only the Go standard library, supporting configurable domain blocking and redirection. Implements a DNS message parser from scratch in accordance with RFC 1035.`,
    link: "https://github.com/adam-alberty/dnsaur",
  },
  {
    name: "Real-Time Chat Application",
    tech: ["Vue.js", "Quasar", "Adonis.js", "PostgreSQL", "WebSockets"],
    description: `A full-stack real-time chat application featuring room-based messaging, authentication, user presence, and persistent message storage backed by PostgreSQL.`,
    link: "https://github.com/adam-alberty/vpwa",
  },

  {
    name: "Personal Website",
    tech: ["SvelteKit", "Tailwind CSS", "Personal Website"],
    description: `My personal website built with Astro and Tailwind, focusing on performance.`,
    link: "https://github.com/adam-alberty/personal-website",
  },

  {
    name: "Price Quote Generator Electron App",
    tech: ["Electron", "Price quotes"],
    description: `Desktop application for generating price quote PDFs for businesses.`,
    link: "",
  },
  {
    name: "Laravel E-Commerce Application",
    tech: ["Laravel", "PostgreSQL", "Docker", "Tailwind CSS"],
    description: `A full-stack e-commerce web application built with Laravel, featuring user authentication, product and variant management, order workflows, and a Dockerized development and deployment workflow.`,
    link: "https://github.com/adam-alberty/wtech",
  },
  {
    name: "CHIP-8 Emulator",
    tech: ["Rust", "Emulation", "Systems Programming"],
    description: `An emulator for the CHIP-8 virtual machine implemented in Rust, including instruction decoding, memory and register emulation, timers, input handling and display rendering.`,
    link: "https://github.com/adam-alberty/rust-chip8",
  },
];
