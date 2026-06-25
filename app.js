document.addEventListener('DOMContentLoaded', () => {
  // --- Tab Switcher Logic ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // --- Chart.js Visualization for Deep Learning ---
  const ctx = document.getElementById('trainingChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
        datasets: [
          {
            label: 'Training Loss',
            data: [2.0894, 1.7654, 1.4589, 1.2891, 1.1647],
            borderColor: '#a855f7',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            yAxisID: 'y'
          },
          {
            label: 'Validation Accuracy (%)',
            data: [28.80, 42.15, 53.60, 61.20, 67.62],
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f8fafc',
              font: { family: 'Inter', weight: 'bold' }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94a3b8', font: { family: 'Inter' } }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94a3b8' },
            title: { display: true, text: 'Loss', color: '#a855f7' }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#94a3b8' },
            title: { display: true, text: 'Accuracy (%)', color: '#06b6d4' }
          }
        }
      }
    });
  }

  // --- Merge Conflict Analyzer Simulation ---
  const mergeBtn = document.getElementById('runMergeBtn');
  if (mergeBtn) {
    mergeBtn.addEventListener('click', () => {
      const baseVal = document.getElementById('baseJson').value;
      const aVal = document.getElementById('branchAJson').value;
      const bVal = document.getElementById('branchBJson').value;
      const resultBox = document.getElementById('mergeResult');

      resultBox.style.display = 'block';
      resultBox.innerHTML = '';

      try {
        const base = JSON.parse(baseVal);
        const a = JSON.parse(aVal);
        const b = JSON.parse(bVal);

        const conflicts = [];
        const merged = {};

        // Collect all unique keys
        const allKeys = new Set([...Object.keys(base), ...Object.keys(a), ...Object.keys(b)]);

        for (const key of allKeys) {
          const valBase = base[key];
          const valA = a[key];
          const valB = b[key];

          if (valA === valB) {
            // Both changed to same thing or unchanged
            merged[key] = valA;
          } else if (valA !== valBase && valB === valBase) {
            // Only A changed
            merged[key] = valA;
          } else if (valB !== valBase && valA === valBase) {
            // Only B changed
            merged[key] = valB;
          } else if (valA !== valBase && valB !== valBase && valA !== valB) {
            // Conflict! Both changed differently
            conflicts.push({
              key: key,
              base: valBase,
              branchA: valA,
              branchB: valB
            });
            merged[key] = `<<<<<<< BRANCH_A\n  ${JSON.stringify(valA)}\n=======\n  ${JSON.stringify(valB)}\n>>>>>>> BRANCH_B`;
          } else {
            merged[key] = valBase;
          }
        }

        if (conflicts.length > 0) {
          let outputHtml = `<span style="color: #ef4444; font-weight: bold;">⚠️ Conflict Detected! Found ${conflicts.length} conflict(s):</span>\n\n`;
          conflicts.forEach(c => {
            outputHtml += `Conflict on key: <strong style="color: #f472b6;">"${c.key}"</strong>\n`;
            outputHtml += `  - Base value:     ${JSON.stringify(c.base)}\n`;
            outputHtml += `  - Branch A value: <span style="color: #c084fc;">${JSON.stringify(c.branchA)}</span>\n`;
            outputHtml += `  - Branch B value: <span style="color: #22d3ee;">${JSON.stringify(c.branchB)}</span>\n\n`;
          });
          outputHtml += `<strong>Resulting Merged Structure:</strong>\n${JSON.stringify(merged, null, 2)}`;
          resultBox.innerHTML = outputHtml;
        } else {
          resultBox.innerHTML = `<span style="color: #10b981; font-weight: bold;">✅ Clean Merge! No conflicts found.</span>\n\n<strong>Resulting Merged Structure:</strong>\n${JSON.stringify(merged, null, 2)}`;
        }
      } catch (err) {
        resultBox.innerHTML = `<span style="color: #ef4444;">❌ Error parsing JSON: ${err.message}</span>`;
      }
    });
  }

  // --- Key-Value Parser Simulation ---
  const parseBtn = document.getElementById('runParseBtn');
  if (parseBtn) {
    parseBtn.addEventListener('click', async () => {
      const kvText = document.getElementById('kvInput').value;
      const resultBox = document.getElementById('parseResult');

      resultBox.style.display = 'block';
      resultBox.innerHTML = '';

      try {
        const lines = kvText.split('\n');
        const obj = {};

        lines.forEach(line => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) return;

          const eqIndex = trimmed.indexOf('=');
          if (eqIndex === -1) return;

          const key = trimmed.slice(0, eqIndex).trim();
          const val = trimmed.slice(eqIndex + 1).trim();
          obj[key] = val;
        });

        const jsonStr = JSON.stringify(obj, null, 2);

        // Compute SHA-256 Hash using browser crypto API
        const msgBuffer = new TextEncoder().encode(jsonStr);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        let outputHtml = `<span style="color: #10b981; font-weight: bold;">✅ Parsing Succeeded!</span>\n\n`;
        outputHtml += `<strong>Parsed JSON:</strong>\n${jsonStr}\n\n`;
        outputHtml += `<strong>SHA-256 Hash representation:</strong>\n<span style="color: #06b6d4; font-weight: bold;">${hashHex}</span>`;

        resultBox.innerHTML = outputHtml;
      } catch (err) {
        resultBox.innerHTML = `<span style="color: #ef4444;">❌ Error: ${err.message}</span>`;
      }
    });
  }
});
