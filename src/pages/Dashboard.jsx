import { Card, Flex, Space, Statistic, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import ResuableCard from "../component/ResuableCard/ResuableCard";
import {
  DollarOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getCustomer, getInventory, getOrder } from "../API";
import RecentOrders from "../component/Dashboard/RecentOrders";
import Chartjs from "../component/Dashboard/Chartjs";

export default function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrder().then((res) => {
      setOrders(res.total);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });

    getCustomer().then((res) => {
      setCustomers(res.total);
    });
  });

  return (
    <Space size={2} direction="vertical">
      <Typography.Title>Dashboard</Typography.Title>
      <Space direction="horizontal">
        {/* <Flex align="space-between"> */}
        <ResuableCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "white",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "20px",
                fontSize: "20px",
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <ResuableCard
          icon={
            <ShopOutlined
              style={{
                color: "white",
                backgroundColor: "blue",
                padding: "10px",
                borderRadius: "20px",
                fontSize: "20px",
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <ResuableCard
          icon={
            <UserOutlined
              style={{
                color: "white",
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "20px",
                fontSize: "20px",
              }}
            />
          }
          title={"Customer"}
          value={customers}
        />
        <ResuableCard
          icon={
            <DollarOutlined
              style={{
                color: "white",
                backgroundColor: "red",
                padding: "10px",
                borderRadius: "20px",
                fontSize: "20px",
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
        {/* </Flex> */}
      </Space>
      <Space>
        <RecentOrders />
        <Chartjs />
      </Space>
    </Space>
  );
}

// function RecentOrders() {
//   const [datStore, setDataStore] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     getOrder().then((res) => {
//       setDataStore(res.products.splice(1, 2));
//       setLoading(false);
//     });
//   }, []);
//   return (
//     <>
//       <Typography.Text>Recent Order</Typography.Text>
//       <Table
//         columns={[
//           {
//             title: "Title",
//             dataIndex: "title",
//           },
//           {
//             title: "Quantity",
//             dataIndex: "quantity",
//           },
//           {
//             title: "Price",
//             dataIndex: "price",
//           },
//         ]}
//         loading={loading}
//         dataSource={datStore}
//         pagination={false}
//       ></Table>
//     </>
//   );
// }
