import { Button, Col, Row } from "antd";
import FlagSection from "./FlagSection";
import { useEffect, useState } from "react";
import { flag } from "./util";

const DetailsLayout = ({ renderData, type, id, showListPage }) => {
  const [flagSectionVisible, setFlagSectionVisible] = useState(false);

  return (
    <>
      <div
        className="mt-10 mb-0 mx-10"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <a onClick={(e) => showListPage()}>Back</a>
      </div>

      <div
        className="mx-10 text-2xl"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5 className="" style={{ textTransform: "capitalize" }}>
          {type} details
        </h5>
        {!flagSectionVisible && (
          <Button
            type="primary"
            onClick={() => setFlagSectionVisible(true)}
            danger
            style={{ textTransform: "capitalize" }}
          >
            Flag {type}
          </Button>
        )}
      </div>
      <Row gutter={16}>
        <Col span={flagSectionVisible ? 12 : 24}>
          <div className="ml-10 mt-10 " style={{ width: "100%" }}>
            <div style={{ width: "100%", overflowX: "auto" }}>
              {renderData()}
            </div>
          </div>
        </Col>
        {flagSectionVisible && (
          <Col span={12}>
            <div className="ml-10">
              <div className="m-10">
                <FlagSection
                  type={type}
                  id={id}
                  closeFlagSection={() => setFlagSectionVisible(false)}
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default DetailsLayout;
