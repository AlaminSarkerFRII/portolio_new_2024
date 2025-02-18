const portfolio = [
    {
        id: 0,
        projectName: "BGB E-Recruitments Projects",
        url: "https://joinborderguard.bgb.gov.bd/",
        image: "projects/bgb_banner.png",
        projectDetail: "Apply for Border Guard Bangladesh ( BGB ) different kinds of jobs .Maintenance of all kinds of job features for applicants and users .Download Applicant Admit Card and Assign to Exam Center.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Python"
            },
            {
                tech: "Django"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "Docker"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Social Media Monitoring (SMM)",
        url: "/domain-private",
        image: "projects/demo.jpg",
        projectDetail: "Monitoring all kinds of social media. Private Projects for Counter Terrism Unit of Bangladesh",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NLP"
            },
            {
                tech: "Machine Learning"
            },
            {
                tech: "Django"
            },
            {
                tech: "Docker"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "TOP IT LTD",
        url: "https://topitltd.com/",
        image: "projects/top_it.png",
        projectDetail: "TOP IT LTD is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Next.js"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "Express.js"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "TopClientOffer",
        url: "https://topclientoffer.com/",
        image: "projects/top_client.png",
        projectDetail: "High Traffic Monetization CPA Network",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Next.js"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "Express.js"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 4,
        projectName: "Spechlytics",
        url: "/domain-private",
        image: "projects/demo.jpg",
        projectDetail: "Private Projects for NTMC of Bangladesh",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "PHP"
            },
            {
                tech: "NLP"
            },
            {
                tech: "Machine Learning"
            },
            {
                tech: "HTML, CSS, JavaScript"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
