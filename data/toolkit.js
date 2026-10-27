// QA Learning Hub — QA Toolkit reference data (English only: tool names, commands and rule names are the same in every language).
// Plain strings only. Text between backticks is rendered as <code>; everything is escaped by app.js before it reaches the DOM.
// Sources: language-pitfalls.md, quick-commands.md, security-checklist.md (the project's review material).
window.QAHUB_TOOLKIT = {
  pitfallsNote: "Review prompts for code audits, grouped by language. They are places to look, not findings: confirm each one in the source (file and line) before reporting it, and check whether the framework or a linter already prevents it. If the stack is not listed, apply All languages plus the closest family. Label anything reasoned but not demonstrated as inferred.",
  pitfalls: [
    { id: "all", name: "All languages", groups: [
      { label: "Checks", items: [
        "Hardcoded secrets; secrets in logs, error messages, URLs or committed configuration",
        "Missing input validation at trust boundaries (network, files, environment, IPC, deserialized data)",
        "Missing timeouts, retries with backoff, and cancellation on network and subprocess calls",
        "Swallowed or overly broad exception handling; errors that fail open",
        "Unbounded resource use (memory, CPU, file handles, connections, recursion depth, request size)",
        "Weak randomness for tokens, IDs and keys; weak or home-made cryptography",
        "Unpinned dependencies, missing lockfiles, unmaintained or typosquatted packages",
        "No tests for negative and boundary cases or for critical paths"
      ] }
    ] },
    { id: "python", name: "Python", groups: [
      { label: "Security", items: [
        "`eval`/`exec`; `pickle`, `marshal` or `yaml.load` on untrusted data (use `yaml.safe_load`)",
        "`subprocess` with `shell=True`; SQL built with string formatting",
        "`requests` with `verify=False`; `tempfile.mktemp`",
        "`random` for secrets (use `secrets`); XML parsing without `defusedxml`; Flask/Django `DEBUG=True`"
      ] },
      { label: "Reliability", items: [
        "Mutable default arguments; bare `except`",
        "`assert` used for validation (stripped under `-O`)",
        "Files and connections not closed (use `with`); `requests` without a timeout",
        "Blocking calls inside `async` code"
      ] },
      { label: "Tools", items: ["Bandit, Ruff, mypy, pip-audit, Semgrep"] }
    ] },
    { id: "javascript", name: "JavaScript / TypeScript", groups: [
      { label: "Security", items: [
        "Prototype pollution; `eval`, `new Function`, string timers",
        "`innerHTML`, `document.write` and `dangerouslySetInnerHTML` with untrusted data (XSS)",
        "`child_process.exec` with user input; open redirects; `Math.random` for tokens",
        "Secrets in client bundles or source maps; ReDoS from backtracking regexes; vulnerable transitive dependencies"
      ] },
      { label: "Reliability", items: [
        "Unhandled promise rejections; missing `await`; `==` coercion",
        "Shared mutable state across requests; leaked event listeners and timers",
        "`any` abuse and unchecked casts in TypeScript"
      ] },
      { label: "Tools", items: ["ESLint (with security rules), `tsc --strict`, `npm audit`, OSV-Scanner, Semgrep"] }
    ] },
    { id: "java", name: "Java (and Kotlin on the JVM)", groups: [
      { label: "Security", items: [
        "Deserialization (`ObjectInputStream`); XXE in XML parsers (disable DTDs and external entities)",
        "SQL built by concatenation; Log4Shell-class issues (untrusted data in log lookups, outdated logging libraries)",
        "Exposed Spring Boot actuator endpoints; expression-language (SpEL) injection",
        "CSRF protection disabled without a reason"
      ] },
      { label: "Reliability", items: [
        "Resources not closed (use try-with-resources); null handling",
        "Non-thread-safe shared state and unsynchronised collections; swallowed `InterruptedException`"
      ] },
      { label: "Tools", items: ["SpotBugs with Find Security Bugs, Error Prone, OWASP Dependency-Check, Semgrep"] }
    ] },
    { id: "csharp", name: "C# / .NET", groups: [
      { label: "Security", items: [
        "SQL built by concatenation; `BinaryFormatter` and other unsafe deserializers",
        "Weak crypto (MD5, SHA-1, DES); missing `[Authorize]` or policy gaps",
        "Model-binding over-posting; hardcoded connection strings"
      ] },
      { label: "Reliability", items: [
        "Missing `using`/`Dispose`; `async void`; `.Result` and `.Wait()` deadlocks",
        "Dependency-injection lifetime mismatches (a scoped service captured by a singleton)",
        "Nullable warnings ignored"
      ] },
      { label: "Tools", items: ["Roslyn/.NET analyzers with nullable reference types enabled, `dotnet list package --vulnerable`, Semgrep"] }
    ] },
    { id: "go", name: "Go", groups: [
      { label: "Security", items: [
        "`InsecureSkipVerify`; `math/rand` for secrets (use `crypto/rand`)",
        "SQL built by concatenation; path traversal on user-supplied paths; template injection"
      ] },
      { label: "Reliability", items: [
        "Ignored errors; goroutine leaks; data races",
        "Unbounded reads (`io.ReadAll` on untrusted bodies); HTTP clients and servers without timeouts",
        "`defer` inside loops; writes to a nil map"
      ] },
      { label: "Tools", items: ["`go vet`, staticcheck, gosec, `go test -race`, govulncheck"] }
    ] },
    { id: "php", name: "PHP", groups: [
      { label: "Security", items: [
        "`include`/`require` with user input (LFI/RFI); `unserialize` on untrusted data",
        "SQL built by concatenation; type juggling with loose `==`",
        "File-upload handling; session fixation; `display_errors` on in production"
      ] },
      { label: "Tools", items: ["PHPStan or Psalm, `composer audit`, Semgrep"] }
    ] },
    { id: "ruby", name: "Ruby", groups: [
      { label: "Security", items: [
        "`eval`, and `send`/`public_send` with user input",
        "Mass assignment (use strong parameters); `YAML.load` on untrusted data (use `YAML.safe_load`)",
        "Shell calls (backticks, `system`) with interpolated input; SQL fragments built from params"
      ] },
      { label: "Tools", items: ["Brakeman (Rails), RuboCop, bundler-audit"] }
    ] },
    { id: "rust", name: "Rust", groups: [
      { label: "Security", items: [
        "`unsafe` blocks without a documented invariant",
        "`unwrap`, `expect` and unchecked indexing that can panic on untrusted input (denial of service)",
        "Integer overflow that wraps in release builds"
      ] },
      { label: "Reliability", items: ["Blocking calls inside async code; unbounded channels and queues"] },
      { label: "Tools", items: ["Clippy, cargo-audit, cargo-deny, Miri (for `unsafe` code)"] }
    ] },
    { id: "cpp", name: "C / C++", groups: [
      { label: "Security", items: [
        "Buffer overflows (`strcpy`, `gets`, unchecked indexing); use-after-free and double free",
        "Format-string bugs; integer overflow before allocation; uninitialised memory",
        "Time-of-check to time-of-use races on files"
      ] },
      { label: "Reliability", items: ["Undefined behaviour; leaks; data races; ignored return values"] },
      { label: "Tools", items: ["Compiler warnings (`-Wall -Wextra`), clang-tidy, cppcheck, AddressSanitizer and UBSan, fuzzing (libFuzzer, AFL++)"] }
    ] },
    { id: "sql", name: "SQL and data access", groups: [
      { label: "Security", items: [
        "Dynamic SQL built by concatenation; application accounts with owner or DBA rights",
        "Sensitive columns unencrypted or unmasked in non-production copies"
      ] },
      { label: "Reliability", items: [
        "Missing transactions around multi-step writes; N+1 queries",
        "Missing indexes on filter and join columns; implicit type conversions that defeat indexes",
        "No migration rollback plan"
      ] },
      { label: "Tools", items: ["SQLFluff, the database's `EXPLAIN` plans"] }
    ] },
    { id: "shell", name: "Bash and PowerShell", groups: [
      { label: "Bash", items: [
        "Unquoted variables; missing `set -euo pipefail`; `curl | sh`; `eval`",
        "Parsing `ls` output; `rm -rf` with an unchecked variable",
        "Predictable or world-writable temp files (use `mktemp`)"
      ] },
      { label: "PowerShell", items: [
        "`Invoke-Expression`; plaintext secrets and `-AsPlainText` conversions",
        "`-ExecutionPolicy Bypass` as a habit; missing `-ErrorAction Stop` with `try`/`catch`",
        "Unvalidated path input"
      ] },
      { label: "Tools", items: ["ShellCheck, PSScriptAnalyzer"] }
    ] },
    { id: "iac", name: "Infrastructure as code and CI", groups: [
      { label: "Dockerfile", items: [
        "Running as root; `latest` or unpinned base images",
        "Secrets in layers or build arguments; `curl | sh`; `ADD` from remote URLs"
      ] },
      { label: "Terraform and cloud", items: [
        "Public buckets; wildcard IAM; secrets in state or variable files",
        "Unencrypted storage; open security groups"
      ] },
      { label: "GitHub Actions and other CI", items: [
        "Unpinned third-party actions (pin to a commit SHA); `pull_request_target` running untrusted code",
        "Untrusted `${{ github.event.* }}` values interpolated into `run:` scripts",
        "Over-broad `GITHUB_TOKEN` permissions; secrets echoed to logs"
      ] },
      { label: "Tools", items: ["hadolint, Trivy, Checkov, actionlint"] }
    ] }
  ],

  commandsBefore: [
    "Some commands return partial data without elevated rights (root, `sudo` or an administrator shell). Record the privilege level you ran with, and treat missing output as \"not checked\", not as healthy.",
    "A few commands contact the network (`softwareupdate -l`, package-index checks). They stay read-only for the system but make outbound requests.",
    "Output can contain host names, user names, paths and sometimes secrets. Review and redact it before sharing.",
    "Run the commands one at a time, so a failure in one does not hide the others."
  ],
  commandsAfter: [
    "A failed unit, a stopped automatic service or a non-zero exit status is a lead, not a verdict. Record the command, the real output and your privilege level, and weigh a benign explanation before rating it.",
    "Rate issues by impact (1-5) times likelihood (1-5): Critical 20-25, High 12-19, Medium 6-11, Low 2-5, Info 0-1. Report what you could not check.",
    "Signs of active compromise (unknown persistence, unexplained outbound connections): preserve the evidence, isolate the host and involve incident response. Do not clean up."
  ],
  commands: [
    { id: "linux", name: "Linux", items: [
      { cmd: "systemctl --failed", note: "failed units" },
      { cmd: "ps aux --sort=-%cpu | head -10", note: "top CPU consumers" },
      { cmd: "free -h", note: "memory" },
      { cmd: "df -h", note: "disk space" },
      { cmd: "ss -tulpn", note: "listening sockets (run with sudo to see owning processes)" },
      { cmd: "sudo ufw status", note: "firewall; without ufw use `sudo nft list ruleset` or `sudo iptables -S`" },
      { cmd: "journalctl -p err --since \"24 hours ago\" --no-pager | tail -50", note: "recent errors" },
      { cmd: "apt list --upgradable 2>/dev/null | head", note: "Debian/Ubuntu; on RHEL/Fedora use `dnf check-update`" },
      { cmd: "python3 --version", note: "runtimes in use: check for end-of-life versions" },
      { cmd: "node -v", note: "" }
    ] },
    { id: "windows", name: "Windows (PowerShell)", items: [
      { cmd: "Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic' }", note: "stopped automatic services" },
      { cmd: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, Id, CPU", note: "top CPU consumers" },
      { cmd: "Get-PSDrive -PSProvider FileSystem", note: "free space per drive" },
      { cmd: "Get-NetTCPConnection -State Listen | Sort-Object LocalPort", note: "listening ports" },
      { cmd: "Get-NetFirewallProfile | Select-Object Name, Enabled", note: "firewall profiles" },
      { cmd: "Get-MpComputerStatus", note: "Microsoft Defender; may need an elevated shell, absent if another AV is primary" },
      { cmd: "Get-WinEvent -FilterHashtable @{ LogName = 'System','Application'; Level = 1,2; StartTime = (Get-Date).AddDays(-1) } -MaxEvents 50", note: "recent errors" }
    ], footnote: "The Security event log needs an elevated shell and is not queried here." },
    { id: "macos", name: "macOS", items: [
      { cmd: "launchctl list | awk '$2 != 0'", note: "jobs whose last exit status was non-zero" },
      { cmd: "ps aux -r | head -10", note: "top CPU consumers" },
      { cmd: "df -h", note: "disk space" },
      { cmd: "lsof -iTCP -sTCP:LISTEN -n -P", note: "listening TCP sockets" },
      { cmd: "/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate", note: "application firewall" },
      { cmd: "csrutil status", note: "System Integrity Protection" },
      { cmd: "spctl --status", note: "Gatekeeper" },
      { cmd: "softwareupdate -l", note: "pending updates (contacts Apple's servers)" },
      { cmd: "log show --last 24h --predicate 'messageType == error' | tail -50", note: "can be slow; try --last 1h first" }
    ] }
  ],

  checklistReporting: [
    "Give the checklist item number, severity, evidence, confidence and the fix.",
    "Severity is impact (1-5) times likelihood (1-5): Critical 20-25, High 12-19, Medium 6-11, Low 2-5, Info 0-1. Raise likelihood for internet exposure, lower it for localhost-only exposure or a verified compensating control, and say which adjustment you applied.",
    "Evidence is the command and its real output, trimmed, with secrets masked.",
    "Confidence is High (observed directly), Medium (strong indicators, a benign explanation not fully excluded) or Low (weak indicator, needs verification). It does not change severity. Anything you did not examine goes under \"Not checked\", not in the findings.",
    "Fix is the exact change, its risk, how to roll it back and how to verify it. Suggest it; do not execute it."
  ],
  checklist: [
    { n: 1, title: "Patching", look: "Pending OS and application updates; end-of-life OS or runtimes; known CVEs for installed versions (cross-check vendor advisories, NVD and `osv-scanner`).", cmds: [
      "mac: `softwareupdate -l`", "lin: `apt list --upgradable` or `dnf check-update`", "win: Windows Update status; `Get-HotFix` lists installed updates only, not pending ones" ] },
    { n: 2, title: "Network exposure", look: "Services listening on 0.0.0.0 that should be local; unexpected ports; unauthenticated admin interfaces (databases, Docker API, Redis, Jupyter).", cmds: [
      "lin: `ss -tulpn`", "mac: `lsof -iTCP -sTCP:LISTEN -n -P`; Sharing settings (Remote Login, Screen Sharing, File Sharing)", "win: `Get-NetTCPConnection -State Listen`" ] },
    { n: 3, title: "Authentication", look: "Default or empty credentials, password SSH, root login, shared accounts.", cmds: [
      "lin: `sshd -T | grep -Ei 'permitrootlogin|passwordauthentication'` (needs root)", "mac: automatic login on, no password after screen lock, a shared admin account", "win: accounts with blank passwords, a shared local administrator account" ] },
    { n: 4, title: "Privilege", look: "Broad sudo rights; services running as root or SYSTEM unnecessarily.", cmds: [
      "lin/mac: SUID/SGID oddities, writable service binaries or paths, `NOPASSWD` in sudoers", "mac: unexpected helpers in `/Library/PrivilegedHelperTools`", "win: unquoted service paths" ] },
    { n: 5, title: "Persistence", look: "Unfamiliar entries that run at login or boot; new `authorized_keys`.", cmds: [
      "mac: LaunchAgents and LaunchDaemons, Login Items and Background Items (`sfltool dumpbtm`), cron", "lin: cron, systemd timers (`systemctl list-timers`)", "win: scheduled tasks (`Get-ScheduledTask`), Run keys, startup commands" ] },
    { n: 6, title: "Integrity", look: "Unsigned, ad-hoc signed or unusual-location binaries; hash mismatches against the package manager.", cmds: [
      "mac: `codesign --verify --deep --strict`, `spctl -a -vv`", "lin: `debsums`, `rpm -V`", "win: `Get-AuthenticodeSignature`, `sfc /verifyonly`" ] },
    { n: 7, title: "Protection controls", look: "Firewall, antivirus or EDR, disk encryption.", cmds: [
      "mac: SIP (`csrutil status`), Gatekeeper (`spctl --status`), FileVault (`fdesetup status`), Apple silicon startup security", "lin: AppArmor or SELinux, Secure Boot, firewall status (`ufw status`, `nft list ruleset`)", "win: BitLocker (`Get-BitLockerVolume`, elevated), Defender (`Get-MpComputerStatus`), firewall profiles (`Get-NetFirewallProfile`)" ] },
    { n: 8, title: "Secrets", look: "Plaintext credentials in environment variables, configuration files, `.env` files, shell history and git history. A secret scanner such as gitleaks can cover repositories. Report the location only and mask the values.", cmds: [] },
    { n: 9, title: "Logging", look: "Auditing enabled, log rotation, retention long enough to investigate, and exposure to tampering.", cmds: [
      "lin: journald and auditd settings, logrotate configuration", "win: audit policy (`auditpol /get /category:*`, elevated), event log sizes", "mac: unified logging; whether logs are forwarded off the host" ] },
    { n: 10, title: "Supply chain", look: "Unpinned dependencies, missing lockfiles, untrusted repositories, PPAs and taps, typosquatted packages, installers that pipe `curl` into a shell, unsigned or un-notarized downloads.", cmds: [] },
    { n: 11, title: "Privacy permissions (mac)", look: "Full Disk Access, Accessibility, Screen Recording and Input Monitoring granted to apps that do not need them (System Settings > Privacy & Security).", cmds: [] },
    { n: 12, title: "Backups and recovery", look: "Backups exist, are encrypted, are stored apart from the host, and a restore has been tested.", cmds: [] },
    { n: 13, title: "Containers and virtualization", look: "The Docker socket (`/var/run/docker.sock`) mounted into containers or the daemon exposed on TCP; privileged containers; containers running as root; unpinned or `latest` images; secrets in environment variables or image layers; no resource limits.", cmds: [
      "any platform with Docker: `docker ps`, and `docker inspect --format '{{.Name}} privileged={{.HostConfig.Privileged}} user={{.Config.User}}' <container>`" ] }
  ]
};
