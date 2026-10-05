# Aybüke Çalık Yüksel — Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript.

## Local preview

From this directory, run:

```sh
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, and select **main** and **/(root)**. Save the setting. Future pushes to main automatically update the published site.

The `.nojekyll` file makes GitHub Pages serve the site as plain static files. All asset paths are relative, so the site also works at a repository subpath. No build step or dependencies are required.

## Editing

- `index.html`: content and section layout
- `styles.css`: colors, responsive layouts, and animations
- `script.js`: menus, category filters, and email draft handling
- `assets/images/`: profile and project visuals

The contact form opens a draft in the visitor's email app; it does not send messages through a server. Project detail buttons currently link to the contact section until dedicated case studies are added.
