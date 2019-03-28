import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "127.0.0.1" }) // Run command "adb reverse tcp:9090 tcp:9090" before "npm start"
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
