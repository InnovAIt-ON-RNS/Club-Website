import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a question or want to get involved? Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-muted w-12 h-12 rounded-full flex items-center justify-center text-tech-purple mb-4">
                  <a href="mailto:innovaiton.aiml@rnsit.ac.in" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a href="mailto:innovaiton.aiml@rnsit.ac.in" className="text-tech-purple hover:underline">
                  innovaiton.aiml@rnsit.ac.in
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-muted w-12 h-12 rounded-full flex items-center justify-center text-tech-purple mb-4">
                  <a href="https://maps.app.goo.gl/wKM71Nw3nYX684ydA" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-6 w-6" />
                  </a>
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Our campus location</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <address className="not-italic text-muted-foreground">
                  InnovAIt-ON Club<br />
                  AIML Block 3rd Floor<br />
                  RNS Institute of Technology, Bengaluru
                </address>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-muted w-12 h-12 rounded-full flex items-center justify-center text-tech-purple mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Club Coordinators</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div>
                  <p className="font-medium">Sujal S</p>
                  <a href="tel:+918310630937" className="text-tech-purple hover:underline">
                    +91 83106 30937
                  </a>
                </div>
                <div>
                  <p className="font-medium">Syed Javed M</p>
                  <a href="tel:+917899278471" className="text-tech-purple hover:underline">
                    +91 78992 78471
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

         
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
