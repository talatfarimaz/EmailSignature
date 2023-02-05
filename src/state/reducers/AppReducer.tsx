import * as actionTypes from "../actionTypes";
import { ImageShapeType } from "../../constants/ImageShapeType";
import { ImageLocationType } from "../../constants/ImageLocationType";
import { IconFillType } from "../../constants/IconFillType";
import { IconDirectionType } from "../../constants/IconDirectionType";
import { SeparatorType } from "../../constants/SeparatorType";
import { LineType } from "../../constants/LineType";
import { CHANGE_ICON_BORDER_TYPE, CHANGE_ICON_TYPE } from "../actionTypes";
import { IconType } from "../../constants/IconType";
import { IconBorderType } from "../../constants/IconBorderType";

const INITIAL_APP_STATE = {
  title: "First Screen",
  leftMenuOpenState: false,
  notesListPreview: true,
  notesRefresh: false,
  detailsData: [],
  socialsData: [],
  photoData: null,
  fontSizePer: 14,
  lineSpacing: 2,
  spaceFromContent: 1,
  colorValue: "#9ca3af",
  imageShape: ImageShapeType.SQUARE,
  imageSize: 10,
  imageLocation: ImageLocationType.UP,
  iconFillType: IconFillType.NONE,
  iconDirection: IconDirectionType.HORIZONTAL,
  separatorType: SeparatorType.NONE,
  textColor: "#374151",
  labelColorState: false,
  lineType: LineType.NONE,
  iconType: IconType.ORIGINAL,
  iconBorder: IconBorderType.SQUARE,
  iconSize: 10,
  iconBetween: 11,
  iconTemplateColor: false,
  lineTemplateColor: false,
  optimizeMobile: false,
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
    case actionTypes.ADD_PHOTO:
      return { ...state, photoData: action.payload };
    case actionTypes.CHANGE_FONT_SIZE_DETAIL:
      return { ...state, fontSizePer: action.payload };
    case actionTypes.CHANGE_LINE_SPACING_DETAIL:
      return { ...state, lineSpacing: action.payload };
    case actionTypes.CHANGE_SPACE_FROM_CONTENT_DETAIL:
      return { ...state, spaceFromContent: action.payload };
    case actionTypes.CHANGE_COLOR_DETAIL:
      return { ...state, colorValue: action.payload };
    case actionTypes.CHANGE_IMAGE_SHAPE:
      return { ...state, imageShape: action.payload };
    case actionTypes.CHANGE_IMAGE_SIZE:
      return { ...state, imageSize: action.payload };
    case actionTypes.CHANGE_IMAGE_LOCATION:
      return { ...state, imageLocation: action.payload };
    case actionTypes.CHANGE_FILL_TYPE:
      return { ...state, iconFillType: action.payload };
    case actionTypes.CHANGE_DIRECTION_TYPE:
      return { ...state, iconDirection: action.payload };
    case actionTypes.CHANGE_SEPARATOR_TYPE:
      return { ...state, separatorType: action.payload };
    case actionTypes.CHANGE_TEXT_COLOR:
      return { ...state, textColor: action.payload };
    case actionTypes.CHANGE_LABEL_COLOR:
      return { ...state, labelColorState: action.payload };
    case actionTypes.CHANGE_LINE_TYPE:
      return { ...state, lineType: action.payload };
    case actionTypes.CHANGE_ICON_TYPE:
      return { ...state, iconType: action.payload };
    case actionTypes.CHANGE_ICON_BORDER_TYPE:
      return { ...state, iconBorder: action.payload };
    case actionTypes.CHANGE_ICON_SIZE:
      return { ...state, iconSize: action.payload };
    case actionTypes.CHANGE_ICON_BETWEEN:
      return { ...state, iconBetween: action.payload };
    case actionTypes.CHANGE_ICON_TEMPLATE_COLOR:
      return { ...state, iconTemplateColor: action.payload };
    case actionTypes.CHANGE_LINE_TEMPLATE_COLOR:
      return { ...state, lineTemplateColor: action.payload };
    case actionTypes.CHANGE_OPTIMIZE_MOBILE:
      return { ...state, optimizeMobile: action.payload };
    default:
      return state;
  }
};
