import { Layout, Menu, Typography, theme, ConfigProvider } from "antd";
import React from "react";

const { Text, Title } = Typography;
const { Header, Content, Footer } = Layout;

type PageLayoutProps = {
  content: React.JSX.Element;
};

const headerPadding = "16px";
const name = "Calvin Li";
const home = "Home";
const products = "Products/Gear";

export class PageLayout extends React.Component<PageLayoutProps> {
  constructor(props: PageLayoutProps) {
    super(props);
  }

  state = {
    current: home,
  };

  // TODO make the page not reload
  handleClick = (e: { key: string }) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
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
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
            >
              <Menu.Item key={home}>
                <a href="/">{home}</a>
              </Menu.Item>
              {/* <Menu.Item key={products}>
                <a href="/products">{products}</a>
              </Menu.Item> */}
            </Menu>
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
          <Content style={{ padding: "0 50px" }}>{this.props.content}</Content>
          {/* <Footer style={{ textAlign: "center" }}>Calvin Li</Footer> */}
        </Layout>
      </ConfigProvider>
    );
  }
}
