---
---

--- Before Day-5 ---
I already knew the basic idea of Git — that it tracks changes and lets you go back to older versions. I had used `git add`, `git commit`, and `git push` before but mostly by copying commands from tutorials without really understanding what was happening. I had never set up SSH keys or used tags.
---

## Day-5 Checklist

- [x] I have set up the basic Git configuration using `git config --global user.name "Your Name"`, `git config --global user.email "your.email@example.com"`, and set the default branch as main using `git config --global init.defaultBranch main`
- [x] I know GitHub allows only one user account per person, so I have merged my accounts (IITM and personal) into a single unified account
- [x] I understand the three states of a file in Git: working tree → staging → committed
- [x] I can run the daily workflow commands `git status`, `git diff`, and `git log` and know what each shows
- [x] I know how `.gitignore` works and how to use it to ignore files and folders that should not be pushed to the remote repository (e.g., `venv`, `__pycache__`, `.env`)
- [x] I can make a commit: `git add` → `git commit -m "message"` → `git push`
- [x] I know what `origin` and `main` are and can explain them in one sentence each
- [x] I can set up SSH key authentication and push to GitHub without entering a password
- [x] I can create an annotated tag (`git tag -a v0.1.0`) and push it to GitHub
- [x] I can write a meaningful commit message (not "fixed stuff" or "final.py")

--- After Day-5 ---
I learned these things as well, apart from the checklist ...
The three-state model (working tree → staging → committed) finally made Git feel logical instead of magical. I now understand why `git add` exists as a separate step — it lets you carefully choose exactly which changes go into a commit, rather than blindly committing everything. Setting up SSH keys was easier than I expected, and never having to type a password again is a huge quality-of-life improvement. I also learned that `origin` is just an alias for the remote URL, and `main` is just a branch name — both are conventions, not hard requirements. Annotated tags were new to me — they're like named checkpoints with a message, which is much more useful than lightweight tags for marking releases.
---

--- Feedback (Suggestions for the TDS Team) ---
This is my feedback ...
Day-5 was probably the most practically important day so far — Git is something every developer uses daily. The explanation of the three states was excellent and should be taught even earlier. One suggestion: a visual diagram of the Git workflow (working tree → staging → local repo → remote repo) would really help visual learners. Also, a short section on how to undo mistakes (like `git restore`, `git reset`, and `git revert`) would be incredibly valuable — knowing how to fix errors is just as important as knowing how to commit correctly.
---

---
---

You can write your personal notes here; they will not be parsed and are for your own reference.
- `git config --global user.name "Name"` and `user.email` — set once, applies to all repos
- Three states: **working tree** (edited), **staging** (git add), **committed** (git commit)
- `git status` — what's changed; `git diff` — exact line changes; `git log --oneline` — compact history
- `.gitignore` patterns: `venv/`, `__pycache__/`, `.env`, `*.pyc`, `node_modules/`
- `origin` = the remote repo URL alias; `main` = the primary branch name
- SSH setup: `ssh-keygen -t ed25519 -C "email"` → add public key to GitHub Settings → SSH Keys
- `git tag -a v0.1.0 -m "First release"` → `git push origin v0.1.0`
- Good commit message format: `<type>: <short summary>` e.g. `feat: add user login endpoint`
- `git log --oneline --graph --all` — beautiful branch visualisation
