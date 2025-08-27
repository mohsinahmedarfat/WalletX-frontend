import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Here are some common questions our users ask.  
        Click on a question to see the answer.
      </p>

      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your service about?</AccordionTrigger>
          <AccordionContent>
            We provide solutions to help businesses grow by offering 
            innovative tools and excellent customer support.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach us anytime via the contact form on our website 
            or email us at <span className="font-medium">support@example.com</span>.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
          <AccordionContent>
            Yes, we have a 14-day refund policy. If you’re not satisfied, 
            you can request a full refund within 14 days of purchase.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
          <AccordionContent>
            Absolutely! You can try our platform free for 7 days before 
            choosing a paid plan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
