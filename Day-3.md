---
---

--- Before Day-3 ---
I already knew a bit about virtual environments from using `venv` once or twice before, but I always found them confusing and ended up using `pip install` globally most of the time. I had heard of `pyproject.toml` but had no idea what it was for. Never used `uv` before at all.
---

## Day-3 Checklist

- [x] I can run a Python script using `uv run script.py` without setting up a local virtual environment
- [x] I know where the temporary virtual environment is created when running the `uv add --script script.py pandas` command followed by `uv run script.py`
- [x] I can create a new Python project using `uv init` and understand what `pyproject.toml` is used for
- [x] I can add a dependency (e.g., `requests`) using `uv add` and see it reflected in the lockfile
- [x] I can create a traditional virtual environment using `uv venv` and know when to use it
- [x] I understand why installing packages globally with `pip install` is a bad habit
- [x] I can open a project in VS Code, select the correct Python interpreter, and run code from the integrated terminal
- [x] I know the difference between a `.py` script and a `.ipynb` notebook, and when to use each

--- After Day-3 ---
I learned these things as well, apart from the checklist ...
The biggest surprise was `uv` — it's dramatically faster than `pip` and handles everything automatically. I didn't know that `uv run script.py` creates a temporary virtual environment on the fly, which means you never have to manually activate anything for quick scripts. The `pyproject.toml` file now makes sense to me — it's the single source of truth for project metadata, dependencies, and tooling config. I also finally understood why global `pip install` is dangerous: it can break other projects that depend on different versions of the same package. The lockfile concept was new to me too — it pins exact versions so the project is fully reproducible anywhere. Selecting the right Python interpreter in VS Code (from the `.venv` folder) is something I'll always remember to do now.
---

--- Feedback (Suggestions for the TDS Team) ---
This is my feedback ...
Day-3 felt like a real upgrade in workflow — `uv` is genuinely impressive and I can see myself using it daily. It would be helpful to have a side-by-side comparison table of `pip + venv` vs `uv` commands (e.g., `pip install X` → `uv add X`) so students coming from the traditional workflow can map things across easily. Also, a short note on when to use `.py` scripts vs `.ipynb` notebooks in real projects would be a great addition — the tradeoffs aren't always obvious for beginners.
---

---
---

You can write your personal notes here; they will not be parsed and are for your own reference.
- `uv run script.py` — runs script in an isolated temp env, no setup needed
- `uv add --script script.py pandas` — adds inline dependency metadata to the script
- `uv init myproject` — scaffolds a new project with `pyproject.toml`, `.venv`, etc.
- `uv add requests` — adds dependency + updates `uv.lock`
- `uv venv` — creates a traditional `.venv` folder (useful for VS Code interpreter selection)
- Always pick the `.venv/bin/python` interpreter in VS Code (Ctrl+Shift+P → "Python: Select Interpreter")
- `.py` = scripts, automation, production code; `.ipynb` = exploration, visualisation, teaching
- `uv` stores temp envs in a cache directory under `~/.cache/uv`
