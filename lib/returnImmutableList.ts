import { List } from "immutable";

export interface Widget {
  name: string;
  age: number;
  children: List<string>;
}

export const makeWidgets = (widgets: any[]): List<Widget> => {
  return List<Widget>(widgets.map(w => makeWidget(w)));
};

export const makeWidget = (widget: any): Widget => {
  const newWidget: Widget = {
    name: widget.name,
    age: widget.age,
    children: List<string>(widget.children)
  };

  return newWidget;
};
