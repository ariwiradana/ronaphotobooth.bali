"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: Replace these with RONA's real WhatsApp number and gallery PDF URL.
// WhatsApp number format: country code + number, digits only, no + or spaces.
const WHATSAPP_NUMBER = "6281246768627";
// Add RONA's real event photos to public/images/gallery/ and update the gallery items below.

function whatsappLink() {
  const message = [
    "Halo RONA Photobooth! 👋🏻",
    "",
    "Saya tertarik untuk menggunakan jasa photobooth RONA.",
    "Boleh minta informasi lebih lanjut mengenai paket dan booking-nya?",
    "",
    "Terima kasih!",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [showPricelist, setShowPricelist] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("All");

  const galleryItems = [
    {
      title: "Photostrip moments",
      category: "Photostrips",
      style: "gallery-photo photo-card-one",
      note: "A keepsake to take home",
    },
    {
      title: "The classic strip",
      category: "Photostrips",
      style: "gallery-photo photo-card-two",
      note: "Three frames, one memory",
    },
    {
      title: "The booth setup",
      category: "The Booth",
      style: "gallery-photo photo-card-three",
      note: "Made for your special day",
    },
    {
      title: "Friends & fun",
      category: "Real Moments",
      style: "gallery-photo photo-card-four",
      note: "Little moments, big smiles",
    },
    {
      title: "Prints to keep",
      category: "Photostrips",
      style: "gallery-photo photo-card-five",
      note: "Personalised for your event",
    },
    {
      title: "Behind the booth",
      category: "The Booth",
      style: "gallery-photo photo-card-six",
      note: "A little extra fun at your event",
    },
  ];
  const visibleGallery =
    galleryFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter);

  return (
    <main>
      <header className="topbar">
        <Link
          href="#home"
          className="wordmark"
          aria-label="RONA Photobooth home"
        >
          {/* Official RONA logo supplied by the owner */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            className="rona-logo"
            src="/images/logo.png"
            alt="RONA Photobooth logo"
            width={400}
            height={400}
            priority
          />
        </Link>
        <span className="top-note">
          GOOD PEOPLE
          <br />
          GREAT MEMORIES.
        </span>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> PHOTObooth FOR YOUR SPECIAL DAY
          </p>
          <h1>
            Make memories.
            <br />
            <em>Keep them forever.</em>
          </h1>
          <p className="intro">
            Photobooth for weddings, parties & special events in Bali.
          </p>
          <div className="hero-actions">
            <Link
              className="button button-red"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              Book your date <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-outline" href="#pricelist">
              View our pricelist <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <p className="microcopy">A little moment, a memory to take home.</p>
        </div>
        <div
          className="hero-art"
          aria-label="RONA photobooth brand illustration"
        >
          <div className="art-stamp">
            GOOD
            <br />
            VIBES
            <br />
            <b>ONLY.</b>
          </div>
          <div className="photo-frame">
            <div className="photo photo-one">
              <span>SMILE</span>
            </div>
            <div className="photo photo-two">
              <span>LAUGH</span>
            </div>
            <div className="photo photo-three">
              <span>REPEAT</span>
            </div>
            <div className="strip-brand">
              RONA <small>PHOTOBOOTH</small>
            </div>
          </div>
          <div className="red-scribble" aria-hidden="true">
            ✳
          </div>
        </div>
      </section>

      <section className="pricelist section" id="pricelist">
        <div className="section-heading">
          <p className="eyebrow">
            <span /> FIND YOUR PACKAGE
          </p>
          <h2>
            Our <em>pricelist.</em>
          </h2>
          <p>Simple packages. Great memories.</p>
        </div>
        <button
          className="pricelist-preview"
          onClick={() => setShowPricelist(true)}
          aria-label="Open pricelist image full screen"
        >
          <Image
            src="/images/rona-pricelist.png"
            alt="RONA Photobooth packages and add-on pricelist"
            width={1024}
            height={1536}
          />
          <span className="zoom-hint">
            Tap to enlarge <span aria-hidden="true">↗</span>
          </span>
        </button>
        <p className="section-footnote">
          Prices and package details are shown in the pricelist above.
        </p>
      </section>

      <section
        className="gallery-section section"
        style={{ display: "none" }}
        id="gallery"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span /> LITTLE MOMENTS, BIG MEMORIES
          </p>
          <h2>
            See our <em>gallery.</em>
          </h2>
          <p>
            A peek at the photostrips, booth setups and moments worth keeping.
          </p>
        </div>
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filter gallery"
        >
          {["All", "Photostrips", "The Booth", "Real Moments"].map((filter) => (
            <button
              key={filter}
              className={`gallery-filter ${galleryFilter === filter ? "active" : ""}`}
              onClick={() => setGalleryFilter(filter)}
              aria-pressed={galleryFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {visibleGallery.map((item, index) => (
            <article className="gallery-card" key={item.title}>
              <div className={item.style} aria-label={`${item.title} preview`}>
                <div className="mock-photo-strip">
                  <div className="mock-photo mock-photo-a">
                    <span>SMILE</span>
                  </div>
                  <div className="mock-photo mock-photo-b">
                    <span>LAUGH</span>
                  </div>
                  <div className="mock-photo mock-photo-c">
                    <span>REPEAT</span>
                  </div>
                  <b>
                    RONA <small>PHOTOBOOTH</small>
                  </b>
                </div>
                {index % 2 === 0 && <span className="gallery-sparkle">✳</span>}
              </div>
              <div className="gallery-card-caption">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
                <span>0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="gallery-note">
          Gallery previews are placeholders. Replace them with RONA's real event
          photos before publishing.
        </p>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">
          <span /> YOUR DATE, YOUR MEMORIES
        </p>
        <h2>
          Let’s make it <em>memorable.</em>
        </h2>
        <p>
          Tell us a little about your event and we’ll help you find the right
          package.
        </p>
        <Link
          className="button button-red"
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          Book your date <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <footer className="footer">
        <Link
          href="#home"
          className="footer-brand"
          aria-label="RONA Photobooth home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            className="footer-logo"
            src="/images/logo.png"
            alt="RONA Photobooth logo"
            width={1000}
            height={1000}
          />
        </Link>
        <p>GOOD PEOPLE, GREAT MEMORIES.</p>
        <Link href={whatsappLink()} target="_blank" rel="noreferrer">
          Let’s talk on WhatsApp ↗
        </Link>
        <small>© {new Date().getFullYear()} RONA Photobooth Bali</small>
      </footer>

      {showPricelist && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="RONA pricelist preview"
          onClick={() => setShowPricelist(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setShowPricelist(false)}
            aria-label="Close pricelist"
          >
            ×
          </button>
          <Image
            src="/images/rona-pricelist.png"
            alt="RONA Photobooth pricelist enlarged"
            width={1024}
            height={1536}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
