import AccordionItem from '/components/Accordion.tsx'; // Replace with the correct import path

const Home: NextPage = () => {
  // Define the OpenSea URL
  const openSeaUrl = "https://opensea.io/collection/cryptokaiju-art-cards-season-1";

  // Function to handle the button click and navigate to OpenSea
  const navigateToOpenSea = () => {
    window.location.href = openSeaUrl;
  };

  return (
    <div className="container">
      <div className="heroPage">
        <div className="heroSection">
          <h1 className="!text-dark-blue text-14xl md:text-5xl lg:text-6xl leading-40px md:leading-50px lg:leading-60px font-extrabold text-center tracking-widest">Join The Party!</h1>
          <p className="text-lg">Buy and open packs for your chance to redeem our new glow in the dark toy!</p>
          <button
            className="heroButton bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-6 mt-4 cursor-pointer text-xl"
            onClick={navigateToOpenSea}
          >
            Shop Packs
          </button>
        </div>
      </div>
     {/* Add the accordion component below the hero section */}
     <AccordionItem
        title="Question 1"
        content="Answer to Question 1 goes here."
      />
      <AccordionItem
        title="Question 2"
        content="Answer to Question 2 goes here."
      />
      <AccordionItem
        title="Question 3"
        content="Answer to Question 3 goes here."
      />
    </div>
  );
};

export default Home;


