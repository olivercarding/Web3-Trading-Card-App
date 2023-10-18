import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    function disconnectWallet() {
        disconnect();
        setIsProfileDropdownOpen(false);
    }

    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">
                    {/* Replace text with a logo */}
                    <div className="logo-container">
                        <Image
                            src="https://cryptokaiju.io/wp-content/uploads/2018/11/logo-x80.png" // Replace with your image path
                            alt="Logo"
                            width={374} // Set the width you prefer
                            height={90} // Set the height you prefer
                            className="logo"
                            layout="responsive"
                        />
                    </div>
                </Link>
                <div className="navlinks">
                    {/* Remove the link to /shop */}
                    {/* Remove the link to /marketplace */}
                    <Link href="/myPacks">
                        {/* Change the text and link */}
                        <p>Your Packs</p>
                    </Link>
                    <Link href="/myCards">
                        {/* Change the text and link */}
                        <p>Your Cards</p>
                    </Link>
                    <Link href="https://claim.cryptokaiju.io/">
                        {/* Change the text and link */}
                        <p>Redeem</p>
                    </Link>
                </div>
                <div>
                    {!address ? (
                        <ConnectWallet 
                            btnTitle="Login"
                            theme="light"
                            className="connectWalletBtn"
                        />
                    ) : (
                        <div
                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        >
                            <Image
                                src={`https://cryptokaiju.io/wp-content/uploads/2022/04/About-Icon-5.png`}
                                alt="avatar"
                                width={42} // Set the width you prefer
                                height={42} // Set the height you prefer
                                className="avatar"
                            />
                        </div>
                    )}
                </div>
                {isProfileDropdownOpen && (
                    <div className="profileDropdown">
                        <Link href="/myPacks">
                            <p>Your Packs</p>
                        </Link>
                        <Link href="/myCards">
                            <p>Your Cards</p>
                        </Link>
                        <button
                            className="logoutButton"
                            onClick={disconnectWallet}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
