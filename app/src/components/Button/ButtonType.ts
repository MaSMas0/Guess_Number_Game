import { GestureResponderEvent } from "react-native";

export type Props = {
  onPressHandler: pressHandler;
  buttonName: string;
};
type pressHandler = undefined | ((event: GestureResponderEvent) => void);
