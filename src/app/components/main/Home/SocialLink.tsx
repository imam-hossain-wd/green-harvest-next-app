
import {
    WhatsAppOutlined,
    FacebookFilled,
    LinkedinFilled,
    TwitterOutlined,
  } from "@ant-design/icons";
import Link from "next/link";

const SocialLink = () => {
    return (
        <div className="flex lg:-ml-24 lg:mt-0 text-2xl w-36 justify-around mr-24 mb-10">
        <Link
          href="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
        >
          <TwitterOutlined />
        </Link>
        <Link
          href="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  text-black duration-300"
        >
          <WhatsAppOutlined />
        </Link>
        <Link
          href="https://www.linkedin.com/in/imam-hossain-web-dev/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   text-black duration-300"
        >
          <FacebookFilled />
        </Link>

        <Link
          href=""
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300"
        >
          <LinkedinFilled />
        </Link>
      </div>
    );
};

export default SocialLink;