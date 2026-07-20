import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      id: 4,
      title: "Inauguration of Tech Club",
      description: "Join us for the inauguration of the Tech Club with exciting activities.",
      date: "March 12, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab, Building D",
      image: "./images/Events/inaugposter.png",
      category: "All Events"
    },
    {
      id: 5,
      title: "Blitz-Py Episode 1",
      description: "Join us for an exciting Python Coding Challenge.",
      date: "December 21, 2022",
      time: "3:20 PM",
      location: "Coding Lab, 4th Floor, AIML Block",
      image: "./images/Events/poster1.jpg",
      category: "hackathon"
    },
    {
      id: 6,
      title: "Blitz-Py Episode 2",
      description: "Join us for an exciting Python Coding Challenge.",
      date: "January 09, 2023",
      time: "2:00 PM",
      location: "3rd Floor, AIML Block",
      image: "./images/Events/poster2.jpg",
      category: "hackathon"
    },
    {
      id: 7,
      title: "Peer Learning for Enhanced Employability",
      description: "Learn the basics of web development in this hands-on workshop.",
      date: "February 14-15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "401, AIML Block",
      image: "./images/Events/Peer to peer.jpeg",
      category: "workshop"
    },
    {
      id: 8,
      title: "Model Your Language",
      description: "Distinguished Lecture on LLMs and Gen AI insights.",
      date: "July 24, 2024",
      time: "11:30 AM",
      location: "RN Shetty Mini Auditorium",
      image: "./images/Events/Harsha sir LLM talk.png",
      category: "tech_talk"
    },
    {
      id: 9,
      title: "AI in CyberSpace",
      description: "Distinguished Lecture on Enhancing Security, Privacy And Threat.",
      date: "March 10, 2025",
      time: "2:00 PM",
      location: "RN Shetty Mini Auditorium",
      image: "./images/Events/Talk.jpg",
      category: "tech_talk"
    },
    {
      id: 10,
      title: "Stackwise Episode 1",
      description: "Hands on peer to peer Workshop.",
      date: "May 31, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online Mode",
      image: "./images/Events/Stackwise.jpg",
      category: "workshop"
    },
  ];

  const eventCategories = [
    { id: "all", name: "All Events" },
    { id: "hackathon", name: "Hackathons" },
    { id: "workshop", name: "Workshops" },
    { id: "tech_talk", name: "Tech Talks" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPast = selectedCategory === "all"
    ? pastEvents
    : pastEvents.filter(event => event.category === selectedCategory);

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading animate-gradient">Events</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for exciting tech events, workshops, hackathons, and inspiring talks.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex gap-2 p-1 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink text-white shadow-lg"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="flex w-full max-w-md mx-auto mb-12 p-1 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50">
              <TabsTrigger value="upcoming" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:via-tech-purple data-[state=active]:to-tech-pink data-[state=active]:text-white">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:via-tech-purple data-[state=active]:to-tech-pink data-[state=active]:text-white">
                Past Events
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming">
              <div className="glass rounded-2xl border-2 border-tech-purple/20 p-12 text-center">
                <div className="relative inline-block mb-6">
                  <Calendar className="mx-auto text-tech-purple h-16 w-16" />
                  <div className="absolute inset-0 bg-tech-purple/20 blur-2xl animate-pulse-slow"></div>
                </div>
                <h2 className="text-3xl font-bold gradient-heading mb-4">Coming Soon!</h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Stay tuned for exciting upcoming events. We're planning something amazing!
                </p>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <Sparkles className="w-5 h-5 text-tech-blue animate-pulse" />
                  <span className="text-sm text-muted-foreground font-medium">New events will be announced soon</span>
                  <Sparkles className="w-5 h-5 text-tech-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.length > 0 ? (
                  filteredPast.map((event) => (
                    <Card key={event.id} className="overflow-hidden card-hover group bg-card/50 backdrop-blur-sm border-border/50 flex flex-col">
                      <div className="relative overflow-hidden bg-muted/30">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardHeader className="flex-1">
                        <CardTitle className="text-lg group-hover:text-tech-purple transition-colors">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4 text-tech-blue flex-shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4 text-tech-purple flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4 text-tech-pink flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 glass rounded-2xl">
                    <p className="text-muted-foreground">No past events in this category.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
