const NavData = [
    // {
    //     id: 1,
    //     name: "Future Innovate",
    //     path: "/",
    // },
    {
        id: 2,
        name: "Our Story",
        path: "/our-story",
    },
    {
        id: 3,
        name: "About",
        path: "/about-us",
    },
    {
        id: 4,
        name: "Services",
        path: "/services",
    },
    {
        id: 5,
        name: "Online Desk",
        path: "/online-desk",
    },
    {
        id: 6,
        name: "Compliances and Forms",
        path: "/compliances-and-forms",
    },
    {
        id: 7,
        name: "Login",
        path: "/login",
        hasDropdown: true,
        sublinks: [
            {
                id: 7.1,
                name: "Equity Market and Derivatives",
                path: "https://bo.innovatesec.com/Account/Login",
            },
            {
                id: 7.2,
                name: "Mutual Funds and Bonds",
                path: "https://wealthelite.in/client-login",
            },
            {
                id: 7.3,
                name: "Depository Services",
                path: "https://evoting.cdslindia.com/Evoting/EvotingLogin",
            },
            {
                id: 7.4,
                name: "NCD Investment Services",
                path: "/services",
            },
            {
                id: 7.5,
                name: "Corporate Fixed Deposits",
                path: "/services",
            },
            {
                id: 7.6,
                name: "IPO Submission Services",
                path: "https://ipo.innovatesec.com/",
            }
        ]
    },

    // {
    //     id: 5,
    //     name: "Directors",
    //     path: "/directors",
    // },
    // {

    //     id: 5,
    //     name: "Contact",
    //     path: "/contact",
    // },
]

export default NavData;