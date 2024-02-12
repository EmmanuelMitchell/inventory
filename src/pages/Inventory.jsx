import React, { useEffect, useState } from "react";
import { getInventory } from "../API";
import { Avatar, Rate, Space, Table, Typography } from "antd";

export default function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getInventory().then((res) => {
      setDataStore(res.products);
      // setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Text
        style={{ fontSize: "40px", color: "gray", paddingLeft: "5px" }}
      >
        Inventory
      </Typography.Text>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return <span>Le {value}</span>;
            },
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },

          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataStore}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
  );
}
