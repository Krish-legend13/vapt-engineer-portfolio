// Interactive Simulated Terminal Lab for G Murali Krishnan Portfolio
// Sandboxed, secure, client-side only command parser

(function () {
  'use strict';

  class VaptTerminal {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.outputEl = this.container.querySelector('.terminal-output');
      this.inputEl = this.container.querySelector('.terminal-input');
      this.promptEl = this.container.querySelector('.terminal-prompt');
      this.history = [];
      this.historyIndex = -1;

      this.commands = {
        help: {
          desc: 'List available terminal commands',
          execute: () => this.cmdHelp()
        },
        whoami: {
          desc: 'Display operator profile and core identities',
          execute: () => this.cmdWhoami()
        },
        status: {
          desc: 'Check live offensive security lab subsystem statuses',
          execute: () => this.cmdStatus()
        },
        about: {
          desc: 'Reconnaissance background and offensive philosophy',
          execute: () => this.cmdAbout()
        },
        recon: {
          desc: 'Alias for about command',
          execute: () => this.cmdAbout()
        },
        skills: {
          desc: 'Display technical skills matrix across VAPT, tools, and dev',
          execute: () => this.cmdSkills()
        },
        arsenal: {
          desc: 'Alias for skills command',
          execute: () => this.cmdSkills()
        },
        projects: {
          desc: 'List classified security missions and tools built',
          execute: () => this.cmdProjects()
        },
        missions: {
          desc: 'Alias for projects command',
          execute: () => this.cmdProjects()
        },
        experience: {
          desc: 'Display field internships & offensive operations history',
          execute: () => this.cmdExperience()
        },
        achievements: {
          desc: 'Display CTF championship record & national rankings',
          execute: () => this.cmdAchievements()
        },
        operations: {
          desc: 'Alias for achievements command',
          execute: () => this.cmdAchievements()
        },
        tryhackme: {
          desc: 'Display TryHackMe standing (Top 1%) and room activity',
          execute: () => this.cmdTryHackMe()
        },
        thm: {
          desc: 'Alias for tryhackme command',
          execute: () => this.cmdTryHackMe()
        },
        github: {
          desc: 'Display GitHub profile and repositories link',
          execute: () => this.cmdGithub()
        },
        linkedin: {
          desc: 'Display professional LinkedIn network profile link',
          execute: () => this.cmdLinkedin()
        },
        resume: {
          desc: 'Launch in-site PDF resume preview modal',
          execute: () => this.cmdResume()
        },
        contact: {
          desc: 'Display operator direct communication endpoints',
          execute: () => this.cmdContact()
        },
        clear: {
          desc: 'Clear terminal screen buffer',
          execute: () => this.cmdClear()
        },
        cls: {
          desc: 'Alias for clear command',
          execute: () => this.cmdClear()
        },
        history: {
          desc: 'List recent command execution history',
          execute: () => this.cmdHistory()
        },
        // Easter eggs
        sudo: {
          desc: 'Privilege escalation attempt',
          execute: (args) => this.cmdSudo(args)
        },
        scan: {
          desc: 'Simulate passive vulnerability surface scan on portfolio',
          execute: (args) => this.cmdScan(args)
        },
        cat: {
          desc: 'Concatenate and display file content',
          execute: (args) => this.cmdCat(args)
        },
        nmap: {
          desc: 'Simulate network port scan',
          execute: () => this.cmdNmap()
        },
        msfconsole: {
          desc: 'Launch simulated Metasploit console',
          execute: () => this.cmdMsf()
        }
      };

      this.init();
    }

    init() {
      if (!this.inputEl) return;

      this.inputEl.addEventListener('keydown', (e) => this.handleKeydown(e));

      // Keep input focused when clicking inside terminal container
      this.container.addEventListener('click', (e) => {
        if (!window.getSelection().toString()) {
          this.inputEl.focus();
        }
      });

      // Quick action buttons
      const chips = this.container.querySelectorAll('.term-quick-btn');
      chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.preventDefault();
          const cmd = chip.dataset.cmd;
          if (cmd) {
            this.inputEl.value = cmd;
            this.executeCommand(cmd);
          }
        });
      });

      // Render initial greeting banner
      this.renderInitialBanner();
    }

    renderInitialBanner() {
      const banner = `
<span class="term-dim">┌────────────────────────────────────────────────────────────────────────┐</span>
<span class="term-dim">│</span> <span class="term-cyan term-bold">GMK VAPT & RED TEAM OPERATIONS TERMINAL</span> <span class="term-dim">[v2.6.4-sec]</span>                   <span class="term-dim">│</span>
<span class="term-dim">│</span> Target System: <span class="term-green">MURALI-OFFSEC-LAB</span> | User: <span class="term-cyan">murali</span> | Mode: <span class="term-yellow">OPERATOR</span>           <span class="term-dim">│</span>
<span class="term-dim">└────────────────────────────────────────────────────────────────────────┘</span>
murali@vapt-lab:~$ <span class="term-cyan">whoami</span>
<span class="term-green term-bold">G Murali Krishnan</span> — VAPT Engineer & Aspiring Red Teamer
Specialization: Web Application Security & Offensive Tool Development
murali@vapt-lab:~$ <span class="term-cyan">status</span>
<span class="term-green">[+]</span> SYSTEM STATUS: ONLINE
<span class="term-green">[+]</span> VAPT MODULE: ACTIVE
<span class="term-green">[+]</span> WEB SECURITY MODULE: ACTIVE
<span class="term-green">[+]</span> RECON MODULE: ACTIVE
<span class="term-green">[+]</span> OPERATOR PATH: VAPT → OFFENSIVE SECURITY → RED TEAM
Type <span class="term-cyan term-bold">'help'</span> to inspect all accessible commands or click the shortcut chips below.
`;
      this.outputEl.innerHTML = banner.trim();
    }

    handleKeydown(e) {
      if (e.key === 'Enter') {
        const command = this.inputEl.value.trim();
        this.executeCommand(command);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.history.length > 0 && this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.inputEl.value = this.history[this.history.length - 1 - this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.inputEl.value = this.history[this.history.length - 1 - this.historyIndex];
        } else if (this.historyIndex === 0) {
          this.historyIndex = -1;
          this.inputEl.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        this.handleAutocomplete();
      }
    }

    handleAutocomplete() {
      const val = this.inputEl.value.trim().toLowerCase();
      if (!val) return;

      const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(val));
      if (matches.length === 1) {
        this.inputEl.value = matches[0];
      } else if (matches.length > 1) {
        this.appendLine(`<span class="term-prompt">murali@vapt-lab:~$</span> ${this.escapeHtml(val)}`);
        this.appendLine(`<span class="term-dim">Possible matches:</span> ${matches.join('  ')}`);
        this.scrollToBottom();
      }
    }

    executeCommand(cmdStr) {
      const trimmed = cmdStr.trim();
      this.inputEl.value = '';

      if (trimmed) {
        this.history.push(trimmed);
        this.historyIndex = -1;
      }

      this.appendLine(`<span class="term-prompt">murali@vapt-lab:~$</span> <span class="term-cyan">${this.escapeHtml(trimmed)}</span>`);

      if (!trimmed) {
        this.scrollToBottom();
        return;
      }

      const parts = trimmed.split(/\s+/);
      const mainCmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (this.commands[mainCmd]) {
        this.commands[mainCmd].execute(args);
      } else {
        this.appendLine(`<span class="term-red">zsh: command not found: ${this.escapeHtml(mainCmd)}</span>. Type <span class="term-cyan">'help'</span> for operational commands.`);
      }

      this.scrollToBottom();
    }

    appendLine(html) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'terminal-line';
      lineDiv.innerHTML = html;
      this.outputEl.appendChild(lineDiv);
    }

    scrollToBottom() {
      this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }

    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    // Command implementations
    cmdHelp() {
      let output = `<div class="term-table">`;
      output += `<div class="term-bold term-cyan">AVAILABLE OPERATIONAL COMMANDS:</div>`;
      for (const [name, meta] of Object.entries(this.commands)) {
        if (['cls', 'thm', 'missions', 'arsenal', 'recon', 'operations', 'cat', 'msfconsole', 'nmap'].includes(name)) continue;
        output += `<div class="term-row"><span class="term-green term-bold">${name.padEnd(14, ' ')}</span> <span class="term-dim">${meta.desc}</span></div>`;
      }
      output += `</div>`;
      output += `<div class="term-dim" style="margin-top:6px;">Easter eggs hidden: try 'scan', 'sudo', 'cat flag.txt', or 'nmap'.</div>`;
      this.appendLine(output);
    }

    cmdWhoami() {
      const op = window.PORTFOLIO_DATA ? window.PORTFOLIO_DATA.operator : {};
      const output = `
<span class="term-green term-bold">${op.name || 'G Murali Krishnan'}</span>
<span class="term-cyan">PRIMARY IDENTITY:</span> ${op.title || 'VAPT Engineer'}
<span class="term-cyan">SECONDARY:</span> ${(op.subtitles || []).join(' | ')}
<span class="term-cyan">CREED:</span> <span class="term-yellow">BUILD. BREAK. SECURE.</span>
<span class="term-cyan">STATUS:</span> <span class="term-green">● ONLINE</span> [All Systems Operational]
<span class="term-cyan">CAREER DIRECTION:</span> VAPT → Offensive Security → Red Team Operations
<span class="term-dim">${op.bio || ''}</span>
`;
      this.appendLine(output);
    }

    cmdStatus() {
      const output = `
<span class="term-cyan term-bold">=== OPERATIONAL TELEMETRY ===</span>
[+] WORKSTATION:   Kali Linux / VAPT Lab Environment
[+] SYSTEM STATUS: <span class="term-green">● ONLINE (Integrity 100%)</span>
[+] PRIMARY FOCUS: Web Application Penetration Testing (WAPT)
[+] SECONDARY:     Offensive Security & Red Team Tradecraft
[+] CTF STANDING:  <span class="term-yellow">Multiple 1st Place CTF Wins</span> (Ghostwire, Supraja SDP L2/3/4, Acharya)
[+] TRYHACKME:     <span class="term-yellow">TOP 1% Globally</span>
[+] CURRENT OBJECTIVE: Preparing for enterprise Red Team & Offensive Security roles
`;
      this.appendLine(output);
    }

    cmdAbout() {
      const data = window.PORTFOLIO_DATA;
      const op = data ? data.operator : {};
      const edu = data && data.education ? data.education[0] : {};
      const output = `
<span class="term-cyan term-bold">=== OPERATOR DOSSIER [01/RECON] ===</span>
${op.reconStatement}

<span class="term-bold term-cyan">CURRENT EDUCATION:</span>
${edu.degree}
${edu.institution} (${edu.period})
<span class="term-green">Current Academic Record: ${edu.score}</span>
`;
      this.appendLine(output);
    }

    cmdSkills() {
      const data = window.PORTFOLIO_DATA;
      if (!data || !data.arsenal) return;

      let output = `<span class="term-cyan term-bold">=== CYBER ARSENAL MATRIX ===</span>\n`;
      for (const cat of data.arsenal.categories) {
        output += `\n<span class="term-yellow term-bold">[ ${cat.label} ]</span>\n`;
        const items = data.arsenal.items[cat.id] || [];
        const itemStrings = items.map(item => `<span class="term-green">${item.name}</span> <span class="term-dim">(${item.level})</span>`);
        output += itemStrings.join('  •  ');
      }
      this.appendLine(output);
    }

    cmdProjects() {
      const data = window.PORTFOLIO_DATA;
      if (!data || !data.missions) return;

      let output = `<span class="term-cyan term-bold">=== CLASSIFIED MISSIONS & TOOLS [03/MISSIONS] ===</span>\n`;
      data.missions.forEach(m => {
        output += `\n<span class="term-green term-bold">${m.code}: ${m.title}</span> <span class="term-dim">[${m.category}]</span>\n`;
        output += `  <span class="term-dim">Context:</span> ${m.context}\n`;
        output += `  <span class="term-dim">Summary:</span> ${m.summary}\n`;
        output += `  <span class="term-dim">Tech:</span> <span class="term-cyan">${m.technologies.join(', ')}</span>\n`;
      });
      output += `\n<span class="term-dim">To view in-depth case study dossiers, explore Section 03 / MISSIONS on the interface.</span>`;
      this.appendLine(output);
    }

    cmdExperience() {
      const data = window.PORTFOLIO_DATA;
      if (!data || !data.experience) return;

      let output = `<span class="term-cyan term-bold">=== FIELD EXPERIENCE TIMELINE [04/EXPERIENCE] ===</span>\n`;
      data.experience.forEach(exp => {
        output += `\n<span class="term-yellow term-bold">${exp.role}</span> @ <span class="term-green">${exp.company}</span> <span class="term-dim">(${exp.period})</span>\n`;
        exp.highlights.forEach(h => {
          output += `  <span class="term-cyan">▹</span> ${h}\n`;
        });
      });
      this.appendLine(output);
    }

    cmdAchievements() {
      const data = window.PORTFOLIO_DATA;
      if (!data || !data.operations) return;

      let output = `<span class="term-cyan term-bold">=== OPERATIONS & CTF HONORS [05/OPERATIONS] ===</span>\n`;
      data.operations.forEach(op => {
        output += `\n<span class="term-yellow term-bold">${op.badge}</span> <span class="term-green">${op.title}</span> — ${op.event} <span class="term-dim">(${op.date})</span>\n`;
        output += `  <span class="term-dim">${op.desc}</span>\n`;
      });
      this.appendLine(output);
    }

    cmdTryHackMe() {
      const data = window.PORTFOLIO_DATA;
      const thm = data ? data.tryHackMe : {};
      const output = `
<span class="term-cyan term-bold">=== TRYHACKME OPERATIONS ===</span>
Handle:     <span class="term-green">${thm.username}</span>
Standing:   <span class="term-yellow term-bold">${thm.rank} ON PLATFORM</span>
Focus:      ${thm.focus}
Status:     Continuous offensive room solving & lab challenges
Profile:    <a href="${thm.url}" target="_blank" rel="noopener noreferrer" class="term-cyan term-underline">${thm.url}</a>
`;
      this.appendLine(output);
    }

    cmdGithub() {
      const url = 'https://github.com/Krish-legend13';
      this.appendLine(`Opening GitHub profile: <a href="${url}" target="_blank" rel="noopener noreferrer" class="term-cyan term-underline">${url}</a>`);
      window.open(url, '_blank');
    }

    cmdLinkedin() {
      const url = 'https://www.linkedin.com/in/g-murali-krishnan-74b0a0366';
      this.appendLine(`Opening LinkedIn profile: <a href="${url}" target="_blank" rel="noopener noreferrer" class="term-cyan term-underline">${url}</a>`);
      window.open(url, '_blank');
    }

    cmdResume() {
      this.appendLine(`<span class="term-green">[+] Launching in-site PDF resume preview modal...</span>`);
      if (window.openResumeModal) {
        window.openResumeModal();
      } else {
        const modal = document.getElementById('resume-modal');
        if (modal) modal.classList.add('active');
      }
    }

    cmdContact() {
      const data = window.PORTFOLIO_DATA;
      const op = data ? data.operator : {};
      const output = `
<span class="term-cyan term-bold">=== OPERATOR CONTACT ENDPOINTS ===</span>
Email:     <a href="mailto:${op.email}" class="term-green term-underline">${op.email}</a>
Phone:     <span class="term-cyan">${op.phone}</span>
Location:  ${op.location}
Status:    Open to VAPT, Offensive Security & Red Team opportunities
`;
      this.appendLine(output);
    }

    cmdClear() {
      this.outputEl.innerHTML = '';
    }

    cmdHistory() {
      if (this.history.length === 0) {
        this.appendLine(`<span class="term-dim">No commands in session history.</span>`);
        return;
      }
      let output = `<span class="term-cyan term-bold">COMMAND HISTORY:</span>\n`;
      this.history.forEach((cmd, idx) => {
        output += ` ${String(idx + 1).padStart(3, ' ')}  ${this.escapeHtml(cmd)}\n`;
      });
      this.appendLine(output);
    }

    cmdSudo(args) {
      if (args && (args[0] === 'whoami' || args[0] === 'su' || args[0] === '-i')) {
        this.appendLine(`<span class="term-red">Permission denied.</span> Nice try, operator. Privilege escalation telemetry logged.`);
      } else {
        this.appendLine(`<span class="term-red">murali is not in the sudoers file. This incident will be reported to the Red Team Lead.</span>`);
      }
    }

    cmdScan(args) {
      this.appendLine(`<span class="term-cyan">[*] Initializing reconnaissance scanner on portfolio perimeter...</span>`);
      this.appendLine(`<span class="term-dim">[1/3] Probing HTTP headers & TLS configuration...</span>`);
      setTimeout(() => {
        this.appendLine(`<span class="term-green">[+] HSTS, CSP, and X-Content-Type-Options: ACTIVE</span>`);
        this.appendLine(`<span class="term-dim">[2/3] Inspecting attack surfaces & parameters...</span>`);
      }, 300);
      setTimeout(() => {
        this.appendLine(`<span class="term-green">[+] Attack surface: surprisingly clean</span>`);
        this.appendLine(`<span class="term-green">[+] Vulnerabilities: 0 found. Hardened by VAPT standards.</span>`);
        this.appendLine(`<span class="term-yellow">Target verified resilient against unauthorized intrusion.</span>`);
        this.scrollToBottom();
      }, 700);
    }

    cmdCat(args) {
      if (!args || args.length === 0) {
        this.appendLine(`<span class="term-red">cat: missing operand</span>`);
        return;
      }
      const filename = args[0].toLowerCase();
      if (filename === 'flag.txt' || filename === 'flag') {
        this.appendLine(`<span class="term-yellow term-bold">FLAG{r3d_t34m_0p3r4t0r_gmk_2026}</span> — Excellent curiosity, operator!`);
      } else if (filename === 'creed.txt') {
        this.appendLine(`<span class="term-cyan term-bold">I BUILD. I BREAK. I SECURE.</span>`);
      } else {
        this.appendLine(`<span class="term-red">cat: ${this.escapeHtml(args[0])}: No such file or directory</span>`);
      }
    }

    cmdNmap() {
      const output = `
<span class="term-cyan">Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-09 15:55 IST</span>
Nmap scan report for portfolio.internal (127.0.0.1)
Host is up (0.00042s latency).
Not shown: 997 closed tcp ports (reset)
PORT    STATE SERVICE  VERSION
80/tcp  open  http     Secure Static Frontend
443/tcp open  ssl/http TLSv1.3 hardened
4444/tcp filtered krb524

Nmap done: 1 IP address (1 host up) scanned in 0.48 seconds
`;
      this.appendLine(output);
    }

    cmdMsf() {
      const output = `
<span class="term-red">
       =[ metasploit v6.3.50-dev                          ]
+ -- --=[ 2380 exploits - 1230 auxiliary - 415 post       ]
+ -- --=[ 1385 payloads - 46 encoders - 11 nops           ]
+ -- --=[ 9 evasion                                       ]
</span>
<span class="term-green">[+] VAPT Workstation ready. Type 'help' to navigate portfolio modules.</span>
`;
      this.appendLine(output);
    }
  }

  // Auto-initialize when DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.vaptTerminal = new VaptTerminal('terminal-lab-container');
  });
})();
