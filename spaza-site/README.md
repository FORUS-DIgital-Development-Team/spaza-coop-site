# spaza.coop

A responsive, public promotional website for South African spaza shops. The full FORUS technology platform is a later phase.

## Local preview

Run `node serve.cjs`, then open `http://127.0.0.1:4173`.

The deployable website is in `dist/`. No build step or npm packages are required.

## Implemented

- Four featured offers from the user-supplied Boxer KwaZulu-Natal flyer, with pack sizes, prices in rand and calculated unit prices.
- Promotional brand story and FORUS ecosystem vision.
- Approved FORUS Digital Cooperative colour logo supplied by the project team, shown in the hero and footer.
- Original supplier leaflet and links to Boxer's official Bulk Online information.
- Planned finance, devices/software, payments and last-mile delivery service information.
- Bulklink sourcing introduction, mobile layouts, keyboard-accessible dialogs and descriptive metadata.

## Source and pricing

The supplied flyer states validity from 21 September to 21 October 2026 at KwaZulu-Natal stores. It is preserved at `dist/assets/boxer-kzn-offers.png`. Product imagery is displayed from that supplied image. Prices are references, not a live feed; stock availability and delivery costs are not available. Boxer's official page states a R3,000 minimum and collection from a selected store: https://www.boxer.co.za/money-kiosk/boxerbulkonline

The shopkeeper photo is AI-generated illustrative brand imagery, not a customer testimonial.

## Before a public commercial launch

For the later transaction platform, connect Bulklink and authorised supplier stock/pricing feeds, an order service, payment processing, delivery coverage and quoting, and approved finance/device providers. Finalise terms, privacy information and operational contacts. No orders or applications are submitted, payments taken, or personal information collected by this promotional version.

## Hosting

GitHub Pages deploys `spaza-site/dist` using the repository's `.github/workflows/deploy.yml` workflow. The staging address is `https://spaza.forus.digital/`. Set the repository's Pages source to GitHub Actions and its custom domain to `spaza.forus.digital`.

Cloudflare DNS record: CNAME `spaza` → `forus-digital-development-team.github.io` (DNS only). Set the custom domain in GitHub before adding this record. Enable HTTPS after GitHub issues its certificate.

When the spaza.coop domain is registered, update the GitHub Pages custom domain, DNS, `dist/CNAME`, canonical and Open Graph URLs, robots.txt and sitemap.xml.
