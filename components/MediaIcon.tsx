import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const  SocialMedia = () => {
  const iconStyle =
    "text-2xl text-white hover:text-blue-500 transition-colors duration-300 cursor-pointer";

  return (
    <div className="grid gap-y-4 items-center">
      <a
        href="https://www.facebook.com/profile.php?id=61576839737739"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook className={iconStyle} />
      </a>
      <a
        href="https://wa.me/9701127863"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className={iconStyle} />
      </a>

      <a
        href="https://www.tiktok.com/@udaancourier?_t=ZS-8x4zcZPtviE&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaTiktok className={iconStyle} />
      </a>
    </div>
  );
};