import { Layout, Menu, Typography, theme, ConfigProvider } from "antd";
import { FunctionComponent } from "react";

const { Text, Title } = Typography;
const { Header, Content, Footer } = Layout;

type PageLayoutProps = {
  content: React.JSX.Element;
};

const headerPadding = "16px";
const name = "Calvin Li";
const home = "Home";

const navLabels = [
  home,
  // "Products/Gear"
];

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ content }) => (
  <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: headerPadding,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ width: "100%" }}
          defaultSelectedKeys={[home]}
          items={navLabels.map((key, _index) => {
            return {
              key,
              label: key,
            };
          })}
        />
        <Title
          level={4}
          style={{
            margin: headerPadding,
            marginRight: 0,
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Title>
      </Header>
      <Content style={{ padding: "0 50px" }}>{content}</Content>
      {/* <Footer style={{ textAlign: "center" }}>Calvin Li</Footer> */}
    </Layout>
  </ConfigProvider>
);
