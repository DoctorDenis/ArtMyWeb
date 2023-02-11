import { Table, Typography, Select, Space } from "antd";
import { getUsers } from "../services/usersAPI";
import filterByGender from "../helpers/filterByGender";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (text) => <span className={text}>{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Text type={text === "active" ? "success" : "danger"}>{text}</Text>
    ),
  },
];

function TableComponent() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(null);

  const fetchUsers = useCallback(() => {
    setLoading(true);
    getUsers(pagination.current).then(({ data }) => {
      setUsers(data.data);
      setTotal(data.meta.pagination.total);
      setLoading(false);
    });
  }, [pagination]);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchUsers(pagination.current);
  }, [pagination, fetchUsers]);

  const onRowClick = ({ record }) => {
    navigate("/edit", { state: record });
  };

  const onPageChange = (p) => {
    setPagination({ ...pagination, current: p.current });
  };

  return (
    <>
      <Space align="center" direction="vertical" style={{ width: "100%" }}>
        <Select
          placeholder="Select a gender"
          style={{ width: 200 }}
          onChange={(value) => setGender(value)}
          options={[
            { value: null, label: "All" },
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />
      </Space>
      <Table
        dataSource={filterByGender(users, gender)}
        loading={loading}
        pagination={{ pagination, total }}
        columns={columns}
        rowKey={(item) => item.id}
        onRow={(record) => {
          return {
            onClick: (event) => {
              event.record = record;
              onRowClick(event);
            },
          };
        }}
        onChange={(p) => {
          onPageChange(p);
        }}
      ></Table>
    </>
  );
}

export default TableComponent;
