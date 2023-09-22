"use client";
import { Typography, Button, Collapse, Space, Image, Col, Row } from "antd";
import React, { ReactNode } from "react";

const { Text } = Typography;

export type LinkListItem = {
  title: string;
  subtitle?: string;
  link: string;
  image?: string;
  alt?: string;
};

type LinkListProps = {
  header: String;
  items: LinkListItem[];
  commisionsEarned?: boolean;
};

class LinkList extends React.Component<LinkListProps> {
  constructor(props: LinkListProps) {
    super(props);
  }

  renderLinks(): ReactNode {
    return this.props.items.map((item: LinkListItem) => (
      <Button
        key={item.link}
        href={item.link}
        target="_blank"
        style={{
          height: "fit-content",
          minHeight: "57.14px",
          width: "100%",
          marginTop: "6px",
          marginBottom: "6px",
          padding: 8,
        }}
      >
        <Row>
          {item.image && (
            <Image
              preview={false}
              style={{ borderRadius: "20%", float: "left" }}
              width={45}
              src={item.image}
              alt={item.alt ?? item.title}
            ></Image>
          )}
          <Col
            flex="auto"
            style={{
              overflow: "wrap",
              paddingRight: 45,
              paddingLeft: item.image ? 0 : 45,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {item.title}
            </Text>
            <br />
            {item.subtitle && (
              <Text
                style={{
                  fontSize: "14px",
                }}
              >
                {item.subtitle}
              </Text>
            )}
          </Col>
        </Row>
      </Button>
    ));
  }

  render() {
    return (
      <Collapse
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "16px",
        }}
        items={[
          {
            key: "1",
            label: this.props.header,
            extra: (
              <Space style={{ width: "24px", height: "22px" }}>&nbsp;</Space>
            ),
            children: (
              <>
                {this.props.commisionsEarned && (
                  <Text style={{ fontWeight: "lighter" }}>
                    #CommissionsEarned
                  </Text>
                )}
                {this.renderLinks()}
              </>
            ),
          },
        ]}
      />
    );
  }
}

export default LinkList;
