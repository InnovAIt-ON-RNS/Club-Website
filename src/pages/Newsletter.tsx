import React, { FormEvent, useRef } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Newsletter = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();

    // Validate that both fields are filled
    if (!name || !email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    // Show success message
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates soon!",
    });

    // Clear form fields
    if (nameRef.current) nameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
  };

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">Newsletter</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Stay updated with our latest articles, tech insights, and community news.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>Get the latest articles and updates delivered to your inbox.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubscribe}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      ref={nameRef}
                      id="name"
                      type="text"
                      className="w-full p-2 rounded-md border border-border"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      ref={emailRef}
                      id="email"
                      type="email"
                      className="w-full p-2 rounded-md border border-border"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-tech-purple hover:bg-tech-purple/90">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
};

export default Newsletter;
