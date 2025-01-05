import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Icons = () => {
  const iconClass = "w-8 h-8";
  const socialLinks = [
    { href: "https://www.facebook.com/", icon: faFacebook },
    { href: "https://www.instagram.com", icon: faInstagram },
    { href: "https://www.linkedin.com", icon: faLinkedin },
  ];

  return (
    <div className="flex gap-5">
      {socialLinks.map(({ href, icon }, index) => (
        <a key={index} target="_blank" href={href}>
          <FontAwesomeIcon className={iconClass} icon={icon} />
        </a>
      ))}
    </div>
  );
};
