"use client";

import { Fragment } from "react";
import data from "@/data/portfolio.json";

export default function Hero() {
  const { profile } = data;
  const currentExperience = data.experience.find((item) =>
    item.period?.includes("Present")
  );

  return (
    <section className="hero" id="overview">
      <div className="hero__aurora" aria-hidden="true">
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
        <span className="hero__glow hero__glow--3" />
      </div>

      <div className="container hero__content">
        <p className="eyebrow eyebrow--dark hero__eyebrow">{profile.role}</p>
        <h1 className="hero__title">{profile.name}.</h1>
        <p className="hero__gradient">
          {profile.gradientTagline.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br className="hero__break" />}
              {line}
            </Fragment>
          ))}
        </p>
        <p className="hero__sub">{profile.heroSubtitle}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View my work
          </a>
          <a className="link-arrow link-arrow--dark" href="#contact">
            Get in touch <span aria-hidden="true">›</span>
          </a>
        </div>

        {(currentExperience || profile.location) && (
          <div className="hero__meta" aria-label="Current role and location">
            {currentExperience && (
              <span className="hero__meta-item">
                <span className="hero__meta-dot" aria-hidden="true" />
                {currentExperience.role} at {currentExperience.company}
              </span>
            )}
            {profile.location && (
              <span className="hero__meta-item">{profile.location}</span>
            )}
          </div>
        )}

        {/* Pure-CSS MacBook mockup */}
        <div className="laptop" role="img" aria-label="MacBook mockup showing a portfolio website">
          <div className="laptop__screen">
            <span className="laptop__camera" aria-hidden="true" />
            <div className="laptop__ui">
              <div className="laptop__chrome">
                <span /><span /><span />
                <span className="laptop__url">{profile.name.toLowerCase().replace(/[^a-z]+/g, "")}.dev</span>
              </div>
              <div className="laptop__page">
                <div className="laptop__nav">
                  <span className="skeleton skeleton--dot" />
                  <span className="skeleton skeleton--w20" />
                  <span className="skeleton skeleton--w15" />
                </div>
                <div className="laptop__hero">
                  <span className="skeleton skeleton--line laptop__h1" />
                  <span className="skeleton skeleton--line laptop__h2" />
                  <span className="laptop__pill" />
                </div>
                <div className="laptop__cards">
                  <span className="laptop__card laptop__card--a" />
                  <span className="laptop__card laptop__card--b" />
                  <span className="laptop__card laptop__card--c" />
                </div>
              </div>
            </div>
          </div>
          <div className="laptop__base" aria-hidden="true">
            <span className="laptop__notch" />
          </div>
        </div>
      </div>
    </section>
  );
}
