import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { CARD_ADDRESS } from "../const/addresses";
import { useState } from "react";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import { ListingInfo } from "../components/ListingInfo";

export default function MyCards() {
    const address = useAddress();

    const {
        contract: nftCollection,
        isLoading: loadingNFTCollection
    } = useContract(CARD_ADDRESS, "edition");

    const {
        data: nfts,
        isLoading: loadingNFTs
    } = useOwnedNFTs(nftCollection, address);
    console.log(nfts);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();

    return (
        <div className={styles.container}>
            <h1 className="Otherh1">Your Cards</h1>
            <div className={styles.grid}>
                {!selectedNFT ? (
                    !loadingNFTCollection && !loadingNFTs ? (
                        nfts && nfts.length > 0 ? (
                            nfts.map((nft, index) => (
                                <div key={index} className={styles.nftCard}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                    />
                                    <div className={styles.myCardInfo}>
                                        <h3>{nft.metadata.name}</h3>
                                        <p>Qty: {nft.quantityOwned}</p>
                                    </div>
                                    <a
                                        href="https://opensea.io/collection/cryptokaiju-cards-season-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.saleButton}
                                    >
                                        Sell Card
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className={styles.centeredContent}>
                                <p>You don&apos;t currently own any Kaiju Cards.</p>
                                <p>Buy a pack and open for your chance to redeem our new glow in the dark toy.</p>
                                <a href="https://opensea.io/collection/cryptokaiju-art-cards-season-1" target="_blank" rel="noopener noreferrer">
                                    <button className={styles.buyButton}>Buy Kaiju Card Packs</button>
                                </a>
                            </div>
                        )
                    ) : (
                        <p>Loading...</p>
                    )
                ) : (
                    <div className={styles.saleCard}>
                        <div>
                            <button
                                onClick={() => setSelectedNFT(undefined)}
                            >Back</button>
                            <br />
                            <ThirdwebNftMedia
                                metadata={selectedNFT.metadata}
                            />  
                        </div>
                        <div>
                            <p>List card for sale</p>
                            <ListingInfo nft={selectedNFT} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
