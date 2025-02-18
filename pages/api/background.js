const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Bangladesh University",
        degree: "BSc, Bachelor of Science",
        detail:
          "Bachelor's Degree in Computer Science and Engineering from Bangladesh University.",
        year:"08.2022-12.2025",
        location: "Dhaka, Bangladesh",
        Achievements: `Object-Oriented Programming (OOP),
                        Programming Languages: C, C++, Java, Python,
                        Networking,
                        Artificial Intelligence (AI),
                        Data Structures and Algorithms,
                        Database Management,
                        Software Engineering,
                        Web Development,
                        Operating Systems,
                        Cybersecurity`,
      },
      {
        id: 1,
        title: "Feni Govt. Polytechnic Institute",
        degree: "Diploma in Engineering",
        detail:
          "Completed Diploma Engineering in Computer Technology from Feni Govt. Polytechnic Institute.",
        year: "2013-2017",
        location: "Feni, Bangladesh",
        Achievements: `Programming Languages: C, C++, Java, Python,
                        Networking,
                        Artificial Intelligence (AI),
                        Data Structures and Algorithms,
                        Database Management,`
      },
      {
        id: 2,
        title: "Dilalpur High School",
        degree: "SSC, Science Subjects",
        detail:
          "Completed SSC in Science subjects from Dilalpur High School",
        year: "2008-2012",
        location: "Dilalpur, Bangladesh",
        Achievements: `Physics, Math, Chemistry, Computer`
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Technometrics Limited",
        role: "Software Engineer",
        url: "https://technometrics.net/",
        desc: "As a Software Engineer, I use Python, Django, React, Next & JavaScript to build user interfaces for web applications.",
        year: "12/2022 - Present",
        location: "Banani, Dhaka, Bangladesh",
      },
      {
        id: 2,
        title: "TOP IT LDT.",
        role: "Full Stack Developer",
        url: "https://topitltd.com/",
        desc: "As an Full Stack Developer, I used here Node, React & JavaScript to build interactive websites.",
        year: "05/2022 - 11/2022",
        location: "Dhaka, Bangladesh",
      },
      {
        id: 3,
        title: "Faizur Rahman Ideal Institute",
        role: "Executive In IT Department",
        url: "https://frii.com/",
        desc: "I work there as, Executive in IT Department FRII.",
        year: "01/2020 - 04/2022",
        location: "Dhaka, Bangladesh",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
