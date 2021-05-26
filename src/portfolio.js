/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "jvfarrell",
  title: "Hi friend, I'm Victor",
  subTitle: emoji(
    "I am a Hip-Hop dancing snowboarder with a love for video games. I happen to be a Full Stack Developer 🍔 and Consultant by trade"
  ),
  resumeLink: "https://www.linkedin.com/in/jvictorfarrell/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jvfarrell",
  linkedin: "https://www.linkedin.com/in/jvictorfarrell/",
  gmail: "jvictorfarrell@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://www.youtube.com/channel/UC3pnI2im6mtzDJnFH7N-jLA",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Develop cool things and help others improve wherever I can",
  skills: [
    emoji("⚡ Develop microservices with Nodejs for user management"),
    emoji("⚡ Create processes and methods for organizing user communities"),
    emoji(
      "⚡ Act as a change agent to work towards using Agile in government organizations"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
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
      schoolName: "College of William & Mary",
      logo: require("./assets/images/wmLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2010 - May 2014",
      desc: "Minor in Consulting and Process management.",
      descBullets: [
        "Orientation Aide Director",
        "Syndicate - Hip hop dancer",
        "Delta Phi",
        "Lacrosse Team",
        "Head of Day for admitted Students"
      ]
    }
    // },
    // {
    //   schoolName: "College of William & Mary",
    //   logo: require("./assets/images/wmLogo.png"),
    //   subHeader: "Minor in Business and Consulting",
    //   duration: "September 2013 - May 2014",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Studied change management, "]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Technical Expert", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Agile Coach",
      progressPercentage: "70%"
    }
    // {
    //   Stack: "DevOps Engineer",
    //   progressPercentage: "40%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Consultant",
      company: "Ventera",
      companylogo: require("./assets/images/Ventera_Logo.png"),
      date: "August 2016 – Present",
      desc: "Full Stack Developer working on the MFT team. Writing Node JS microservices for user creation and management in coordination with Saviynt. Working to onboard users to the new MFT solution GoAnywhere and creating new functionality through projects and workflows."
    },
    {
      role: "Consultant",
      company: "Centers for Medicare & Medicaid Services",
      companylogo: require("./assets/images/cmsYT.jpg"),
      date: "March 2017 – January 2019",
      desc: "Lead developer on the Pre-Submission Validation Application. PSVA is a Java Swing tool used by hospitals for quality of care reporting."
    },
    {
      role: "IT Development Program",
      company: "Genworth Financial",
      companylogo: require("./assets/images/genworth.png"),
      date: "July 2014 – August 2016",
      desc: "Two year rotational program. Worked on a new team in a new role every six months.",
      descBullets: [
        "Front end developer",
        "iOS mobile developer",
        "Back end Java developer",
        "Big Data - Data Science analyst"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlights",
  subtitle:
    "Links to highlight some of my bigger project contributions and awards",
  projects: [
    {
      image: require("./assets/images/cmsfooter.png"),
      projectName: "Managed File Transfer at CMS",
      projectDesc:
        "Providing the Medical community the ability to transfer files securely to another user.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qnetconfluence.cms.gov/display/HS/Managed+File+Transfer"
        }
        //  you can add extra buttons here. think about CMS awards
      ]
    },
    {
      image: require("./assets/images/vfLogo.png"),
      projectName: "Personal Website",
      projectDesc: "Personal website prior to this one with Django",
      footerLink: [
        {
          name: "Visit Website",
          url: "www.victorfarrell.com"
        }
      ]
    },
    {
      image: require("./assets/images/vfLogo.png"),
      projectName: "League of Legends Business Cards",
      projectDesc: "Mock up of League of Legends Business cards idea",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lol-business-cards.herokuapp.com/"
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
      title: "CMS COVID-19 Award",
      subtitle:
        "Rapid development of a managed file transfer capability between the Centers for Disease Control and CMS to support Nursing Home COVID-19 reporting requirements",
      image: require("./assets/images/cmsAward1.png"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1ZXfMfSENc4x3b1l6IuZZgaXqVWcsjuug/view?usp=sharing"
        }
      ]
    },
    {
      title: "CMS QMARS Award",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/qmars-award.png"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1_tq55LuRq_O7ypt4VSSlRcFPH-sMuN6G/view?usp=sharing"
        }
      ]
    },

    {
      title: "Certified SAFe 4 Practitioner",
      subtitle: "Completed Certifcation for Scaled Agile Framework",
      image: require("./assets/images/safe4badge.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1C0Cp3wvw4yYLXtLsY9uQ73vzBepbWs76/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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
  title: emoji("Ted Talks & Podcasts 🎙️"),
  subtitle: "Some of my favorite podcasts and talks that I vibe with",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://youtu.be/gD_1Eh6rqf8"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle: "Feel free to hit me up",
  number: "703-939-1768",
  email_address: "jvictorfarrell@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
