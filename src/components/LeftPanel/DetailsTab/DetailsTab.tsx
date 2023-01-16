import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, Tooltip } from "@material-ui/core";
import { DetailsElements } from "../../../constants/DetailsElements";
import { DetailsModel } from "../../../models/DetailsModel";
import { ReactSortable } from "react-sortablejs";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import DetailsTabStyle from "../../../styles/DetailsTabStyle";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";

const DetailsTab = () => {
  const classes = DetailsTabStyle();
  const [elements, setElements] = useState<DetailsModel[]>(DetailsElements);
  const [sortableElements, setSortableElements] = useState<DetailsModel[]>([]);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showIconKey, setShowIconKey] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedElement, setSelectedElement] = React.useState<string>("");
  const [addNewField, setAddNewField] = React.useState<boolean>(false);
  const [newFieldName, setNewFieldName] = React.useState<string>("");
  const [newCreatedFieldType, setNewCreatedFieldType] =
    React.useState<string>("Plaint Text");
  const [errorAlert, setErrorAlert] = React.useState<boolean>(false);
  const [errorAlertAfterSave, setErrorAlertAfterSave] =
    React.useState<boolean>(false);
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const [changedField, setChangedField] = React.useState<DetailsModel>({
    value: "",
    clickable: false,
    deletable: true,
    type: "text",
    name: "",
    placeholder: "",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: false,
  });
  const [changedFieldIndex, setChangedFieldIndex] = React.useState<number>(-1);
  const [openEditCrop, setOpenEditCrop] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | undefined>(undefined);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  // @ts-ignore
  const photo = useSelector((state) => state.app.photoData);

  useEffect(() => {
    const defaultSelectedValueList: DetailsModel[] = elements.filter(
      (element) => !element.defaultElement
    );
    if (defaultSelectedValueList.length > 0) {
      setSelectedElement(defaultSelectedValueList[0].name);
    }
  }, [JSON.stringify(elements)]);

  useEffect(() => {
    onChangedSortableElements();
  }, [JSON.stringify(sortableElements)]);

  useEffect(() => {
    initializeSortableElements();
  }, []);

  useEffect(() => {
    /*
                                            initializeSortableElements();
                                        */
    dispatch({
      type: "ADD_DETAILS",
      payload: elements,
    });
  }, [JSON.stringify(elements)]);

  useEffect(() => {
    dispatch({
      type: "ADD_PHOTO",
      payload: photo,
    });
  }, [photo]);

  const initializeSortableElements = () => {
    const sortableList: DetailsModel[] = [];
    elements.slice(3, elements.length).map((element) => {
      sortableList.push(element);
    });
    setSortableElements(sortableList);
    setElements(elements.slice(0, 3).concat(sortableList));
  };

  const onChangedSortableElements = () => {
    setElements(elements.slice(0, 3).concat(sortableElements));
    dispatch({
      type: "ADD_DETAILS",
      payload: elements,
    });
  };

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = evt.target.value;
    const newElements = [...elements];
    newElements[index].value = value;
    setElements(newElements);
  };

  const onChangeSortableHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = evt.target.value;
    const newSortableElements = [...sortableElements];
    newSortableElements[index].value = value;
    setSortableElements(newSortableElements);
    setElements(elements.slice(0, 3).concat(newSortableElements));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const deleteElement = (index: number) => {
    const newSortableElements = [...sortableElements];
    newSortableElements[index].defaultElement = false;
    newSortableElements[index].value = "";
    setSortableElements(newSortableElements);
  };

  const addElement = () => {
    if (selectedElement !== "") {
      const selectElementObj: DetailsModel = elements.filter(
        (element) => element.name === selectedElement
      )[0];
      const index = elements.findIndex((object) => {
        return object.name === selectElementObj.name;
      });
      const newElements = [...elements];
      newElements[index].defaultElement = true;
      setElements(newElements);
    }
  };

  const addCreatedField = () => {
    if (newFieldName !== "") {
      const newField: DetailsModel = {
        id: "",
        deletable: true,
        name: newFieldName,
        type: newCreatedFieldType,
        defaultElement: true,
        sortable: true,
        placeholder: newFieldName,
        order: 3,
        editable: true,
        value: "",
        clickable: false,
      };
      const newSortableElements = [...sortableElements];
      newSortableElements.push(newField);
      setSortableElements(newSortableElements);
      setElements(elements.slice(0, 3).concat(newSortableElements));
    }
  };

  const addNewElement = () => {
    if (addNewField) {
      if (errorAlert) {
        setErrorAlertAfterSave(true);
      } else {
        addCreatedField();
        setOpen(false);
        setAddNewField(false);
        setErrorAlertAfterSave(false);
      }
    } else {
      addElement();
      setOpen(false);
    }
  };

  const changeFieldValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const tempElement: DetailsModel = { ...changedField };
    tempElement.name = evt.target.value;
    tempElement.placeholder = evt.target.value;
    setChangedField(tempElement);
  };

  const saveChangedField = () => {
    const isThereValue = elements.filter(
      (element) => element.name === changedField.name
    );
    if (isThereValue.length > 0) {
      setErrorAlert(true);
    } else {
      const newElements = [...elements];
      newElements[changedFieldIndex] = { ...changedField };
      setElements(newElements);
      setErrorAlert(false);
      setOpenEdit(false);
    }
  };

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
    setOpenEditCrop(true);
  };
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      dispatch({
        type: "ADD_PHOTO",
        payload: cropper.getCroppedCanvas().toDataURL(),
      });
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setOpenEditCrop(false);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <div>
          <div className="flex">
            <div style={{ margin: "auto", width: "20px" }} />
            <div style={{ width: "80%" }} className={"w-full"}>
              <h4 className="text-base text-white mt-3">Signature details</h4>
            </div>
            <div style={{ width: "20%" }} />
          </div>
        </div>
        <div>
          <div className="flex mt-3">
            <div style={{ margin: "auto", width: "20px" }} />
            <div style={{ width: "80%", height: "80px" }} className={"w-full"}>
              <Button
                variant="contained"
                style={{
                  height: "100%",
                  backgroundColor: "#7264EE",
                  color: "white",
                  borderRadius: "1.0rem",
                }}
                fullWidth={true}
                size="large"
                component="label"
                startIcon={<BackupOutlinedIcon />}
              >
                Upload Image
                <input type="file" onChange={onChange} hidden />
              </Button>
            </div>
            <div style={{ width: "20%", paddingLeft: "10px" }}>
              {photo !== null && (
                <Tooltip
                  title={
                    <img src={photo} style={{ height: "100%" }} alt="cropped" />
                  }
                >
                  <img
                    src={photo}
                    style={{ height: "auto", borderRadius: "5px" }}
                    alt="cropped"
                  />
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        {elements.map((element, index) => {
          if (!element.sortable) {
            return (
              <label className="flex mt-3 text-white">
                <div style={{ margin: "auto", width: "20px" }} />
                <div style={{ width: "80%" }}>
                  <input
                    className={
                      "form-input w-full text-white rounded-xl border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent " +
                      classes.inputBackground
                    }
                    placeholder={element.placeholder}
                    type={element.type}
                    value={element.value}
                    key={element.name}
                    onChange={(evt) => onChangeHandler(evt, index)}
                  />
                </div>
                <div style={{ width: "20%" }} />
              </label>
            );
          }
        })}
        <ReactSortable list={sortableElements} setList={setSortableElements}>
          {sortableElements.map((item, index) => {
            return (
              <label
                className="flex mt-3 text-white"
                style={{ display: item.defaultElement ? "" : "none" }}
                onMouseOver={() => {
                  setShowIcon(true);
                  setShowIconKey(item.name);
                }}
                onMouseOut={() => {
                  setShowIcon(false);
                  setShowIconKey(item.name);
                }}
              >
                <div className={"m-auto"}>
                  <ImportExportOutlinedIcon fontSize={"small"} />
                </div>
                <div style={{ width: "80%" }}>
                  <input
                    className={
                      "form-input w-full text-white rounded-lg border border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent " +
                      classes.inputBackground
                    }
                    placeholder={item.placeholder}
                    type={item.type}
                    value={item.value}
                    key={item.name}
                    onChange={(evt) => onChangeSortableHandler(evt, index)}
                  />
                </div>
                <div style={{ width: "20%" }} className={"flex m-auto pl-2"}>
                  {showIcon && showIconKey === item.name && (
                    <IconButton
                      size={"small"}
                      onClick={() => {
                        handleClickOpenEdit();
                        setChangedField(item);
                        setChangedFieldIndex(
                          elements.findIndex(
                            (element) => element.name === item.name
                          )
                        );
                      }}
                    >
                      <EditOutlinedIcon
                        fontSize={"small"}
                        color={"secondary"}
                      />
                    </IconButton>
                  )}
                  {showIcon && showIconKey === item.name && (
                    <IconButton
                      size={"small"}
                      onClick={() => {
                        deleteElement(index);
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
            onClick={handleClickOpen}
          >
            <AddOutlinedIcon fontSize={"small"} />
            <span>Add a field</span>
          </button>
        </div>
      </Grid>
      <Grid item xs={3} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title" className={"text-center"}>
          {"Add a field"}
        </DialogTitle>
        <DialogContent>
          <label className="block">
            <select
              onChange={(evt) => {
                if (evt.target.value !== "Other") {
                  setSelectedElement(evt.target.value);
                  setAddNewField(false);
                } else {
                  setAddNewField(true);
                }
              }}
              className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
            >
              {elements.map((element, index) => {
                if (!element.defaultElement) {
                  return <option key={element.name}>{element.name}</option>;
                }
              })}
              <option className={"font-bold"}>Other</option>
            </select>
          </label>
          {addNewField && (
            <>
              <label className="block mt-5">
                <input
                  className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Field Label"
                  type="text"
                  onChange={(evt) => {
                    const isThereValue = elements.filter(
                      (element) => element.name === evt.target.value
                    );
                    if (isThereValue.length > 0) {
                      setErrorAlert(true);
                    } else {
                      setNewFieldName(evt.target.value);
                      setErrorAlert(false);
                    }
                  }}
                />
              </label>
              {errorAlert && (
                <div className="alert mt-1 flex space-x-2 rounded-lg border border-error text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>The field is already added!</p>
                </div>
              )}
              <label className="block mt-5">
                <select
                  onChange={(evt) => {
                    setNewCreatedFieldType(evt.target.value);
                  }}
                  className="form-select w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                >
                  <option>Plain Text</option>
                  <option>Phone</option>
                  <option>Email</option>
                  <option>URL</option>
                </select>
              </label>
            </>
          )}
          {errorAlertAfterSave && (
            <div className="alert mt-5 flex space-x-2 rounded-lg border border-error text-error text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>
                The field could not be added. Please change the field name and
                try again!
              </p>
            </div>
          )}
        </DialogContent>
        <DialogActions className={"m-auto"}>
          <button
            className="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
            onClick={addNewElement}
          >
            Add field
          </button>
          <button
            className="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title" className={"text-center"}>
          {"Rename field label"}
        </DialogTitle>
        <DialogContent>
          <label className="block ">
            <input
              className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Field Name"
              type="text"
              onChange={(evt) => {
                changeFieldValue(evt);
              }}
              value={changedField?.name}
            />
          </label>
          {errorAlert && (
            <div className="alert mt-1 flex space-x-2 rounded-lg border border-error text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>The field is already added!</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <button
                className="btn bg-success w-full font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
                onClick={saveChangedField}
              >
                Rename label
              </button>
            </Grid>
            <Grid item xs={12}>
              <button
                className="btn border mt-3 border-error w-full font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90"
                onClick={() => {
                  setOpenEdit(false);
                }}
              >
                Cancel
              </button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEditCrop}
        onClose={() => {
          setOpenEditCrop(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
      >
        <DialogContent style={{ padding: "unset" }}>
          <Cropper
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />{" "}
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <button
            className="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
            onClick={getCropData}
          >
            Crop Image
          </button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default DetailsTab;
