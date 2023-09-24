"use client";
import {
  Typography,
  Button,
  Collapse,
  Space,
  Image,
  Col,
  Row,
  theme,
} from "antd";
import React, { ReactNode } from "react";
import { KEYBOARDS_LABEL } from "./Gear";

const { Text } = Typography;

const COLLAPSE_HEADER_FONT_SIZE = 16;
const BUTTON_TITLE_FONT_SIZE = 14;
const BUTTON_SUBTITLE_FONT_SIZE = 13;
const BUTTON_VERTICAL_MARGIN = 3;
const TEXT_SIDE_PADDING = 6;

export type LinkListItem = {
  title: string;
  subtitle?: string;
  link: string;
  image?: string;
  alt?: string;
};

type LinkListProps = {
  label: string;
  items: LinkListItem[];
  commisionsEarned?: boolean;
};

function renderCommisionsEarned(show: boolean | undefined): ReactNode {
  return (
    show && <Text style={{ fontWeight: "lighter" }}>#CommissionsEarned</Text>
  );
}

function renderLinks(items: LinkListItem[]): ReactNode {
  return items.map((item: LinkListItem) => (
    <Button
      key={item.link}
      href={item.link}
      target="_blank"
      style={{
        height: "fit-content",
        minHeight: "57px",
        width: "100%",
        marginTop: BUTTON_VERTICAL_MARGIN,
        marginBottom: BUTTON_VERTICAL_MARGIN,
        padding: "6px 8px",
      }}
    >
      <Row wrap={false} align="middle" justify="center">
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
          <Row align="middle" justify="center">
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
      defaultActiveKey={
        props.label === KEYBOARDS_LABEL ? KEYBOARDS_LABEL : undefined
      }
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
          children: (
            <>
              {renderCommisionsEarned(props.commisionsEarned)}
              {renderLinks(props.items)}
            </>
          ),
          style: panelStyle,
        },
      ]}
    />
  );
};

export default LinkList;
