import { ItemInterface } from "react-sortablejs";

export interface SocialsModel extends ItemInterface {
  url: string;
  defaultIcon: boolean;
  network: string;
}
