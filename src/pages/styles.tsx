import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  Card: {
    border: "1px solid gray",
    borderRadius: "3px",
    boxShadow: "initial",
    width: "25%",
    margin: "auto",
    marginTop: "20px",
    padding: "20px",
    textAlign: "center",
    color: "GrayText",
    backgroundColor: "#dde3ed",
    "&:hover": {
      boxShadow: "0 0 11px rgba(33,33,33,.2)",
    },
  },
  buttonContainer: {
    width: "25%",
    margin: "auto",
    textAlign: "center",
    color: "GrayText",
  },
  button: {
    marginInline: "2%",
    color: "GrayText",
  },
  TaskContainer: {
    backgroundColor: "#c5cfe2",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "GrayText",
  },
});
