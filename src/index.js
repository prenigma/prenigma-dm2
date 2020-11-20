import moment from "moment";
import momentDurationFormat from "moment-duration-format";
import { DataManager } from "./sdk";

momentDurationFormat(moment);

if (process.env.NODE_ENV === "development" && !process.env.BUILD_MODULE) {
  import("./dev").then(({ initDevApp }) => initDevApp(DataManager));
}

export default DataManager;
