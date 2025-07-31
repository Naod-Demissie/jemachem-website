import { Button } from "@/components/ui/button";

interface About3Props {
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultAchievements = [
  { label: "Clients Served", value: "200+" },
  { label: "Industries Covered", value: "15+" },
  { label: "On-time Deliveries", value: "98%" },
  { label: "Years of Experience", value: "12+" },
];

const About = ({
  achievementsTitle = "Trusted by Ethiopia's Leading Sectors",
  achievementsDescription = "Delivering high-quality industrial, agricultural, and laboratory chemicals to meet the demands of science, farming, and manufacturing across Ethiopia.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* About Header Section */}
        <div className=" mb-3 inline-flex items-start gap-2 bg-black/10 backdrop-blur-sm border border-black/20 rounded-full px-2 text-black text-sm font-medium">
          <p className="text-sm font-normal text-muted-foreground">ABOUT US</p>
        </div>

        {/* Why We Began Section */}
        <div className="mb-20 grid gap-14 lg:grid-cols-4 xl:grid-cols-4">
          <div className="md:col-span-2 xl:col-span-2">
            <h2 className="mb-8 text-4xl font-bold">Why We Began</h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              In a country where agriculture and industry are the backbone of
              the economy, access to high-quality and reliable chemical supplies
              has always been a challenge. We started this company to close that
              gap — by importing trusted chemical brands and ensuring timely
              distribution across Ethiopia.
              <br />
              <br />
              Our goal is to support farmers, industrial producers,
              laboratories, and educational institutions with essential
              chemicals that help them grow, innovate, and succeed. We pride
              ourselves on building long-term relationships through quality,
              reliability, and tailored solutions.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src="/office.jpg"
              alt="Our Warehouse"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-gray-300/50 p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                {achievementsTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {achievementsDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
              {achievements.map((item, idx) => (
                <div
                  className="flex flex-col items-center justify-center text-center"
                  key={item.label + idx}
                >
                  <span className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl mb-2">
                    {item.value}
                  </span>
                  <p className="text-sm font-medium text-muted-foreground md:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
