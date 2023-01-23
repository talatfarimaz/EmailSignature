import { ItemInterface } from "react-sortablejs";
import { ReactElement, ReactNode } from "react";

export interface DetailsModel extends ItemInterface {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  clickable: boolean;
  order: number;
  deletable: boolean;
  editable: boolean;
  sortable: boolean;
  defaultElement: boolean;
  defaultIconType: ReactNode | null;
  defaultIconTypeList: ReactNode[] | null;
}
