
let Theme = {
    bgColor: "#fafafb",
    textColor: "white",
    pTextColor: "black",
    borderRadius: "",
    accentColor: "var(--primary-color-lighter)",
    header: {
        height: "80px",
        bgColor: "var(--secondary-color)",
        bgColorHome: "var(--secondary-color)",
    },
    card: {
      accentColor: "var(--primary-color)"
    },
    footer: {
        height: "200px"
    },
    button: {
        mainColor: "var(--primary-color)",
        hoverColor: "var(--primary-color)",
        borderColor: "var(--secondary-color-lighter)",
        fontColor: "white",
        fontColorHover: "white",
        borderRadius: "20px",
    },
    media: {
        tablet: "768",
        phone: "500"
    },
    allPosts: {
        borderRadius: "10px",
    },
    social: {
        borderRadius: "10px",
        bgColor: "var(--secondary-color)",
        bgColorLighter: "var(--secondary-color-lighter)",
        bgColorDarker: "var(--secondary-color-darker)",
    },
    post: {
        link: {
            color: "var(--primary-color)",
            visited: "var(--primary-color-darker)",
            hover: "var(--primary-color-lighter)",
            active: "var(--secondary-color)",
        }
    },
}

export default Theme