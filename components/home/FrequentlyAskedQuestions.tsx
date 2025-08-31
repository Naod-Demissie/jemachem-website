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
        "We supply chemicals across eight major categories including Detergent and Cosmetics, Food and Beverage, Paint and Pigments, Plastic and Foam, Tannery and Shoes, Laboratory Chemicals, Textile Chemicals, and Water Treatment Chemicals. Our portfolio includes over 200 high-quality chemical products.",
    },
    {
      id: "faq-2",
      question: "Do you import directly from manufacturers?",
      answer:
        "Yes, we import chemicals directly from reputable global manufacturers, ensuring high quality and compliance with international standards. Our direct partnerships allow us to offer competitive pricing and reliable supply.",
    },
    {
      id: "faq-3",
      question:
        "Are your products certified and compliant with local regulations?",
      answer:
        "All our chemicals are certified and comply with Ethiopian and international safety, transport, and handling standards. We provide Safety Data Sheets (SDS) for every product and ensure full regulatory compliance.",
    },
    {
      id: "faq-4",
      question: "What industries do you serve?",
      answer:
        "We serve diverse industries including food processing, textiles, plastics, paint manufacturing, cosmetics, water treatment, and laboratory research. Our chemicals support both industrial and commercial applications.",
    },
    {
      id: "faq-5",
      question: "Do you provide technical support and expertise?",
      answer:
        "Yes, we offer comprehensive technical support and expertise to help clients utilize chemicals effectively and safely. Our team provides guidance on chemical applications, safety protocols, and best practices.",
    },
    {
      id: "faq-6",
      question: "How do you ensure safe transportation and storage?",
      answer:
        "We follow strict protocols for chemical handling, transportation, and warehousing in line with GHS and national safety regulations. Our logistics expertise ensures safe delivery across Ethiopia.",
    },
    {
      id: "faq-7",
      question: "Do you offer delivery services?",
      answer:
        "Yes, we deliver chemicals to customers throughout Ethiopia, covering key industrial hubs from Addis Ababa to Hawassa, Bahir Dar to Dire Dawa, with full compliance and safety measures.",
    },
    {
      id: "faq-8",
      question: "Can you source specialty or hard-to-find chemicals?",
      answer:
        "Absolutely. Our global sourcing network and expertise in chemical importation allow us to source specialty chemicals and accommodate custom requests for specific industry needs.",
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
