import { Badge, Image, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";

import React from "react";

export default function Header() {
  return (
    <div className="navbar">
      {/* <h4>Logo</h4> */}
      <Image width={20} src=""></Image>
      <Typography.Title type="secondary" style={{ fontSize: "25px" }}>
        Mitchell Enterise
      </Typography.Title>
      <Space>
        <Badge count={20} dot>
          <MailOutlined style={{ fontSize: "20px" }} />
        </Badge>
        <Badge count={10}>
          <BellFilled style={{ fontSize: "20px" }} />
        </Badge>
      </Space>
    </div>
  );
}
