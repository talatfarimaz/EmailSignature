import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { SocialsElements } from "../../../constants/SocialsElements";
import { ReactSortable } from "react-sortablejs";
import { SocialsModel } from "../../../models/SocialsModel";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import SocialsTabStyle from "../../../styles/SocialsTabStyle";

const SocialsTab = () => {
  const [elements, setElements] = useState<SocialsModel[]>([]);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showIconKey, setShowIconKey] = useState<string | number>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const iconSet: SocialsModel[] = SocialsElements;
  const dispatch = useDispatch();
  const classes = SocialsTabStyle();

  useEffect(() => {
    const tempElements: SocialsModel[] = [];
    let count = 0;
    SocialsElements.map((social) => {
      if (social.defaultIcon) {
        social.id = count;
        tempElements.push(social);
        count++;
      }
    });
    setElements(tempElements);
  }, []);

  useEffect(() => {
    dispatch({
      type: "ADD_SOCIALS",
      payload: elements,
    });
  }, [JSON.stringify(elements)]);

  const addNewSocialLink = (item: SocialsModel) => {
    const newElements: SocialsModel[] = [...elements];
    const newElement: SocialsModel = {
      id: elements.length,
      url: "",
      defaultIcon: true,
      network: item.network,
      chosen: false,
      selected: false,
    };
    newElements.push(newElement);
    setElements(newElements);
  };

  const deleteSocialLink = (item: SocialsModel) => {
    const newElements: SocialsModel[] = elements.filter(
      (element) => element.id !== item.id
    );
    item = {
      id: "",
      url: "",
      defaultIcon: true,
      network: item.network,
      chosen: false,
      selected: false,
    };
    setElements(newElements);
  };
  const onChangeAccountUrl = (
    evt: React.ChangeEvent<HTMLInputElement>,
    id: number | string
  ) => {
    const changedElementIndex: number = elements.findIndex(
      (element) => element.id === id
    );
    const newElements: SocialsModel[] = [...elements];
    newElements[changedElementIndex].url = evt.target.value;
    setElements(newElements);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4 className="text-base text-white mt-3">Social profiles</h4>

        <ReactSortable list={elements} setList={setElements}>
          {elements?.map((item, index) => {
            return (
              <label
                key={item.id}
                className="flex mt-3 text-white"
                style={{ display: item.defaultIcon ? "" : "none" }}
                onMouseOver={() => {
                  setShowIcon(true);
                  setShowIconKey(item.id);
                }}
                onMouseOut={() => {
                  setShowIcon(false);
                  setShowIconKey(item.id);
                }}
              >
                <div className={"m-auto"}>
                  <ImportExportOutlinedIcon fontSize={"small"} />
                </div>
                <div className={"m-auto pr-3"}>
                  <SocialIcon
                    network={item.network}
                    style={{ height: 35, width: 35 }}
                    fgColor={"white"}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  <input
                    onChange={(evt) => {
                      onChangeAccountUrl(evt, item.id);
                    }}
                    value={item.url}
                    placeholder={item.network + " account url"}
                    className={
                      "form-input w-full text-white rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent " +
                      classes.inputBackground
                    }
                  />
                </div>
                <div style={{ width: "10%" }} className={"flex m-auto pl-2"}>
                  {showIcon && showIconKey === item.id && (
                    <IconButton
                      size={"small"}
                      onClick={() => {
                        deleteSocialLink(item);
                      }}
                    >
                      <DeleteSweepOutlinedIcon
                        fontSize={"small"}
                        color={"primary"}
                        style={{ marginLeft: "5px" }}
                      />
                    </IconButton>
                  )}
                </div>
              </label>
            );
          })}
        </ReactSortable>
        <div className="flex mt-3">
          <button
            className="btn font-medium text-white hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? (
              <>
                <AddOutlinedIcon fontSize={"small"} />
                <span>Show more</span>
              </>
            ) : (
              <>
                <RemoveOutlinedIcon fontSize={"small"} />
                <span>Show less</span>
              </>
            )}
          </button>
        </div>
      </Grid>
      {!showMore && (
        <Grid item xs={12} className={classes.iconsBackground}>
          <Grid container spacing={2}>
            {iconSet.map((element, index) => {
              return (
                <Tooltip
                  key={element.network}
                  title={element.network}
                  onClick={() => {
                    addNewSocialLink(element);
                  }}
                >
                  <Grid item xs={1}>
                    <SocialIcon
                      network={element.network}
                      style={{ height: 30, width: 30 }}
                      fgColor={"white"}
                    />
                  </Grid>
                </Tooltip>
              );
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SocialsTab;
