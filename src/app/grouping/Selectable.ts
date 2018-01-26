
export interface Selectable {

  getId(): number;
  select(selected: boolean): void;
  isSelected(): boolean;

}
