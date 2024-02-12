import { Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getOrder } from "../API";

export default function Orders() {
  const [dataStore, setDataStore] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrder().then((res) => {
      setDataStore(res.products);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Text>Orders</Typography.Text>
      <Table
        columns={[
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
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
          },

          {
            title: "Quantity",
            dataIndex: "quantity",
          },

          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataStore}
      ></Table>
    </Space>
  );
}
