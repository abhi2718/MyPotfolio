/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek Singh",
  title: "Hi all, I'm Abhishek Singh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with TypeScript / JavaScript / Dart / Flutter / Reactjs / Nodejs / React Native / MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1HKuC5T-FggbQZDjZmkn47MrhnmtQU5kIjsNQzBFh7Zg/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhi2718",
  linkedin: "https://www.linkedin.com/in/abhishek-singh-5586ba222/",
  gmail: "abhiwebdev2718@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Implementing database and server-side logic , conducting testing and debugging"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Staying updated with emerging technologies , roubleshooting and providing technical support"
    )
  ],

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jain (Deemed-to-be University)",
      logo: require("./assets/images/jain.jpeg"),
      subHeader: "Master of Computer Applications - MCA, Computer Science ",
      duration: "September 2022 - April 2024",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "United Institute Of Management",
      logo: require("./assets/images/uim.jpeg"),
      subHeader: "Bachelor's of computer application,Computer Science ",
      duration: "September 2019 - April 2022",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Byldd",
      companylogo: require("./assets/images/byldd.jpeg"),
      date: "Sep 2022 – Present",
      desc: "Byldd is a startup development and acceleration company that helps SaaS and eCommerce founders build out their ideas into real-life, revenue-generating businesses that users fall in love with",
    },
    {
      role: "Full Stack Developer",
      company: "Dudar",
      companylogo: require("./assets/images/dudarnew.png"),
      date: "Jan 2022 – Sep 2022",
      desc: "Dudar is an instant live Doubt solving platform , where Tutor and Students connect 1 on 1 anytime of the day.Get all your doubt resolved within seconds by experienced tutors of our platform who are passed out from IIT, NIT, BITS & AIIMS 24x7, DU and many more prestigious institutions of India"
    },
    {
      role: "Software Engineer ",
      company: "Freshnic",
      companylogo: require("./assets/images/freshnic.png"),
      date: "Sep 2019  – Oct 2021",
      desc: "We're trying to provide the nation a full-fledged sustainable and working model for ensuring a self-sufficient village economy.Freshnic is focused on improving traditional farming approaches by utilizing AI and IoT based solutions to drive agricultural system and build a sustainable platform."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/memetherappy.png"),
      projectName: "Meme Therappy",
      projectDesc: "meme therappy is building a better world for you, by focusing on mental health and creating a feed for positivity!",
      footerLink: [
        {
          name: "Download App",
          url: "https://apps.apple.com/us/app/meme-therappy/id1608167621"
        },
        {
          name: "Visit Website",
          url: "https://www.memetherappy.com"
        }
      ]
    },
    {
      image: require("./assets/images/shadow.webp"),
      projectName: "Shadow",
      projectDesc: "We are trying to bridge the gap of what's happening in the outside world and bring the world closer together through shared experiences and similar passions",
      footerLink: [
        {
          name: "Download App",
          url: "https://apps.apple.com/us/app/shadow/id1586018038"
        },
        {
          name: "Visit Website",
          url: "https://www.shadow.la/"
        }
      ]
    },
    {
      image: require("./assets/images/keepsake.webp"),
      projectName: "Keepsake",
      projectDesc: "Store collection of your keepsake",
      footerLink: [
        {
          name: "Download App",
          url: "https://apps.apple.com/us/app/keeps-ke/id1664110586"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Create websites using Front and Back-end frameworks",
      subtitle:
        "",
      image: require("./assets/images/new_logo.svgz"),
      imageAlt: "Create websites using Front and Back-end frameworks",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.simplicdn.net/share/4228723.pdf"
        },
      ]
    },
    {
      title: "Associate JavaScript Developer at SleekSky LLC",
      subtitle:
        "",
      image: require("./assets/images/internshala-1678450352.jpg"),
      imageAlt: "Associate JavaScript Developer at SleekSky LLC",
      footerLink: [
        {
          name: "Certification",
          url: "https://internshala.com/student/certificate/92333729/A09CFE78-8A13-DE7C-797B-A378B61D9393"
        }
      ]
    },
    {
      title: "The Advanced Web Developer Bootcamp",
      subtitle: "",
      image: require("./assets/images/Udemy-Symbol.png"),
      imageAlt: "The Advanced Web Developer Bootcamp",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-14850dd9-99d2-4bba-a6f2-d796d407484e/"},
      ]
    },
    {
      title: "Node.js API Masterclass With Express & MongoDB",
      subtitle: "",
      image: require("./assets/images/Udemy-Symbol.png"),
      imageAlt: "Node.js API Masterclass With Express & MongoDB",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-771e3368-6e7f-41ef-b4e4-1fa314adad63/"},
      ]
    },
    {
      title: "Agile, Git, and JavaScript",
      subtitle: "",
      image: require("./assets/images/new_logo.svgz"),
      imageAlt: "Agile, Git, and JavaScript",
      footerLink: [
        {name: "Certification", url: "https://certificates.simplicdn.net/share/4140380.pdf"},
      ]
    }
    ,
    {
      title: "Create scalable and dynamic websites -",
      subtitle: "",
      image: require("./assets/images/new_logo.svgz"),
      imageAlt: "Create scalable and dynamic websites -",
      footerLink: [
        {name: "Certification", url: "https://certificates.simplicdn.net/share/4337256_1684789919.pdf"},
      ]
    },
    {
      title: "React Native - The Practical Guide",
      subtitle: "",
      image: require("./assets/images/Udemy-Symbol.png"),
      imageAlt: "React Native - The Practical Guide",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-71e8809e-7641-4f6d-b36c-fd42e2bd7a37/"},
      ]
    },
    {
      title: "Flutter & Dart - The Complete Guide [2023 Edition]",
      subtitle: "",
      image: require("./assets/images/Udemy-Symbol.png"),
      imageAlt: "Flutter & Dart - The Complete Guide [2023 Edition]",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-e7d24e3d-eaa5-4a2e-8ee3-b3038e4d340a/"},
      ]
    },
    {
      title: "The Web Developer Bootcamp ",
      subtitle: "",
      image: require("./assets/images/Udemy-Symbol.png"),
      imageAlt: "The Web Developer Bootcamp ",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-f5fe4849-f1df-4d5e-9f0c-2286728fc03c/"},
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8318064327",
  email_address: "abhiwebdev2718@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
