import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    function disconnectWallet() {
        disconnect();
        setIsProfileDropdownOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link href="/">
                    {/* Replace text with a logo */}
                    <img src="/your-logo-image.png" alt="Logo" className={styles.logo} />
                </Link>
                <div className={styles.navLinks}>
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
                </div>
                <div>
                    {!address ? (
                        <ConnectWallet 
                            btnTitle="Login"
                            theme="light"
                            className={styles.connectWalletBtn}
                        />
                    ) : (
                        <div
                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        >
                            <img src={`https://avatars.dicebear.com/api/avataaars/1.svg`} alt="avatar" className={styles.avatar}/>
                        </div>
                    )}
                </div>
                {isProfileDropdownOpen && (
                    <div className={styles.profileDropdown}>
                        <Link href="/myPacks">
                            <p>Your Packs</p>
                        </Link>
                        <Link href="/myCards">
                            <p>Your Cards</p>
                        </Link>
                        <button
                            onClick={disconnectWallet}
                        >Logout</button>
                    </div>
                )}
            </div>
        </div>
    )
}
