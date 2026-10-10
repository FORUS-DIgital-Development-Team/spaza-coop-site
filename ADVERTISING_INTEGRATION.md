# Spaza advertising preparation

The public homepage has a disabled contextual display slot after the main content and before the footer. The existing catalogue, supplier offers and service dialogs remain unchanged. No advertisement request or SDK load occurs with the committed configuration.

The bootstrap requires `data-enabled="true"`, a verified placement ID, the exact browser origin `https://spaza.coop` and root path `/`. The upstream `spaza.forus.digital` and every other route are excluded. Cloudflare's existing proxy supplies the upstream files while the browser retains the .coop origin; the proxy itself is unchanged.

The vendored FORUS SDK collapses no-fill/errors and measures only loaded, visible adverts. A host visibility callback suppresses impressions, viewability and clicks while either service/leaflet dialog is open. Page hiding destroys the slot and browser back/forward restoration creates a fresh controller. No balance, member, product basket, order or contact data is sent; storage and personalisation are denied.

Activation needs publisher ownership, DNS verification, placement review, appropriate consent text, and filled-banner browser acceptance. The current cloud integration profile deliberately refuses ad decisions/accounting pending real provider acceptance; flags alone cannot enable delivery. Do not switch that database to demo mode or import synthetic balances. Use an approved isolated test environment for filled-banner acceptance before changing any host flag.

Run `node --test tests/advertising.test.cjs` and JavaScript syntax checks before merging. GitHub Pages publishes main automatically; this branch is a draft and has not been deployed. Confirm no-fill, image failure, expiry, visibility, dialogs, mobile layout and back/forward navigation before activation. Paid delivery, MHX purchases and revenue allocations remain separate release gates.
