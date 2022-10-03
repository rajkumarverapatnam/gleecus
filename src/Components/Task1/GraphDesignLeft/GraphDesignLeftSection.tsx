import React from "react";
import "./GraphDesignLeftSection.css";
export default function GraphDesignLeftSection() {
  return (
    <div className="GraphDesignLeftSection">
      <div className="info-left">
        <div className="dates-start">
          <p>Start Date</p>
          <div className="calander-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            <span>1st Jan 2021</span>
          </div>
        </div>
        <div className="pending-revenue">
          <div>
            <p>Pending Order</p>
            <b>90</b>
          </div>
          <div>
            <p>Revenue On Hold</p>
            <b>$3000</b>
          </div>
        </div>
        <div className="inHousePorcessing">
          <h5>Inhouse Processing</h5>
          <div className="inHouseItems">
            <div>
              <p> Order</p>
              <b>90</b>
            </div>
            <div>
              <p> Episodes</p>
              <b>90</b>
            </div>
            <div>
              <p> Revenue on Hold</p>
              <b>90</b>
            </div>
          </div>
          <hr />
          <p className="anchorTag">View Details</p>
        </div>
        <div className="inHousePorcessing">
          <h5>Pending Singnatures</h5>
          <div className="inHouseItems">
            <div>
              <p> Order</p>
              <b>90</b>
            </div>
            <div>
              <p> Episodes</p>
              <b>90</b>
            </div>
            <div>
              <p> Revenue on Hold</p>
              <b>90</b>
            </div>
          </div>
          <hr />
          <p className="anchorTag">View Details</p>
        </div>
      </div>
      <div className="info-right">
        <div className="dates-end">
          <p>End Date</p>
          <div className="calander-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            <span>1st Jan 2021</span>
          </div>
        </div>
        <div className="pending-revenue"></div>
        <div className="inHousePorcessing">
          <h5>To Be Sent</h5>
          <div className="inHouseItems">
            <div>
              <p> Order</p>
              <b>90</b>
            </div>
            <div>
              <p> Episodes</p>
              <b>90</b>
            </div>
            <div>
              <p> Revenue on Hold</p>
              <b>90</b>
            </div>
          </div>
          <hr />
          <p className="anchorTag">View Details</p>
        </div>
        <div className="inHousePorcessing">
          <h5>Received Orders</h5>
          <div className="inHouseItems">
            <div>
              <p> Order</p>
              <b>90</b>
            </div>
            <div>
              <p> Episodes</p>
              <b>90</b>
            </div>
            <div>
              <p> Revenue on Hold</p>
              <b>90</b>
            </div>
          </div>
          <hr />
          <p className="anchorTag">View Details</p>
        </div>
      </div>
    </div>
  );
}
