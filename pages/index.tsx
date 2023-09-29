// Home.tsx

import type { NextPage } from "next";
import Accordion from '../components/Accordion'; // Adjust the import path as needed

const Home: NextPage = () => {
  // Define the OpenSea URL
  const openSeaUrl = "https://opensea.io/collection/cryptokaiju-art-cards-season-1";

  // Function to handle the button click and navigate to OpenSea
  const navigateToOpenSea = () => {
    window.location.href = openSeaUrl;
  };

  // Define your accordion panels
  const accordionPanels = [
    {
      title: 'Question 1',
      content: 'Answer to Question 1 goes here.',
    },
    {
      title: 'Question 2',
      content: 'Answer to Question 2 goes here.',
    },
    {
      title: 'Question 3',
      content: 'Answer to Question 3 goes here.',
    },
  ];

  return (
    <div className="container">
      <div className="heroPage">
        {/* Your hero content here */}
      </div>
      {/* Add the accordion component below the hero section */}
      <Accordion panels={accordionPanels} />
    </div>
  );
};

export default Home;
