let Theme = {
    white: "var(--white)",
    bgColor: "var(--white)",
    bgColorDark: "var(--black)",
    textColor: "white",
    pTextColor: "black",
    borderRadius: "10px",
    accentColor: "var(--primary-color-lighter)",
    header: {
        height: "80px",
        bgColor: "var(--secondary-color)",
        bgColorDark: "var(--black)",
        bgColorHome: "var(--secondary-color)",
    },
    card: {
        accentColor: "var(--primary-color)",
        altColor: "var(--secondary-color-lighter)",
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