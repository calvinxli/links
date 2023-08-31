import { Collapse, List } from "antd";
import Link from "next/link";
import React, { ReactNode } from "react";

export type LinkListItem = {
  title: string;
  subtitle?: string;
  link: string;
};

type LinkListProps = {
  header: String;
  items: LinkListItem[];
};

class LinkList extends React.Component<LinkListProps> {
  constructor(props: LinkListProps) {
    super(props);
  }

  renderList(): ReactNode {
    return (
      <List
        itemLayout="vertical"
        dataSource={this.props.items}
        renderItem={(item) => (
          <List.Item style={{ padding: 0 }}>
            <List.Item.Meta
              style={{ padding: 0, margin: 0 }}
              title={<Link href={item.link}>{item.title}</Link>}
              description={item.subtitle}
            />
          </List.Item>
        )}
      />
    );
  }

  render() {
    return (
      <Collapse
        items={[
          { key: "1", label: this.props.header, children: this.renderList() },
        ]}
      />
    );
  }
}

export default LinkList;
