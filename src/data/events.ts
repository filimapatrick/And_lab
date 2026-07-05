export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  summary: string;
  content: string[];
  gallery?: string[];
  galleryCaption?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "neurojson-training-workshop-2026",
    title: "ANR Lab Successfully Hosts the NeuroJSON ANR Training Workshop 2026",
    date: "22–26 June 2026",
    location: "University of Port Harcourt, Nigeria",
    image: "/assets/events/image4.jpg",
    summary: "The African NeuroData Research (ANR) Lab successfully hosted the NeuroJSON ANR Training Workshop 2026, marking a significant milestone in advancing neuroimaging, neurotechnology, and open science capacity across Africa.",
    content: [
      "The African NeuroData Research (ANR) Lab, University of Port Harcourt, successfully hosted the NeuroJSON ANR Training Workshop 2026 from 22 to 26 June 2026, marking a significant milestone in advancing neuroimaging, neurotechnology, and open science capacity across Africa.",
      "Organized in collaboration with Prof. Qianqian Fang of Northeastern University, USA, the five-day hybrid workshop brought together participants from diverse academic and professional backgrounds, including neuroscience, anatomy, biomedical engineering, medicine, computer science, and data science. Participants joined both in person at the ANR Lab and virtually from different locations, creating a vibrant learning environment that fostered collaboration and knowledge exchange.",
      "Throughout the workshop, participants engaged in intensive lectures, live demonstrations, and hands-on practical sessions focused on modern open-source tools for neuroimaging research. The training covered NeuroJSON.io data resources and REST API access, AutoBIDSify for converting datasets into Brain Imaging Data Structure (BIDS)-compliant formats, Iso2Mesh for 3D mesh generation and visualization, NeuroCaptain EEG/fNIRS 3D-printable headcap design, and NeuroCaptain (v2) optode design workflows.",
      "A defining feature of the workshop was its strong emphasis on practical learning. Participants gained first-hand experience implementing computational workflows and designing reproducible neuroimaging pipelines, equipping them with skills that can be directly applied to their research projects.",
      "Speaking on the success of the workshop, Dr. Eberechi Wogu, Principal Investigator of the African NeuroData Research Lab, emphasized the importance of strengthening local expertise in neuroimaging technologies through international collaboration. She noted that building sustainable research capacity requires not only access to advanced tools but also opportunities for researchers to acquire practical skills and develop collaborative networks.",
      "The workshop also highlighted the growing partnership between the ANR Lab and Prof. Qianqian Fang, whose expertise in biomedical optics, open-source software development and computational neuroengineering greatly enriched the training experience. His contributions provided participants with valuable insights into internationally recognized tools that support reproducible neuroscience research.",
      "Beyond technical instruction, the workshop served as a platform for networking, mentorship and the exchange of ideas among researchers committed to advancing brain research in Africa. Participants expressed enthusiasm for applying the newly acquired skills within their institutions and developing future collaborative projects.",
      "The African NeuroData Research Lab extends its sincere appreciation to Prof. Qianqian Fang for his outstanding partnership and dedication to capacity building. We also thank every participant whose enthusiasm, engagement and commitment contributed to the success of this landmark training programme.",
      "As the ANR Lab continues to expand opportunities for research training and innovation, the NeuroJSON ANR Training Workshop 2026 represents another important step toward strengthening neuroimaging research, promoting open science, and empowering the next generation of African neuroscientists.",
      "Together, we are building a stronger future for neuroimaging research in Africa."
    ]
  },
  {
    id: "bright-minds-focused-futures-2026",
    title: "Bright Minds, Focused Futures: ANR Lab Inspires Young Learners Through Brain Science Outreach at UCCI International School",
    date: "17 June 2026",
    location: "UCCI International School, Port Harcourt, Nigeria",
    image: "/assets/events/image2.jpg",
    gallery: [
      "/assets/events/image1.jpg",
      "/assets/events/image3.jpg"
    ],
    galleryCaption: "Highlights from Bright Minds, Focused Futures: Pupils and teachers at UCCI International School actively participated in interactive brain games, neuroscience discussions and live demonstrations of brain technology during ANR Lab's neuroscience outreach programme, designed to inspire curiosity and promote brain science education among young learners.",
    summary: "The African Neurodata Research Lab (ANR Lab), in collaboration with the Society for Neuroscience (SfN) and its Southern Eastern Nigeria, Port Harcourt Chapter, successfully hosted a vibrant neuroscience outreach programme titled 'Bright Minds, Focused Futures' at UCCI International School.",
    content: [
      "The African Neurodata Research Lab (ANR Lab), in collaboration with the Society for Neuroscience (SfN) and the SfN Southern Eastern Nigeria, Port Harcourt Chapter, successfully hosted a vibrant neuroscience outreach programme titled \"Bright Minds, Focused Futures\" at UCCI International School on Wednesday, 17 June 2026.",
      "The outreach formed part of ANR Lab's commitment to advancing neuroscience education and public engagement by making brain science accessible, exciting and relevant to young learners. Bringing together pupils aged 6–17 years and their teachers, the programme created an interactive environment where participants explored how the brain supports learning, attention, memory and problem-solving.",
      "Inspiring Curiosity Through Interactive Learning\n\nThe event was designed to introduce children to neuroscience through engaging, age-appropriate activities that transformed complex scientific concepts into enjoyable learning experiences. Participants took part in interactive discussions, attention-based brain games, and hands-on demonstrations that illustrated the remarkable role of the brain in everyday learning.",
      "A major highlight of the programme was the live demonstration of functional near-infrared spectroscopy (fNIRS) technology using the Mendi Headband. This allowed pupils and teachers to experience how modern, non-invasive brain imaging technologies can be used to study attention and brain activity in a safe and engaging way. The demonstration sparked lively discussions and inspired many questions about neuroscience, technology and scientific research.",
      "Supporting Teachers and Future Scientists\n\nIn addition to activities for pupils, the programme included dedicated sessions for teachers, focusing on the importance of sustained attention in classroom learning and practical strategies for promoting healthy attentional habits among children.",
      "The enthusiasm displayed by both pupils and teachers underscored the importance of introducing neuroscience at an early stage of education. Through thoughtful questions, active participation and genuine excitement, many of the children demonstrated a growing interest in science and the possibilities of future careers in neuroscience and related STEM disciplines.",
      "Building a Culture of Science Engagement\n\nAs a research laboratory committed to strengthening neuroscience capacity across Africa, ANR Lab believes that meaningful scientific impact extends beyond the laboratory. Community engagement and science outreach are essential components of our mission to foster scientific literacy, promote brain health awareness, and inspire the next generation of African scientists.",
      "Programmes such as Bright Minds, Focused Futures provide young learners with opportunities to encounter real scientific concepts and technologies, helping them develop curiosity, critical thinking, and confidence in science from an early age.",
      "Appreciation\n\nANR Lab sincerely thanks the management, teachers, pupils and parents of UCCI International School for their warm hospitality and enthusiastic participation. We also acknowledge the continued support of the Society for Neuroscience and the SfN Southern Eastern Nigeria Chapter, whose shared commitment to neuroscience education made this outreach possible."
    ]
  }
];
