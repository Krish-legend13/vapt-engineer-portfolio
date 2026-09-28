// Portfolio Structured Data for G Murali Krishnan
// VAPT Engineer | Aspiring Red Teamer

const PORTFOLIO_DATA = {
  operator: {
    name: "G Murali Krishnan",
    handle: "GMK_",
    code: "OPERATOR-012",
    title: "VAPT Engineer",
    subtitles: ["Aspiring Red Teamer", "Web Penetration Tester", "Security Tool Developer"],
    creed: {
      find: "I FIND.",
      exploit: "I EXPLOIT.",
      secure: "I SECURE."
    },
    bio: "VAPT engineer focused on web application security, vulnerability assessment, exploitation, reconnaissance and offensive security. Building toward a career in Red Team operations.",
    reconStatement: "I have a deep interest in cybersecurity and am focused on VAPT, web penetration testing and offensive security. My goal is to grow into a Red Team operator who can understand attack paths, identify vulnerabilities, simulate adversarial activity and help organizations strengthen their defenses.",
    targetCareer: "Red Team Operations",
    status: "ONLINE",
    systemIntegrity: "100%",
    location: "Bengaluru, India",
    email: "muralikrishnancy2021@gmail.com",
    phone: "+91 7259916747",
    links: {
      github: "https://github.com/Krish-legend13",
      linkedin: "https://www.linkedin.com/in/g-murali-krishnan-74b0a0366",
      tryhackme: "https://tryhackme.com/p/HunterHacker05?tab=yearly-activity",
      resumePdf: "G Murali Krishnan - 1ST23CY012.pdf"
    }
  },

  education: [
    {
      degree: "B.E. in Computer Science & Engineering (Cyber Security)",
      institution: "Sambhram Institute of Technology, Bengaluru",
      period: "2023 – 2027 (Expected)",
      score: "CGPA: 8.7 / 10",
      status: "CURRENT",
      details: "Specialized coursework in Network Security, Cryptography, Secure Software Engineering, Operating Systems, and Vulnerability Assessment."
    },
    {
      degree: "Pre-University Course (PCMC – Computer Science)",
      institution: "Indian Academy Pre-University College",
      period: "2021 – 2023",
      score: "88.8%",
      status: "COMPLETED",
      details: "Strong foundation in Computer Science, Mathematics, and Analytical problem solving."
    },
    {
      degree: "10th Grade (CBSE)",
      institution: "Young Scholars Academy",
      period: "2018 – 2021",
      score: "80.8%",
      status: "COMPLETED",
      details: "Secondary school education with high distinction in Science and Mathematics."
    }
  ],

  careerPath: [
    { step: "01", title: "Cybersecurity", state: "FOUNDATION", desc: "Core computing, network protocols, Linux internals, cryptography, and defensive baselines." },
    { step: "02", title: "VAPT", state: "ACTIVE SPECIALIZATION", desc: "Structured vulnerability assessment and penetration testing across web apps and infrastructure." },
    { step: "03", title: "Web Pentesting", state: "HANDS-ON PRACTITIONER", desc: "OWASP Top 10, business logic flaws, API endpoints, SQLi, XSS, and authentication bypass." },
    { step: "04", title: "Offensive Security", state: "APPLIED LABS & CTFS", desc: "Adversarial simulations, custom tooling, exploit development, and weaponized script creation." },
    { step: "05", title: "Red Team", state: "ADVANCED FOCUS", desc: "Active Directory tradecraft, MITRE ATT&CK alignment, privilege escalation, and lateral movement." },
    { step: "06", title: "Red Team Operator", state: "CAREER TARGET", desc: "Comprehensive adversary emulation, full-scope stealth operations, and executive threat advisory." }
  ],

  methodology: [
    {
      step: "01",
      name: "RECON",
      subtitle: "Understand the attack surface",
      desc: "Passive and active reconnaissance to map digital footprints, subdomain topologies, DNS records, tech stacks, and exposed personnel intelligence via OSINT.",
      icon: "radar"
    },
    {
      step: "02",
      name: "ENUMERATE",
      subtitle: "Identify services, endpoints & technologies",
      desc: "Deep port scanning, service version probing, API route fuzzing, parameter discovery, and hidden directory indexing using ffuf, Nmap, and Gobuster.",
      icon: "list"
    },
    {
      step: "03",
      name: "TEST",
      subtitle: "Validate potential vulnerabilities",
      desc: "Systematic probing for OWASP Top 10 vectors, input sanitation weaknesses, broken access controls, SSRF, injection surfaces, and configuration drifts.",
      icon: "shield-alert"
    },
    {
      step: "04",
      name: "EXPLOIT",
      subtitle: "Demonstrate impact responsibly",
      desc: "Formulate weaponized Proof-of-Concepts (PoCs) to validate real-world exploitability, verify privilege escalation vectors, and establish blast-radius metrics safely.",
      icon: "terminal"
    },
    {
      step: "05",
      name: "DOCUMENT",
      subtitle: "Capture evidence & communicate risk",
      desc: "Compile meticulous technical reports featuring reproducible steps, evidence captures, CVSS 3.1 severity scorings, and executive impact summaries.",
      icon: "file-text"
    },
    {
      step: "06",
      name: "REMEDIATE",
      subtitle: "Recommend fixes & validate them",
      desc: "Deliver prioritized, defensive hardening guidelines and conduct rigorous re-testing to confirm all identified exposure surfaces are permanently neutralized.",
      icon: "check-circle"
    }
  ],

  arsenal: {
    categories: [
      { id: "web", label: "WEB APPLICATION SECURITY", command: "load_module web_security" },
      { id: "network", label: "NETWORK / INFRASTRUCTURE", command: "load_module network_infra" },
      { id: "redteam", label: "RED TEAM / AD SECURITY", command: "load_module redteam_ad" },
      { id: "tools", label: "TOOLS & ARSENAL", command: "load_module security_tools" },
      { id: "programming", label: "PROGRAMMING & SCRIPTING", command: "load_module dev_scripting" }
    ],
    items: {
      web: [
        { name: "Web Application Pentesting", level: "Used", badge: "primary" },
        { name: "OWASP Top 10", level: "Used", badge: "primary" },
        { name: "OWASP WSTG Methodology", level: "Used", badge: "primary" },
        { name: "SQL Injection (Error / Blind)", level: "Used", badge: "primary" },
        { name: "Cross-Site Scripting (XSS)", level: "Used", badge: "primary" },
        { name: "CSRF & SSRF Vectors", level: "Used", badge: "secondary" },
        { name: "Authentication Bypass", level: "Used", badge: "primary" },
        { name: "Authorization / Access Control (IDOR)", level: "Used", badge: "primary" },
        { name: "API Security & Endpoints", level: "Used", badge: "secondary" },
        { name: "Web Reconnaissance & Fuzzing", level: "Used", badge: "primary" },
        { name: "Vulnerability Assessment", level: "Used", badge: "primary" },
        { name: "Business Logic Flaws", level: "Familiar", badge: "secondary" }
      ],
      network: [
        { name: "Network Enumeration", level: "Used", badge: "primary" },
        { name: "Port Scanning & Fingerprinting", level: "Used", badge: "primary" },
        { name: "Service Enumeration", level: "Used", badge: "primary" },
        { name: "TCP/IP Suite Analysis", level: "Used", badge: "secondary" },
        { name: "DNS Reconnaissance", level: "Used", badge: "secondary" },
        { name: "HTTP / HTTPS Protocol Inspection", level: "Used", badge: "primary" },
        { name: "SMB & NetBIOS Enumeration", level: "Used", badge: "secondary" },
        { name: "SSH & RDP Security Testing", level: "Used", badge: "secondary" },
        { name: "VPN Security Baseline", level: "Familiar", badge: "secondary" },
        { name: "Internal / External Network Testing", level: "Used", badge: "primary" }
      ],
      redteam: [
        { name: "Active Directory Architecture", level: "Learning", badge: "learning" },
        { name: "AD Enumeration & BloodHound", level: "Learning", badge: "learning" },
        { name: "Kerberos Authentication Flows", level: "Learning", badge: "learning" },
        { name: "Kerberoasting & AS-REP Roasting", level: "Learning", badge: "learning" },
        { name: "NTLM & Credential Access Concepts", level: "Learning", badge: "learning" },
        { name: "Privilege Escalation Techniques", level: "Familiar", badge: "secondary" },
        { name: "Lateral Movement Methodology", level: "Learning", badge: "learning" },
        { name: "Post-Exploitation Tradecraft", level: "Learning", badge: "learning" },
        { name: "Attack Path Analysis", level: "Exploring", badge: "exploring" },
        { name: "MITRE ATT&CK Framework Mapping", level: "Familiar", badge: "secondary" },
        { name: "Cyber Kill Chain Principles", level: "Familiar", badge: "secondary" }
      ],
      tools: [
        { name: "Kali Linux", level: "Used", badge: "primary" },
        { name: "Burp Suite Professional / Community", level: "Used", badge: "primary" },
        { name: "Nmap Network Scanner", level: "Used", badge: "primary" },
        { name: "Wireshark Packet Analyzer", level: "Used", badge: "primary" },
        { name: "Metasploit Framework", level: "Used", badge: "primary" },
        { name: "SQLMap Automated Injector", level: "Used", badge: "primary" },
        { name: "Splunk / SIEM", level: "Used", badge: "primary" },
        { name: "Nuclei Template Scanner", level: "Used", badge: "primary" },
        { name: "ffuf Fast Web Fuzzer", level: "Used", badge: "primary" },
        { name: "Gobuster Directory Bruter", level: "Used", badge: "primary" },
        { name: "Nikto Web Scanner", level: "Used", badge: "primary" },
        { name: "Netcat & Socat", level: "Used", badge: "primary" },
        { name: "OWASP ZAP", level: "Used", badge: "secondary" },
        { name: "Postman API Tester", level: "Used", badge: "secondary" },
        { name: "SearchSploit / Exploit-DB", level: "Used", badge: "primary" },
        { name: "GitHub Version Control", level: "Used", badge: "secondary" }
      ],
      programming: [
        { name: "Python (Security Scripting & PoCs)", level: "Used", badge: "primary" },
        { name: "Bash Scripting (Linux Automation)", level: "Used", badge: "primary" },
        { name: "HTML & CSS Architecture", level: "Used", badge: "secondary" },
        { name: "JavaScript (DOM & XSS vectors)", level: "Used", badge: "secondary" },
        { name: "Java (Core & Application Logic)", level: "Used", badge: "secondary" },
        { name: "C & C++ (Systems Foundations)", level: "Familiar", badge: "secondary" }
      ]
    }
  },

  missions: [
    {
      id: "001",
      code: "PROJECT 001",
      title: "KeySpy",
      category: "CONTROLLED LAB RESEARCH",
      status: "CONTROLLED LAB",
      highlight: false,
      context: "Controlled Educational Lab Environment",
      badge: "EDUCATIONAL LAB",
      target: "Keystroke Monitoring In Controlled Lab",
      method: "Hook-Based Keystroke Interception",
      technologies: ["Python", "OS Event Hooks", "Log Encapsulation"],
      summary: "Educational keystroke monitoring utility built strictly within an isolated laboratory environment to research credential logging mechanics.",
      objective: "Understand the operating system mechanics of input capture, hook persistence, and how endpoint detection systems (EDR) detect unauthorized input hooks.",
      approach: "Constructed a minimal, research-only Python prototype in a sandboxed VM to demonstrate how OS-level input capture mechanisms operate, analyzing how defensive behavioral detectors and anti-malware flags capture such activity.",
      keyFeatures: [
        "Controlled event hook capture within isolated testbed",
        "Study of low-level OS input notification pipelines",
        "Analysis of detection footprints and anti-keylogging defenses",
        "Strictly quarantined research artifact with zero external propagation"
      ],
      securityConcepts: [
        "OS Event Hooks",
        "Credential Harvesting Mechanisms",
        "Endpoint Detection & Behavioral Signatures",
        "Responsible Security Research"
      ],
      lessonsLearned: "Gained critical insight into the mechanics of credential access tactics (MITRE ATT&CK T1056) and how endpoint security solutions detect malicious hook installations."
    },
    {
      id: "002",
      code: "PROJECT 002",
      title: "AURA",
      category: "COMPLIANCE & AUDIT",
      status: "COMPLETED",
      highlight: true,
      context: "System Security & Hardening Tool",
      badge: "AUDIT FRAMEWORK",
      target: "Operating System Configurations",
      method: "Automated CIS / NIST Benchmark Auditing",
      technologies: ["Python", "Bash", "System APIs", "JSON/HTML Reporting"],
      summary: "Cross-platform compliance audit tool automating configuration checks against CIS and NIST benchmarks with comprehensive risk reporting.",
      objective: "Automate the assessment of host security configurations, minimizing human oversight in identifying misconfigured permissions, weak services, and non-compliant policies.",
      approach: "Developed an extensible auditing framework that queries OS settings, password policies, firewall states, SSH configs, and file permissions against CIS Benchmarks, generating an executive score and remediation scripts.",
      keyFeatures: [
        "Automated scanning against CIS & NIST baseline rulesets",
        "Comprehensive scoring engine with actionable remediation commands",
        "HTML/JSON executive and technical risk reports",
        "Lightweight standalone agent requiring zero external dependencies"
      ],
      securityConcepts: [
        "CIS / NIST Security Benchmarks",
        "Operating System Hardening",
        "Automated Compliance Verification",
        "Vulnerability Surface Reduction"
      ],
      lessonsLearned: "Discovered the vital relationship between defensive compliance baselines and offensive attack vectors: every failed benchmark represents a potential privilege escalation vector."
    },
    {
      id: "003",
      code: "PROJECT 003",
      title: "PhishEye",
      category: "THREAT INTELLIGENCE",
      status: "COMPLETED",
      highlight: false,
      context: "Security Detection Tool",
      badge: "RECON & DETECTION",
      target: "Suspicious URLs & Inbound Emails",
      method: "Multi-factor Risk Scoring & Header Analysis",
      technologies: ["Python", "Domain Rep APIs", "Regex Parser", "Heuristic Engine"],
      summary: "Phishing detection system scoring suspicious emails and websites by risk level through domain age, SSL telemetry, and heuristic indicators.",
      objective: "Provide users and defenders with immediate, multi-vector risk ratings for deceptive phishing URLs and spoofed incoming emails.",
      approach: "Built an analysis pipeline that scrutinizes domain WHOIS registration age, SSL certificate validity, homoglyph character spoofing, and email SPF/DKIM/DMARC headers to compute a consolidated threat severity score.",
      keyFeatures: [
        "Heuristic domain spoofing and homoglyph detection",
        "Email header authentication parsing (SPF, DKIM, DMARC)",
        "Consolidated risk rating with visual threat breakdown",
        "Safe sandboxed URL inspection mode"
      ],
      securityConcepts: [
        "Phishing Vectors & Social Engineering",
        "Email Authentication Protocols",
        "Domain Homograph Exploitation",
        "Threat Intelligence Scoring"
      ],
      lessonsLearned: "Analyzed social engineering evasion tricks, recognizing how attackers leverage trusted certificate authorities and newly registered domains to bypass naive filters."
    },
    {
      id: "004",
      code: "PROJECT 004",
      title: "Advanced SQL Injection Scanner",
      category: "OFFENSIVE SECURITY",
      status: "COMPLETED",
      highlight: true,
      context: "Developed during Supraja Technologies VAPT Internship",
      badge: "CORE SECURITY TOOL",
      target: "Web Applications & Data Endpoints",
      method: "Error-Based & Blind SQLi Detection",
      technologies: ["Python", "HTTP Engine", "Regex Heuristics", "CLI Reporting"],
      summary: "Automated offensive security tool engineered for robust error-based and blind SQL injection discovery across URL parameters and form vectors.",
      objective: "Eliminate manual testing overhead and improve vulnerability detection speed by developing an automated scanner capable of accurately identifying error-based and blind time-delayed SQL injection points in target web applications.",
      approach: "Built a Python-based testing engine with customized payload heuristics. The tool injects targeted syntax markers into parameters, inspects HTTP response payloads against known DBMS error signatures (MySQL, PostgreSQL, MSSQL, Oracle), and executes differential statistical time analysis to uncover subtle blind injection flaws.",
      keyFeatures: [
        "Dual-engine detection: Error signature matching and statistical time-delay verification",
        "Automated parameter harvesting and input vector injection",
        "Custom heuristic payload lists minimizing false positives",
        "Detailed vulnerability telemetry report generator with PoC replication commands"
      ],
      securityConcepts: [
        "Error-Based SQL Injection",
        "Blind Time-Based SQLi",
        "DBMS Error Signature Analysis",
        "Input Sanitization Testing",
        "Automated Offensive Tooling"
      ],
      lessonsLearned: "Learned how network latency fluctuations impact blind time-based tests, necessitating statistical response timing baselines to ensure reliable detection without false alarms."
    },
    {
      id: "005",
      code: "PROJECT 005",
      title: "CRON-X",
      category: "DETECTION & SOC",
      status: "COMPLETED",
      highlight: true,
      context: "24-Hour Nexathon Hackathon — Dr. TTIT KGF",
      badge: "HACKATHON BUILD",
      target: "System Logs & Network Activity",
      method: "Behavioral Intrusion Logic & Anomaly Detection",
      technologies: ["Python", "Anomaly Detection Logic", "SOC Dashboard", "Log Parser"],
      summary: "AI-based intrusion and anomaly detection system with behavioral detection logic simulating enterprise SOC monitoring environments.",
      objective: "Design and build a rapid-response anomaly detection engine capable of parsing host and network telemetry in real-time to alert SOC operators to suspicious deviations.",
      approach: "Engineered automated log ingesters that parse authentication logs, cron events, and connection spikes. Applied statistical anomaly baselining to distinguish between standard operational traffic and adversarial techniques such as brute force and abnormal process execution.",
      keyFeatures: [
        "Real-time event stream parsing and timeline reconstruction",
        "Behavioral threshold detection for anomalous privilege actions",
        "SOC-inspired incident dashboard with prioritized threat alerts",
        "Automated event tagging aligned with MITRE ATT&CK tactics"
      ],
      securityConcepts: [
        "Intrusion Detection Systems (IDS)",
        "SOC Telemetry Monitoring",
        "Log Anomaly Detection",
        "Adversary Behavioral Baselines"
      ],
      lessonsLearned: "Gained firsthand insight into the defender's perspective: how noisy logs challenge SOC analysts, emphasizing the need for high-fidelity detection rules to prevent alert fatigue."
    },
    {
      id: "006",
      code: "PROJECT 006",
      title: "Nyx Nexus",
      category: "CYBERSECURITY PLATFORM",
      status: "COMPLETED",
      highlight: true,
      context: "Hack Nocturne 2.0 — MVIT Bangalore",
      badge: "HACKATHON BUILD",
      target: "Cyber Enthusiasts & Students",
      method: "Gamified Lab Simulation & Local LLM",
      technologies: ["HTML5", "CSS3", "JavaScript", "Ollama LLM", "REST API"],
      summary: "Gamified cybersecurity educational platform integrated with an AI assistant using local Ollama inference for real-time tactical guidance.",
      objective: "Bridge the gap between theoretical cybersecurity education and practical exploitation skills through interactive, gamified attack/defense scenarios assisted by an on-premise AI mentor.",
      approach: "Architected a responsive interactive cyber lab frontend connected to a local Ollama AI engine. The assistant provides contextual, security-focused hints, explains attack mechanics dynamically, and validates user milestones without sending sensitive prompts outside the host.",
      keyFeatures: [
        "Gamified cybersecurity curriculum and progressive challenge unlocks",
        "Local Ollama-powered real-time security mentor for hints and technical explanations",
        "Terminal-style simulated command environment for testing scenarios",
        "Live player dashboard and skill progression analytics"
      ],
      securityConcepts: [
        "Cybersecurity Gamification",
        "Local LLM Integration (Zero Cloud Leakage)",
        "Prompt-Constrained Mentoring",
        "Interactive Lab Simulation"
      ],
      lessonsLearned: "Discovered the architectural challenges of running local inference in hackathon environments and successfully optimized prompt tokens to achieve sub-second response times."
    },
    {
      id: "007",
      code: "PROJECT 007",
      title: "KRISHI",
      category: "DECENTRALIZED TECH & AI",
      status: "COMPLETED",
      highlight: false,
      context: "BGSCET Advaya 2.0 — 24-Hour Hackathon",
      badge: "HACKATHON BUILD",
      target: "Agricultural Supply Chain & Direct Trade",
      method: "Decentralized Ledger & Voice IVR Integration",
      technologies: ["Blockchain Logic", "AI Voice IVR", "JavaScript", "Python"],
      summary: "Blockchain-based platform connecting farmers directly to consumers, powered by an accessible AI voice IVR assistant for rural accessibility.",
      objective: "Eliminate supply-chain fraud, provide transparent fair pricing, and ensure non-technical rural farmers can interact with modern market data via basic telephony.",
      approach: "Created a tamper-resistant transaction ledger recording produce batches and payments, complemented by an interactive voice recognition pipeline enabling farmers to query prices and record stock via voice in their native dialect.",
      keyFeatures: [
        "Immutable ledger tracking transaction integrity and fair pricing",
        "Interactive AI Voice IVR system for phone-based interaction",
        "Consumer verification portal verifying produce authenticity",
        "Lightweight mobile-responsive interface"
      ],
      securityConcepts: [
        "Data Integrity Verification",
        "Supply Chain Provenance",
        "Secure Voice Channel Authentication"
      ],
      lessonsLearned: "Ensured accessibility for non-technical users while preserving strict input validation and session integrity over voice and web interfaces."
    },
    {
      id: "008",
      code: "PROJECT 008",
      title: "ARENA-SECURE",
      category: "ASSET SECURITY & AI",
      status: "COMPLETED",
      highlight: false,
      context: "AIT Cepheus — 24-Hour Hackathon",
      badge: "HACKATHON BUILD",
      target: "High-Value Sports Digital Media",
      method: "AI Media Authenticity & Watermark Integrity",
      technologies: ["Python", "Media Forensics", "Hashing Algorithms", "Web Portal"],
      summary: "AI-powered digital asset protection platform designed to continuously verify sports media authenticity and detect unauthorized tampering.",
      objective: "Prevent digital media forgery, deepfake alteration, and unauthorized redistribution of proprietary sports broadcast footage and photography.",
      approach: "Built a verification pipeline that computes cryptographic perceptual hashes and analyzes frame sequences for synthetic anomalies, flagging unauthorized alterations or pirated distribution instantly.",
      keyFeatures: [
        "Perceptual media hashing and authenticity verification",
        "Automated artifact detection for manipulated imagery",
        "Asset rights audit trail and cryptographic timestamping",
        "Instant infringement alert engine"
      ],
      securityConcepts: [
        "Digital Forensics",
        "Cryptographic Integrity Checking",
        "Media Authentication",
        "Anti-Tamper Verification"
      ],
      lessonsLearned: "Deepened knowledge in cryptographic hashing and digital forensics techniques used to prove provenance and detect adversarial alterations."
    },
    {
      id: "009",
      code: "PROJECT 009",
      title: "AI + Blockchain Digital Forensics",
      category: "DIGITAL FORENSICS & AI",
      status: "IN-PROGRESS",
      highlight: false,
      context: "Final Year Project",
      badge: "FORENSICS RESEARCH",
      target: "Digital Evidence & Chain of Custody",
      method: "AI-Assisted Analysis & Blockchain Integrity Verification",
      technologies: ["Python", "Blockchain Logic", "AI/ML", "Digital Forensics Tools"],
      summary: "Digital forensics platform combining AI-assisted evidence analysis with blockchain-based chain of custody to ensure tamper-evident evidence integrity.",
      objective: "Develop a forensic investigation tool that leverages AI to assist in evidence analysis while using blockchain to guarantee chain of custody integrity and prevent evidence tampering.",
      approach: "Combined AI-powered anomaly detection and pattern recognition for evidence analysis with an immutable blockchain ledger that records and verifies every access and modification to digital evidence.",
      keyFeatures: [
        "AI-assisted digital evidence analysis and pattern recognition",
        "Blockchain-based chain of custody with immutable audit trail",
        "Tamper-detection mechanisms for digital artifacts",
        "Forensic reporting and evidence documentation"
      ],
      securityConcepts: [
        "Digital Forensics Methodology",
        "Chain of Custody Integrity",
        "Blockchain Immutability",
        "AI-Assisted Investigation",
        "Evidence Tamper Detection"
      ],
      lessonsLearned: "Learned how combining AI with blockchain addresses both the analytical and integrity challenges in digital forensics, ensuring evidence admissibility and investigative accuracy."
    },
    {
      id: "010",
      code: "PROJECT 010",
      title: "Secure Message Application",
      category: "APPLICATION SECURITY",
      status: "IN-PROGRESS",
      highlight: false,
      context: "On Process - Advanced Internship at Supraja Technologies",
      badge: "NETWORK SECURITY",
      target: "Messaging Communication & Credential Security",
      method: "End-to-End Encryption & Secure Channel Design",
      technologies: ["Python", "Cryptography Libraries", "Network Security", "Socket Programming"],
      summary: "Secure messaging application on process with a focus on network and application security, encryption, and safe communication between endpoints.",
      objective: "Build a messaging application demonstrating practical implementation of encryption, secure credential handling, and protected network communication channels.",
      approach: "Designed and implemented a messaging system with encrypted communication channels, focusing on network-level security, authentication mechanisms, and protection of message data in transit.",
      keyFeatures: [
        "Encrypted message transmission between endpoints",
        "Secure authentication and credential management",
        "Network-level security implementation",
        "Application security hardening practices"
      ],
      securityConcepts: [
        "End-to-End Encryption",
        "Application Security",
        "Network Security",
        "Secure Communication Protocols",
        "Credential Protection"
      ],
      lessonsLearned: "Gained practical experience implementing security features from the developer perspective, understanding how application architecture decisions directly impact vulnerability exposure."
    }
  ],

  experience: [
    {
      id: "supraja",
      role: "Advanced Cyber Security",
      subRole: "SOC + Advanced VAPT + API Pentesting",
      company: "Supraja Technologies",
      duration: "July 2025 – Present",
      period: "July 2025 – Present",
      type: "CURRENT INTERNSHIP",
      status: "ACTIVE",
      summary: "Performing hands-on VAPT, API penetration testing, web application vulnerability assessment, and SOC operations using Splunk/SIEM for security monitoring and log analysis.",
      highlights: [
        "Performing hands-on VAPT, API penetration testing, and web application vulnerability assessment following OWASP Top 10 and WSTG",
        "Using Splunk and SIEM tools to support SOC operations, security monitoring, and log analysis",
        "Architected and developed the Advanced SQL Injection Scanner and secure messaging applications"
      ],
      responsibilities: [
        "Performing hands-on VAPT and API penetration testing to identify and assess web application vulnerabilities.",
        "Conducting web application security assessments targeting authentication, authorization, and injection flaws.",
        "Using Splunk and SIEM tools to support SOC operations, security monitoring, and log analysis.",
        "Following structured penetration testing methodologies aligned with OWASP WSTG industry guidelines.",
        "Authoring technical findings and security assessment reports with actionable remediation steps."
      ],
      technicalWork: [
        "API penetration testing across RESTful endpoints for authentication bypass and input validation issues.",
        "Web application vulnerability assessment following OWASP Top 10 guidelines.",
        "Security monitoring and log correlation using Splunk for threat detection.",
        "Evaluated web application input vectors and URL parameters for injection vulnerabilities (error-based and blind time-based SQLi).",
        "Crafted and verified manual proof-of-concept (PoC) exploit scripts in controlled client scopes."
      ],
      toolsFrameworks: [
        "Burp Suite Professional / Community",
        "Splunk / SIEM",
        "Kali Linux",
        "OWASP Top 10 Framework",
        "OWASP WSTG Methodology",
        "Nmap Network Scanner",
        "Python Security Scripting",
        "SQLMap Automated Testing"
      ],
      keyLearning: "Mastered structured penetration-testing methodology following industry standards, disciplined evidence collection, differential response analysis in web vulnerability discovery, and bridging offensive VAPT with SOC monitoring.",
      projectsContributions: [
        "Engineered the 'Advanced SQL Injection Scanner' tool for automated error-based and blind SQLi detection.",
        "Supported SOC operations through Splunk-based log analysis and threat monitoring.",
        "Developed secure communication channel prototypes incorporating encryption best practices."
      ]
    },
    {
      id: "skillcraft",
      role: "Cybersecurity Intern (Project-Based)",
      company: "Skillcraft Technologies",
      duration: "September 2025 – October 2025",
      period: "September 2025 – October 2025",
      type: "INTERNSHIP",
      status: "COMPLETED",
      summary: "Conducted hands-on security project development and controlled lab testing targeting web authentication vulnerabilities.",
      highlights: [
        "Contributed to security-focused offensive and defensive tooling in controlled laboratory environments",
        "Applied practical vulnerability testing techniques targeting authentication bypass and session management flaws",
        "Executed simulated privilege escalation vectors within Linux and Windows test environments",
        "Documented exploit PoCs and formulated mitigation recommendations"
      ],
      responsibilities: [
        "Engineered security-focused utility projects in controlled, isolated laboratory environments.",
        "Executed vulnerability testing routines with strict safety bounds and zero production interference.",
        "Analyzed authentication logic flows, token persistence, and session termination behaviors.",
        "Formulated security mitigation documentation for identified flaws."
      ],
      technicalWork: [
        "Simulated authentication bypass attacks on vulnerable lab endpoints.",
        "Evaluated local privilege escalation paths in controlled Linux (SUID/Sudo) and Windows lab machines.",
        "Engineered research utilities for credential security analysis (entropy calculation, keystroke hook detection).",
        "Tested cryptographic algorithms and implementation boundaries in Python."
      ],
      toolsFrameworks: [
        "Python Security Tooling",
        "Linux & Windows Controlled Lab Environments",
        "John the Ripper / Hashcat Basics",
        "Bash Scripting",
        "Burp Suite Repeater"
      ],
      keyLearning: "Gained hands-on proficiency in authentication bypass mechanisms, local privilege escalation vectors, defensive credential storage, and developing defensive research tools in sandboxed environments.",
      projectsContributions: [
        "Developed educational keystroke monitoring research tool (KeySpy) in a controlled environment to study OS hook detection.",
        "Built cryptographic utility suite (Caesar Cipher, Image Steganography/Encryption, Password Analyzer)."
      ]
    },
    {
      id: "elevate",
      role: "Cybersecurity Intern (Project-Based)",
      company: "Elevate Labs",
      duration: "October 2025 – December 2025",
      period: "October 2025 – December 2025",
      type: "INTERNSHIP",
      status: "COMPLETED",
      summary: "Simulated red-team adversarial operations, web vulnerability discovery, and technical documentation.",
      highlights: [
        "Simulated real-world offensive attack scenarios mimicking red team adversary tradecraft",
        "Practiced systematic web vulnerability discovery across simulated corporate network targets",
        "Executed targeted exploitation exercises and validated remediation patch effectiveness",
        "Generated comprehensive vulnerability documentation and risk impact narratives"
      ],
      responsibilities: [
        "Simulated real-world offensive attack scenarios mimicking adversary tactics and tradecraft.",
        "Mapped corporate attack surfaces across simulated enterprise network topologies.",
        "Practiced multi-stage web vulnerability discovery, verification, and controlled exploitation.",
        "Drafted end-to-end attack narratives and impact assessments for simulated enterprise breaches."
      ],
      technicalWork: [
        "Conducted reconnaissance and perimeter enumeration against simulated multi-tier web applications.",
        "Chained web vulnerabilities (such as access control bypass and parameter injection) to achieve elevated access.",
        "Simulated lateral movement and post-exploitation tradecraft concepts in virtual testbeds.",
        "Validated defensive patch effectiveness and executed re-testing against closed vectors."
      ],
      toolsFrameworks: [
        "Kali Linux",
        "Metasploit Framework",
        "Nmap & Network Enumeration Probes",
        "Wireshark Traffic Inspector",
        "Burp Suite",
        "MITRE ATT&CK Matrix Alignment"
      ],
      keyLearning: "Understood adversary operational methodology: thinking beyond isolated bugs to visualize full attack paths, chained vectors, and the strategic attacker mindset essential for Red Team operations.",
      projectsContributions: [
        "Created end-to-end simulated red team attack documentation showing full adversary kill chain progression.",
        "Delivered technical remediation validation reviews ensuring security patches adequately closed exploitation paths."
      ]
    }
  ],

  operations: [
    {
      id: "ghostwire",
      badge: "🥇 WINNER",
      title: "Ghostwire CTF",
      event: "Tech Habba — Atria Institute of Technology",
      date: "April 2026",
      category: "OFFENSIVE CTF",
      result: "1st Place Winner (Champion)",
      teamDetails: "Collegiate CTF Competition",
      desc: "Secured 1st Place in competitive multi-category capture-the-flag tournament testing web exploitation, reverse engineering, and cryptography.",
      whatItWas: "Flagship competitive capture-the-flag tournament hosted at Atria Institute of Technology during Tech Habba, challenging engineering security teams across web exploitation, cryptography, and binary analysis.",
      whatIDid: "Identified and exploited subtle web application flaws, bypassed authentication mechanisms, decrypted cryptographic cipher challenges, and captured target flags across competitive rounds to clinch 1st place.",
      categoriesChallenges: [
        "Web Application Exploitation",
        "Cryptography & Custom Ciphers",
        "Reverse Engineering",
        "Forensic Analysis"
      ],
      skillsUsed: [
        "Manual Web Pentesting",
        "Token & Cookie Manipulation",
        "Burp Suite Intruder / Repeater",
        "Python Exploit Scripting",
        "Cryptanalysis"
      ],
      keyTakeaways: "Rapid triage of unknown web endpoints under strict competition time constraints, and disciplined verification of payload outputs.",
      image: "assets/ctf/Atria CTF winner.jpeg"
    },
    {
      id: "level4-sdp",
      badge: "🥇 WINNER",
      title: "Level 4 SDP CTF",
      event: "Supraja Technologies",
      date: "March 2026",
      category: "ADVANCED VAPT & ICS",
      result: "1st Place Winner (Champion)",
      teamDetails: "Supraja Technologies Skill Development Program Capstone",
      desc: "1st Place winner in advanced capstone CTF covering ICS/SCADA security fundamentals, complex web application flaws, and network exploitation.",
      whatItWas: "Advanced capstone CTF competition covering Industrial Cyber Security (ICS/SCADA), network protocol vulnerabilities, and advanced web penetration testing.",
      whatIDid: "Analyzed industrial protocol communication flows, identified security misconfigurations in simulated SCADA/ICS components, and exploited web application flaws to win top honors.",
      categoriesChallenges: [
        "Industrial Cyber Security (ICS)",
        "SCADA Protocol Fundamentals",
        "Advanced Web Application Exploitation",
        "Network Enumeration"
      ],
      skillsUsed: [
        "OT/ICS Security Analysis",
        "Protocol Packet Inspection",
        "OWASP Top 10 Testing",
        "Automated & Manual Exploit Tooling"
      ],
      keyTakeaways: "Operational technology (OT) vulnerabilities carry unique physical and operational consequences compared to traditional IT, demanding careful exploitation and containment.",
      image: "assets/ctf/CTF winner - Supraja 4.jpeg"
    },
    {
      id: "level3-sdp",
      badge: "🥇 WINNER",
      title: "Level 3 SDP CTF",
      event: "Supraja Technologies",
      date: "November 2025",
      category: "SOC & WEB PENTESTING",
      result: "1st Place Winner (Champion)",
      teamDetails: "Supraja Technologies Skill Development Program",
      desc: "Champion in intensive challenge series focusing on log analysis, incident detection, and advanced web penetration testing.",
      whatItWas: "Intensive dual-track competition testing defensive incident log analysis alongside offensive web application exploitation.",
      whatIDid: "Correlated multi-source system and web server logs to reconstruct simulated breach timelines, while solving complex web exploitation challenges to capture top flags.",
      categoriesChallenges: [
        "SOC Incident Detection",
        "Log Analysis & Attack Reconstruction",
        "Advanced Web Pentesting",
        "Network Forensics"
      ],
      skillsUsed: [
        "Log Telemetry Correlation",
        "SQL Injection Detection",
        "Cross-Site Scripting (XSS)",
        "Wireshark Packet Analysis"
      ],
      keyTakeaways: "Seeing the attack from the defender's log stream directly sharpens offensive stealth, payload precision, and detection evasion awareness.",
      image: "assets/ctf/CTF winner - Supraja 3.jpeg"
    },
    {
      id: "level2-sdp",
      badge: "🥇 WINNER",
      title: "Level 2 SDP CTF",
      event: "Supraja Technologies",
      date: "May 2025",
      category: "VAPT COMPETITION",
      result: "1st Place Winner (Champion)",
      teamDetails: "Supraja Technologies Skill Development Program",
      desc: "1st Place in web application testing, manual exploitation techniques, and vulnerability identification challenges.",
      whatItWas: "Hands-on vulnerability assessment and penetration testing competition evaluating practical web application testing and exploit execution.",
      whatIDid: "Executed manual vulnerability testing across target web applications, exploited input sanitization flaws and authentication weaknesses, and documented technical findings.",
      categoriesChallenges: [
        "Web Application Testing",
        "Manual Exploitation Techniques",
        "Input Sanitization Flaws",
        "Access Control Vulnerabilities"
      ],
      skillsUsed: [
        "Burp Suite",
        "Manual SQL Injection",
        "Parameter Tampering",
        "Input Filter Bypassing"
      ],
      keyTakeaways: "Automated scanners miss contextual business logic flaws; manual verification is the indispensable differentiator in professional penetration testing.",
      image: "assets/ctf/CTF winner - Supraja 2.jpeg"
    },
    {
      id: "acharya",
      badge: "🥇 WINNER",
      title: "Acharya Institute of Technology CTF",
      event: "Acharya Institute of Technology, Bangalore",
      date: "October 2025",
      category: "COLLEGIATE CTF",
      result: "1st Place Winner (Champion)",
      teamDetails: "Inter-collegiate CTF Championship",
      desc: "Clinched top podium finish out of inter-college security teams in multi-stage web security and binary challenge tracks.",
      whatItWas: "Inter-college capture-the-flag tournament testing collegiate security competitors in multi-stage web challenges, cryptography, and digital forensics.",
      whatIDid: "Solved complex web security challenges including authorization bypass, parameter injection, and decoded steganographic artifacts to finish at the top of the podium.",
      categoriesChallenges: [
        "Web Application Security",
        "Authorization & Session Flaws",
        "Digital Forensics",
        "Cryptographic Puzzles"
      ],
      skillsUsed: [
        "Web Pentesting",
        "Session / JWT Analysis",
        "Steganography Tools",
        "Python Automation"
      ],
      keyTakeaways: "Speed and adaptability in pivoting between disparate challenge domains when encountering dead ends.",
      image: "assets/ctf/Acharya CTF Winner.jpeg"
    },
    {
      id: "level1-sdp",
      badge: "🥈 RUNNER-UP",
      title: "Level 1 SDP CTF",
      event: "Supraja Technologies",
      date: "December 2024",
      category: "FOUNDATIONS CTF",
      result: "Runner-Up (2nd Place)",
      teamDetails: "Supraja Technologies Skill Development Program",
      desc: "Runner-Up in foundational tournament covering networking, protocol analysis, and offensive security basics.",
      whatItWas: "Foundational competitive tournament focusing on network architecture, TCP/IP protocols, and essential offensive security concepts.",
      whatIDid: "Decoded network packet captures, analyzed network protocols, solved routing and subnetting puzzles, and performed foundational Linux system exploitation.",
      categoriesChallenges: [
        "Networking Foundations",
        "TCP/IP & Protocol Analysis",
        "Linux CLI Administration",
        "Foundational Security Basics"
      ],
      skillsUsed: [
        "Wireshark",
        "Linux Command Line",
        "Network Subnetting",
        "Protocol Probing"
      ],
      keyTakeaways: "Deep protocol and packet-level fundamentals form the bedrock for all advanced offensive security and network exploitation.",
      image: "assets/ctf/CTF runner up - Supraja 1.jpeg"
    },
    {
      id: "shaastra",
      badge: "COMPETITOR",
      title: "IIT Madras Shaastra CTF",
      event: "Shaastra — IIT Madras",
      date: "National Level CTF",
      category: "NATIONAL CTF",
      result: "National Level Participant",
      teamDetails: "National Collegiate CTF",
      desc: "Participated in one of India's premier national collegiate CTFs, solving advanced web security and cryptography challenges.",
      whatItWas: "Prestigious national collegiate capture-the-flag tournament organized by IIT Madras during their annual technical fest Shaastra.",
      whatIDid: "Competed against top engineering security teams nationwide, tackling advanced web exploitation vectors and algorithmic cryptography challenges.",
      categoriesChallenges: [
        "Advanced Web Exploitation",
        "Modern Cryptography",
        "Digital Forensics"
      ],
      skillsUsed: [
        "Offensive Web Testing",
        "Python Cryptanalysis",
        "Forensic Extraction"
      ],
      keyTakeaways: "Gained exposure to national-tier challenge difficulty, advanced evasion concepts, and competitive pressure.",
      image: "assets/ctf/shaastra.jpg"
    }
  ],

  ctfParticipations: [
    "PCU CTF",
    "RVU CTF – Kalpavikas",
    "Shaastra CTF – IIT Madras",
    "PBCTF 5.0",
    "RNSIT – CyberX CTF",
    "Acharya College CTF",
    "AIT – Ghostwire",
    "KIET – MythX CTF",
    "Lumiverse CTF",
    "NexploitX CTF"
  ],

  tryHackMe: {
    title: "TRYHACKME OPERATIONS",
    rank: "TOP 1%",
    focus: "Web Pentesting & Offensive Security",
    url: "https://tryhackme.com/p/HunterHacker05?tab=yearly-activity",
    username: "HunterHacker05",
    metrics: [
      { label: "GLOBAL STANDING", value: "TOP 1% PLATFORM" },
      { label: "CORE FOCUS", value: "WEB APPLICATION PENTESTING" },
      { label: "STATUS", value: "CONTINUOUS ACTIVITY" },
      { label: "METHODOLOGY", value: "HANDS-ON ROOMS & LABS" }
    ]
  },

  certifications: [
    {
      title: "Web Application Penetration Testing",
      issuer: "Supraja Technologies",
      year: "2025",
      badge: "OFFENSIVE CERT",
      desc: "Rigorous training and practical validation on web application security, OWASP Top 10, manual exploitation, and reporting."
    },
    {
      title: "OSINT Investigation Techniques",
      issuer: "Cyber Secured India (CTRL.ALT.ACT)",
      year: "2025",
      badge: "RECON CERT",
      desc: "Practical open-source intelligence gathering techniques for threat reconnaissance, footprinting, and digital forensics."
    },
    {
      title: "Level 4: Industrial Cyber Security — ICS",
      issuer: "Supraja Technologies",
      year: "2026",
      badge: "SDP ADVANCED",
      desc: "Exploration of SCADA, industrial protocols (Modbus), OT network security, and critical infrastructure defense."
    },
    {
      title: "Level 3: SOC and Web Pentesting",
      issuer: "Supraja Technologies",
      year: "2025",
      badge: "SDP LEVEL 3",
      desc: "Advanced web application exploitation, SOC incident analysis, log investigation, and threat hunting."
    },
    {
      title: "Level 2: VAPT",
      issuer: "Supraja Technologies",
      year: "2025",
      badge: "SDP LEVEL 2",
      desc: "Core vulnerability assessment, penetration testing methodologies, manual vulnerability testing, and PoC crafting."
    },
    {
      title: "Level 1: Cybersecurity Foundations",
      issuer: "Supraja Technologies",
      year: "2024",
      badge: "SDP LEVEL 1",
      desc: "Foundational networking, TCP/IP stack, protocol analysis, Linux CLI administration, and security basics."
    },
    {
      title: "Bootcamps & Development",
      issuer: "Technical Bootcamps",
      year: "2024 – 2025",
      badge: "DEVELOPMENT",
      desc: "Completed dedicated training in React, Java, and Full Stack Web Development to understand application architecture."
    }
  ],

  attackSurface: {
    nodes: [
      {
        id: "target",
        label: "TARGET ROOT",
        type: "target",
        desc: "Enterprise or web application scope defined for penetration testing or adversary simulation.",
        phase: "SCOPE DEFINITION",
        tests: "Rules of engagement, CIDR boundary validation, domain verification."
      },
      {
        id: "web",
        parentId: "target",
        label: "WEB APPLICATION",
        type: "category",
        desc: "Public-facing HTTP/HTTPS web endpoints, single-page applications, and reverse proxies.",
        phase: "WEB ATTACK SURFACE",
        tests: "OWASP Top 10, WSTG methodology, HTTP response headers, tech fingerprinting."
      },
      {
        id: "web-login",
        parentId: "web",
        label: "AUTH & SESSIONS",
        type: "vector",
        desc: "Authentication gateways, session tokens, JWTs, OAuth implementations, and password resets.",
        phase: "AUTHENTICATION TESTING",
        tests: "Credential stuffing resistance, 2FA bypass, brute-force mitigation, JWT signature tampering, session fixation."
      },
      {
        id: "web-api",
        parentId: "web",
        label: "REST / GRAPHQL APIs",
        type: "vector",
        desc: "Exposed API endpoints, undocumented routes, microservices, and mobile backend interfaces.",
        phase: "API SECURITY AUDIT",
        tests: "Broken Object Level Authorization (BOLA/IDOR), mass assignment, improper asset management, rate limiting."
      },
      {
        id: "web-inputs",
        parentId: "web",
        label: "INPUTS & INJECTIONS",
        type: "vector",
        desc: "All parameter vectors: URL query parameters, form fields, HTTP headers, file uploads.",
        phase: "INJECTION ANALYSIS",
        tests: "SQL Injection (Error & Blind), Stored/Reflected XSS, SSRF, Command Injection, Template Injection (SSTI)."
      },
      {
        id: "network",
        parentId: "target",
        label: "NETWORK INFRASTRUCTURE",
        type: "category",
        desc: "External and internal IP ranges, perimeter routers, firewalls, and cloud hosting topologies.",
        phase: "NETWORK MAPPING",
        tests: "Subnet scanning, egress filtering checks, ASN mapping, routing integrity."
      },
      {
        id: "net-services",
        parentId: "network",
        label: "NETWORK SERVICES",
        type: "vector",
        desc: "Daemon services running on hosts: SMB, SSH, RDP, DNS, SNMP, database ports.",
        phase: "SERVICE ENUMERATION",
        tests: "Default credentials, outdated daemon versions, banner grabbing, SMB NULL sessions, anonymous FTP."
      },
      {
        id: "net-ports",
        parentId: "network",
        label: "EXPOSED PORTS",
        type: "vector",
        desc: "Open TCP/UDP listening sockets discovered across target host infrastructure.",
        phase: "PORT IDENTIFICATION",
        tests: "SYN stealth scans, UDP service discovery, stateful firewall behavior, port filtering checks."
      },
      {
        id: "human",
        parentId: "target",
        label: "HUMAN LAYER",
        type: "category",
        desc: "Personnel, credentials, email addresses, and OSINT digital footprint.",
        phase: "SOCIAL ENGINEERING & OSINT",
        tests: "Public repo credential leaks, metadata extraction, simulated phishing awareness, LinkedIn footprinting."
      }
    ]
  }
};

// Export to global scope
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
