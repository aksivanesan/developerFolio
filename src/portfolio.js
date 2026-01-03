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
  username: "Sivanesan",
  title: "Hi all, I'm Sivanesan Ashokkumar",
  subTitle: emoji(
    "A Creative graphic designer & Shopify developer bringing ideas to life online"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/",
  gmail: "sivanesanashokkumar@outlook.com",
  instagram: "https://www.instagram.com/the_motocyclette/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Designing eye-catching graphics and seamless eCommerce experiences that turn browsers into buyers.",
  skills: [
    emoji(
      "⚡ I craft stunning designs and build Shopify stores that not only look good but perform even better."
    ),
    emoji("⚡ I create and manage Google Ads campaigns that drive targeted traffic, increase conversions, and maximize ROI for businesses of all sizes."),
    emoji(
      "⚡ Design. Develop. Delight. Graphics Solutions"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karpaga Vinayaga College of Engineering & Technology",
      logo: require("./assets/images/Karpagavinayaga.webp"),
      subHeader: "Bachelor's of Engineering- Mechanical",
      duration: "September 2014 - April 2018",
      desc: "With a Bachelor’s degree in Mechanical Engineering, I combine technical knowledge with creativity to deliver innovative solutions in design, eCommerce, and digital marketing.",
      descBullets: [
        "Analytical thinking, problem-solving skills.",
        "A structured approach to every project I take on."
      ]
    },
    {
      schoolName: "Graphic Designer (Freeelance)",
      logo: require("./assets/images/selftaught.jpg"),
      duration: "Nov 2018 - Present",
      desc: "Self-taught graphic designer creating visually compelling designs for digital and print media. Skilled in Adobe Illustrator, Photoshop, and Canva, with experience designing banners, social media posts, logos, and promotional materials. Combines creativity with practical design knowledge to deliver engaging visuals that meet client goals.",
      descBullets: ["Developed creative graphics for social media and web, applying design principles and trends to produce professional results."]
    },
    {
  schoolName: "Web Developer (Freelance)",
  logo: require("./assets/images/selftaught.jpg"),
  duration: "Nov 2021 - Present",
  desc: "Designed and developed websites for clients, delivering responsive, user-friendly, and visually appealing solutions. Specialized in Shopify store setup, customization, and optimization, while integrating SEO best practices to improve online visibility. Collaborated with clients to understand their goals and create websites that meet both design and business objectives.",
  descBullets: [
    "Built and launched multiple Shopify and custom websites, improving client engagement and online sales.",
    "Implemented SEO strategies and optimized site performance, helping clients increase traffic and conversions."
  ]
},
    {
      schoolName: "Shopify Course UDemy",
      logo: require("./assets/images/selftaught.jpg"),
      duration: "Nov 2022 - Jan 2023",
      desc: "Completed a comprehensive Shopify development course on Udemy, gaining hands-on experience in store setup, product management, theme customization, and app integration. Learned to create responsive, SEO-friendly, and high-converting eCommerce stores, enhancing both design and technical skills for real-world Shopify projects.",
      descBullets: ["Learned best practices for SEO, user experience, and conversion optimization on Shopify stores."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Shopify", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Graphic Design",
      progressPercentage: "90"
    },
    {
      Stack: "Google Ads",
      progressPercentage: "85%"
    },
    {
      Stack: "Creative Video Editing",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "E-Commerce(Shopify) Admin & Graphic Designer",
      company: "Funzone.ae & Book Corner LLC",
      companylogo: require("./assets/images/funzone.png"),
      date: "Nov 2024 – Present",
      desc: "Worked on multiple projects for FunZone.ae, focusing on enhancing the online shopping experience and brand presence. Designed promotional banners, product visuals, and website content, while managing Shopify product updates and store layout to ensure a seamless user experience. Applied SEO strategies to improve product visibility and engagement.",
      descBullets: [
        "Created visually engaging banners and graphics for promotions, increasing customer engagement and click-through rates.",
        "Optimized Shopify store layout and product listings, improving navigation, user experience, and online sales performance.",
        "Implemented SEO best practices on product pages to boost search visibility and attract more organic traffic."
      ]
    },
    {
      role: "Process Associate-B2B",
      company: "AMAZON DEVELOPMENT CENTRE, Chennai, India",
      companylogo: require("./assets/images/amazon.png"),
      date: "April 2022 – April 2024",
      desc: "Managed operations at Amazon, ensuring smooth workflows, high-quality standards, and team productivity. Leveraged problem-solving skills to identify operational bottlenecks and implement process improvements, while coaching team members to achieve performance goals and maintain a safe, efficient work environment. Conducted competitor monitoring for B2B products to inform pricing and sales strategies.",
      descBullets: [
        "Led and trained a team to improve operational efficiency, consistently meeting and exceeding performance targets.",
        "Monitored competitors’ B2B activity, analyzing pricing, stock levels, and promotions to help optimize Amazon store performance."
      ]
    }
  ] // closes the experience array
};   // closes the main workExperiences object

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/funzone.png"),
      projectName: "Funzone.ae",
      projectDesc: "Worked on multiple projects for FunZone.ae, focusing on enhancing the online shopping experience and brand presence. Designed promotional banners, product visuals, and website content, while managing Shopify product updates and store layout to ensure a seamless user experience. Applied SEO strategies to improve product visibility and engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://funzone.ae/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shakeel.webp"),
      projectName: "Shakeel - Sadaf Stationery",
      projectDesc: "Worked on the Shakeel.ae stationery website, focusing on enhancing the online shopping experience and visual appeal. Managed Shopify product listings, designed promotional banners and visuals, and optimized the store layout for seamless navigation and usability. Applied SEO strategies to improve product visibility and drive traffic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://shakeel.ae/"
        }
      ]
    },
    {
      image: require("./assets/images/bookhero.webp"),
      projectName: "Funzone.ae",
      projectDesc: "Worked on BookHero.ae, an online bookstore, managing Shopify product listings, creating visually engaging banners, and designing website content to improve user experience and brand appeal. Focused on seamless navigation, SEO optimization, and promotional visuals to enhance customer engagement and online sales.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bookhero.ae/"
        }
        //  you can add extra buttons here.
      ]
    },
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
      title: "Google Ads Search Certification",
      subtitle:
        "Certified in Google Ads Search, with proven knowledge in creating, managing, and optimizing search campaigns to drive targeted traffic, increase conversions, and maximize ROI.",
      image: require("./assets/images/gads.jpeg"),
      imageAlt: "Google Ads",
      footerLink: [
        {
          name: "Certification",
          image: require("./assets/images/googleadscert.jpeg")
        }
      ]
    },
    {
      title: "Amazon Rewards & Recognition",
      subtitle:
        "Received Amazon’s Rewards & Recognition Award for outstanding performance, leadership, and contributions to operational efficiency and team productivity.",
      image: require("./assets/images/adc.webp"),
      imageAlt: "Amazon Rewards",
      footerLink: [
        {
          name: "Amazon Rewards",
        }
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971 56 622 5946",
  email_address: "sivanesanashokkumar@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
