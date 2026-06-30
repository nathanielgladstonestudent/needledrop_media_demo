# Font Assets

This directory contains web font files (WOFF2 format) for the NeedleDrop Media application.

## Font Families

### Karla

A grotesque sans-serif typeface family from Google Fonts.

**Available Weights:**

- `Karla-Light.woff2` - Light (300)
- `Karla-Regular.woff2` - Regular (400)
- `Karla-Medium.woff2` - Medium (500)
- `Karla-SemiBold.woff2` - Semi Bold (600)
- `Karla-Bold.woff2` - Bold (700)

**License:** SIL Open Font License 1.1  
**Source:** https://github.com/googlefonts/karla  
**License File:** `licenses/Karla-OFL.txt`

### Unbounded

A variable sans-serif typeface from Google Fonts.

**Available Weights:**

- `Unbounded-Regular.woff2` - Regular (400)
- `Unbounded-Bold.woff2` - Bold (700)

**License:** SIL Open Font License 1.1  
**Source:** https://github.com/googlefonts/unbounded  
**License File:** `licenses/Unbounded-OFL.txt`

## Usage

To use these fonts in your application, add them to your CSS with `@font-face` declarations:

```css
@font-face {
  font-family: "Karla";
  src: url("/assets_fonts/Karla-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Unbounded";
  src: url("/assets_fonts/Unbounded-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## File Format

All fonts are provided in WOFF2 (Web Open Font Format 2.0) format, which offers:

- Superior compression compared to WOFF and TTF
- Broad browser support (all modern browsers)
- Optimized for web delivery

## License Information

Both font families are licensed under the SIL Open Font License, Version 1.1. This allows you to:

- Use the fonts freely in personal and commercial projects
- Modify and redistribute the fonts
- Bundle the fonts with software

See the individual license files in the `licenses/` directory for complete terms.
