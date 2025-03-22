import calender from "../assets/icons/calender-svgrepo-com 1.png";
import dress from "../assets/icons/dress-svgrepo-com 1.png";
import sewing from "../assets/icons/sewing-machine-svgrepo-com 1.png";

export const content = {
  en: {
    header: {
      bengaliText: "স্বাগতম",
      englishText:
        "We are a leading sustainability-inspired, 100% export-oriented readymade garments powerhouse",
      aboutUsButton: {
        label: "About us",
        labelColor: "white",
        bgColor: "#0B714C",
      },
    },
    process: {
      textCards: [
        {
          svg: calender,
          textBold: "30+",
          textSmall: "Years of experience",
        },
        {
          svg: sewing,
          textBold: "25+",
          textSmall: "Production units",
        },
        {
          svg: dress,
          textBold: "4",
          textSmall: "Millions Pieces/Year",
        },
      ],
      description:
        "Cotton Group can meet your requirements of high-quality manufacturing of knit garments in all categories, such as basics, casual and active wear for men, women, and children.",
      heading: "Here’s our process:",
    },
    sustainability: {
      title: "Sustainability is integral to the way we do business.",
      description: `We see sustainability as more of an opportunity than an obligation.
        An opportunity to become more efficient, implement best practices in
        management and maintenance, contribute to a better quality of life
        in our communities and to help our partners meet their
        sustainability goals.`,
      learnMoreButton: {
        label: "Learn More",
        labelColor: "#0B714C",
        bgColor: "white",
      },
    },
    clientCollaborationHeader: {
      description:
        "By partnering with our clients to create what matters, we improve the value chain experience.",
    },
    customerFirstMessage: {
      header: "Make a customer, build a relationship, not a sale",
      description: `At Cotton Group, we believe in partnership. Every single customer
              and employee, who we believe to be our partners, have empowered us
              to produce a better quality of products and solutions. We like to
              work closely with our partners to meet their expectations and share
              the best outcome of our service. We have proudly served the
              following partners since our inception:`,
      chairmanSir: "Shaheen Mahmud",
      designation: "Founder and Chairman",
    },
    latestNews: {
      title: "Latest News",
      viewMoreButton: {
        label: "View More",
        labelColor: "white",
        bgColor: "#0B714C",
      },
    },
    readTheStoryLink: {
      label: "Read the story",
    },
    ourPartners: {
      header: "Our Partners",
    },
    readOurStory: {
      firstHeader: "We've been here since 1991,",
      secondHeader: "here our story",
    },
    footer: {
      firstHeader: "Ready to talk further?",
      secondHeader: "Let's see how we can create value, together.",
      contactUsButton: {
        label: "Contact us",
        labelColor: "white",
        bgColor: "#0B714C",
      },
      copyRightText: `Copyright © ${new Date().getFullYear()} Cotton Group. All rights
              reserved.`,
      privacyPolicyLink: {
        label: "Privacy Policy",
      },
    },
    ourStoryPage: {
      header: "Our Story",
      certifiedContent:  `We seek to empower communities of creators, customers, and partners by
        crafting products of utmost quality while mitigating environmental
        footprints along the entire value chain in which we operate.`,
        ourCompanies: {
          headingTitle: "Our Companies"
        },
        ourMessage: `We recognize ourselves as a value-driven organization. Our values continue to be the catalyst of our growth and business here at Cotton Group.`,
        ourCoreValues: {
          header: `Our Core Values`
        },
        ourVisionaries: {
          animatedButton: {
            title: "More Info"
          }
        },
        ourAwards: {
          heading: "Our Awards"
        }
    },
    workPage: {
      coverHeader: 'Our Process',
      chairman: {
        name: 'Shaheen Mahmud',
        designation: 'Founder and Chairman'
      },
      cultureCollaboration: {
        heading: 'We believe in the power of culture, collaboration and cohesion to propel our partners forward.',
      }
    }
  },
};
