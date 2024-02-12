import Typography from "antd/es/typography/Typography";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <Typography.Link href="tel:+23278000001">+23278000001</Typography.Link>
      <Typography.Link href="http://www.google.com" target={"_blank"}>
        Terms
      </Typography.Link>
      <Typography.Link href="http://www.google.com" target={"_blank"}>
        Pravacy
      </Typography.Link>
    </div>
  );
}
