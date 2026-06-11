const consoleLines = [
  { text: "> DÉMARRAGE DE L'AUDIT PLATEFORME" },
  { text: '> SCAN        clusters K8s ....... 8' },
  { text: '> SCAN        pipelines GitLab ... 64' },
  { text: '> CARTO       catalogue Backstage  212 services' },
  { text: '> ALERTE      golden paths ....... 70% absents', cls: 'line-flag' },
  { text: '> ALERTE      lead time deploy ... 4,2 j', cls: 'line-flag' },
  { text: '> RÉSULTAT    plan DevEx .......... PRÊT', cls: 'line-output' },
];

function renderStatic(body) {
  body.innerHTML = consoleLines
    .map(line => `<span${line.cls ? ` class="${line.cls}"` : ''}>${line.text}</span>`)
    .join('\n');
}

function typeConsole(body) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    renderStatic(body);
    return;
  }

  body.innerHTML = '';
  const cursor = document.createElement('span');
  cursor.className = 'console-cursor';

  let lineIndex = 0;
  let charIndex = 0;

  function step() {
    if (lineIndex >= consoleLines.length) {
      body.appendChild(cursor);
      return;
    }

    const line = consoleLines[lineIndex];
    let span = body.querySelector(`[data-line="${lineIndex}"]`);
    if (!span) {
      span = document.createElement('span');
      span.dataset.line = String(lineIndex);
      if (line.cls) span.className = line.cls;
      body.appendChild(span);
    }

    charIndex += 1;
    span.textContent = line.text.slice(0, charIndex);

    if (charIndex < line.text.length) {
      setTimeout(step, 14);
    } else {
      body.appendChild(document.createTextNode('\n'));
      lineIndex += 1;
      charIndex = 0;
      setTimeout(step, 220);
    }
  }

  step();
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('console-body');
  if (!body) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeConsole(body);
        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(body);
});
