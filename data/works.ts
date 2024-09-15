export type PortfolioItem = {
    id?: number;
    img?: string;
    categorie?: string;
    title: string;
    meta?: string;
    date?: string;
    routerLink?: string;
    imgPopup?: string;
    dataId?: string;
    cat?: string;
};


export const portfolioContent: PortfolioItem[] = [
    {
        id: 1,
        img: "/images/portfolio/work-1.png",
        categorie: "UI/UX",
        title: "Taskly Dashboard",
    },
    {
        id: 2,
        img: "/images/portfolio/work-2.png",
        categorie: "Product",
        title: "Film & Art Festival",
    },
    {
        id: 3,
        img: "/images/portfolio/work-3.png",
        categorie: "Branding, Packaging",
        title: "Dark Wishky Wine",
    },
    {
        id: 4,
        img: "/images/portfolio/work-4.png",
        categorie: "Illustration",
        title: "Swiss Style Poster",
    },
    {
        id: 5,
        img: "/images/portfolio/work-5.png",
        categorie: "UI/UX",
        title: "Liarch Architecture Firm",
    },
];

export const portfolioContentfive: PortfolioItem[] = [
    {id: 6, img: "/images/home/modern/work-1.png", meta: "Web Design", title: "Supro Online Store"},
    {id: 7, img: "/images/home/modern/work-2.png", meta: "Web Design, Branding", title: "FG Print Brand"},
    {id: 8, img: "/images/home/modern/work-4.png", meta: "Web Design", title: "Taskly Dashboard"},
    {id: 22, img: "/images/home/modern/work-3.png", meta: "Illustration", title: "LW Poster"},
    {id: 9, img: "/images/home/modern/work-6.png", meta: "Branding, Motion", title: "Film & Art Festival"},
    {id: 10, img: "/images/home/modern/work-5.png", meta: "Branding, Motion", title: "Dark Wishky Wine"},
]

export const portfolioContentfour: PortfolioItem[] = [
    {
        id: 11,
        title: "MNX Business Card",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-4.png",
        dataId: "work-1",
        meta: "Branding, Motion",
    },
    {
        id: 12,
        title: "SPA Brand",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-2.png",
        dataId: "work-2",
        meta: "Branding, Motion",
    },
    {
        id: 13,
        title: "Lewis Studio Website",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-3.png",
        dataId: "work-3",
        meta: "Branding, Motion Video",
    },
    {
        id: 14,
        title: "LW Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-6.png",
        dataId: "work-4",
        meta: "Illustration",
    },
    {
        id: 15,
        title: "Taskly Dashboard",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-5.png",
        dataId: "work-5",
        meta: "Web Design",
    },
    {
        id: 16,
        title: "Swiss Style Poster",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-2.png",
        dataId: "work-6",
        meta: "Branding, Motion",
    },
    {
        id: 17,
        title: "Firm & Art Festival",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-6.png",
        dataId: "work-7",
        meta: "Branding, Motion",
    },
    {
        id: 18,
        title: "Dark Whisky Wine",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-1.png",
        dataId: "work-8",

        meta: "Illustration",
    },
    {
        id: 19,
        title: "Liarch Archicture Firm",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-6.png",
        dataId: "work-9",
        meta: "Illustration",
    },
    {
        id: 20,
        title: "Supro Online Store",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-5.png",
        dataId: "work-10",
        meta: "Web Design",
    },
    {
        id: 21,
        title: "Andy Grammar Coach",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/work-1.png",
        dataId: "work-11",
        meta: "UI/UX Interaction",
    },
];

export const portfolioContentlisting: PortfolioItem[] = [
    {
        id: 23,
        cat: "Branding ,Packaging",
        title: "Supro Online Store",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-1.png",
        dataId: "work-1",
    },
    {
        id: 24,
        cat: "Illustration",
        title: "LW Poster",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-2.png",
        dataId: "work-2",
    },
    {
        id: 25,
        cat: "Branding, Ui/Ux",
        title: "Lewis Studio Website",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-3.png",
        dataId: "work-3",
    },
    {
        id: 26,
        cat: "Branding, Packaging, Motion",
        title: "SPA Brand",
        date: "2021",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-4.png",
        dataId: "work-4",
    },
    {
        id: 27,
        cat: "Ui/Ux",
        title: "Taskly Dashboard",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-5.png",
        dataId: "work-5",
    },
    {
        id: 28,
        cat: "Product ,Motion",
        title: "Film & Art Festival",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-6.png",
        dataId: "work-6",
    },
    {
        id: 29,
        cat: "Branding, Packaging ,Animation",
        title: "Dark Wishky Wine",
        date: "2020",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/work-7.png",
        dataId: "work-7",
    },


];

export const portfolioContentmasonry: PortfolioItem[] = [
    {id: 30, img: "/images/portfolio/masonry/work-1.png", meta: "Web Design", title: "Supro Online Store"},
    {
        id: 31,
        img: "/images/portfolio/masonry/work-3.png",
        meta: "Web Design, Branding ,Packaging",
        title: "FG Print Brand"
    },
    {id: 32, img: "/images/portfolio/masonry/work-5.png", meta: "Web Design", title: "Taskly Dashboard"},
    {id: 33, img: "/images/portfolio/masonry/work-4.png", meta: "Illustration", title: "LW Poster"},
    {
        id: 34,
        img: "/images/portfolio/masonry/work-2.png",
        meta: "Branding, Motion ,Animation",
        title: "Film & Art Festival"
    },
    {
        id: 35,
        img: "/images/portfolio/masonry/work-6.png",
        meta: "Branding, Motion ,Animation",
        title: "Dark Wishky Wine"
    },
];

export const portfolioContentsix: PortfolioItem[] = [

    {id: 36, img: "/images/home/modern/work-1.png", meta: "Web Design", title: "Supro Online Store"},
    {id: 37, img: "/images/home/modern/work-2.png", meta: "Web Design, Branding ,Packaging", title: "FG Print Brand"},
    {id: 38, img: "/images/home/modern/work-4.png", meta: "Web Design", title: "Taskly Dashboard"},
    {id: 39, img: "/images/home/modern/work-3.png", meta: "Illustration", title: "LW Poster"},
    {id: 40, img: "/images/home/modern/work-6.png", meta: "Branding, Motion ,Animation", title: "Film & Art Festival"},
    {id: 41, img: "/images/home/modern/work-5.png", meta: "Branding, Motion ,Animation", title: "Dark Wishky Wine"},


];

export const portfolioContentthree: PortfolioItem[] = [
    {
        id: 42,
        img: "/images/home/studio/work-1.png",
        categorie: "UI/UX",
        title: "Taskly Dashboard",
    },
    {
        id: 43,
        img: "/images/home/studio/work-2.png",
        categorie: "Product",
        title: "Film & Art Festival",
    },
    {
        id: 44,
        img: "/images/home/studio/work-3.png",
        categorie: "Branding, Packaging",
        title: "Dark Wishky Wine",
    },
    {
        id: 45,
        img: "/images/home/studio/work-4.png",
        categorie: "Illustration",
        title: "Swiss Style Poster",
    },
    {
        id: 46,
        img: "/images/home/studio/work-5.png",
        categorie: "UI/UX",
        title: "Liarch Architecture Firm",
    },
    {
        id: 47,
        img: "/images/home/studio/work-6.png",
        categorie: "UI/UX",
        title: "Andy Grammer",
    },
];

export const portfolioContenttwo: PortfolioItem[] = [
    {
        id: 21,
        cat: "Cross Platform App Development",
        title: "e-Sign Reader",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/e-sign-reader.png",
        dataId: "e-sign-reader",
    },
    {
        id: 22,
        cat: "Mobile App Development",
        title: "OGL Freight Forwarding App",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/ogl.png",
        dataId: "ogl",
    },
    {
        id: 23,
        cat: "WordPress Web Development",
        title: "API Genie Website",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/api-genie.png",
        dataId: "api-genie",
    },
    {
        id: 24,
        cat: "Website Development and App Maintenance",
        title: "Commercial Prime",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/prime.png",
        dataId: "senses-sl",
    },
    {
        id: 25,
        cat: "WordPress Web Development",
        title: "ConvoGrid Website",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/convogrid.png",
        dataId: "convogrid",
    },
    {
        id: 26,
        cat: "AI Solutions Development",
        title: "Agreementor App",
        date: "2024",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/agreementor.png",
        dataId: "agreementor",
    },
    {
        id: 27,
        cat: "Web App and Landing Page Development",
        title: "BODO",
        date: "2023",
        routerLink: "/portfolio-details",
        imgPopup: "/images/portfolio/grid/bodo.png",
        dataId: "bodo",
    },
];

export const portfolioContentRelated: PortfolioItem[] = [
    {id: 55, img: "/images/portfolio/work-1.png", categorie: "UI/UX", title: "Taskly Dashboard"},
    {id: 56, img: "/images/portfolio/work-2.png", categorie: "Product", title: "Film & Art Festival"},
    {
        id: 57,
        img: "/images/portfolio/work-3.png",
        categorie: "Branding, Packaging",
        title: "Dark Wishky Wine",
    },
    {id: 58, img: "/images/portfolio/work-4.png", categorie: "Illustration", title: "Swiss Style Poster"},
    {id: 59, img: "/images/portfolio/work-5.png", categorie: "UI/UX", title: "Liarch Architecture Firm"},
    {
        id: 60,
        img: "/images/portfolio/work-6.png",
        categorie: "Branding, Packaging, Motion Video",
        title: "FG Print Brand",
    },
];

export const allportfolioContent = [
    ...portfolioContent,
    ...portfolioContentfive,
    ...portfolioContentfour,
    ...portfolioContentlisting,
    ...portfolioContentmasonry,
    ...portfolioContentsix,
    ...portfolioContentthree,
    ...portfolioContenttwo,
    ...portfolioContentRelated

]