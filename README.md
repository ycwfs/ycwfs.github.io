# wfs — Personal Homepage

Personal academic homepage built on the GitHub Pages Minimal theme, with English and Chinese versions.

Website: https://ycwfs.github.io/

## Editing

- `index.html`: English content, publications, honors, and contact details.
- `assets/language.js`: Chinese translations, in the same order as matching English elements.
- `assets/custom.css`: layout, typography, colors, and responsive portrait sizes.
- `assets/theme.js`: appearance controls and saved theme preference.
- `assets/portrait.jpg`: displayed portrait; `assets/big-head.jpg` is the original photo.

The page opens in English. Use the language buttons to switch to Chinese.
Appearance defaults to Auto, following the browser's light/dark preference and updating when it changes. Select Light or Dark to override it; the choice is remembered on this browser. Select Auto to follow the browser again. With JavaScript disabled, the page still follows the browser preference. Printing uses the light palette.
Open `index.html` locally to preview. No build step or package installation is required.

## Publishing

### Visitor statistics

The sidebar uses a single [Flag Counter map](https://info.flagcounter.com/0MvF) (counter ID `0MvF`). Its image shows pageviews and visitor countries; clicking it opens country counts and visit history. Pageviews are not unique people: the provider counts repeat visitors once per 24 hours by default and counts each image load as a pageview. Images can lag the statistics page by about five minutes. Statistics begin when the counter is created, including the initial setup visit; past website traffic cannot be recovered.

`assets/visitors.js` loads the image only on `ycwfs.github.io`, avoiding local preview traffic. Language and theme changes do not reload it. Failure shows a link to statistics instead of a broken image. The provider's map retains its original colors in both themes; the surrounding panel follows the site theme.

The image sends the visitor's IP address, browser information, and referring origin to Flag Counter for country-level estimation. It requires neither GPS permission nor tracking cookies according to the provider. See its [privacy policy](https://www.flagcounter.com/privacy.html) and [terms](https://www.flagcounter.com/terms.html). Free counters may be removed after 30 days without a new visitor. Keep this ID when editing styles to retain history; an optional management email was not supplied during setup.

GitHub Pages deploys the `main` branch from `/ (root)`. Commit and push changes to update the live website.

## Credits

Based on [GitHub Pages Minimal](https://github.com/pages-themes/minimal), licensed under CC0 1.0. See `assets/MINIMAL-LICENSE.txt` for the template license.
