import { Avatar, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getCustomer } from "../API";

export default function Customers() {
  // const [loading, setLoading] = useState(false);
  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getCustomer().then((res) => {
      setDataStore(res.users);
      // setLoading(false);
    });
  }, []);
  return (
    <Space>
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },

          {
            title: "FirstName",
            dataIndex: "firstName",
          },

          {
            title: "LastName",
            dataIndex: "lastName",
          },

          {
            title: "Email",
            dataIndex: "email",
          },

          {
            title: "PhoneNumber",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}
                  {address.city}
                </span>
              );
            },
          },
        ]}
        // loading={loading}
        dataSource={dataStore}
      ></Table>
    </Space>
  );
}
