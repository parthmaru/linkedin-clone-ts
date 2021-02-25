import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading: string, subtitle: string) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Latest Clone Builed",
        "Clone is completely based on React Typescript"
      )}
      {newsArticle(
        "REDUX State management",
        "Tried REDUX to neglate the Prop Drilling issue"
      )}
      {newsArticle(
        "Context Api",
        "We can use ContextApi for State Management also"
      )}
      {newsArticle(
        "Firebase",
        "We can make use of Firebase for Authentication"
      )}
      {newsArticle("FireStore", "We can make use of FireStore for Cloud DB")}
    </div>
  );
};

export default Widgets;
