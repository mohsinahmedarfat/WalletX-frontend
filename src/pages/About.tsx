import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6 lg:px-20">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Us</h1>
        <p className="text-muted-foreground text-lg">
          We’re on a mission to make digital finance simple, secure, and
          accessible for everyone. Learn more about who we are, what we stand
          for, and how we work.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Our Mission
          </h2>
          <p className="text-muted-foreground">
            We believe that financial empowerment should be within everyone’s
            reach. Our platform provides secure, transparent, and reliable tools
            to help you manage your money, send transactions, and grow your
            financial confidence.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Our mission"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-foreground">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-muted-foreground">
                Security and transparency are at the heart of everything we do.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly evolve to bring you modern solutions for everyday
                challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Financial tools that are simple, inclusive, and easy to use for
                everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-foreground">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6 text-center">
              <img
                src="https://i.pravatar.cc/100?img=4"
                alt="Team member"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6 text-center">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="Team member"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-muted-foreground">CTO</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm bg-card text-card-foreground">
            <CardContent className="p-6 text-center">
              <img
                src="https://i.pravatar.cc/100?img=7"
                alt="Team member"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Alex Brown</h3>
              <p className="text-muted-foreground">Lead Engineer</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Join Us on Our Journey
        </h2>
        <p className="text-muted-foreground mb-6">
          We’re building the future of financial empowerment. Want to be a part
          of it?
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
};

export default About;
