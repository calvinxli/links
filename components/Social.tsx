import Link from "antd/es/typography/Link";
import React, { Component, FunctionComponent } from "react";

type SocialProps = {
  icon: React.JSX.Element;
  link: string;
  ariaLabel: string;
  color?: string;
  size?: string;
};

export const SocialLinkButton: FunctionComponent<SocialProps> = ({
  icon,
  link,
  ariaLabel,
  color = "white",
  size = "28px",
}) => (
  <Link
    key={ariaLabel}
    aria-label={ariaLabel}
    style={{
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: size,
      color: color,
      margin: 0,
    }}
    href={link}
  >
    {icon}
  </Link>
);
