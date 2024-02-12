import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Statistic } from "antd";
import React from "react";

export default function ResuableCard({ title, value, icon }) {
  return (
    <Flex align="space-between">
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Flex>
  );
}
