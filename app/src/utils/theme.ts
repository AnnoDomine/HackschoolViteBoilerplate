import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    /* ===== Scrollbar CSS ===== */
                    /* Firefox */
                    "*": {
                        scrollbarWidth: "thin",
                        scrollbarColor: "#757575 #cccccc",
                    },
                    /* Chrome, Edge, and Safari */
                    "& *::-webkit-scrollbar": {
                        width: "5px",
                        height: "5px",
                    },

                    "& *::-webkit-scrollbar-track": {
                        background: "transparent",
                        margin: "10px",
                    },

                    "& *::-webkit-scrollbar-thumb": {
                        backgroundColor: "#757575",
                        borderRadius: "10px",
                        border: "0px none #616161",
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "Arcade",
    },
});

export default theme;
