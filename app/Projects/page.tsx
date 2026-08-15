import Image from "next/image";
import Link from "next/link";

const ongoingProjects = [
  {
    number: "01",
    title: "200 Acres Resort-Style Mega Integrated Township",
    location: "Bhuvanagiri, Telangana",
    image: "/spmm.jpg",
    description:
      "A resort-style mega integrated township concept presented in the supplied SPM promotional material. The material also mentions Rusthapur, M. Thurkappally and Gouraram, with plot sizes including 121 sq yards.",
    price: "₹5,49,999/-",
    priceNote: "Promotional price shown in supplied material",
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
  },
];

/*
const completedProjects = [
  {
    number: "01",
    title: "Completed Project 01",
    location: "SPM Group",
    image: "/project-promo1.jpg",
    description:
      "One of SPM's completed own development projects.",
  },

  {
    number: "02",
    title: "Completed Project 02",
    location: "SPM Group",
    image: "/project-brochure1.jpg",
    description:
      "One of SPM's completed own development projects.",
  },

  {
    number: "03",
    title: "Completed Project 03",
    location: "SPM Group",
    image: "/spmm.jpg",
    description:
      "One of SPM's completed own development projects.",
  },

  {
    number: "04",
    title: "Completed Project 04",
    location: "SPM Group",
    image: "/project-promo1.jpg",
    description:
      "One of SPM's completed own development projects.",
  },

  {
    number: "05",
    title: "Completed Project 05",
    location: "SPM Group",
    image: "/project-brochure1.jpg",
    description:
      "One of SPM's completed own development projects.",
  },
];
*/

export default function ProjectsPage() {
  return (
    <main className="projectsPage">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">

        <Link href="/" className="brand">

          <Image
            src="/spm-group-logo.jpg"
            alt="SPM Group"
            width={64}
            height={64}
          />

          <div>
            <b>SPM</b>
            <span>GREEN TECH & DEVELOPERS</span>
          </div>

        </Link>

        <nav>
          <Link href="/#about">About</Link>
          <Link href="/#leadership">Leadership</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#amenities">Amenities</Link>
          <Link href="/#location">Location</Link>
          <Link href="/#contact">Contact</Link>
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

        <Image
          src="/project-promo1.jpg"
          alt="SPM real estate development"
          fill
          priority
          sizes="100vw"
          className="projectsHeroImage"
        />

        <div className="projectsHeroContent">

          <p className="eyebrow">
            SPM PROJECT PORTFOLIO
          </p>

          <h1>
            Developments built around
            <span> trust and vision.</span>
          </h1>

          <p>
            Explore SPM Group&apos;s ongoing development
            and completed project portfolio.
          </p>

          <div className="projectsHeroButtons">

            <a
              href="#ongoing"
              className="primaryBtn"
            >
              Ongoing Projects
            </a>

            <a
              href="#completed"
              className="glassBtn"
            >
              Completed Projects
            </a>

          </div>

        </div>

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
            View current developments and completed
            projects under the SPM Group portfolio.
          </p>

        </div>

        <div className="projectTabs">

          <a
            href="#ongoing"
            className="projectTab active"
          >
            <span>01</span>
            Ongoing Projects
          </a>

          <a
            href="#completed"
            className="projectTab"
          >
            <span>02</span>
            Completed Projects
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


        <div className="projectPortfolioGrid">

          {ongoingProjects.map((project) => (

            <article
              key={project.number}
              className="portfolioCard ongoingCard"
            >

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
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


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


                <p className="note">
                  Pricing, availability and approvals
                  must be confirmed with SPM before
                  purchase.
                </p>


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
            5 Own Projects
          </div>

        </div>


        <div className="completedIntro">

          <p>
            SPM&apos;s supplied company profile states that
            the group has completed five own projects.
            The individual project names were not included
            in the supplied material, so they should be
            replaced with the official project names before
            publishing this section.
          </p>

        </div>


        <div className="projectPortfolioGrid">

          {/*
          {completedProjects.map((project) => (

            <article
              key={project.number}
              className="portfolioCard completedCard"
            >

              <div className="portfolioImage">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                />

                <div className="portfolioStatus completedStatus">
                  COMPLETED
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
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <Link
                  href="/#contact"
                  className="portfolioButton"
                >
                  Enquire About SPM →
                </Link>

              </div>

            </article>

          ))}
          */}

        </div>

      </section>


      {/* =====================================================
          PROJECT EXPERIENCE
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

            <b>SPM</b>

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