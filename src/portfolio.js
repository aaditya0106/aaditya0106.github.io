/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

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
  username: "Aaditya Chopra",
  title: "Hi, I'm Aaditya",
  subTitle:  "I am a Data Science graduate student with good mathematics background who loves to research, learn, and implement things in daily life wherever possible.",
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aaditya0106/",
  github: "https://github.com/aaditya0106",
  gmail: "achopra0106@gmail.com",
  instagram: "https://www.instagram.com/_aaditya_chopra/",
  flickr: "https://www.flickr.com/photos/201510706@N02/",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true
};

// Skills Section

const skillsSection = {
  title: "What do I do",
  subTitle: "",
  skills: [
    "I’m a passionate Data Scientist with expertise in developing data-driven solutions and optimizing systems. With hands-on experience in Python, C++, and JavaScript, I specialize in solving complex problems using predictive modeling, statistical analysis, and automation.",
    "My background includes working on large-scale financial data, developing automated tools to enhance efficiency, and creating scalable solutions in fast-paced environments.",
    "I have consistently performed at a high level throughout my career, delivering projects that streamline processes, reduce risks, and improve decision-making for global financial institutions. I thrive in collaborative, dynamic teams and love tackling new challenges that push the boundaries of technology and innovation."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "devicon-c-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington, Seattle, WA",
      logo: require("./assets/images/udub-logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2024 - March 2026",
      desc: "",
      descBullets: [
        "DATA 556: Introduction to Statistics and Probability",
      ]
    },
    {
      schoolName: "Thapar Institute of Engineering and Technology, India",
      logo: require("./assets/images/tiet-logo-2.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2017 - June 2021",
      desc: "",
      descBullets: [
        "UCS 521: Artificial Intelligence",
        "UCS 742: Deep Learning",
        "UML 501: Machine Learning",
        "UML 602: Natural Language Processing",
        "UCS 615: Image Processing",
        "UCS 616: Advanced Data Structures and Algorithms",
        "UMA 066: Graph Theory and Applications",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Pyhton", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  
  experience: [
    {
      title: "Quantitative Research Associate",
      company: "JPMorgan Chase & Co.",
      company_url: "https://www.jpmorgan.com/global",
      logo_path: require("./assets/images/jpmc-logo-2.png"),
      duration: "Jan 2024 – Aug 2024",
      location: "Bengaluru, India",
      description: "",
      descPoints: [
        "Revamped the Data Quality Program (DQP), reducing $150M in market risk capital by streamlining infrastructure.",
        "Engineered an in-house anomaly detection system inspired by Isolation Forest, monitoring 150,000+ time series daily and pinpointing statistical anomalies.",
        "Built a scalable, fault-tolerant, cross-vendor framework using ARIMA for time series forcasting, providing key insights on Average Daily Traded Volume to the firm's Credit Officers for trade approvals and liquidity add-on calculations.",
        "Provided mentorship and facilitated seamless onboarding for new team members."
      ],
    },
    {
      title: "Quantitative Research Analyst",
      company: "JPMorgan Chase & Co.",
      company_url: "https://www.jpmorgan.com/global",
      logo_path: require("./assets/images/jpmc-logo-2.png"),
      duration: "Jul 2021 – Jan 2024",
      location: "Mumbai, India",
      description: "",
      descPoints: [
        "Collaborated with PhDs to implement advanced statistical models for regulatory reporting, boosting accuracy and cutting manual effort by 98%. Ensuring compliance with Fed and PRA standards.",
        "Coordinated with cross-functional teams to optimize essential computational functions, resulting in a 57% reduction in downstream process runtime.",
        "Leveraged DBSCAN clustering for anomaly detection, identifying high-risk trades and improving risk management.",
        "Applied Quantile Regression and other advanced statistical techniques to enhance Value at Risk (VaR) calculations.",
        "Built an event-driven architecture using AWS Lambda to automate data ingestion from multiple financial sources, reducing manual data processing by 80%.",
        "Developed multi-threaded systems for real-time risk analysis using Python, improving processing efficiency by 60%.",
        "Engineered scalable data storage on AWS S3, optimizing data retrieval times and reducing latency by 40%."
      ],
    },
    {
      title: "Quantitative Research Intern",
      company: "JPMorgan Chase & Co.",
      company_url: "https://www.jpmorgan.com/global",
      logo_path: require("./assets/images/jpmc-logo-2.png"),
      duration: "Jan 2024 – Aug 2024",
      location: "Mumbai, India",
      description: "",
      descPoints: [
        "Automated time series monitoring using statistical models and Python saving 80% of manual effort across the team.",
        "Developed internal web apps for data visualization with Python, TypeScript, and React, enhancing real-time monitoring and communication.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "United Health Group (Optum)",
      company_url: "https://www.optum.com/en/about-us.html",
      logo_path: require("./assets/images/optum-logo.png"),
      duration: "Jun 2020 – Jul 2020",
      location: "Hyderabad, India",
      description: "",
      descPoints: [
        "Utilized and compared multiple classification models, ranging from SVM to EfficientNet-B7 to classify skin lesions within dermatology images.",
        "Applied U-Net CNN for medical image segmentation, improving diagnostics and treatment planning.",
      ],
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
  title: "Projects",
  subtitle: "BUILDING COOL STUFF WHEN NO ONE'S WATCHING!",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Centralized Intelligent Surveillance System",
      projectDesc: [
        "Developed a real-time suspicious activity detection system, automating alerts to relevant authorities for prompt response in cases of accidents, explosions, and more.",
        "Achieved a low false positive rate of 1.7% and a false negative rate of 0.8% on the training dataset.",
      ],
      footerLink: [
        { name: "Python", url: "" },
        { name: "OpenCV", url: "" },
        { name: "Keras", url: "" },
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Sketch To Website",
      projectDesc: [
        "Used image captioning techniques to get all the elements in the image in a simple code format. Converted it to properly indented and comprehensive HTML/CSS code using my own algorithm.",
        "Works with 92% accuracy and provides a web page with source code in less than 3 seconds.",
      ],
      footerLink: [
        { name: "Python", url: "" },
        { name: "Tensorflow", url: "" },
        { name: "HTML", url: "" },
        { name: "CSS", url: "" },
      ]
    },
    {
      projectName: "Real-Time Heart Rate Measurement from Smart Phone Camera",
      projectDesc: [
        "Detected subtle variations in the intensity of light reflected from the face.",
        "Processed the input and plotted the heart rate graph with 93.8% accuracy.",
      ],
      footerLink: [
        { name: "Python", url: "" },
        { name: "OpenCV", url: "" },
      ]
    },
    {
      projectName: "assignMENTOR",
      projectDesc:[
        "Write all alphabets in your own handwriting on a canvas, which will be converted into a TrueType font (.ttf).",
        "The text will be scanned using OCR and transformed into your personalized font.",
        emoji("Perfect tool to complete all your assignments quickly ☺️"),
      ],
      footerLink: [
        { name: "Python", url: "" },
        { name: "OpenCV", url: "" },
        { name: "JavaScript", url: "" },
        { name: "ReactJs", url: "" },
        { name: "Paper.js", url: "" },
        { name: "HTML", url: "" },
        { name: "CSS", url: "" },
      ]
    },
    {
      projectName: "Voting Database Management",
      projectDesc: [
        "Developed an intuitive GUI and leveraged SQL to manage and track votes, optimizing user participation throughout the event.",
        "Announced winners based on real-time data at the event's conclusion.",
      ],
      footerLink: [
        { name: "Python", url: "" },
        { name: "JavaScript", url: "" },
        { name: "ReactJs", url: "" },
        { name: "SQL", url: "" },
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
      title: "",
      subtitle: "",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications and Articles",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1vbjFvJef4i-Dy2fhmaysutk__Hr02i5P/view",
      title: "Graph Neural Networks in Recommender Systems",
      description: "Review Article - 2024"
    },
    {
      url: "https://www.taylorfrancis.com/reader/read-online/f6a2f379-59f0-440e-8320-f363ed7863aa/chapter/pdf?context=ubx",
      title: "A comprehensive analysis of driver drowsiness detection techniques",
      description: "Taylor & Francis - ADSSS 2023"
    },
    {
      url: "https://drive.google.com/file/d/1f9H4vDPRzGeuC6w-EaKFMuBuLjUgc3hs/view",
      title: "Centralized Intelligent Surveillance System",
      description: "Bachelor's Thesis - 2021"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a job? Discuss a project? or just want to say hi? My Inbox is open for all!",
  email_address: "achopra0106@gmail.com"
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
  isHireable,
};
