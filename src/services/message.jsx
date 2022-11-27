import { useSnackbar } from "notistack";

let snackBar;
export const SnackBarConfig = () => {
  snackBar = useSnackbar();
};

const toast = (msg, variant) => {
  snackBar.enqueueSnackbar(msg, { variant });
};

export const SnackMessage = {
  success(msg) {
    toast(msg, "success");
  },

  error(msg) {
    toast(msg, "error");
  },
};
