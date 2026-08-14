import Image from "next/image";
import LocationDirections from "./LocationDirections";
/*import CallbackForm from "./CallbackForm";*/
import ContactChoice from "./ContactChoice";

const stats = [
  ["10+", "Years of real-estate experience"],
  ["5", "Own projects completed"],
  ["10", "Associate projects completed"],
  ["500+", "Customers"],
  ["50+", "Team members"],
];

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

const distances = [
  ["10 min", "Bhuvanagiri Bus Stop"],
  ["10 min", "200 Feet Road"],
  ["15 min", "Bhuvanagiri Railway Station"],
  ["15 min", "Swarnagiri Temple"],
  ["20 min", "AIIMS"],
  ["20 min", "IT Sector"],
  ["20 min", "Regional Ring Road"],
  ["20 min", "Regional Ring Rail"],
  ["28 min", "Industrial Park"],
  ["30 min", "Keesara Toll Plaza"],
  ["30 min", "Pragnapur"],
  ["40 min", "JBS Bus Stand"],
  ["45 min", "ECIL"],
];

export default function Home() {
  return (
    <main>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">

        <a href="#home" className="brand">

          <Image
            src="/spm-group-logo.jpg"
            alt="SPM Group"
            width={54}
            height={54}
          />

          <div>
            <b>SPM</b>
            <span>GREEN TECH & DEVELOPERS</span>
          </div>

        </a>


        <nav>
          <a href="#about">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#project">Projects</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>


        <a
          className="navCta"
          href="#contact"
        >
          Book a Site Visit
        </a>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero"
      >

        <Image
          className="heroImage"
          src="/project-promo1.jpg"
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
              <strong>SPM</strong>
              <span>GREEN TECH & DEVELOPERS</span>
            </div>

          </div>


          <p className="eyebrow">
            TRUST • EXPERIENCE • DEVELOPMENT
          </p>


          <h1>
            Where Dreams Find Direction
            <span></span>
          </h1>


          <p>
            Explore SPM&apos;s plotted developments,
            community concepts and connectivity-led
            locations around Bhuvanagiri and
            surrounding growth corridors.
          </p>


          <div className="buttons">

            <a
              className="primaryBtn"
              href="#project"
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


        <div className="heroStats">

          {[
            ["10+", "Experience"],
            ["500+", "Customers"],
            ["15", "Projects"],
            ["24/7", "Security"],
          ].map((item) => (

            <div key={item[1]}>
              <b>{item[0]}</b>
              <span>{item[1]}</span>
            </div>

          ))}

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
              real-estate experience.
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
          PROJECT
      ===================================================== */}

      <section
        id="project"
        className="section projectSection"
      >

        <div className="heading center">

          <p className="eyebrow">
            FEATURED DEVELOPMENT
          </p>

          <h2>
            Premium plotted development at{" "}
            <span>
              Bhuvanagiri.
            </span>
          </h2>

          <p>
            The supplied promotional material
            describes a 200-acre resort-style mega
            integrated township concept.
          </p>

        </div>


        <div className="project">

          <div className="projectImage">

            <Image
              src="/spmm.jpg"
              alt="SPM Bhuvanagiri project"
              fill
              sizes="(max-width:600px) 100vw, 60vw"
            />

          </div>


          <div className="projectInfo">

            <span className="pill">
              BHUVANAGIRI
            </span>

            <h3>
              200 Acres Resort-Style Mega
              Integrated Township
            </h3>

            <p>
              The material also lists Rusthapur,
              M. Thurkappally and Gouraram and
              mentions plot sizes including
              121 sq yards.
            </p>


            <div className="price">

              <small>
                Promotional price shown in
                supplied material
              </small>

              <b>
                ₹5,49,999/-
              </b>

            </div>


            <p className="note">
              Pricing, availability and approvals
              must be confirmed with SPM before
              purchase.
            </p>


            <a
              className="primaryBtn"
              href="#contact"
            >
              Request Current Pricing
            </a>

          </div>

        </div>

      </section>


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
          SURROUNDING DEVELOPMENTS
      ===================================================== */}

      <section className="section surrounding">

        <div className="heading center">

          <p className="eyebrow">
            SURROUNDING DEVELOPMENTS
          </p>

          <h2>
            Connected to important{" "}
            <span>
              growth corridors.
            </span>
          </h2>

        </div>


        <div className="surroundGrid">

          {surroundings.map((item, index) => (

            <article key={item}>

              <small>
                {String(index + 1).padStart(2, "0")}
              </small>

              <b>
                {item}
              </b>

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
          src="/route-map.jpeg"
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


          {/* =================================================
              CONTACT CHOICE
              All buttons and onClick handlers are inside
              ContactChoice.tsx
          ================================================= */}

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