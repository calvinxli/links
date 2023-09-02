"use client";
import { Typography, Button, Collapse, List, Space, Image } from "antd";
import React, { ReactNode } from "react";

const { Text, Title } = Typography;

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
        href={item.link}
        target="_blank"
        style={{
          height: "fit-content",
          width: "100%",
          marginTop: "6px",
          marginBottom: "6px",
        }}
      >
        {item.image && (
          <Image
            style={{ borderRadius: "5%" }}
            width={45}
            src={item.image}
            alt={item.alt ?? item.title}
          ></Image>
        )}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {item.title}
        </Text>
        <br />
        <Text>{item.subtitle}</Text>
      </Button>
    ));
  }

  render() {
    return (
      <Collapse
        style={{
          fontWeight: "bold",
          textAlign: "center",
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
