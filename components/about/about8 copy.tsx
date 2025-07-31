import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function About8() {
  return (
    <section className="py-32">
      {/* Hero Section */}
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15">
        <div>
          <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl">
            We’re dedicated to delivering reliable chemical and equipment
            solutions that drive agriculture, science, and industry forward.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container max-w-5xl border-y py-5">
        <h2 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground">
          Our Impact
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              15+
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              Industries Served
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              200+
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              Clients Nationwide
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              12+
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              Years of Expertise
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              98%
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              On-time Delivery Rate
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Access to high-quality chemicals and equipment shouldn’t be a
            bottleneck for progress. In Ethiopia, reliable supply chains for
            agricultural, industrial, and laboratory sectors are still catching
            up to growing demand. That’s why we exist.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            We’re not just importers. We’re enablers of progress.
          </h2>
          <p className="text-lg">
            Founded with a vision to bridge the supply gap, we’ve built
            long-standing partnerships with trusted international manufacturers
            and local institutions. Whether it’s fertilizer for a cooperative,
            reagents for a university lab, or machinery for a factory, we source
            and deliver with precision.
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="my-5 pb-10 md:my-8 md:pb-12 lg:my-12 lg:pb-15">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <img
                  src="/warehouse.jpg"
                  alt="Warehouse facility"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <img
                  src="/lab-equipment.jpg"
                  alt="Modern lab setup"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <img
                  src="/agro-field.jpg"
                  alt="Agricultural site with chemical spraying"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Vision / Infrastructure Section */}
      <section className="container">
        <div className="mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Our distribution network covers key industrial and agricultural hubs
            across Ethiopia. From Addis Ababa to Hawassa, Bahir Dar to Dire Dawa
            — we make sure chemicals and equipment arrive safely, on time, and
            fully compliant.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Locally rooted. Globally connected.
          </h2>

          <p className="text-lg">
            Under the leadership of our General Manager,{" "}
            <strong>Aymen Muhaba</strong>, our team brings together technical
            expertise, international sourcing knowledge, and a strong
            understanding of local industry needs. We’re here to empower
            Ethiopian businesses to thrive.
          </p>
        </div>
      </section>
    </section>
  );
}
