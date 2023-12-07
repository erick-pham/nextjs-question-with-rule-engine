"use client";
import { format as datefnsFormat } from "date-fns";
import { Flex, Card, Col, Row, Typography } from "antd";

import type { Questionnaire } from "@/types/questionnaire";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { ClockCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const TableQuestionnaire = ({
  listQuestionnaires,
}: {
  listQuestionnaires: Questionnaire[];
}): React.ReactElement => {
  return (
    <Row gutter={[16, 16]}>
      {listQuestionnaires.map(
        ({ name, id, description, thumbnail, createdAt }: Questionnaire) => {
          return (
            <Col xs={24} sm={24} md={12} lg={8} xl={4} key={id}>
              <Link href={`/questionnaires/${id}`}>
                <Card
                  hoverable
                  title={name}
                  bordered={false}
                  key={"id"}
                  cover={
                    <Image
                      alt="example"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                      src={`${
                        thumbnail
                          ? thumbnail
                          : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      }`}
                    />
                  }
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                >
                  <Meta
                    key={"id"}
                    title={description}
                    description={
                      <Flex align="center" gap={4}>
                        <ClockCircleOutlined />
                        <Typography>
                          {datefnsFormat(new Date(createdAt), "Pp")}
                        </Typography>
                      </Flex>
                    }
                  />
                </Card>
              </Link>
            </Col>
          );
        }
      )}
    </Row>
  );
};

export default TableQuestionnaire;
