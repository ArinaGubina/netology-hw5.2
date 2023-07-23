import { FilterItem } from "./FilterItem";

export interface Filter {
  default : string;
  items : FilterItem[];
  selectedFilter : string;
}