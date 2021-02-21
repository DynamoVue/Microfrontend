import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/types/app";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
