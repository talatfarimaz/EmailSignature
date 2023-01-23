import { DetailsModel } from "../models/DetailsModel";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import RingVolumeOutlinedIcon from "@material-ui/icons/RingVolumeOutlined";
import StayCurrentPortraitOutlinedIcon from "@material-ui/icons/StayCurrentPortraitOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import PhonelinkRingOutlinedIcon from "@material-ui/icons/PhonelinkRingOutlined";
import MobileFriendlyOutlinedIcon from "@material-ui/icons/MobileFriendlyOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import HttpOutlinedIcon from "@material-ui/icons/HttpOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SwapCallsOutlinedIcon from "@material-ui/icons/SwapCallsOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import SubtitlesOutlinedIcon from "@material-ui/icons/SubtitlesOutlined";
import CallSplitOutlinedIcon from "@material-ui/icons/CallSplitOutlined";
import DuoOutlinedIcon from "@material-ui/icons/DuoOutlined";
import CameraFrontOutlinedIcon from "@material-ui/icons/CameraFrontOutlined";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";

export const IconElements: DetailsModel[] = [
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Phone",
    placeholder: "Phone",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: true,
    defaultIconType: <PhoneOutlinedIcon />,
    defaultIconTypeList: [
      <PhoneOutlinedIcon fontSize={"small"} />,
      <PhoneAndroidOutlinedIcon fontSize={"small"} />,
      <PhoneEnabledOutlinedIcon fontSize={"small"} />,
      <RingVolumeOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Mobile",
    placeholder: "Mobile",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: true,
    defaultIconType: <StayCurrentPortraitOutlinedIcon />,
    defaultIconTypeList: [
      <StayCurrentPortraitOutlinedIcon fontSize={"small"} />,
      <PhoneIphoneOutlinedIcon fontSize={"small"} />,
      <PhonelinkRingOutlinedIcon fontSize={"small"} />,
      <MobileFriendlyOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Website",
    placeholder: "Website",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: true,
    defaultIconType: <LanguageOutlinedIcon />,
    defaultIconTypeList: [
      <LanguageOutlinedIcon fontSize={"small"} />,
      <HttpOutlinedIcon fontSize={"small"} />,
      <AccountTreeOutlinedIcon fontSize={"small"} />,
      <WebOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Email",
    placeholder: "Email",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: true,
    defaultIconType: <ContactMailOutlinedIcon />,
    defaultIconTypeList: [
      <ContactMailOutlinedIcon fontSize={"small"} />,
      <AlternateEmailOutlinedIcon fontSize={"small"} />,
      <ContactMailOutlinedIcon fontSize={"small"} />,
      <MailOutlineOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Address",
    placeholder: "Address",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: true,
    defaultIconType: <BusinessOutlinedIcon />,
    defaultIconTypeList: [
      <BusinessOutlinedIcon fontSize={"small"} />,
      <HomeOutlinedIcon fontSize={"small"} />,
      <ImportContactsOutlinedIcon fontSize={"small"} />,
      <ContactsOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Extension",
    placeholder: "Extension",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: false,
    defaultIconType: <ExtensionOutlinedIcon />,
    defaultIconTypeList: [
      <ExtensionOutlinedIcon fontSize={"small"} />,
      <HeadsetMicOutlinedIcon fontSize={"small"} />,
      <ImportantDevicesOutlinedIcon fontSize={"small"} />,
      <AddBoxOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Fax",
    placeholder: "Fax",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: false,
    defaultIconType: <SwapCallsOutlinedIcon />,
    defaultIconTypeList: [
      <SwapCallsOutlinedIcon fontSize={"small"} />,
      <LibraryBooksOutlinedIcon fontSize={"small"} />,
      <SubtitlesOutlinedIcon fontSize={"small"} />,
      <CallSplitOutlinedIcon fontSize={"small"} />,
    ],
  },
  {
    value: "",
    clickable: false,
    deletable: false,
    type: "text",
    name: "Communication",
    placeholder: "Communication",
    order: 3,
    editable: true,
    sortable: true,
    id: "",
    defaultElement: false,
    defaultIconType: <CameraFrontOutlinedIcon />,
    defaultIconTypeList: [
      <CameraFrontOutlinedIcon fontSize={"small"} />,
      <DuoOutlinedIcon fontSize={"small"} />,
      <WhatsAppIcon fontSize={"small"} />,
      <TelegramIcon fontSize={"small"} />,
    ],
  },
];
