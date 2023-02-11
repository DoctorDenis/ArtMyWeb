import { Layout, Space } from "antd";

const { Header, Footer } = Layout;

const headerstyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function LayoutWrapper({ children }) {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Header style={headerstyle}>Header</Header>
      {children}
      <Footer style={footerStyle}>Footer</Footer>
    </Space>
  );
}

export default LayoutWrapper;
