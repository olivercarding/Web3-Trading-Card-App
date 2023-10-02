// components/HeroSection.tsx

interface CustomCSSProperties {
  "--fluidUnit": string;
  "--baseFontSize": string;
  fontSize: string;
}

const HeroSection: React.FC = () => {
  // Define your custom properties here
  const customCSSProperties: CustomCSSProperties = {
    "--fluidUnit": "1em",
    "--baseFontSize": "5.388235294117647",
    fontSize: "5.38824px",
  };

  return (
    <section className="pt-5 px-3">
      <div className="max-w-[1360px] mx-auto mb-5">
        <div className="flex-1">
          <div
            className="relative flex flex-col md:flex-row"
            style={customCSSProperties}
          >
            {/* ... Rest of the content ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
