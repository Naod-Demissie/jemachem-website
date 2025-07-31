import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "What types of chemicals do you supply?",
      answer:
        "We supply industrial chemicals, agrochemicals, and laboratory-grade chemicals. This includes solvents, reagents, fertilizers, pesticides, analytical standards, and more.",
    },
    {
      id: "faq-2",
      question: "Do you import directly from manufacturers?",
      answer:
        "Yes, we import chemicals directly from reputable global manufacturers, ensuring high quality and compliance with international standards.",
    },
    {
      id: "faq-3",
      question:
        "Are your products certified and compliant with local regulations?",
      answer:
        "All our chemicals are certified and comply with Ethiopian and international safety, transport, and handling standards. We also provide Safety Data Sheets (SDS) for every product.",
    },
    {
      id: "faq-4",
      question: "Who are your main customers?",
      answer:
        "Our clients include manufacturing industries, agricultural companies, government institutions, research labs, universities, and private laboratories.",
    },
    {
      id: "faq-5",
      question: "Do you provide bulk purchasing or custom orders?",
      answer:
        "Yes, we handle both retail and bulk orders. We also accommodate custom sourcing requests for hard-to-find or specialty chemicals.",
    },
    {
      id: "faq-6",
      question: "How do you ensure safe transportation and storage?",
      answer:
        "We follow strict protocols for chemical handling, transportation, and warehousing in line with GHS and national safety regulations.",
    },
    {
      id: "faq-7",
      question: "Can I request a quote or product catalog?",
      answer:
        "Absolutely. You can request a quote or our latest product catalog by contacting our sales team via phone, email, or our website contact form.",
    },
    {
      id: "faq-8",
      question: "Do you offer delivery services?",
      answer:
        "Yes, we deliver chemicals to customers throughout Ethiopia and neighboring regions, depending on order size and compliance requirements.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-start gap-2 bg-black/10 backdrop-blur-sm border border-black/20 rounded-full px-2 text-black text-sm font-medium">
            <p className="text-sm font-normal text-muted-foreground">FAQs</p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl text-center">
            {heading}
          </h1>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq };
