export let ListMenu = [
        {id: 1, name: "HOME", link:"/"},
        {id: 2, name: "ABOUT US", link:"/about", subs:[
            {id: 1, name: "INTRODUCTION", link: "/introduction"},
            {id: 2, name: "SUBSIDIARES", link: "/subsidiares"},
            {id: 3, name: "BRANCES", link: "/brances"},
            {id: 3, name: "DOWNLOAD FILE", link: "/download_file"},
        ]  },
        {id: 3, name: "PRODUCT & SERVICE", link:"/product", subs:[
            {id: 1, name: "TELECOM NETWORK INSTALLATION & MAINTENANCE SERVICE", link: "/product/fiber_optic"},
            {id: 2, name: "SOLUSI PRODUK TELEKOMUNIKASI", link: "/product/mobile_radio"},
            {id: 3, name: "MECHANICAL AND ELECTRICAL ENGINEERING SERVICES", link: "/product/mec_el"},
            {id: 4, name: "CONTRACTOR & INTERIOR DESIGN SERVICES", link: "/product/con_in"},
            {id: 5, name: "VEHICLE RENTAL", link: "/product/ve_ren"},
            {id: 6, name: "OFFICE EQUIPMENT RENTAL", link: "/product/off_eq"},
            {id: 7, name: "GENERAL TRADING", link: "/product/gen_tred"},
            {id: 7, name: "SAVING & LOAN SERVICES", link: "/product/sa_loa"},
        ] },
        {id: 4, name: "PROJECT PORTOFOLIO", link:"/project" },
        {id: 5, name: "NEWS & EVENT", link:"/news"},
        {id: 6, name: "CAREER", link:"/career" },
        {id: 7, name: "CONTACT US", link:"/contact" },
    ];
