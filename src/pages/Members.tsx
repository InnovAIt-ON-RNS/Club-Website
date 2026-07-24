import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Mail } from 'lucide-react';

const Members = () => {
  // Core Leadership Team
  const coreTeam = [
    {
      id: 1,
      name: "Noti Gayatri",
      role: "Head",
      bio: "I am a dedicated student committed to fostering learning, collaboration, and innovation. Leading the club towards excellence and growth.",
      image: "./images/Leaders/gayatri.jpg",
      linkedin: "https://www.linkedin.com/in/noti-gayatri-4610002a7",
    },
    {
      id: 2,
      name: "Raageshwari Reddy",
      role: "Co-Head",
      bio: "Driven to create impactful events through teamwork and planning, supporting the club's vision and operations.",
      image: "./images/contrib/Rajeshwari.jpg",
      linkedin: "https://www.linkedin.com/in/raaga-reddy-7a76b035a/",
    },
    {
      id: 3,
      name: "Natania Chadha",
      role: "DMC Head",
      bio: "Blending design and strategy to amplify the reach of every event and manage the club's digital presence.",
      image: "./images/contrib/natania.jpg",
      linkedin: "https://www.linkedin.com/in/natania-chadha-b47994325/",
    },
    {
      id: 4,
      name: "Boosi Reddy Prasad Reddy",
      role: "Technical Head",
      bio: "I assist in organizing events, managing activities, and supporting initiatives that benefit the student community through technical excellence.",
      image: "./images/Leaders/boosi.jpg",
      linkedin: "https://www.linkedin.com/in/boosi-reddy-prasad-reddy-2a951628b/",
    },
    {
      id: 5,
      name: "Chitra Manur",
      role: "Events Head",
      bio: "Leading event planning, coordination, and execution to create memorable experiences for all participants.",
      image: "./images/Leaders/chitra.jpg",
      linkedin: "https://www.linkedin.com/in/chitra-manur-704b7b2a3",
    },
    {
      id: 6,
      name: "Nihar P",
      role: "Sponsorship and Finance Head",
      bio: "I bring in the backing, optimize the resources, and keep the numbers working in our favor building strong partnerships.",
      image: "./images/avatar-placeholder.svg",
      linkedin: "https://www.linkedin.com/in/nihar-prasanna-15a712378/",
    },
  ];
  
  // Technical Team
  const technical = [
    {
      id: 1,
      name: "Rakin Mohammed Rafeeq",
      role: "Technical Team Member",
      bio: "Leveraging technical skills to ensure flawless event execution and innovation.",
      image: "./images/contrib/rakin.jpg",
      linkedin: "https://www.linkedin.com/in/rakinmohammedrafeeq/",
    },
    {
      id: 2,
      name: "Kranthi K",
      role: "Technical Team Member",
      bio: "Bringing tech to life, ensuring smooth and efficient event operations.",
      image: "./images/contrib/kranthi.jpg",
      linkedin: "https://www.linkedin.com/in/kranthi-k-795835296/",
    },
    {
      id: 3,
      name: "Shivee Srivastava",
      role: "Technical Team Member",
      bio: "Dedicated to delivering seamless tech solutions for impactful event execution.",
      image: "./images/contrib/Shivee.jpg",
      linkedin: "https://www.linkedin.com/in/shivee-srivastava-8082a1354/",
    },
    {
      id: 4,
      name: "Allu Varshitha Reddy",
      role: "Technical Team Member",
      bio: "Innovative problem-solver, enhancing event experiences through technical expertise.",
      image: "./images/members/Varshita.jpeg",
      linkedin: "https://www.linkedin.com/in/allu-varshitha-reddy-420b012a0/",
    },
    {
      id: 5,
      name: "Tanisha R",
      role: "Technical Team Member",
      bio: "Contributing to the planning, development, and maintenance of the club's technical initiatives.",
      image: "./images/contrib/Tanisha.jpg",
      linkedin: "https://www.linkedin.com/in/r--tanisha",
    },
    {
      id: 6,
      name: "Vismitha J",
      role: "Technical Team Member",
      bio: "Enthusiastic learner interested in technology, teamwork, and contributing to club activities and events.",
      image: "./images/contrib/Vismitha.jpg",
      linkedin: "https://www.linkedin.com/in/vismitha-j-403b45378",
    },
    {
      id: 7,
      name: "Varun Kumar B M",
      role: "Technical Team Member",
      bio: "Creative and innovative individual with a passion for problem-solving and continuous learning.",
      image: "./images/contrib/Varun.jpg",
      linkedin: "https://www.linkedin.com/in/varun-kumar-b-m-b62318378/",
    },
    {
      id: 8,
      name: "Srujan Vasistha K C",
      role: "Technical Team Member",
      bio: "Contributing to technical projects, website development, and supporting the organization of events and workshops.",
      image: "./images/contrib/Srujan.jpg",
      linkedin: "https://www.linkedin.com/in/srujan-vasistha-k-c-068b42378",
    },
    {
      id: 9,
      name: "Priyanka Koni",
      role: "Technical Team Member",
      bio: "Actively involved in organizing technical events, workshops, and promoting technology-focused learning opportunities.",
      image: "./images/contrib/Priyanka.jpg",
      linkedin: "https://www.linkedin.com/in/priyanka-koni-25b53937a",
    },
    {
      id: 10,
      name: "Jeevan Gowda H M",
      role: "Technical Team Member",
      bio: "Optimizing committee workflows using data-driven insights and AI tools for efficient operations.",
      image: "./images/contrib/Jeevan_Gowda.jpg",
      linkedin: "https://www.linkedin.com/in/jeevan-gowdahm",
    },
  ];

  // Events Team
  const events = [
    {
      id: 1,
      name: "Aditi Krishnanand N",
      role: "Events Team Member",
      bio: "Passionate about organizing and executing flawless events, ensuring every detail aligns to create memorable experiences.",
      image: "./images/members/aditi.jpg",
      linkedin: "https://www.linkedin.com/in/aditikrishna2504/",
    },
    {
      id: 2,
      name: "Nandini Patil",
      role: "Events Team Member",
      bio: "Focused on coordinating logistics, managing teams, and delivering impactful events that inspire and engage attendees.",
      image: "./images/contrib/Nandini.jpg",
      linkedin: "https://www.linkedin.com/in/nandini-patil-1b5835347",
    },
    {
      id: 3,
      name: "Anagha MR",
      role: "Events Team Member",
      bio: "Passionate about crafting engaging and memorable event experiences.",
      image: "./images/contrib/anagha.jpg",
      linkedin: "https://www.linkedin.com/in/anagha-m-r-70b969276/",
    },
    {
      id: 4,
      name: "Shreeya",
      role: "Events Team Member",
      bio: "Focused on turning ideas into well-executed, vibrant events.",
      image: "./images/contrib/shreeya.jpg",
      linkedin: "https://www.linkedin.com/in/shreeya-s-2a5187318/",
    },
    {
      id: 5,
      name: "Surabhi K P",
      role: "Events Team Member",
      bio: "Contributing to planning, organizing, and executing various technical and non-technical events for the club.",
      image: "./images/contrib/surabhi.jpg",
      linkedin: "https://www.linkedin.com/in/surabhi-kp-77a825378",
    },
    {
      id: 6,
      name: "Sweekar SM",
      role: "Events Team Member",
      bio: "Bringing creativity and structure together for seamless event delivery.",
      image: "./images/contrib/Sweekar.jpg",
      linkedin: "https://www.linkedin.com/in/sweekar-s-m-2985a1363/",
    },
    {
      id: 7,
      name: "Yashwanth Kalasa",
      role: "Events Team Member",
      bio: "Event Coordinator responsible for planning, organizing, and managing committee events with team coordination.",
      image: "./images/contrib/Yashwanth.jpg",
      linkedin: "https://www.linkedin.com/in/yashwanth-kalasa-019661306",
    },
    {
      id: 8,
      name: "Kavisha Chauhan",
      role: "Events Team Member",
      bio: "Passionate about teamwork, event planning, and contributing to activities that bring members together.",
      image: "./images/contrib/Kavisha.jpg",
      linkedin: "https://www.linkedin.com/in/kavisha-chauhan-469978378",
    },
    {
      id: 9,
      name: "Sonal Singh",
      role: "Events Team Member",
      bio: "Bringing creativity and energy to event planning and club initiatives.",
      image: "./images/contrib/Sonal.jpg",
      linkedin: "https://www.linkedin.com/in/sonal-singh-0948b5254",
    },
    {
      id: 10,
      name: "Kethan Hrshikesh NU",
      role: "Events Team Member",
      bio: "Looking forward to help the club achieve greater things and actively participate in organizing events and workshops.",
      image: "./images/contrib/Kethan.jpg",
      linkedin: "https://www.linkedin.com/in/kethan-hrshikesh-nu-994624372",
    },
    {
      id: 11,
      name: "Sujith G",
      role: "Events Team Member",
      bio: "Contributing to event coordination and ensuring smooth execution of club activities.",
      image: "./images/avatar-placeholder.svg",
      linkedin: "#",
    },
    {
      id: 12,
      name: "Lakshmish G R",
      role: "Events Team Member",
      bio: "Contributing to event planning, coordination, and execution to ensure engaging and successful club activities.",
      image: "./images/contrib/Lakshmish.jpg",
      linkedin: "https://www.linkedin.com/in/lakshmish-gr",
    },
    {
      id: 13,
      name: "Monish Sharma",
      role: "Events Team Member",
      bio: "Contributing by helping organize events and making sure everything comes together smoothly.",
      image: "./images/contrib/Monish.jpg",
      linkedin: "https://www.linkedin.com/in/monish-sharma",
    },
    {
      id: 14,
      name: "Pratiksha Patil",
      role: "Events Team Member",
      bio: "Helping turn ideas into exciting events that bring students together, promote learning, and make the community more engaging and vibrant.",
      image: "./images/contrib/Pratiksha.jpg",
      linkedin: "https://www.linkedin.com/in/pratiksha-patil-54473b324",
    },
    {
      id: 15,
      name: "Trisha S Shetty",
      role: "Events Team Member",
      bio: "Coordinating operations to bring diverse campus events and hackathons to life with structured execution.",
      image: "./images/contrib/Trisha.jpg",
      linkedin: "https://www.linkedin.com/in/trisha-s-shetty",
    },
    {
      id: 16,
      name: "Ronit Agarwal",
      role: "Events Team Member",
      bio: "Responsible for ensuring events are organized perfectly and smoothly without any problem.",
      image: "./images/contrib/Ronit.jpg",
      linkedin: "https://www.linkedin.com/in/ronit-agarwal-5277532b4",
    },
    {
      id: 17,
      name: "Kiran Kumar H",
      role: "Events Team Member",
      bio: "Helping organize and coordinate college events to make every event successful and enjoyable for everyone.",
      image: "./images/contrib/Kiran.jpg",
      linkedin: "https://www.linkedin.com/in/kiran-kumar-h-170a80397",
    },
  ];

  // Public Relations Team
  const publicRelations = [
    {
      id: 1,
      name: "Sanjitha Ramya Gowda",
      role: "Public Relations Team Member",
      bio: "Handling outreach and communications, ensuring our future events get the attention they deserve.",
      image: "./images/contrib/Sanjitha.jpg",
      linkedin: "https://www.linkedin.com/in/sanjitha-ramya-gowda-72942a3b7",
    },
    {
      id: 2,
      name: "Nabarun Sen",
      role: "Public Relations Team Member",
      bio: "Responsible for shaping the club's public presence, managing external communications, and building community relationships.",
      image: "./images/contrib/Nabarun.jpg",
      linkedin: "https://www.linkedin.com/in/nabarun-sen-735b7637a",
    },
    {
      id: 3,
      name: "Jeevan Krishna",
      role: "Public Relations Team Member",
      bio: "Helping in spreading the message and making sure everyone participates in the events related to AIML.",
      image: "./images/contrib/Jeevan_Krishna.jpg",
      linkedin: "https://www.linkedin.com/in/jeevan-krishna-46a3162b7",
    },
    {
      id: 4,
      name: "Sanjana Deshpande",
      role: "Public Relations Team Member",
      bio: "Combining creativity with communication to promote activities, engage with the community, and showcase innovation.",
      image: "./images/contrib/Sanjana.jpg",
      linkedin: "https://www.linkedin.com/in/sanjana-deshpande-a44a433a9",
    },
    {
      id: 4,
      name: "Shravani K",
      role: "Public Relations Team Member",
      bio: "Supporting the club's communication and public relations initiatives.",
      image: "./images/avatar-placeholder.svg",
      linkedin: "#",
    },
  ];

  // DMC Team
  const dmc = [
    {
      id: 1,
      name: "T Siva Sai Phalguni",
      role: "Digital Media Coordinator",
      bio: "Blending creativity and tech to manage and grow the club's online footprint.",
      image: "./images/contrib/Phalguni.jpg",
      linkedin: "https://www.linkedin.com/in/phalguni-t-69a54b262",
    },
    {
      id: 2,
      name: "Varsha S",
      role: "Digital Media Coordinator",
      bio: "Focused on visual storytelling and consistent branding across digital platforms.",
      image: "./images/contrib/Varsha.jpg",
      linkedin: "https://www.linkedin.com/in/varsha-suresh-67b9b5363",
    },
    {
      id: 3,
      name: "A Nikhil Gouda",
      role: "Digital Media Coordinator",
      bio: "Contributing to the club's visual communication and digital media efforts.",
      image: "./images/contrib/Nikhil.jpg",
      linkedin: "https://www.linkedin.com/in/nikhilgouda-annagouni-b1216a316",
    },
    {
      id: 4,
      name: "Chinmayi V Hegde",
      role: "Digital Media Coordinator",
      bio: "Contributing to the club's visual communication by designing posters and announcements.",
      image: "./images/contrib/Chinmayi.jpg",
      linkedin: "https://www.linkedin.com/in/chinmayi-v-hegde",
    },
    {
      id: 5,
      name: "Rakshitha S",
      role: "Digital Media Coordinator",
      bio: "Working on digital content creation and visual design for the club.",
      image: "./images/avatar-placeholder.svg",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Mohammad Rehan Ahemad",
      role: "Digital Media Coordinator",
      bio: "Specializing in video editing and photography for digital media initiatives.",
      image: "./images/contrib/Rehan.jpg",
      linkedin: "#",
    },
  ];

  // Sponsorship and Finance Team
  const sponsorshipFinance = [
    {
      id: 1,
      name: "Dhanya",
      role: "Sponsorship & Finance Team Member",
      bio: "A Finance Associate with an interest in finance, budgeting, and organizational management.",
      image: "./images/members/dhanya.jpg",
      linkedin: "https://www.linkedin.com/in/dhanya-patgar-7450ba2a7/",
    },
    {
      id: 2,
      name: "Katkam Shivamani",
      role: "Sponsorship & Finance Team Member",
      bio: "Focusing on securing sponsorships, managing financial resources, and fostering valuable partnerships.",
      image: "./images/contrib/katkam.jpg",
      linkedin: "https://www.linkedin.com/in/katkam-shivamani-8466a7330",
    },
    {
      id: 3,
      name: "G V Adithiyha",
      role: "Sponsorship & Finance Team Member",
      bio: "A Finance Associate at the RNSIT Innovation Club with an interest in finance, budgeting, and organizational management.",
      image: "./images/contrib/GV.jpg",
      linkedin: "https://www.linkedin.com/in/adithiyha-g-v-b7653a28a",
    },
    {
      id: 4,
      name: "Punya K",
      role: "Sponsorship & Finance Team Member",
      bio: "Committed to managing resources efficiently for smooth event execution.",
      image: "./images/contrib/punya.jpg",
      linkedin: "https://www.linkedin.com/in/punya-k-3027a5359/",
    },
    {
      id: 5,
      name: "Harsha K",
      role: "Sponsorship & Finance Team Member",
      bio: "Here to try out different things and help out with tasks to support the club.",
      image: "./images/contrib/Harsha.jpg",
      linkedin: "https://www.linkedin.com/in/harsha-k-66238435b",
    },
    {
      id: 6,
      name: "Giridhar R",
      role: "Sponsorship & Finance Team Member",
      bio: "Active member who enjoys collaborating with peers, participating in events, and supporting club initiatives.",
      image: "./images/contrib/Giridhar.jpg",
      linkedin: "https://www.linkedin.com/in/giridhar26",
    },
    {
      id: 7,
      name: "D Sinchana",
      role: "Sponsorship & Finance Team Member",
      bio: "Assisting in building sponsor relationships and supporting the club's events and initiatives.",
      image: "./images/contrib/Sinchana.jpg",
      linkedin: "https://www.linkedin.com/in/d-sinchana-0188a6339",
    },
    {
      id: 8,
      name: "Sakshi D Bhat",
      role: "Sponsorship & Finance Team Member",
      bio: "Securing resources to bring club ideas into reality while opening up networking opportunities.",
      image: "./images/contrib/Sakshi.jpg",
      linkedin: "https://www.linkedin.com/in/sakshi-bhat",
    },
    {
      id: 9,
      name: "Shishir Naik",
      role: "Sponsorship & Finance Team Member",
      bio: "Willing to contribute to any task assigned for the club's success.",
      image: "./images/contrib/Shishir.jpg",
      linkedin: "https://www.linkedin.com/in/shishir-naik",
    },
    {
      id: 10,
      name: "Vikranth V Chagi",
      role: "Sponsorship & Finance Team Member",
      bio: "Supporting sponsorship and financial operations for the club.",
      image: "./images/avatar-placeholder.svg",
      linkedin: "#",
    },
  ];
  
  const alumni = [
    {
      id: 1,
      name: "Sujal S",
      role: "Former Head",
      bio: "Enthusiastic about advancing AI and ML through innovation, collaboration, and continuous learning.",
      image: "./images/members/Sujal S.jpg",
      linkedin: "https://www.linkedin.com/in/sujal-sarode-3a5b3a25b/"
    },
    {
      id: 2,
      name: "Syed Javed M",
      role: "Former Co Head",
      bio: "Software Engineering student focusing on web technologies and cloud computing. Organizing workshops and hackathons.",
      image: "./images/members/Syed J.jpg",
      linkedin: "https://www.linkedin.com/in/syed-javed-m/"
    },
    {
      id: 3,
      name: "Nandan M Naik",
      role: "Former Tech Head",
      bio: "Passionate about leveraging technical skills to design, develop, and support innovative solutions for impactful events.",
      image: "./images/members/Nandan.jpg",
      linkedin: "https://www.linkedin.com/in/nandan-naik-201539255/"
    },
    {
      id: 4,
      name: "Varsha V",
      role: "Former Event Head",
      bio: "Focused on creating memorable experiences by leading event planning, coordinating teams, and ensuring seamless execution.",
      image: "./images/members/Varsha.jpg",
      linkedin: "https://www.linkedin.com/in/varsha-v-a16483264/"
    },
    {
      id: 5,
      name: "Surabhi Metikurke",
      role: "Former Marketing and Finance Head",
      bio: "Strategically managing finances and crafting innovative marketing strategies to drive impactful events and initiatives.",
      image: "./images/members/Surabhi.jpg",
      linkedin: "https://www.linkedin.com/in/surabhi-metikurke-828268260/"
    },
    {
      id: 6,
      name: "Anantesh Gopal",
      role: "Former Tech Team Member",
      bio: "Dedicated to solving complex problems through innovative technology, ensuring seamless execution and performance for all technical aspects of events.",
      image: "./images/members/Anantesh.jpg",
      linkedin: "https://www.linkedin.com/in/anantesh-gopal-6635b7264/"
    },
    {
      id: 7,
      name: "Prajwal M",
      role: "Former Tech Team Member",
      bio: "Focused on leveraging technical expertise to design and implement robust solutions that power the success of every event.",
      image: "./images/members/Prajwal.jpg",
      linkedin: "https://www.linkedin.com/in/prajwal-m-787b6733b/"
    },
    {
      id: 8,
      name: "Varshitha M",
      role: "Former Tech Team Member",
      bio: "Tech-driven, committed to solving challenges and optimizing event technology.",
      image: "./images/contrib/Varshita.jpg",
      linkedin: "https://www.linkedin.com/in/varshitha-m-9565aa260"
    },
    {
      id: 9,
      name: "Vismaya Jagadeesh",
      role: "Former Finance Team Member",
      bio: "Focused on maintaining financial accuracy and efficiency, ensuring smooth budgeting and resource allocation for all events.",
      image: "./images/members/Vismaya.jpg",
      linkedin: "https://www.linkedin.com/in/vismaya-jagadeesh/"
    },
    {
      id: 10,
      name: "Srushti R Gowda",
      role: "Former Marketing Team Member",
      bio: "Creative and data-driven, focused on developing compelling marketing strategies that drive engagement and amplify event impact.",
      image: "./images/members/Srusthi.jpeg",
      linkedin: "https://www.linkedin.com/in/srushti-r-gowda-961764259/"
    },
    {
      id: 11,
      name: "Prarthana Navada",
      role: "Former Events Team Member",
      bio: "Detail-oriented organizer ensuring smooth event execution.",
      image: "./images/contrib/Prarthana.jpg",
      linkedin: "https://www.linkedin.com/in/prarthana-navada-91540a359/"
    },
    {
      id: 12,
      name: "Amogh N Kotha",
      role: "Former Head",
      bio: "Driven by a passion for innovation and collaboration, contributed significantly to the club's growth and legacy.",
      image: "./images/Alumni/amogh-kotha.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-kotha-a5617823b/"
    },
    {
      id: 13,
      name: "Amogh M",
      role: "Former Tech Lead",
      bio: "Played a key role in advancing the club's technical initiatives, fostering innovation and building reliable tech solutions.",
      image: "./images/Alumni/amogh-bharadwaj.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-m-985490216/"
    },
    {
      id: 14,
      name: "Aadi B Kumar",
      role: "Former Marketing Lead",
      bio: "Contributed to the club's growth by driving creative outreach and impactful marketing initiatives.",
      image: "./images/Alumni/aadi-kumar.jpg",
      linkedin: "https://www.linkedin.com/in/aadi-b-kumar-584514254/"
    },
    {
      id: 15,
      name: "Anand Okade",
      image: "./images/Alumni/anand-okade.jpg",
      bio: "Collaborated on delivering seamless technical experiences for impactful events.",
      role: "Former Tech Team Member",
      linkedin: "https://www.linkedin.com/in/anand-okade-a9614a220/",
    },
    {
      id: 16,
      name: "Apeksha D Ankola",
      role: "Former Tech Team Member",
      bio: "Contributed to building reliable tech foundations that supported successful events.",
      image: "./images/Alumni/apeksha-d.jpg",
      linkedin: "https://www.linkedin.com/in/apeksha-d-ankola-aa4512254/",
    },
    {
      id: 17,
      name: "Ayaj Anand",
      role: "Former Tech Team Member",
      bio: "Helped drive innovation through hands-on technical solutions and teamwork.",
      image: "./images/Alumni/ayaj-anand.jpg",
      linkedin: "https://www.linkedin.com/in/ayaj-anand-492986127/",
    }, 
    {
      id: 18,
      name: "Dhruva N U",
      role: "Former Tech Team Member",
      bio: "Supported the club's technical growth with a focus on efficiency and creativity.",
      image: "./images/Alumni/dhruva-nu.jpg",
      linkedin: "https://www.linkedin.com/in/dhruva-n-u-b6788a249/",
    },
    {
      id: 19,
      name: "Nishitha R Lokande",
      role: "Former Tech Team Member",
      bio: "Played an active role in implementing and maintaining event tech systems.",
      image: "./images/Alumni/nishitha-L.jpg",  
      linkedin: "https://www.linkedin.com/in/nishitha-r-lokande-094509254/",
    },
    {
      id: 20,
      name: "Amogh Athreya",
      role: "Former Marketing Team Member",
      bio: "Contributed to the club's visibility through creative campaigns and consistent outreach.",
      image: "./images/Alumni/amogh-athreya.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-athreya-454515254/",
    },
    {
      id: 21,
      name: "Ranjitha S",
      role: "Former Events Team Member",
      bio: "Helped organize and execute impactful events with attention to detail and team coordination.",
      image: "./images/Alumni/ranjitha-s.jpg",
      linkedin: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals behind our tech club who work together to create amazing experiences.
            </p>
          </div>
          
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="core">Core Team</TabsTrigger>
              <TabsTrigger value="contributors">Contributors</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
            </TabsList>
            
            <TabsContent value="core">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreTeam.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-tech-purple font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
         
            <TabsContent value="contributors">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-12">
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="pr">PR</TabsTrigger>
                  <TabsTrigger value="dmc">DMC</TabsTrigger>
                  <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
                </TabsList>
            
                <TabsContent value="technical">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technical.map((member) => (
                      <Card key={member.id} className="overflow-hidden card-hover">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription className="text-tech-purple font-medium">
                            {member.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                          <div className="flex space-x-3">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                              <Linkedin size={18} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
            
                <TabsContent value="events">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((member) => (
                      <Card key={member.id} className="overflow-hidden card-hover">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription className="text-tech-purple font-medium">
                            {member.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                          <div className="flex space-x-3">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                              <Linkedin size={18} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pr">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {publicRelations.map((member) => (
                      <Card key={member.id} className="overflow-hidden card-hover">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription className="text-tech-purple font-medium">
                            {member.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                          <div className="flex space-x-3">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                              <Linkedin size={18} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="dmc">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dmc.map((member) => (
                      <Card key={member.id} className="overflow-hidden card-hover">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription className="text-tech-purple font-medium">
                            {member.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                          <div className="flex space-x-3">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                              <Linkedin size={18} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sponsorship">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sponsorshipFinance.map((member) => (
                      <Card key={member.id} className="overflow-hidden card-hover">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription className="text-tech-purple font-medium">
                            {member.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                          <div className="flex space-x-3">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                              <Linkedin size={18} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="alumni">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {alumni.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
