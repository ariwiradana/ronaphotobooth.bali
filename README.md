# RONA Photobooth Bali — Next.js landing page

A responsive, minimal cream / black / red landing page for RONA Photobooth Bali.

## Included
- Hero landing section
- Book Your Date button with a prefilled WhatsApp message
- View Our Pricelist section using the supplied pricelist image, with tap-to-enlarge modal
- On-page interactive gallery with filters for Photostrips, The Booth, and Real Moments
- Responsive mobile layout

## Before publishing
Open `app/page.tsx` and replace these constants:

```ts
const WHATSAPP_NUMBER = '62XXXXXXXXXX';
// Gallery previews are placeholders until you add real RONA photos.
```

- `WHATSAPP_NUMBER`: RONA's WhatsApp number, digits only, including country code 62. Example format: `6281234567890`.
- Replace the CSS-style gallery placeholders with RONA’s real event photos before publishing. The gallery is displayed directly on the website; no PDF or Google Drive link is required.

The pricelist artwork is located at `public/images/rona-pricelist.png`. Replace it with the final approved design if needed, keeping the same filename.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy
Push the project to a Git repository and import it into Vercel, or deploy to another Next.js-compatible host. Connect a custom domain when ready.
# ronaphotobooth.bali
