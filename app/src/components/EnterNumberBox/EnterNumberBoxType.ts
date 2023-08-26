import { GestureResponderEvent } from "react-native";

export type Props = {
  enteredNumber?: string;
  onNumberChange?: (text: string) => void;
  onNumberReset?: (event: GestureResponderEvent) => void;
  onConfirm?: any;
  isThereInput?: boolean;
  boxTitle: string;
  firstButtonText: string;
  secondButtonText: string;
};
