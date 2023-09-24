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

const { Text } = Typography;

const COLLAPSE_HEADER_FONT_SIZE = 16;
const BUTTON_TITLE_FONT_SIZE = 14;
const BUTTON_SUBTITLE_FONT_SIZE = 13;

export type LinkListItem = {
  title: string;
  subtitle?: string;
  link: string;
  image?: string;
  alt?: string;
};

type LinkListProps = {
  label: String;
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
        minHeight: "57.14px",
        width: "100%",
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Row wrap={false} align="middle" justify="center">
        <Col flex="45px">
          {item.image && (
            <Image
              preview={false}
              style={{ borderRadius: "20%", float: "left", maxWidth: 45 }}
              src={item.image}
              alt={item.alt ?? item.title}
            ></Image>
          )}
          {!item.image && "\u00a0"}
        </Col>
        <Col
          flex="auto"
          style={{ whiteSpace: "normal", paddingLeft: 6, paddingRight: 6 }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: BUTTON_TITLE_FONT_SIZE,
            }}
          >
            {item.title}
          </Text>
          <br />
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
  return <Space style={{ width: "24px", height: "22px" }}>&nbsp;</Space>;
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
      style={{
        fontWeight: "bold",
        fontSize: COLLAPSE_HEADER_FONT_SIZE,
        textAlign: "center",
        marginBottom: "16px",
      }}
      items={[
        {
          key: "1",
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
