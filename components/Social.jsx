import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com' },
    { icon: <FaSpotify />, path: 'https://www.spotify.com' },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
