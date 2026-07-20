import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Globe, Smartphone, Cloud, Cpu, Shield, Lightbulb, Users, Heart, BookOpen } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      title: "Artificial Intelligence & ML",
      description: "Exploring the cutting-edge of AI, deep learning, and machine learning applications.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      description: "Building modern, responsive websites using the latest frameworks and technologies.",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications for iOS and Android devices.",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Robotics & IoT",
      description: "Working with hardware and software to build robots and internet-connected devices.",
      icon: Cpu,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable, reliable, and distributed applications.",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cybersecurity",
      description: "Learning about security principles and ethical hacking to protect digital assets.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
  ];

  const leaders = [
    {
      name: "Mr. SATISH SHETTY",
      title: "Chairman, RNSIT",
      description: "Chairman of RNS Institute of Technology, guiding the institution's vision and mission.",
      image: "./images/Leaders/Chair.webp"
    },
    {
      name: "Mr. KARAN S SHETTY",
      title: "CEO, RNSIT",
      description: "CEO of RNS Institute of Technology, overseeing the institution's operations and strategic direction.",
      image: "./images/Leaders/CEO.webp"
    },
     {
      name: "Mr. MURALIKRISHNA MYSORE",
      title: "CTO, RNSIT",
      description: "Chief Technology Officer of RNS Institute of Technology, leading technology initiatives and innovations.",
      image: "./images/Leaders/CTO.webp"
    },
    {
      name: "Dr. M K VENKATESHA",
      title: "Director, RNSIT",
      description: "Director of RNS Institute of Technology, providing vision and leadership to the college community.",
      image: "./images/Leaders/Director.webp"
    },
    {
      name: "Dr. RAMESH BABU H S",
      title: "Principal, RNSIT",
      description: "Principal of RNS Institute of Technology, guiding the institution and its students.",
      image: "./images/Leaders/Principal.webp"
    },
    {
      name: "Dr. ANDHE PALLAVI",
      title: "HOD, AIML Department",
      description: "Head of the Department, Artificial Intelligence and Machine Learning, RNSIT.",
      image: "./images/Leaders/Dr.-Andhe-Pallavi Ma'am HOD.jpg"
    },
  ];

  const advisors = [
    {
      name: "Prof. Sajitha N",
      title: "Faculty Advisor",
      description: "Professor of Computer Science in Artificial Intelligence and Machine Learning, guides our club with valuable insights and mentorship.",
      image: "./images/members/Sajitha.jpg"
    },
    {
      name: "Mr. Shreyas Mahadeva",
      title: "Design & Media Coordinator",
      description: "Plays a key role in shaping our club's visual identity and media presence through creative contributions and design support.",
      image: "./images/members/Shreyas_sir.jpg"
    },
  ];

  const values = [
    {
      id: "innovation",
      title: "Innovation",
      icon: Lightbulb,
      description: "We encourage creative thinking and novel approaches to problem-solving. Our members are constantly pushing boundaries and exploring new technologies to create impactful solutions.",
      color: "from-tech-blue to-tech-cyan"
    },
    {
      id: "collaboration",
      title: "Collaboration",
      icon: Users,
      description: "We believe in the power of teamwork. By combining diverse skills and perspectives, we create better outcomes than any individual could achieve alone.",
      color: "from-tech-purple to-tech-violet"
    },
    {
      id: "inclusivity",
      title: "Inclusivity",
      icon: Heart,
      description: "We welcome members from all backgrounds, experience levels, and disciplines. Everyone deserves the opportunity to learn and contribute to the tech community.",
      color: "from-tech-pink to-tech-fuchsia"
    },
    {
      id: "learning",
      title: "Continuous Learning",
      icon: BookOpen,
      description: "Technology is always evolving, and so are we. We promote a culture of lifelong learning, where members are encouraged to constantly develop their skills and stay curious.",
      color: "from-tech-cyan to-tech-teal"
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading animate-gradient">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission, history, and the team behind Tech Club.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-heading">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in empowering students to explore, learn, and innovate in the world of technology. Our mission is to create a collaborative environment where tech enthusiasts can share knowledge, build projects, and grow together.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through workshops, hackathons, and speaker events, we aim to bridge the gap between academic learning and industry practice, preparing our members for successful careers in technology.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="glass border-2 border-tech-purple/20 card-hover">
                  <CardContent className="p-6">
                    <blockquote className="text-base italic mb-4 text-muted-foreground">
                      "Proud to see the club grow from an idea to a hub of creativity and AI excellence."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-tech-purple">
                        <img
                          src="./images/Alumni/amogh-kotha.jpg"
                          alt="Club Head"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Amogh Kotha</p>
                        <p className="text-sm text-tech-purple">Head (2023-25)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-2 border-tech-blue/20 card-hover">
                  <CardContent className="p-6">
                    <blockquote className="text-base italic mb-4 text-muted-foreground">
                      "Leading the technical front taught me how to turn ideas into action and inspire innovation at every step."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-tech-blue">
                        <img
                          src="./images/Alumni/amogh-bharadwaj.jpg"
                          alt="Technical Head"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Amogh M</p>
                        <p className="text-sm text-tech-blue">Technical Head (2023-25)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Our Focus Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We explore and develop expertise in various domains of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-tech-purple/50 transition-all duration-300 card-hover overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${area.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-tech-purple transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Leaders */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Our Leaders</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the institutional leaders who inspire and support our club's vision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <Card key={index} className="overflow-hidden card-hover group bg-card/50 backdrop-blur-sm border-border/50 flex flex-col">
                  <div className="relative overflow-hidden bg-muted/30">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="text-center flex-1">
                    <CardTitle className="text-lg group-hover:text-tech-purple transition-colors">{leader.name}</CardTitle>
                    <CardDescription className="text-tech-purple font-semibold">
                      {leader.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Advisors */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Our Advisors</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the faculty members who guide and support our club activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <Card key={index} className="overflow-hidden card-hover group bg-card/50 backdrop-blur-sm border-border/50 flex flex-col">
                  <div className="relative overflow-hidden bg-muted/30">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="text-center flex-1">
                    <CardTitle className="text-lg group-hover:text-tech-purple transition-colors">{advisor.name}</CardTitle>
                    <CardDescription className="text-tech-purple font-semibold">
                      {advisor.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm">{advisor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values */}
          <section>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-border/50">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Our Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our community and activities.
                </p>
              </div>

              <Tabs defaultValue="innovation" className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-4 gap-2 mb-12 bg-muted/50 p-1">
                  {values.map((value) => (
                    <TabsTrigger
                      key={value.id}
                      value={value.id}
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:via-tech-purple data-[state=active]:to-tech-pink data-[state=active]:text-white"
                    >
                      {value.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {values.map((value) => {
                  const IconComponent = value.icon;
                  return (
                    <TabsContent key={value.id} value={value.id}>
                      <div className="max-w-3xl mx-auto text-center">
                        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-2xl`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">{value.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;