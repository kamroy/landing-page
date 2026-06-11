# RYK Consulting — Landing Page

Site vitrine statique pour RYK Consulting, positionné sur le Platform
Engineering, le Developer Experience (DevEx), les plateformes internes
(IDP / Backstage), Kubernetes, GitLab CI/CD et le développement full-stack
(React, Spring Boot, Node.js, PostgreSQL).

🔗 **Démo en ligne** : https://kamroy.github.io/landing-page/

## Structure

- `index.html` — contenu et structure de la page
- `styles.css` — design system (couleurs, typographies, mise en page)
- `script.js` — animation de la console de diagnostic dans le hero

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Le site est servi via GitHub Pages depuis la branche `main` (racine du
dépôt). Tout push sur `main` met à jour automatiquement le site.
