"use client";

import Image from "next/image";
import { useState } from "react";

import LocationDirections from "./LocationDirections";
/*import CallbackForm from "./CallbackForm";*/
import ContactChoice from "./ContactChoice";


/* =========================================================
   COMPANY STATISTICS
   ========================================================= */

const stats = [
  ["10+", "Years of real-estate experience"],
  ["5", "Own projects completed"],
  ["10", "Associate projects completed"],
  ["500+", "Customers"],
  ["50+", "Team members"],
];

const corridors = [
  {
    number: "01",
    title: "IT Raheja",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/it.png",
  },
  {
    number: "02",
    title: "AIIMS",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/aiims.png",
  },
  {
    number: "03",
    title: "DRDO",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/drdo.png",
  },
  {
    number: "04",
    title: "Industrial Parks",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/industrialparks.png",
  },
  {
    number: "05",
    title: "Genome Valley",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/genome.png",
  },
  {
    number: "06",
    title: "Infosys",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/infosys.png",
  },
  {
    number: "07",
    title: "Yadagirigutta",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/yadagiri.png",
  },
  {
    number: "08",
    title: "Swarnagiri Temple",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/swarnagiri.png",
  },
  {
    number: "08",
    title: "Regional Ring Rail",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/rrr1.png",
  },
  {
    number: "08",
    title: "Regional Ring Road",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/rrr.png",
  },
  {
    number: "08",
    title: "Bhuvanagiri Fort",
    location: "Bhuvanagiri, Telangana",
    image: "/corridors/fort.png",
  },
];

const surroundingImages = [
  "/surrounding/it-raheja.jpg",
  "/surrounding/aiims.jpg",
  "/surrounding/drdo.jpg",
  "/surrounding/industrial-park.jpg",
  "/surrounding/genome-valley.jpg",
  "/surrounding/infosys.jpg",
  "/surrounding/yadagirigutta.jpg",
  "/surrounding/swarnagiri.jpg",
  "/surrounding/regional-ring-road.jpg",
  "/surrounding/regional-ring-rail.jpg",
  "/surrounding/bhuvanagiri-fort.jpg",
];


/* =========================================================
   AMENITIES
   ========================================================= */

const amenities = [
  {
    number: "01",
    title: "HMDA Limits",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/hmda.jpg",
    alt: "HMDA development in Bhuvanagiri, Telangana",
  },
  {
    number: "02",
    title: "Gated Community with 24/7 Security",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/security.jpg",
    alt: "Gated community security facility",
  },
  {
    number: "03",
    title: "Total Compound Wall",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/compound-wall.jpg",
    alt: "Residential community compound wall",
  },
  {
    number: "04",
    title: "Fully Landscaped Parks",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/landscaped-parks.jpg",
    alt: "Landscaped residential park",
  },
  {
    number: "05",
    title: "Children's Parks",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/children-park.jpg",
    alt: "Children's play park",
  },
  {
    number: "06",
    title: "Cottages",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/cottages.jpg",
    alt: "Resort-style cottage",
  },
  {
    number: "07",
    title: "Indoor Games",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/indoor-games.jpg",
    alt: "Indoor games facility",
  },
  {
    number: "08",
    title: "Banquet Halls",
    location: "Bhuvanagiri, Telangana",
    image: "/amenities/banquet-hall.jpg",
    alt: "Banquet hall facility",
  },
];


/* =========================================================
   SPM OFFICE / COMPANY PHOTO GALLERY
   ========================================================= */

const officeGalleryPhotos = [
  {
    image: "/spm-photo0.jpeg",
    alt: "SPM Green Tech and Developers",
  },
  {
    image: "/spm-photo1.jpeg",
    alt: "SPM project development",
  },
  {
    image: "/spm-photo2.jpeg",
    alt: "SPM team and company",
  },
  {
    image: "/spm-photo3.jpeg",
    alt: "SPM real estate development",
  },
  {
    image: "/spm-photo4.jpeg",
    alt: "SPM Green Tech and Developers project",
  },
  {
    image: "/spm-photo5.jpeg",
    alt: "SPM company event",
  },
];


/* =========================================================
   SURROUNDING DEVELOPMENTS
   ========================================================= */

const surroundings = [
  "IT Raheja",
  "AIIMS",
  "DRDO",
  "Industrial Park",
  "Genome Valley",
  "Infosys",
  "Yadagirigutta",
  "Swarnagiri",
  "Regional Ring Road",
  "Regional Ring Rail",
  "Bhuvanagiri Fort",
];


/* =========================================================
   DISTANCES
   ========================================================= */

const distances = [
  ["10 min", "Bhuvanagiri Bus Stop"],
  ["10 min", "200 Feet Road"],
  ["15 min", "Bhuvanagiri Railway Station"],
  ["15 min", "Swarnagiri Temple"],
  ["30 min", "AIIMS"],
  ["30 min", "IT Sector"],
  ["25 min", "Regional Ring Road"],
  ["25 min", "Regional Ring Rail"],
  ["30 min", "Industrial Park"],
  ["40 min", "Keesara Toll Plaza"],
  ["45 min", "Pragnapur"],
  ["50 min", "JBS Bus Stand"],
  ["45 min", "ECIL"],
];


/* =========================================================
   ONGOING PROJECTS
   ========================================================= */

const ongoingProjects = [
  {
    number: "01",
    name: "SPM Bhuvanagiri",
    location: "Bhuvanagiri, Telangana",
    status: "ONGOING",
    image: "/spmm.jpg",
    title: "200 Acres Resort-Style Mega Integrated Township",
    description:
      "The supplied promotional material describes a 200-acre resort-style mega integrated township concept. The material also lists Rusthapur, M. Thurkappally and Gouraram and mentions plot sizes including 121 sq yards.",
    price: "₹5,49,999/-",
  },
];


/* =========================================================
   COMPLETED PROJECTS
   ========================================================= */

/*
const completedProjects = [
  {
    number: "01",
    name: "Own Project 01",
    location: "SPM Group",
    status: "COMPLETED",
    image: "/project-brochure1.jpg",
    title: "Completed SPM Development",
    description:
      "Completed project delivered by SPM Green Tech & Developers.",
  },
  {
    number: "02",
    name: "Own Project 02",
    location: "SPM Group",
    status: "COMPLETED",
    image: "/project-brochure1.jpg",
    title: "Completed SPM Development",
    description:
      "Completed project delivered by SPM Green Tech & Developers.",
  },
  {
    number: "03",
    name: "Own Project 03",
    location: "SPM Group",
    status: "COMPLETED",
    image: "/project-brochure1.jpg",
    title: "Completed SPM Development",
    description:
      "Completed project delivered by SPM Green Tech & Developers.",
  },
  {
    number: "04",
    name: "Own Project 04",
    location: "SPM Group",
    status: "COMPLETED",
    image: "/project-brochure1.jpg",
    title: "Completed SPM Development",
    description:
      "Completed project delivered by SPM Green Tech & Developers.",
  },
  {
    number: "05",
    name: "Own Project 05",
    location: "SPM Group",
    status: "COMPLETED",
    image: "/project-brochure1.jpg",
    title: "Completed SPM Development",
    description:
      "Completed project delivered by SPM Green Tech & Developers.",
  },
];
*/


/* =========================================================
   HOME PAGE
   ========================================================= */

export default function Home() {

  /* =========================================================
     MOBILE MENU STATE
     ========================================================= */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showOfficePhotos, setShowOfficePhotos] = useState(false);


  /* =========================================================
     CLOSE MOBILE MENU
     ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <main>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">

        {/* ===================================================
            BRAND / LOGO
        =================================================== */}

        <a
          href="#home"
          className="brand"
          onClick={closeMobileMenu}
        >

          <Image
            src="/LOGO.png"
            alt="SPM Group"
            width={1000}
            height={1000}
          />

        </a>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav className="desktopNav">

          <a href="#about">
            About
          </a>

          <a href="#leadership">
            Leadership
          </a>

          <a href="/Projects">
            Projects
          </a>

          <a href="#amenities">
            Amenities
          </a>

          <a href="#location">
            Location
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        {/* ===================================================
            DESKTOP CTA
        =================================================== */}

        <a
          className="navCta desktopCta"
          href="#contact"
        >
          Book your site visit
        </a>


        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          className={`mobileMenuButton ${
            mobileMenuOpen ? "open" : ""
          }`}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </header>


      {/* =====================================================
          MOBILE NAVIGATION MENU
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`mobileMenu ${
          mobileMenuOpen ? "mobileMenuOpen" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >

        <div className="mobileMenuInner">

          <a
            href="#about"
            onClick={closeMobileMenu}
          >
            <span>01</span>
            About
          </a>


          <a
            href="#leadership"
            onClick={closeMobileMenu}
          >
            <span>02</span>
            Leadership
          </a>


          <a
            href="/Projects"
            onClick={closeMobileMenu}
          >
            <span>03</span>
            Projects
          </a>


          <a
            href="#amenities"
            onClick={closeMobileMenu}
          >
            <span>04</span>
            Amenities
          </a>


          <a
            href="#location"
            onClick={closeMobileMenu}
          >
            <span>05</span>
            Location
          </a>


          <a
            href="#contact"
            onClick={closeMobileMenu}
          >
            <span>06</span>
            Contact
          </a>


          <a
            className="mobileMenuCta"
            href="#contact"
            onClick={closeMobileMenu}
          >
            Book your site visit
          </a>

        </div>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero"
      >

        <Image
          className="heroImage"
          src="/project-promo2.png"
          alt="SPM project"
          fill
          priority
          sizes="100vw"
        />

        <div className="heroShade" />


        <div className="heroContent">

          <div className="heroBrand">

            <Image
              src="/spm-group-logo.jpg"
              alt="SPM logo"
              width={105}
              height={105}
            />

            <div>

              <strong>
                SPM
              </strong>

              <span>
                GREEN TECH & DEVELOPERS
              </span>

            </div>

          </div>


          <p className="eyebrow">
            TRUST • EXPERIENCE • DEVELOPMENT
          </p>


          <h1>
            Where Dreams 
            <span></span>
          </h1>
          <h2>
            Find Directions!
            <span></span>
          </h2>
          <p>
            Explore SPM&apos;s plotted developments,
            community concepts and 
            connectivity-led
            locations around Bhuvanagiri and
            surrounding growth corridors.
          </p>
          

          <div className="buttons">

            <a
              className="primaryBtn"
              href="/Projects"
            >
              Explore Projects
            </a>

            <a
              className="glassBtn"
              href="#location"
            >
              Find the Location
            </a>

          </div>

        </div>



      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="section"
      >

        <div className="intro">

          <div>

            <p className="eyebrow">
              ABOUT SPM
            </p>

            <h2>
              Experience that grew from{" "}
              <span>
                associate to developer.
              </span>
            </h2>

          </div>


          <p>
            SPM Green Tech & Developers was
            registered in July 2020. The supplied
            company profile states 10+ years of
            real-estate experience, five own projects,
            ten associate projects, 500+ customers
            and a 50+ member associate team.
          </p>

        </div>


        <div className="stats">

          {stats.map((item) => (

            <article key={item[1]}>
              <b>{item[0]}</b>
              <span>{item[1]}</span>
            </article>

          ))}

        </div>


        <div className="story">

          <Image
            src="/project-brochure1.jpg"
            alt="SPM project brochure"
            width={800}
            height={800}
          />


          <div>

            <p className="eyebrow">
              COMPANY JOURNEY
            </p>

            <h3>
              Professional experience.
              Development-focused execution.
            </h3>

            <p>
              The website presents the supplied
              company credentials in a clear business
              format so prospective clients can
              understand the company background
              before making an enquiry.
            </p>

            <a
              className="textLink"
              href="#contact"
            >
              Talk to SPM →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section
        id="leadership"
        className="leadership"
      >

        <div className="leadVisual">

          <Image
            src="/chairmanphoto.jpg"
            alt="Sadanandam Suddala"
            width={500}
            height={600}
          />

          <p>
            BUSINESS LEADERSHIP
          </p>

          <h2>
            Sadanandam Suddala
          </h2>

          <h1>
            CHAIRMAN
          </h1>

        </div>


        <div>

          <p className="eyebrow">
            CHAIRMAN&apos;S PROFILE
          </p>

          <h2>
            Leadership backed by{" "}
            <span>
              REAL-ESTATE experience.
            </span>
          </h2>

          <p>
            Sadanandam Suddala is presented in
            the supplied company material as the
            Chairman of SPM Green Tech & Developers,
            with an MBA in Marketing and more than
            10 years of experience in real estate.
          </p>


          <div className="facts">

            {[
              ["5", "Own projects completed"],
              ["10", "Associate projects completed"],
              ["500+", "Customers served"],
              ["50+", "Associate team members"],
            ].map((item) => (

              <div key={item[1]}>
                <b>{item[0]}</b>
                <span>{item[1]}</span>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS SECTION — COMMENTED OUT FROM MAIN PAGE
      ===================================================== */}

      {/*
      <section
        id="project"
        className="section projectSection"
      >

        <div className="heading center">

          <p className="eyebrow">
            SPM PROJECT PORTFOLIO
          </p>

          <h2>
            Developments built around{" "}
            <span>
              trust and execution.
            </span>
          </h2>

          <p>
            Explore SPM Green Tech & Developers&apos;
            ongoing developments and completed
            project portfolio.
          </p>

        </div>


        <div className="projectTabs">

          <a
            href="#ongoing-projects"
            className="projectTab active"
          >
            <span>
              01
            </span>

            Ongoing Projects
          </a>


          <a
            href="#completed-projects"
            className="projectTab"
          >
            <span>
              02
            </span>

            Completed Projects
          </a>

        </div>


        <div
          id="ongoing-projects"
          className="projectCategory"
        >

          <div className="projectCategoryHeading">

            <div>

              <p className="eyebrow">
                SPM GROUP
              </p>

              <h3>
                Ongoing Projects
              </h3>

            </div>


            <span className="projectCount">
              {ongoingProjects.length} Project
            </span>

          </div>


          <div className="projectPortfolioGrid">

            {ongoingProjects.map((project) => (

              <article
                className="portfolioCard"
                key={project.number}
              >

                <div className="portfolioImage">

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                  />

                  <div className="portfolioStatus">
                    {project.status}
                  </div>

                </div>


                <div className="portfolioContent">

                  <div className="portfolioMeta">

                    <span>
                      {project.number}
                    </span>

                    <span>
                      {project.location}
                    </span>

                  </div>


                  <h3>
                    {project.name}
                  </h3>


                  <h4>
                    {project.title}
                  </h4>


                  <p>
                    {project.description}
                  </p>


                  {project.price && (

                    <div className="portfolioPrice">

                      <small>
                        Promotional price shown in supplied material
                      </small>

                      <strong>
                        {project.price}
                      </strong>

                    </div>

                  )}


                  <a
                    href="#contact"
                    className="portfolioButton"
                  >
                    Request Project Details →
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>


        <div
          id="completed-projects"
          className="projectCategory completedCategory"
        >

          <div className="projectCategoryHeading">

            <div>

              <p className="eyebrow">
                SPM GROUP
              </p>

              <h3>
                Completed Projects
              </h3>

            </div>


            <span className="projectCount">
              Completed Projects
            </span>

          </div>


        </div>

      </section>
      */}


      {/* =====================================================
          AMENITIES
      ===================================================== */}

      <section
        id="amenities"
        className="section amenities"
      >

        <div className="heading">

          <p className="eyebrow">
            PREMIUM FEATURES
          </p>

          <h2>
            Designed around{" "}
            <span>
              community living.
            </span>
          </h2>

        </div>


        <div className="amenityGrid">

          {amenities.map((item) => (

            <article
              key={item.number}
              className="amenityCard"
            >

              <div className="amenityImage">

                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={500}
                  sizes="(max-width: 600px) 100vw, 25vw"
                />

              </div>


              <div className="amenityContent">

                <small>
                  {item.number}
                </small>

                <h3>
                  {item.title}
                </h3>

                <span>
                  {item.location}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="location"
      >

        <div className="section locationGrid">

          <div>

            <p className="eyebrow">
              LOCATION & DIRECTIONS
            </p>

            <h2>
              From{" "}
              <span>
                your location
              </span>{" "}
              to the site.
            </h2>

            <p>
              The visitor can allow location access
              and open a driving route in Google Maps.
              For production, enter the exact project-site
              coordinates from the official SPM brochure
              in the environment variables.
            </p>

            <LocationDirections />

          </div>


          <div className="distanceGrid">

            {distances.map((item) => (

              <div key={item[1]}>

                <b>
                  {item[0]}
                </b>

                <span>
                  {item[1]}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ROUTE MAP
      ===================================================== */}

      <section className="section route">

        <div className="heading center">

          <p className="eyebrow">
            OFFICIAL ROUTE REFERENCE
          </p>

          <h2>
            Connectivity at a{" "}
            <span>
              glance.
            </span>
          </h2>

        </div>


        <Image
          src="/Route-map.png"
          alt="SPM route map"
          width={1800}
          height={1200}
          sizes="100vw"
        />

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta">

        <p className="eyebrow">
          READY TO TAKE THE NEXT STEP?
        </p>

        <h2>
          Let&apos;s arrange your site visit.
        </h2>

        <p>
          Send your details and the SPM team
          can contact you.
        </p>

        <a
          className="primaryBtn"
          href="#contact"
        >
          Request a Call Back
        </a>

      </section>


      {/* =====================================================
          MANCHERIAL OFFICE
      ===================================================== */}

      <section
        id="mancherial-office"
        className="section officeSection"
      >

        {/* =================================================
            OFFICE HEADING
        ================================================= */}

        <div className="heading center">

          <p className="eyebrow">
            VISIT SPM
          </p>

          <h2>
            Our Mancherial
            <span> Office.</span>
          </h2>

          <p>
            Visit the SPM Green Tech & Developers
            Mancherial branch and meet our team
            to discuss projects, site visits and
            current developments.
          </p>

        </div>


        {/* =================================================
            OFFICE LAYOUT
        ================================================= */}

        <div className="officeLayout">


          {/* =================================================
              OFFICE INFORMATION
          ================================================= */}

          <div className="officeDetails">

            <p className="eyebrow">
              MANCHERIAL BRANCH
            </p>

            <h3>
              Meet the SPM team.
            </h3>

            <p className="officeDescription">
              Our Mancherial office is where customers
              can meet the SPM team, discuss projects,
              understand available developments and
              arrange site visits.
            </p>


            {/* ADDRESS */}
<div className="officeDetailItem1">

  <div className="officeDetailIcon1">
    📍
  </div>

  <div className="officeDetailText1">

    <strong>
      SPM Mancherial Office
    </strong>

    <span>
      Mancherial, Telangana
    </span>

  </div>

</div>


  

            {/* BUTTONS */}

            <div className="officeButtons">

              <a
                href="#contact"
                className="primaryBtn"
              >
                Contact SPM →
              </a>

              <a
  href="https://www.google.com/maps/dir/?api=1&destination=SPM+Green+Tech+%26+Developers%2C+Mancherial%2C+Telangana"
  target="_blank"
  rel="noopener noreferrer"
  className="officeDirectionButton"
>
  Get Directions →
</a>

            </div>

          </div>


          {/* =================================================
              OFFICE PHOTOS
          ================================================= */}

          <div className="officeGallery">

            {/* =================================================
                FIRST 3 PHOTOS
            ================================================= */}

            <div className="officePhotos">

              <div className="officeMainPhoto">

                <Image
                  src="/mancherialoffice1.jpeg"
                  alt="SPM Green Tech and Developers Mancherial office"
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />

              </div>


              <div className="officeSmallPhotos">

                <div className="officeSmallPhoto">

                  <Image
                    src="/ofcc.jpeg"
                    alt="SPM Mancherial office interior"
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                  />

                </div>


                <div className="officeSmallPhoto">

                  <Image
                    src="/spm-photo1.jpeg"
                    alt="SPM Green Tech and Developers team"
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                  />

                </div>

              </div>

            </div>


            {/* =================================================
                SEE MORE PHOTOS BUTTON
            ================================================= */}

            <button
              type="button"
              className="seeMorePhotosButton"
              onClick={() =>
                setShowOfficePhotos((current) => !current)
              }
              aria-expanded={showOfficePhotos}
            >

              <span>
                {showOfficePhotos ? "−" : "+"}
              </span>

              {showOfficePhotos
                ? "Show Less Photos"
                : "See More Photos"}

            </button>


            {/* =================================================
                ADDITIONAL PHOTOS
            ================================================= */}

            {showOfficePhotos && (

              <div className="moreOfficePhotos">

                {officeGalleryPhotos.map((photo, index) => (

                  <div
                    className="moreOfficePhoto"
                    key={photo.image}
                  >

                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 25vw"
                    />

                    <div className="moreOfficePhotoNumber">
                      {String(index + 4).padStart(2, "0")}
                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


        </div>

      </section>
      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="section contact"
      >

        <div>

          <p className="eyebrow">
            CONTACT SPM
          </p>

          <h2>
            Turn an enquiry into a{" "}
            <span>
              conversation.
            </span>
          </h2>

          <p>
            Mancherial Branch • SPM Green Tech
            & Developers
          </p>


          <ContactChoice />

        </div>

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