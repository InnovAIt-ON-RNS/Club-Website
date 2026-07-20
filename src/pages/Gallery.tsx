
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    { id: "all", name: "All" },
    { id: "blitzpy", name: "Blitz-Py" },
    { id: "talk", name: "Talks" },
    { id: "workshops", name: "Workshops" },
  ];
  
  const galleryItems = [
    {
      id: "blitzpy-1",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py.jpeg"
    },
    {
      id: "blitzpy-2",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py2.jpeg"
    },
    {
      id: "blitzpy-3",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/blitz py4.jpeg"
    },
    {
      id: "blitzpy-4",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py 1.jpg"
    },
    {
      id: "blitzpy-5",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py 5.jpeg"
    },
    {
      id: "blitzpy-6",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz 3.jpeg"
    },
    {
      id: "talk-1",
      title: "Computer Networks Talk",
      category: "talk",
      image: "./images/Gallery/Talk 1.jpeg"
    },
    {
      id: "talk-2",
      title: "Computer Networks Talk",
      category: "talk",
      image: "./images/Gallery/Talk.jpeg"
    },
    {
      id: "talk-3",
      title: "Computer Networks Talk",
      category: "talk",
      image: "./images/Gallery/talk 2.jpg"
    },
    {
      id: "talk-4",
      title: "AI in Cyberspace",
      category: "talk",
      image: "./images/Gallery/Ai Cyberspace.jpg"
    },
    {
      id: "talk-5",
      title: "Innovation Team",
      category: "talk",
      image: "./images/Gallery/Innovaiton team.jpg"
    },
    {
      id: "workshops-1",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer.jpeg"
    },
    {
      id: "workshops-2",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer1.jpeg"
    },
    {
      id: "workshops-3",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer2.jpeg"
    },
    {
      id: "workshops-4",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer3.jpeg"
    },
  ];
  
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading animate-gradient">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore photos from our past events, workshops, and memorable moments.
            </p>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="inline-flex gap-2 p-1 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:via-tech-purple data-[state=active]:to-tech-pink data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {galleryItems
                    .filter(item => category.id === "all" || item.category === category.id)
                    .map((item) => (
                      <Card 
                        key={item.id} 
                        className="overflow-hidden card-hover group bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                      >
                        <CardContent className="p-0">
                          <div className="relative bg-muted/30 aspect-video overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                              <div className="p-4 w-full">
                                <h3 className="text-white text-base font-semibold">{item.title}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <ImageIcon className="w-4 h-4 text-tech-purple" />
                                  <span className="text-sm text-white/80">Click to view</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;