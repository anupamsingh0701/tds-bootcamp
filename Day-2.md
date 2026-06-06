---
---

--- Before Day-2 ---
I already knew what environment variables were in a vague sense — like I had seen `PATH` mentioned in error messages before but never really understood what it meant. I had used `cd` and `ls` a little but mostly relied on file explorers. Never touched `grep` or `nano` before.
---

## Day-2 Checklist

- [x] I understand what `PATH` is and why commands like `python` work without full paths
- [x] I can navigate the filesystem without clicking — using `cd`, `ls`, and `pwd` only
- [x] I can read, search, and inspect files using `cat`, `head`, `tail`, `grep`, and `wc`
- [x] I can edit a file using `nano` (open, edit, save, exit)
- [x] I understand pipes (`|`) and redirection (`>`, `>>`, `2>`) and can chain commands
- [x] I can set an environment variable in `.bashrc` and apply it with `source ~/.bashrc`
- [x] I know the difference between `export VAR=value` (available to child processes) and just `VAR=value` (shell-local)

--- After Day-2 ---
I learned these things as well, apart from the checklist ...
The concept of `PATH` finally clicked — the shell just walks through each directory listed in `PATH` and looks for an executable with the matching name. That explains why installing something in the wrong place makes it "not found". I also learned that `2>` redirects stderr separately from stdout, which is really useful for debugging scripts silently. The pipe `|` chaining was mind-blowing — combining `grep`, `wc -l`, and `sort` in one line feels like a superpower. Also `tail -f` for live log monitoring is something I'll definitely use again.
---

--- Feedback (Suggestions for the TDS Team) ---
This is my feedback ...
Day-2 was a big step up from Day-1 but still very approachable. The hands-on exercises with pipes and redirection were the highlight — doing it yourself is so much better than just reading about it. One suggestion: it would be great to have a small mini-challenge at the end of each day (like "find the 5 most common words in a file using only shell commands") to put everything together. That would make the learning stick even more!
---

---
---

You can write your personal notes here; they will not be parsed and are for your own reference.
- `echo $PATH` prints all directories the shell searches for commands
- Use `which python` to see exactly which binary is being used
- `grep -r "text" .` searches recursively in current directory
- `wc -l filename` counts lines; `wc -w` counts words
- `nano` shortcuts: Ctrl+O to save, Ctrl+X to exit, Ctrl+W to search
- `source ~/.bashrc` reloads config without restarting terminal
- `export` makes a variable visible to child processes (like sub-shells and scripts)
- Pipe trick: `cat file.txt | sort | uniq -c | sort -rn | head -10` — top 10 most frequent lines
