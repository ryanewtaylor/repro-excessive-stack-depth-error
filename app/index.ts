import { List } from "immutable";
import { makeWidgets, Widget } from "lib";

const getList = (): Promise<List<Widget>> => {
  return new Promise<List<Widget>>((resolve, reject) => {

    const widget: any = {
        name: "whatevs",
        age: 5,
        children: ["olimar", "al"]
    }
    resolve(makeWidgets([widget]));
  });
};
