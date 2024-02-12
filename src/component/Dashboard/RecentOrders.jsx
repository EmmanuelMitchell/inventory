import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrder } from "../../API";

export default function RecentOrders() {
  const [datStore, setDataStore] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrder().then((res) => {
      setDataStore(res.products.splice(1, 2));
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Typography.Text>Recent Order</Typography.Text>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "price",
          },
        ]}
        dataSource={datStore}
        pagination={false}
      ></Table>
    </>
  );
}
