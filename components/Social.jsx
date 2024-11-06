import { Target } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaSoundcloud } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/JarneWils/Portfolio' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/_jarne_wils_/' },
    { icon: <FaSoundcloud />, path: 'https://soundcloud.com/damp-3670'},
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link
                key={index}
                href={item.path}
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </Link>
            ))}
        </div>
    );
};

export default Social;
