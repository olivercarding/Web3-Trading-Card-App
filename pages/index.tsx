import type { NextPage } from 'next';
import Accordion from '../components/Accordion'; // Import the Accordion component

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
          <h1>JOIN THE PARTY!</h1>
          <p className="text-lg">Buy and open packs for your chance to redeem our new glow in the dark toy!</p>
          <button
            className="heroButton bg-blue-500 hover.bg-blue-700 text-white rounded-full py-2 px-6 mt-4 cursor-pointer text-xl"
            onClick={navigateToOpenSea}
          >
            Shop Packs
          </button>
        </div>
      </div>

      <div className="FAQs">
        <h2 className="faqTitle">FAQs</h2>

        {/* Use the Accordion component for each FAQ */}
        <Accordion
          title="What are CryptoKaiju Cards?"
          content="The set of 10 cards are collectible art cards which can be redeemed for our new glow in the dark Halloween toy. They can be traded on all marketplaces including Opensea."
        />

        <Accordion
          title="How am I Eligible to Redeem?"
          content="Pull a Ghost card from a pack and you'll be eligible when the redemption window opens"
        />

        <Accordion
          title="When can I redeem?"
          content="The window opens 14th October 2023, shipping starts the same day, just in time for Halloween!"
        />

        <Accordion
          title="Do I have to Burn my Cards?"
          content="Nope, a snapshot will be taken of eligible holders the day before"
        />
        <Accordion
          title="Is the new toy Free?"
          content="Yes if you're eligible, the only thing you'll pay is postage."
        />

        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default Home;
