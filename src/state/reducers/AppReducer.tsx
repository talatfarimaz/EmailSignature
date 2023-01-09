import * as actionTypes from "../actionTypes";

const INITIAL_APP_STATE = {
  title: "First Screen",
  leftMenuOpenState: false,
  notesListPreview: true,
  notesRefresh: false,
  detailsData: [],
  socialsData: [],
};

export default (state = INITIAL_APP_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_TITLE:
      return { ...state, title: action.payload };
    case actionTypes.LEFT_MENU_OPEN_STATE:
      return { ...state, leftMenuOpenState: action.payload };
    case actionTypes.NOTES_LIST_PREVIEW:
      return { ...state, notesListPreview: action.payload };
    case actionTypes.NOTES_REFRESH:
      return { ...state, notesRefresh: action.payload };
    case actionTypes.ADD_DETAILS:
      return { ...state, detailsData: action.payload };
    case actionTypes.ADD_SOCIALS:
      return { ...state, socialsData: action.payload };
    default:
      return state;
  }
};
