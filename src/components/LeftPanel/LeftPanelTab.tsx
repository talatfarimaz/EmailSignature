import React, { useState } from "react";
import "../../styles/LeftPanelStyle.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import DetailsTab from "./DetailsTab/DetailsTab";
import SocialsTab from "./SocialsTab/SocialsTab";

const LeftPanelTab = () => {
  const [activeTab, setActiveTab] = useState<string>("details");

  const getActiveTabDetail: () => JSX.Element | null = () => {
    if (activeTab === "details") {
      return <DetailsTab />;
    } else if (activeTab === "social") {
      return <SocialsTab />;
    } else {
      return <div />;
    }
  };

  return (
    <div className={"ml-4"}>
      <div
        x-data="{activeTab:'tabProfile'}"
        className="tabs flex flex-col mt-10"
      >
        <div className="is-scrollbar-hidden overflow-x-auto">
          <div className="border-b-2 border-slate-150 dark:border-navy-500">
            <div className="tabs-list -mb-0.5 flex">
              <button
                value="details"
                onClick={() => setActiveTab("details")}
                className={
                  activeTab === "details"
                    ? "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-primary dark:border-accent text-primary dark:text-accent-light"
                    : "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                }
              >
                <BorderColorOutlinedIcon fontSize={"small"} />
                <span> Details </span>
              </button>
              <button
                value="social"
                onClick={() => setActiveTab("social")}
                className={
                  activeTab === "social"
                    ? "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-primary dark:border-accent text-primary dark:text-accent-light"
                    : "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                }
              >
                <ShareOutlinedIcon fontSize={"small"} />
                <span> Social </span>
              </button>
              <button
                value="template"
                onClick={() => setActiveTab("template")}
                className={
                  activeTab === "template"
                    ? "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-primary dark:border-accent text-primary dark:text-accent-light"
                    : "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                }
              >
                <RecentActorsOutlinedIcon fontSize={"small"} />
                <span> Template </span>
              </button>
              <button
                value="design"
                onClick={() => setActiveTab("design")}
                className={
                  activeTab === "design"
                    ? "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-primary dark:border-accent text-primary dark:text-accent-light"
                    : "btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                }
              >
                <FormatColorFillIcon fontSize={"small"} />
                <span> Design </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{getActiveTabDetail()}</div>
    </div>
  );
};

export default LeftPanelTab;
