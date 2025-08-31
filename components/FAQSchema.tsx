export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of chemicals does Jemachem Trading supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jemachem Trading supplies industrial chemicals, laboratory chemicals, detergent chemicals, food-grade chemicals, paint chemicals, water treatment chemicals, leather chemicals, and textile chemicals for various industries across Ethiopia."
        }
      },
      {
        "@type": "Question", 
        "name": "Does Jemachem Trading deliver chemicals across Ethiopia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide reliable chemical distribution services across Ethiopia, ensuring timely delivery to manufacturing facilities and research laboratories throughout the country."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Jemachem Trading different from other chemical suppliers?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We are Ethiopia's premier chemical import company with proven expertise in sourcing high-quality chemicals globally, maintaining strict quality standards, and providing exceptional customer service with reliable logistics and supply chain management."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Jemachem Trading for chemical inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us via email at jemachemtrading@gmail.com, through our Telegram channel @Jemachem, or by visiting our office in Addis Ababa. We're here to help with all your chemical supply needs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Jemachem Trading serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve manufacturing, research laboratories, food processing, textile manufacturing, leather processing, water treatment, and many other industries that require high-quality chemical solutions."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
