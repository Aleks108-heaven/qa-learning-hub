# Font licenses

The `.woff2` files in this folder are self-hosted copies of fonts served by Google Fonts, subset to Latin, Latin-Extended and Cyrillic (the scripts the six UI languages need). They are used so the app makes no third-party requests.

All four families are licensed under the **SIL Open Font License, Version 1.1** (https://openfontlicense.org), which permits redistribution and embedding with the license retained.

| Family | Copyright / source |
|--------|--------------------|
| Fraunces | Copyright 2020 The Fraunces Project Authors (https://github.com/undercasetype/Fraunces) |
| Source Serif 4 | Copyright 2014-2021 Adobe (http://www.adobe.com/), with Reserved Font Name "Source" (https://github.com/adobe-fonts/source-serif) |
| IBM Plex Sans | Copyright 2017 IBM Corp., with Reserved Font Name "Plex" (https://github.com/IBM/plex) |
| IBM Plex Mono | Copyright 2017 IBM Corp., with Reserved Font Name "Plex" (https://github.com/IBM/plex) |

`../fonts.css` holds the `@font-face` rules. File names are `Family-style-weight-subset.woff2`; Fraunces is a variable font, so one file serves its 500/600/700 weights.
