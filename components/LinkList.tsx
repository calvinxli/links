"use client";
import {
  Button,
  Col,
  Collapse,
  Image,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import React, { ReactNode } from "react";

const { Text } = Typography;

const COLLAPSE_HEADER_FONT_SIZE = 16;
const BUTTON_TITLE_FONT_SIZE = 14;
const BUTTON_SUBTITLE_FONT_SIZE = 13;
const BUTTON_VERTICAL_MARGIN = 2;
const TEXT_SIDE_PADDING = 6;

export type LinkListItem = {
  title: string;
  subtitle?: string;
  link: string;
  image?: string;
  alt?: string;
};

export type LinkListProps = {
  label: string;
  items: LinkListItem[];
  defaultActiveKey?: string | undefined;
};

function renderLinks(items: LinkListItem[]): ReactNode {
  return items.map((item: LinkListItem) => (
    <Button
      key={item.link}
      href={item.link}
      target="_blank"
      style={{
        height: "fit-content",
        width: "100%",
        margin: `${BUTTON_VERTICAL_MARGIN}px 0px`,
        padding: "8px 8px",
      }}
    >
      <Row
        wrap={false}
        align="middle"
        justify="center"
        style={{ display: "flex", minHeight: 45 }}
      >
        <Col flex="45px">
          <Row align="middle" justify="start">
            {item.image && (
              <Image
                preview={false}
                style={{
                  borderRadius: "20%",
                  maxWidth: 45,
                }}
                src={item.image}
                alt={item.alt ?? item.title}
              ></Image>
            )}
            {!item.image && "\u00a0"}
          </Row>
        </Col>
        <Col
          flex="auto"
          style={{
            whiteSpace: "normal",
            paddingLeft: TEXT_SIDE_PADDING,
            paddingRight: TEXT_SIDE_PADDING,
          }}
        >
          <Row align="middle" justify="center" style={{ margin: "auto" }}>
            <Space align="center" direction="vertical" size={0}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: BUTTON_TITLE_FONT_SIZE,
                }}
              >
                {item.title}
              </Text>
              {item.subtitle && (
                <Text
                  style={{
                    fontSize: BUTTON_SUBTITLE_FONT_SIZE,
                    overflowWrap: "normal",
                  }}
                >
                  {item.subtitle}
                </Text>
              )}
            </Space>
          </Row>
        </Col>
        <Col flex="45px">&nbsp;</Col>
      </Row>
    </Button>
  ));
}

/**
 * @returns empty space big enough to offset the Collapse's arrow icon
 */
function renderHeaderOffset(): ReactNode {
  return <Space style={{ width: 24, height: 22 }}>&nbsp;</Space>;
}

const LinkList: React.FunctionComponent<LinkListProps> = (
  props: LinkListProps
) => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    background: token.colorFill,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={props.defaultActiveKey}
      style={{
        fontWeight: "bold",
        fontSize: COLLAPSE_HEADER_FONT_SIZE,
        textAlign: "center",
        marginBottom: "16px",
      }}
      items={[
        {
          key: props.label,
          label: props.label,
          extra: renderHeaderOffset(),
          children: <>{renderLinks(props.items)}</>,
          style: panelStyle,
        },
      ]}
    />
  );
};

export default LinkList;
