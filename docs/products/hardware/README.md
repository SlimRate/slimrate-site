# Hardware Product Pages

**STATUS: MIGRATED TO ROOT DIRECTORY**

All hardware product pages have been migrated to the root `docs/` directory to avoid path conflicts and simplify URL structure.

## New Location

Product pages are now located at:
- `docs/sr-falcon.html`
- `docs/sr-swan.html`
- `docs/sr155-duo.html`
- `docs/sr155-solo.html`
- `docs/a35.html`
- `docs/a920.html`
- `docs/sr-trp1.html`
- `docs/sr-ds1.html`
- `docs/sr-wlhs1.html`
- `docs/sr-whs1.html`
- `docs/digital-scale.html`
- `docs/aiscale-pos-s625.html`
- `docs/aiscale-label-printing-s130.html`
- `docs/sr-410.html`

## URL Structure

New URLs:
- `https://slimrate.com/sr-falcon.html`
- `https://slimrate.com/a35.html`
- etc.

## Components Used

All product pages use:
- Standard FAQ component from `components/product_faq_standard.js`
- Product data from `data/product-pages.js`
- Shared components: hero, details, banner, features grid
- Responsive product page CSS

## Migration Details

- **Date**: November 4, 2025
- **Reason**: Avoid path conflicts, simplify URLs
- **Changes**: Updated all asset paths from `../../` to `./`
- **Status**: ✅ Complete

## Product Information Levels

### Maximum Information (Tablets - 4 products)
Hero + Details + Banner + Features + Specs + FAQ

### Medium Information (Terminals - 2 products)
Hero + Details + Features + FAQ

### Minimum Information (Peripherals - 8 products)
Hero + Features + FAQ
