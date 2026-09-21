"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent, type PointerEvent } from "react";

/* =========================================================
   ONGOING PROJECTS
========================================================= */

const ongoingProjects = [
  {
    number: "01",
    title: "SPM (200 Acres Resort-Style Mega Integrated Township)",
    location: "Bhuvanagiri, Telangana",
    image: "/spmm.jpg",
    description:
      "A resort-style mega integrated township concept presented in the supplied SPM promotional material. The material also mentions Rusthapur, M. Thurkappally and Gouraram, with plot sizes including 121 sq yards.",
    price: "₹5,49,999/-",
    priceNote: "Promotional price shown in supplied material",
    video: "/videos/project-01.mp4",
  },

  {
    number: "02",
    title: "RRR Nature Hill County",
    location: "Bhuvanagiri, Telangana",
    image: "/turkapally.jpeg",
    description:
      "An ongoing development project under SPM Group. Project details, specifications, pricing and availability can be updated with the official project information.",
    price: "Contact SPM",
    priceNote: "Current pricing and availability",
    video: "/videos/project-02.mp4",
  },

  {
    number: "03",
    title: "THE EMERALD",
    location: "Bhuvanagiri, Telangana",
    image: "/EMERALD.jpeg",
    description:
      "An ongoing development project under SPM Group. Project details, specifications, pricing and availability can be updated with the official project information.",
    price: "Contact SPM",
    priceNote: "Current pricing and availability",
    video: "/videos/project-03.mp4",
  },
];


/* =========================================================
   COMPLETED PROJECTS
========================================================= */

const completedProjects = [
  {
    number: "01",
    title: "Completed Project 01",
    location: "Jaipur, Telangana",
    image: "/jaipur.jpeg",
    // Add more completed-project photos here. Swipe, drag, click arrows, or use keyboard arrows.
    gallery: [
      "/jaipur.jpeg",
      // Add more photos here, for example:
      // "/jaipur-2.jpeg",
      // "/jaipur-3.jpeg",
    ],
    description:
      "A completed development delivered by SPM Green Tech & Developers.",
    video: "/videos/project-01.mp4",
  },

  {
    number: "02",
    title: "Completed Project 02",
    location: "Ramagundam, Telangana",
    image: "/gdk1.jpeg",
    // Add more completed-project photos here. Swipe, drag, click arrows, or use keyboard arrows.
    gallery: [
      "/gdk1.jpeg",
      // Add more photos here, for example:
      // "/gdk2.jpeg",
      // "/gdk3.jpeg",
    ],
    description:
      "A completed development delivered by SPM Green Tech & Developers.",
    video: "/videos/project-02.mp4",
  },
];


/* =========================================================
   ASSOCIATED PROJECTS
========================================================= */

const associatedProjects = [
  {
    number: "01",
    title: "Associated Project 01",
    location: "Telangana",
    image: "/sager.jpeg",
    // Add more associated-project photos here. Swipe, drag, click arrows, or use keyboard arrows.
    gallery: [
      "/sager1.jpeg",
      // Add more photos here, for example:
      // "/sager2.jpeg",
      // "/sager3.jpeg",
    ],
    description:
      "An associated development project connected with the SPM Group project portfolio.",
    video: "/videos/project-01.mp4",
  },

  {
    number: "02",
    title: "Associated Project 02",
    location: "Telangana",
    image: "/asso2.jpeg",
    // Add more associated-project photos here. Swipe, drag, click arrows, or use keyboard arrows.
    gallery: [
      "/asso2.jpeg",
      // Add more photos here, for example:
      // "/asso2-2.jpeg",
      // "/asso2-3.jpeg",
    ],
    description:
      "An associated project representing SPM Group's development experience and partnerships.",
    video: "/videos/project-02.mp4",
  },

  {
    number: "03",
    title: "Associated Project 03",
    location: "Telangana",
    image: "/asso1.jpeg",
    // Add more associated-project photos here. Swipe, drag, click arrows, or use keyboard arrows.
    gallery: [
      "/asso1.jpeg",
      // Add more photos here, for example:
      // "/asso1-2.jpeg",
      // "/asso1-3.jpeg",
    ],
    description:
      "An associated project representing SPM Group's development experience and partnerships.",
    video: "/videos/project-03.mp4",
  },
];



/* =========================================================
   SWIPEABLE PROJECT PHOTO GALLERY
========================================================= */

type PhotoGalleryProps = {
  images: string[];
  alt: string;
};

function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  const validImages = images.filter(Boolean);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);

  const totalPhotos = validImages.length;

  const showPrevious = () => {
    if (totalPhotos < 2) return;

    setCurrentPhoto((photo) =>
      photo === 0 ? totalPhotos - 1 : photo - 1
    );
  };

  const showNext = () => {
    if (totalPhotos < 2) return;

    setCurrentPhoto((photo) =>
      photo === totalPhotos - 1 ? 0 : photo + 1
    );
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (totalPhotos < 2) return;
    setPointerStartX(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX === null || totalPhotos < 2) return;

    const distance = pointerStartX - event.clientX;

    if (Math.abs(distance) >= 45) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setPointerStartX(null);
  };

  const handlePointerCancel = () => {
    setPointerStartX(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (totalPhotos < 2) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  if (totalPhotos === 0) {
    return (
      <div className="portfolioPhotoGallery portfolioPhotoGalleryEmpty">
        <span>No project photos available</span>
      </div>
    );
  }

  return (
    <div
      className="portfolioPhotoGallery"
      role="region"
      aria-label={`${alt} photo gallery`}
      tabIndex={totalPhotos > 1 ? 0 : -1}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onKeyDown={handleKeyDown}
    >
      {validImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`portfolioPhotoSlide ${
            index === currentPhoto ? "active" : ""
          }`}
          aria-hidden={index !== currentPhoto}
        >
          <Image
            src={image}
            alt={`${alt} photo ${index + 1} of ${totalPhotos}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
            priority={index === 0}
            draggable={false}
          />
        </div>
      ))}

      {totalPhotos > 1 && (
        <>
          <button
            type="button"
            className="portfolioGalleryArrow portfolioGalleryPrev"
            onClick={showPrevious}
            aria-label="Previous project photo"
          >
            &lt;
          </button>

          <button
            type="button"
            className="portfolioGalleryArrow portfolioGalleryNext"
            onClick={showNext}
            aria-label="Next project photo"
          >
            &gt;
          </button>

          <div
            className="portfolioGalleryDots"
            aria-label={`Photo ${currentPhoto + 1} of ${totalPhotos}`}
          >
            {validImages.map((image, index) => (
              <button
                key={`${image}-dot-${index}`}
                type="button"
                className={`portfolioGalleryDot ${
                  index === currentPhoto ? "active" : ""
                }`}
                onClick={() => setCurrentPhoto(index)}
                aria-label={`Show project photo ${index + 1}`}
                aria-current={index === currentPhoto ? "true" : undefined}
              />
            ))}
          </div>

          <div className="portfolioGalleryHint">
            Swipe or use arrows
          </div>
        </>
      )}
    </div>
  );
}


/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function ProjectsPage() {

  const [activeVideo, setActiveVideo] =
    useState<string | null>(null);


  return (

    <main className="projectsPage">


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">

        <Link
          href="/"
          className="brand"
        >

          <Image
            src="/LOGO.png"
            alt="SPM Group"
            width={1000}
            height={1000}
          />

        </Link>


        <nav>

          <Link href="/#about">
            About
          </Link>

          <Link href="/#leadership">
            Leadership
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/#amenities">
            Amenities
          </Link>

          <Link href="/#location">
            Location
          </Link>

          <Link href="/#contact">
            Contact
          </Link>

        </nav>


        <Link
          className="navCta"
          href="/#contact"
        >
          Book a Site Visit
        </Link>

      </header>


      {/* =====================================================
          PROJECTS HERO
      ===================================================== */}

      <section className="projectsHero">

        <div className="projectsHeroOverlay" />

        <video
          className="projectsHeroVideo"
          src="/videos/promo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

      </section>


      {/* =====================================================
          PROJECT CATEGORY NAVIGATION
      ===================================================== */}

      <section className="section projectsNavigation">

        <div className="heading center">

          <p className="eyebrow">
            OUR PROJECTS
          </p>


          <h2>
            Explore the
            <span> SPM portfolio.</span>
          </h2>


          <p>
            Explore SPM Group&apos;s ongoing development
            and completed project portfolio.
            View current developments, completed
            and associated projects under the
            SPM Group portfolio.
          </p>

        </div>


        <div className="projectTabs">


          {/* ONGOING */}

          <a
            href="#ongoing"
            className="projectTab active"
          >

            <span>
              01
            </span>

            Ongoing Projects

          </a>


          {/* COMPLETED */}

          <a
            href="#completed"
            className="projectTab"
          >

            <span>
              02
            </span>

            Completed Projects

          </a>


          {/* ASSOCIATED */}

          <a
            href="#associated"
            className="projectTab"
          >

            <span>
              03
            </span>

            Associated Projects

          </a>


        </div>

      </section>


      {/* =====================================================
          ONGOING PROJECTS
      ===================================================== */}

      <section
        id="ongoing"
        className="section projectCategorySection"
      >

        <div className="projectCategoryHeading">

          <div>

            <p className="eyebrow">
              CURRENT DEVELOPMENT
            </p>


            <h2>
              Ongoing
              <span> Projects.</span>
            </h2>

          </div>


          <div className="projectCount">

            {ongoingProjects.length} Ongoing Projects

          </div>

        </div>


        {/* ===================================================
            ONGOING PROJECT GRID
        =================================================== */}

        <div className="projectPortfolioGrid">

          {ongoingProjects.map((project) => (

            <article
              key={project.number}
              className="portfolioCard ongoingCard"
            >


              {/* PROJECT IMAGE */}

              <div className="portfolioImage">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                />


                <div className="portfolioStatus">
                  ONGOING
                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="portfolioContent">


                {/* PROJECT NUMBER + LOCATION */}

                <div className="portfolioMeta">

                  <span>
                    {project.number}
                  </span>


                  <span>
                    {project.location}
                  </span>

                </div>


                {/* PROJECT TITLE */}

                <h3>
                  {project.title}
                </h3>


                {/* PROJECT DESCRIPTION */}

                <p>
                  {project.description}
                </p>


                {/* PROJECT PRICE */}

                <div className="portfolioPrice">

                  <div>

                    <small>
                      {project.priceNote}
                    </small>

                  </div>


                  <strong>
                    {project.price}
                  </strong>

                </div>


                {/* NOTE */}

                <p className="note">
                  Pricing, availability and approvals
                  must be confirmed with SPM before
                  purchase.
                </p>


                {/* VIDEO BUTTON */}

                <button
                  type="button"
                  className="projectVideoButton"
                  onClick={() =>
                    setActiveVideo(project.video)
                  }
                >

                  <span className="videoIcon">
                    ▶
                  </span>


                  <span>
                    Click Here to Watch Project Video
                  </span>

                </button>


                {/* CONTACT BUTTON */}

                <Link
                  href="/#contact"
                  className="portfolioButton"
                >
                  Request Current Pricing →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          COMPLETED PROJECTS
      ===================================================== */}

      <section
        id="completed"
        className="section projectCategorySection completedProjectsSection"
      >


        {/* COMPLETED PROJECT HEADING */}

        <div className="projectCategoryHeading">

          <div>

            <p className="eyebrow">
              PROJECT EXPERIENCE
            </p>


            <h2>
              Completed
              <span> Projects.</span>
            </h2>

          </div>


          <div className="projectCount">

            {completedProjects.length} Completed Projects

          </div>

        </div>


        {/* COMPLETED INTRO */}

        <div className="completedIntro">

          <p>
            Explore selected completed developments
            delivered by SPM Green Tech & Developers.
          </p>

        </div>


        {/* COMPLETED PROJECT GRID */}

        <div className="projectPortfolioGrid">

          {completedProjects.map((project) => (

            <article
              key={project.number}
              className="portfolioCard completedCard"
            >


              {/* PROJECT IMAGE */}

              <div className="portfolioImage">

                <PhotoGallery
                  images={project.gallery}
                  alt={project.title}
                />

                <div className="portfolioStatus completedStatus">
                  COMPLETED
                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="portfolioContent">


                {/* NUMBER + LOCATION */}

                <div className="portfolioMeta">

                  <span>
                    {project.number}
                  </span>


                  <span>
                    {project.location}
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p>
                  {project.description}
                </p>


                {/* VIDEO BUTTON */}

                <button
                  type="button"
                  className="projectVideoButton"
                  onClick={() =>
                    setActiveVideo(project.video)
                  }
                >

                  <span className="videoIcon">
                    ▶
                  </span>


                  <span>
                    Click Here to Watch Project Video
                  </span>

                </button>


                {/* CONTACT */}

                <Link
                  href="/#contact"
                  className="portfolioButton"
                >
                  Enquire About SPM →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          ASSOCIATED PROJECTS
      ===================================================== */}

      <section
        id="associated"
        className="section projectCategorySection completedProjectsSection associatedProjectsSection"
      >


        {/* ASSOCIATED PROJECT HEADING */}

        <div className="projectCategoryHeading">

          <div>

            <p className="eyebrow">
              SPM ASSOCIATIONS
            </p>


            <h2>
              Associated
              <span> Projects.</span>
            </h2>

          </div>


          <div className="projectCount">

            {associatedProjects.length} Associated Projects

          </div>

        </div>


        {/* ASSOCIATED INTRO */}

        <div className="completedIntro">

          <p>
            Explore selected associated projects and
            development partnerships connected with
            the SPM Group portfolio.
          </p>

        </div>


        {/* ASSOCIATED PROJECT GRID */}

        <div className="projectPortfolioGrid">

          {associatedProjects.map((project) => (

            <article
              key={project.number}
              className="portfolioCard completedCard associatedCard"
            >


              {/* PROJECT IMAGE */}

              <div className="portfolioImage">

                <PhotoGallery
                  images={project.gallery}
                  alt={project.title}
                />

                <div className="portfolioStatus completedStatus">
                  ASSOCIATED
                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="portfolioContent">


                {/* NUMBER + LOCATION */}

                <div className="portfolioMeta">

                  <span>
                    {project.number}
                  </span>


                  <span>
                    {project.location}
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p>
                  {project.description}
                </p>


                {/* VIDEO BUTTON */}

                <button
                  type="button"
                  className="projectVideoButton"
                  onClick={() =>
                    setActiveVideo(project.video)
                  }
                >

                  <span className="videoIcon">
                    ▶
                  </span>


                  <span>
                    Click Here to Watch Project Video
                  </span>

                </button>


                {/* CONTACT BUTTON */}

                <Link
                  href="/#contact"
                  className="portfolioButton"
                >
                  Enquire About Project →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROJECT VIDEO POPUP
      ===================================================== */}

      {activeVideo && (

        <div
          className="projectVideoOverlay"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="projectVideoModal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >


            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="projectVideoClose"
              onClick={() =>
                setActiveVideo(null)
              }
              aria-label="Close video"
            >
              ×
            </button>


            {/* VIDEO */}

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="projectVideoPlayer"
            />

          </div>

        </div>

      )}


      {/* =====================================================
          PROJECT EXPERIENCE CTA
      ===================================================== */}

      <section className="cta projectsCTA">

        <p className="eyebrow">
          SPM GREEN TECH & DEVELOPERS
        </p>


        <h2>
          Building today.
          <br />
          <span>Shaping tomorrow.</span>
        </h2>


        <p>
          Interested in an SPM development?
          Contact the team to arrange a site visit
          or request current project information.
        </p>


        <Link
          href="/#contact"
          className="primaryBtn"
        >
          Talk to SPM →
        </Link>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footerBrand">

          <Image
            src="/spm-group-logo.jpg"
            alt="SPM"
            width={55}
            height={55}
          />


          <div>

            <b>
              SPM
            </b>


            <span>
              GREEN TECH & DEVELOPERS
            </span>

          </div>

        </div>


        <p>
          © 2026 SPM Green Tech & Developers.
          Information presented from supplied
          company and project materials.
        </p>

      </footer>


    </main>
  );
}