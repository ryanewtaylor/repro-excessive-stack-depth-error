import { List } from "immutable";
export interface Widget {
    name: string;
    age: number;
    children: List<string>;
}
export declare const makeWidgets: (widgets: any[]) => List<Widget>;
export declare const makeWidget: (widget: any) => Widget;
