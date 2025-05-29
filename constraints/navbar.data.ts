export interface NavbarInterface{
    title: string;
    link:string;
}

const navbar: NavbarInterface[]=[
    {
        title:"Home",
        link:"/",

    },
    {
        title:"About Us",
        link:"/aboutus",

    },
    {
        title:"Our Service",
        link:"/service",

    },
    // {
    //     title:"Gallery",
    //     link:"/gallery",

    // },
    {
        title:"Contact Us",
        link:"/contact",

    },
];
export default navbar;


