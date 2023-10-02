import { ThirdwebNftMedia, Web3Button, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { PACK_ADDRESS } from '../const/addresses';
import { useState } from 'react';
import { PackRewards } from '@thirdweb-dev/sdk/dist/declarations/src/evm/schema';
import { PackRewardCard } from '../components/PackRewardCard';
import Image from 'next/image';

export default function MyPacks() {
    const address = useAddress();

    const { contract } = useContract(PACK_ADDRESS, "pack");
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [openPackRewards, setOpenPackRewards] = useState<PackRewards | undefined>();

    async function openPack(packId: string) {
        const cardRewards = await contract?.open(parseInt(packId), 1);
        console.log(cardRewards);
        setOpenPackRewards(cardRewards);
    };

    return (
        <div className="container">
            <h1 className="Otherh1">Your Packs</h1>
            <div className="grid">
                {isLoading ? (
                    <p>Loading...</p>
                ) : data && data.length > 0 ? (
                    data.map((pack, index) => (
                        <div key={index} className="nftCard">
                            <ThirdwebNftMedia
                                metadata={pack.metadata}
                            />
                            <div className="myCardInfo">
                                <h3>{pack.metadata.name}</h3>
                                <p>Qty: {pack.quantityOwned}</p>
                            </div>
                            <Web3Button
                                contractAddress={PACK_ADDRESS}
                                action={() => openPack(pack.metadata.id)}
                                className="saleButton"
                            >
                                Open Pack
                            </Web3Button>
                        </div>
                    ))
                ) : (
                    <div className="centeredContent">
                        <p>You don&apos;t currently own any Kaiju Card packs.</p>
                        <p>Buy one for your chance to redeem our new glow-in-the-dark toy.</p>
                        <a href="https://opensea.io/collection/cryptokaiju-art-cards-season-1" target="_blank" rel="noopener noreferrer">
                            <button className="Other_buyButton__s10bn">Buy Kaiju Card Packs</button>
                        </a>
                    </div>
                )}
            </div>
            {openPackRewards?.erc1155Rewards && openPackRewards.erc1155Rewards.length > 0 && (
                <div className="container">
                    <h3>Pack Rewards:</h3>
                    <div className="grid">
                        {openPackRewards.erc1155Rewards.map((card, index) => (
                            <PackRewardCard
                                reward={card}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
