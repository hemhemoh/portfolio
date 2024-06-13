
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Mardiyyah",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://hemhemoh.medium.com/",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Mardiyyah",
  description: "An innovative ML engineer and independent researcher, passionate about community-driven projects, now seeking new opportunities to drive the future of machine learning.",
  image: profile.src,
  buttons: [
    {
      title: "Google Scholar",
      link: "https://scholar.google.co.uk/citations?user=a9fEPeoAAAAJ&hl=en",
      isPrimary: true,
    },
    {
      title: "CV",
      link: "https://drive.google.com/drive/folders/1o17Gv8VLA65f1faKNr-XR3gEwNq0s766?usp=sharing",
      isPrimary: true,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Machine learning engineer with over 2 years of experience bridging engineering and research. I drive innovation by creating and implementing ML models that blend cutting-edge research with practical engineering to tackle complex challenges. My work has been recognized with publications at top conferences like ICLR.",
    "I thrive on applying my ML knowledge to help companies solve improve their business operations, and I flourish in fast-paced environments."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Machine Learning Engineering",
      description: "I design, build, and deploy machine learning models and systems to solve business problems using data.",
      icons: null,
    },
    {
      title: "Machine Learning Research",
      description: "I explore data and algorithms to uncover new ways to make machines understand and generate human language.",
      icons: null,
    },
    {
      title: "Community building",
      description: "I actively contribute to the ML community by working on collaborative projects, and leading initiatives to meet budding researchers where they are at in their research journeys.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Podcast Summarizer",
      description: "",
      icons: [
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
    {
      title: "Class-Gen",
      description: "Class-Gen is an innovative project designed to classify images into four generational categories: Gen Z, Gen X, Baby Boomers, and Millennials. This project focuses on data scraping using selenium, image preprocessing, fine-tuning pretrained models, and image augmentation.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hemhemoh/Generation-Classification",
        },
      ]
    },
    {
      title: "Text-Summarization-App",
      description: "This project aims to summarize long text of 512 tokens or less, to tokens <= 128 without reproducing the words in the main text and also retaining context. The project was deployed using huggingface spaces with streamlit and this repo also contains a flask app which can be set up locally.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hemhemoh/Text-Summarization-App/",
        },
      ]
    },
  ],
}

export const news = {
  title: "News",
  description: [
    "Machine learning engineer with over 2 years of experience bridging engineering and research. I drive innovation by creating and implementing ML models that blend cutting-edge research with practical engineering to tackle complex challenges. My work has been recognized with publications at top conferences like ICLR.",
    "I thrive on applying my ML knowledge to help companies solve improve their business operations, and I flourish in fast-paced environments."
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at mardiyyahodu@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:mardiyyahodu@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendly.com/d/ck9q-jgz-x47/coffee-chat-with-mardiyyah",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Mardiyyah Oduwole | ML Engineer | ML Researcher | hemhemoh",
  description: "A Machine Learning Engineer and Researcher who left chemistry to do teach machine to learn full time I graduated from National Open University of Nigeria in April 2024",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hemhemoh",
  description: "ML Engineer | ML Researcher ",
  cards: [
    {
      title: "Google Scholar",
      link: "https://scholar.google.co.uk/citations?user=a9fEPeoAAAAJ&hl=en",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hemhemoh/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/mardiyyah-oduwole/",
    },
    {
      title: "My Twitter",
      link: "https://x.com/hemhemoh/",
    },
  ]
}