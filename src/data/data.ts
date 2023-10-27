import Home from "../../public/home.svg";
import Profile from "../../public/profile.svg";
import User from "../../public/user.svg";
import Product from "../../public/product.svg";
import Element from "../../public/element.svg";
import Note from "../../public/note.svg";
import Form from "../../public/form.svg";
import Calendar from "../../public/calendar.svg";
import Setting from "../../public/setting.svg";
import Backup from "../../public/backup.svg";
import Chart from "../../public/chart.svg";
import Log from "../../public/log.svg";


export const menu = [
    {
        id: 1,
        title: "Main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: Home
            },
            {
                id: 2,
                title: "Profile",
                url: "/profile",
                icon: Profile
            },
        ]
    },
    {
        id: 2,
        title: "Lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: User
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: Product
            },
        ]
    },
    {
        id: 3,
        title: "General",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: Element
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: Note
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: Form
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: Calendar
            },
        ]
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Setting",
                url: "/",
                icon: Setting
            },
            {
                id: 2,
                title: "Backup",
                url: "/",
                icon: Backup
            },
        ]
    },
    {
        id: 5,
        title: "Analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: Chart
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: Log
            },
        ]
    },
]

export const topDealUsers = [
    {
        id: 1,
        img: "dealUsers/ElvaMcDonald.webp",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "dealUsers/LinnieNelson.webp",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "dealUsers/BrentReeves.webp",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "dealUsers/AdelineWatson.jpeg",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "dealUsers/JuanHarrington.webp",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "dealUsers/AugustaMcGee.webp",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "dealUsers/AngelThomas.webp",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    },
];


export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
};

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
};

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mon",
            profit: 3000,
        },
        {
            name: "Tue",
            profit: 2000,
        },
        {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Thu",
            profit: 1890,
        },
        {
            name: "Fri",
            profit: 2390,
        },
        {
            name: "Sat",
            profit: 3490,
        },
    ],
};

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mon",
            visit: 3000,
        },
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 2780,
        },
        {
            name: "Thu",
            visit: 1890,
        },
        {
            name: "Fri",
            visit: 2390,
        },
        {
            name: "Sat",
            visit: 3490,
        },
    ],
};

export const profile = {
    id: 1,
    title: "Abolfazl Taghadosi",
    img: "/public/avatar.svg",
    info: {
        username: "character.mi",
        fullname: "Abolfazl Taghadosi",
        email: "abol1385fx@gmail.com",
        phone: "123 456 789",
        status: "admin",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 5466,
                clicks: 5535,
            },
            {
                name: "Mon",
                visits: 5323,
                clicks: 5412,
            },
            {
                name: "Tue",
                visits: 5413,
                clicks: 5345,
            },
            {
                name: "Wed",
                visits: 5444,
                clicks: 5455,
            },
            {
                name: "Thu",
                visits: 5232,
                clicks: 5122,
            },
            {
                name: "Fri",
                visits: 5454,
                clicks: 5341,
            },
            {
                name: "Sat",
                visits: 5332,
                clicks: 4445,
            },
        ],
    },
    activities: [
        {
            text: "Abolfazl Taghadosi purchased Playstation 5 Digital Edition",
            time: "3 day ago",
        },
        {
            text: "Abolfazl Taghadosi added 3 items into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Abolfazl Taghadosi purchased Sony Bravia KD-32w800",
            time: "2 weeks ago",
        },
        {
            text: "Abolfazl Taghadosi reviewed a product",
            time: "1 month ago",
        },
    ],
};


export const userRows = [
    {
        id: 1,
        img: "/usersProfile/EulaHubbard.webp",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 2,
        img: "/usersProfile/StellaManning.jpeg",
        lastName: "Manning",
        firstName: "Stella",
        email: "comhuhmit@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 3,
        img: "/usersProfile/MaryGreer.jpeg",
        lastName: "Greer",
        firstName: "Mary",
        email: "ujudokon@hottmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 4,
        img: "/usersProfile/MildredWilliamson.jpeg",
        lastName: "Williamson",
        firstName: "Mildred",
        email: "tinhavabe@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 5,
        img: "/usersProfile/JoseGross.jpeg",
        lastName: "Gross",
        firstName: "Jose",
        email: "gobtagbes@yahoo.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 6,
        img: "/usersProfile/JeremySharp.jpeg",
        lastName: "Sharp",
        firstName: "Jeremy",
        email: "vulca.eder@mail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 7,
        img: "/usersProfile/ChristinaLowe.jpeg",
        lastName: "Lowe",
        firstName: "Christina",
        email: "reso.bilic@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 8,
        img: "/usersProfile/GarrettDean.jpeg",
        lastName: "Dean",
        firstName: "Garrett",
        email: "codaic@mail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 9,
        img: "/usersProfile/LeahParsons.jpeg",
        lastName: "Parsons",
        firstName: "Leah",
        email: "uzozor@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 10,
        img: "/usersProfile/ElnoraReid.jpeg",
        lastName: "Reid",
        firstName: "Elnora",
        email: "tuhkabapu@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 11,
        img: "/usersProfile/GertrudeDunn.jpeg",
        lastName: "Dunn",
        firstName: "Gertrude",
        email: "gibo@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 12,
        img: "/usersProfile/MarkWilliams.jpeg",
        lastName: "Williams",
        firstName: "Mark",
        email: "tic.harvey@hotmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 13,
        img: "/usersProfile/CharlotteCruz.jpeg",
        lastName: "Cruz",
        firstName: "Charlotte",
        email: "ceuc@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 14,
        img: "/usersProfile/SaraHarper.jpeg",
        lastName: "Harper",
        firstName: "Sara",
        email: "bafuv@hotmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 15,
        img: "/usersProfile/EulaHubbard.webp",
        lastName: "Griffin",
        firstName: "Eric",
        email: "ubi@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
];


export const products = [
    {
        id: 1,
        img: "/products/Playstation5.webp",
        title: "Playstation 5 Digital Edition",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 2,
        img: "/products/Dell-Laptop.png",
        title: "Dell Laptop KR211822",
        color: "black",
        producer: "Dell",
        price: "$499.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 3,
        img: "/products/SamsungTV.webp",
        title: "Samsung TV 4K SmartTV",
        color: "gray",
        producer: "Samsung",
        price: "$999.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 4,
        img: "/products/iphone-14-blue.png",
        title: "Apple Iphone 14 Pro Max",
        color: "white",
        producer: "Apple",
        price: "$799.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 5,
        img: "/products/Philips.png",
        title: "Philips Hue Play Gradient",
        color: "rainbow",
        producer: "Philips",
        price: "$39.99",
        createdAt: "01.02.2023",
    },
    {
        id: 6,
        img: "/products/Logitech.avif",
        title: "Logitech MX Master 3",
        color: "black",
        producer: "Logitech",
        price: "$59.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 7,
        img: "/products/Podcast-Mic.png",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        price: "$119.49",
        createdAt: "01.02.2023",
    },
    {
        id: 8,
        img: "/products/toshiba-split-ac-2.webp",
        title: "Toshiba Split AC 2",
        color: "white",
        producer: "Toshiba",
        price: "$899.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 9,
        img: "/products/SonyBravia.webp",
        title: "Sony Bravia KDL-47W805A",
        color: "black",
        producer: "Sony",
        price: "$970.49",
        createdAt: "01.02.2023",
    },
    {
        id: 10,
        img: "/products/AcerLaptop.webp",
        title: "Acer Laptop 16 KL-4804",
        color: "black",
        producer: "Acer",
        price: "$599.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
];

export const usersInformation = [
    
    {
        id: 1,
        title: "Eula Hubbard",
        img: "/usersProfile/EulaHubbard.webp",
        info: {
            username: "hub99",
            fullname: "Eula Hubbard",
            email: "kewez@@gmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 4000,
                    clicks: 2400,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    clicks: 1398,
                },
                {
                    name: "Tue",
                    visits: 2000,
                    clicks: 3800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    clicks: 3908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    clicks: 4800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    clicks: 3800,
                },
                {
                    name: "Sat",
                    visits: 3490,
                    clicks: 4300,
                },
            ],
        },
        activities: [
            {
                text: "Eula Hubbard purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Eula Hubbard added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Eula Hubbard purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Eula Hubbard reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Eula Hubbard added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Eula Hubbard reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 2,
        title: "Stella Manning",
        img: "/usersProfile/StellaManning.jpeg",
        info: {
            username: "Stella121",
            fullname: "Stella Manning",
            email: "comhuhmit@gmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2200,
                },
                {
                    name: "Mon",
                    visits: 5000,
                    clicks: 1998,
                },
                {
                    name: "Tue",
                    visits: 1000,
                    clicks: 3800,
                },
                {
                    name: "Wed",
                    visits: 2280,
                    clicks: 3908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    clicks: 4800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    clicks: 4100,
                },
                {
                    name: "Sat",
                    visits: 3290,
                    clicks: 4300,
                },
            ],
        },
        activities: [
            {
                text: "Stella Manning purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Stella Manning added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Stella Manning purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Stella Manning reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Stella Manning added 1 items into their wishlist",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 3,
        title: "Mary Greer",
        img: "/usersProfile/MaryGreer.jpeg",
        info: {
            username: "gm123",
            fullname: "Mary Greer",
            email: "ujudokon@hottmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2000,
                    clicks: 1430,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    clicks: 1998,
                },
                {
                    name: "Tue",
                    visits: 1000,
                    clicks: 3200,
                },
                {
                    name: "Wed",
                    visits: 2980,
                    clicks: 3208,
                },
                {
                    name: "Thu",
                    visits: 1190,
                    clicks: 1000,
                },
                {
                    name: "Fri",
                    visits: 2790,
                    clicks: 4300,
                },
                {
                    name: "Sat",
                    visits: 3296,
                    clicks: 4900,
                },
            ],
        },
        activities: [
            {
                text: "Mary Greer purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Mary Greer added 3 items into their wishlist",
                time: "6 days ago",
            },
            {
                text: "Mary Greer purchased Sony Bravia KD-32w800",
                time: "1 weeks ago",
            },
            {
                text: "Mary Greer reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Mary Greer added 1 items into their wishlist",
                time: "3 weeks ago",
            },
            {
                text: "Mary Greer added 1 items into their wishlist",
                time: "2 weeks ago",
            },
            {
                text: "Mary Greer added 1 items into their wishlist",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 4,
        title: "Mildred Williamson",
        img: "/usersProfile/MildredWilliamson.jpeg",
        info: {
            username: "wily523",
            fullname: "Mildred Williamson",
            email: "tinhavabe@gmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2000,
                    clicks: 1930,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    clicks: 2298,
                },
                {
                    name: "Tue",
                    visits: 1000,
                    clicks: 1200,
                },
                {
                    name: "Wed",
                    visits: 3480,
                    clicks: 3708,
                },
                {
                    name: "Thu",
                    visits: 2390,
                    clicks: 1600,
                },
                {
                    name: "Fri",
                    visits: 2290,
                    clicks: 2300,
                },
                {
                    name: "Sat",
                    visits: 3296,
                    clicks: 4200,
                },
            ],
        },
        activities: [
            {
                text: "Mildred Williamson purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Mildred Williamson added 3 items into their wishlist",
                time: "4 days ago",
            },
            {
                text: "Mildred Williamson purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Mildred Williamson reviewed a product",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 5,
        title: "Jose Gross",
        img: "/usersProfile/JoseGross.jpeg",
        info: {
            username: "grossjose23",
            fullname: "Jose Gross",
            email: "gobtagbes@yahoo.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 1000,
                    clicks: 1230,
                },
                {
                    name: "Mon",
                    visits: 2000,
                    clicks: 1298,
                },
                {
                    name: "Tue",
                    visits: 1300,
                    clicks: 1100,
                },
                {
                    name: "Wed",
                    visits: 3150,
                    clicks: 2408,
                },
                {
                    name: "Thu",
                    visits: 2590,
                    clicks: 1620,
                },
                {
                    name: "Fri",
                    visits: 1290,
                    clicks: 1101,
                },
                {
                    name: "Sat",
                    visits: 1296,
                    clicks: 1020,
                },
            ],
        },
        activities: [
            {
                text: "Jose Gross purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Jose Gross added 3 items into their wishlist",
                time: "2 weeks ago",
            },
            {
                text: "Jose Gross purchased Sony Bravia KD-32w800",
                time: "1 month ago",
            }
        ],
    },
    {
        id: 6,
        title: "Jeremy Sharp",
        img: "/usersProfile/JeremySharp.jpeg",
        info: {
            username: "grossjose23",
            fullname: "Jeremy Sharp",
            email: "vulca.eder@mail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2930,
                },
                {
                    name: "Mon",
                    visits: 5000,
                    clicks: 4298,
                },
                {
                    name: "Tue",
                    visits: 2300,
                    clicks: 1300,
                },
                {
                    name: "Wed",
                    visits: 2350,
                    clicks: 2548,
                },
                {
                    name: "Thu",
                    visits: 5490,
                    clicks: 4520,
                },
                {
                    name: "Fri",
                    visits: 5290,
                    clicks: 5401,
                },
                {
                    name: "Sat",
                    visits: 5296,
                    clicks: 4020,
                },
            ],
        },
        activities: [
            {
                text: "Jeremy Sharp purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Jeremy Sharp added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Jeremy Sharp purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Jeremy Sharp reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Jeremy Sharp added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Jeremy Sharp reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 7,
        title: "Christina Lowe",
        img: "/usersProfile/ChristinaLowe.jpeg",
        info: {
            username: "lochi6",
            fullname: "Christina Lowe",
            email: "reso.bilic@gmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2930,
                },
                {
                    name: "Mon",
                    visits: 1000,
                    clicks: 4298,
                },
                {
                    name: "Tue",
                    visits: 2300,
                    clicks: 1200,
                },
                {
                    name: "Wed",
                    visits: 2550,
                    clicks: 2548,
                },
                {
                    name: "Thu",
                    visits: 5490,
                    clicks: 4620,
                },
                {
                    name: "Fri",
                    visits: 5290,
                    clicks: 5801,
                },
                {
                    name: "Sat",
                    visits: 5296,
                    clicks: 4820,
                },
            ],
        },
        activities: [
            {
                text: "Christina Lowe purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Christina Lowe added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Christina Lowe purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Christina Lowe reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Christina Lowe added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Christina Lowe reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 8,
        title: "Garrett Dean",
        img: "/usersProfile/GarrettDean.jpeg",
        info: {
            username: "dean06",
            fullname: "Garrett Dean",
            email: "codaic@mail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2930,
                },
                {
                    name: "Mon",
                    visits: 1000,
                    clicks: 4298,
                },
                {
                    name: "Tue",
                    visits: 2300,
                    clicks: 1200,
                },
                {
                    name: "Wed",
                    visits: 2550,
                    clicks: 2548,
                },
                {
                    name: "Thu",
                    visits: 5490,
                    clicks: 4620,
                },
                {
                    name: "Fri",
                    visits: 5290,
                    clicks: 5801,
                },
                {
                    name: "Sat",
                    visits: 5296,
                    clicks: 4820,
                },
            ],
        },
        activities: [
            {
                text: "Garrett Dean purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Garrett Dean added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Garrett Dean purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Garrett Dean reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Garrett Dean added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Garrett Dean reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 9,
        title: "Leah Parsons",
        img: "/usersProfile/LeahParsons.jpeg",
        info: {
            username: "par236",
            fullname: "Leah Parsons",
            email: "uzozor@gmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2130,
                },
                {
                    name: "Mon",
                    visits: 1000,
                    clicks: 4298,
                },
                {
                    name: "Tue",
                    visits: 2300,
                    clicks: 1200,
                },
                {
                    name: "Wed",
                    visits: 2550,
                    clicks: 2248,
                },
                {
                    name: "Thu",
                    visits: 5190,
                    clicks: 4620,
                },
                {
                    name: "Fri",
                    visits: 5290,
                    clicks: 5231,
                },
                {
                    name: "Sat",
                    visits: 3296,
                    clicks: 4120,
                },
            ],
        },
        activities: [
            {
                text: "Leah Parsons purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Leah Parsons added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Leah Parsons purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Leah Parsons reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Leah Parsons added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Leah Parsons reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 10,
        title: "Elnora Reid",
        img: "/usersProfile/ElnoraReid.jpeg",
        info: {
            username: "reidel21",
            fullname: "Elnora Reid",
            email: "tuhkabapu@gmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3000,
                    clicks: 2130,
                },
                {
                    name: "Mon",
                    visits: 1000,
                    clicks: 1198,
                },
                {
                    name: "Tue",
                    visits: 3300,
                    clicks: 1400,
                },
                {
                    name: "Wed",
                    visits: 5550,
                    clicks: 4248,
                },
                {
                    name: "Thu",
                    visits: 2190,
                    clicks: 1620,
                },
                {
                    name: "Fri",
                    visits: 4390,
                    clicks: 2331,
                },
                {
                    name: "Sat",
                    visits: 3296,
                    clicks: 2320,
                },
            ],
        },
        activities: [
            {
                text: "Elnora Reid purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Elnora Reid added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Elnora Reid purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Elnora Reid reviewed a product",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 11,
        title: "Gertrude Dunn",
        img: "/usersProfile/GertrudeDunn.jpeg",
        info: {
            username: "dunn.g34",
            fullname: "Gertrude Dunn",
            email: "gibo@gmail.com",
            phone: "123 456 789",
            status: "verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2000,
                    clicks: 1430,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    clicks: 2198,
                },
                {
                    name: "Tue",
                    visits: 2300,
                    clicks: 1400,
                },
                {
                    name: "Wed",
                    visits: 4540,
                    clicks: 4148,
                },
                {
                    name: "Thu",
                    visits: 2390,
                    clicks: 1820,
                },
                {
                    name: "Fri",
                    visits: 3290,
                    clicks: 2331,
                },
                {
                    name: "Sat",
                    visits: 3296,
                    clicks: 2320,
                },
            ],
        },
        activities: [
            {
                text: "Gertrude Dunn purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Gertrude Dunn added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Gertrude Dunn purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Gertrude Dunn reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Gertrude Dunn added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Gertrude Dunn reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 12,
        title: "Mark Williams",
        img: "/usersProfile/MarkWilliams.jpeg",
        info: {
            username: "will.mark1",
            fullname: "Mark Williams",
            email: "tic.harvey@hotmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2000,
                    clicks: 1430,
                },
                {
                    name: "Mon",
                    visits: 2000,
                    clicks: 1098,
                },
                {
                    name: "Tue",
                    visits: 2700,
                    clicks: 2400,
                },
                {
                    name: "Wed",
                    visits: 4540,
                    clicks: 4148,
                },
                {
                    name: "Thu",
                    visits: 1390,
                    clicks: 1220,
                },
                {
                    name: "Fri",
                    visits: 3290,
                    clicks: 2331,
                },
                {
                    name: "Sat",
                    visits: 4296,
                    clicks: 3320,
                },
            ],
        },
        activities: [
            {
                text: "Mark Williams purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Mark Williams added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mark Williams purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Mark Williams reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Mark Williams added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Mark Williams reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 13,
        title: "Charlotte Cruz",
        img: "/usersProfile/CharlotteCruz.jpeg",
        info: {
            username: "c123",
            fullname: "Charlotte Cruz",
            email: "ceuc@gmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2000,
                    clicks: 1430,
                },
                {
                    name: "Mon",
                    visits: 2000,
                    clicks: 1098,
                },
                {
                    name: "Tue",
                    visits: 2700,
                    clicks: 2400,
                },
                {
                    name: "Wed",
                    visits: 4540,
                    clicks: 4148,
                },
                {
                    name: "Thu",
                    visits: 1390,
                    clicks: 1220,
                },
                {
                    name: "Fri",
                    visits: 3290,
                    clicks: 2331,
                },
                {
                    name: "Sat",
                    visits: 4296,
                    clicks: 3320,
                },
            ],
        },
        activities: [
            {
                text: "Charlotte Cruz purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Charlotte Cruz added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Charlotte Cruz purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Charlotte Cruz reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Charlotte Cruz added 1 items into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Charlotte Cruz reviewed a product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 14,
        title: "Sara Harper",
        img: "/usersProfile/SaraHarper.jpeg",
        info: {
            username: "sara2323",
            fullname: "Sara Harper",
            email: "bafuv@hotmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 1400,
                    clicks: 1430,
                },
                {
                    name: "Mon",
                    visits: 5000,
                    clicks: 4098,
                },
                {
                    name: "Tue",
                    visits: 3400,
                    clicks: 4552,
                },
                {
                    name: "Wed",
                    visits: 4342,
                    clicks: 4556,
                },
                {
                    name: "Thu",
                    visits: 2321,
                    clicks: 4543,
                },
                {
                    name: "Fri",
                    visits: 2121,
                    clicks: 2222,
                },
                {
                    name: "Sat",
                    visits: 5454,
                    clicks: 2342,
                },
            ],
        },
        activities: [
            {
                text: "Sara Harper purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Sara Harper added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Sara Harper purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Sara Harper reviewed a product",
                time: "1 month ago",
            },
            {
                text: "Sara Harper added 1 items into their wishlist",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 15,
        title: "Eric Griffin",
        img: "/usersProfile/EulaHubbard.webp",
        info: {
            username: "griffin2325",
            fullname: "Eric Griffin",
            email: "ubi@gmail.com",
            phone: "123 456 789",
            status: "not verified",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "clicks", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3466,
                    clicks: 3535,
                },
                {
                    name: "Mon",
                    visits: 2323,
                    clicks: 1412,
                },
                {
                    name: "Tue",
                    visits: 1413,
                    clicks: 1345,
                },
                {
                    name: "Wed",
                    visits: 5444,
                    clicks: 5455,
                },
                {
                    name: "Thu",
                    visits: 1232,
                    clicks: 1122,
                },
                {
                    name: "Fri",
                    visits: 5454,
                    clicks: 2341,
                },
                {
                    name: "Sat",
                    visits: 2332,
                    clicks: 2445,
                },
            ],
        },
        activities: [
            {
                text: "Eric Griffin purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Eric Griffin added 3 items into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Eric Griffin purchased Sony Bravia KD-32w800",
                time: "2 weeks ago",
            },
            {
                text: "Eric Griffin reviewed a product",
                time: "1 month ago",
            },
        ],
    },
]



export const productsStatistics = [
    {
        id: 1,
        title: "Playstation 5 Digital Edition",
        img: "/products/Playstation5.webp",
        info: {
            productId: "Ps5SDF1156d",
            color: "white",
            price: "$250.99",
            producer: "Sony",
            export: "Japan",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 4000,
                    orders: 2400,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 1398,
                },
                {
                    name: "Tue",
                    visits: 2000,
                    orders: 3800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 3908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 4800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    orders: 3800,
                },
                {
                    name: "Sat",
                    visits: 3490,
                    orders: 4300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Playstation 5 Digital Edition",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Playstation 5 Digital Edition",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 2,
        title: "Dell Laptop KR211822",
        img: "/products/Dell-Laptop.png",
        info: {
            productId: "TA3R31156d",
            color: "black",
            price: "$499.99",
            producer: "Dell",
            export: "US",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2300,
                    orders: 2100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 1398,
                },
                {
                    name: "Tue",
                    visits: 4000,
                    orders: 1800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 1908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 4390,
                    orders: 3800,
                },
                {
                    name: "Sat",
                    visits: 4490,
                    orders: 4300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Laptop KR211822",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Laptop KR211822 into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Laptop KR211822",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            }
        ],
    },
    {
        id: 3,
        title: "Samsung TV 4K SmartTV",
        img: "/products/SamsungTV.webp",
        info: {
            productId: "TA3R31156d",
            color: "gray",
            price: "$999.49",
            producer: "Samsung",
            export: "Finland",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2300,
                    orders: 2100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 4000,
                    orders: 3800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 1908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 4390,
                    orders: 4100,
                },
                {
                    name: "Sat",
                    visits: 4490,
                    orders: 4300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Samsung TV 4K SmartTV",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Samsung TV 4K SmartTV into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Samsung TV 4K SmartTV",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Samsung TV 4K SmartTV into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 4,
        title: "Apple Iphone 14 Pro Max",
        img: "/products/iphone-14-blue.png",
        info: {
            productId: "DAR231156d",
            color: "white",
            price: "$799.49",
            producer: "Apple",
            export: "US",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2300,
                    orders: 2100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 4000,
                    orders: 3800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 1908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 4390,
                    orders: 4100,
                },
                {
                    name: "Sat",
                    visits: 4490,
                    orders: 4300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Apple Iphone 14 Pro Max",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Apple Iphone 14 Pro Max into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Apple Iphone 14 Pro Max",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Apple Iphone 14 Pro Max into their wishlist",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 5,
        title: "Philips Hue Play Gradient",
        img: "/products/Philips.png",
        info: {
            productId: "FDFA233D54",
            color: "rainbow",
            price: "$39.99",
            producer: "Philips",
            export: "China",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2300,
                    orders: 2100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 1398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 1800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 1908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 1390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Philips Hue Play Gradient",
                time: "3 day ago",
            },
            {
                text: "Mike Doe purchased Dell Philips Hue Play Gradient",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 6,
        title: "Logitech MX Master 3",
        img: "/products/Logitech.avif",
        info: {
            productId: "UID383LS",
            color: "black",
            price: "$59.49",
            producer: "Logitech",
            export: "China",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 2300,
                    orders: 2100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 1398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 1800,
                },
                {
                    name: "Wed",
                    visits: 2780,
                    orders: 1908,
                },
                {
                    name: "Thu",
                    visits: 1890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 1390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Logitech MX Master 3",
                time: "3 day ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 7,
        title: "Rode Podcast Microphone",
        img: "/products/Podcast-Mic.png",
        info: {
            productId: "UID383LS",
            color: "gray",
            price: "$119.49",
            producer: "Rode",
            export: "Sweden",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 4300,
                    orders: 4100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 2800,
                },
                {
                    name: "Wed",
                    visits: 4780,
                    orders: 3908,
                },
                {
                    name: "Thu",
                    visits: 3890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Rode Podcast Microphone",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Rode Podcast Microphone into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Rode Podcast Microphone",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Rode Podcast Microphone into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 8,
        title: "Toshiba Split AC 2",
        img: "/products/toshiba-split-ac-2.webp",
        info: {
            productId: "DGU834H",
            color: "white",
            price: "$899.99",
            producer: "Toshiba",
            export: "Japan",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 4300,
                    orders: 4100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 2800,
                },
                {
                    name: "Wed",
                    visits: 4780,
                    orders: 3908,
                },
                {
                    name: "Thu",
                    visits: 3890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Toshiba Split AC 2",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Toshiba Split AC 2 into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Toshiba Split AC 2",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Toshiba Split AC 2 into their wishlist",
                time: "1 month ago",
            },
        ],
    },
    {
        id: 9,
        title: "Sony Bravia KDL-47W805A",
        img: "/products/SonyBravia.webp",
        info: {
            productId: "KAF6152H",
            color: "black",
            price: "$970.49",
            producer: "Sony",
            export: "Japan",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 4300,
                    orders: 4100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 2800,
                },
                {
                    name: "Wed",
                    visits: 4780,
                    orders: 3908,
                },
                {
                    name: "Thu",
                    visits: 3890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Sony Bravia KDL-47W805A",
                time: "3 day ago",
            },
            {
                text: "Jane Doe added Dell Sony Bravia KDL-47W805A into their wishlist",
                time: "1 week ago",
            },
            {
                text: "Mike Doe purchased Dell Sony Bravia KDL-47W805A",
                time: "2 weeks ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Sony Bravia KDL-47W805A into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
    {
        id: 10,
        title: "Acer Laptop 16 KL-4804",
        img: "/products/AcerLaptop.webp",
        info: {
            productId: "SGF34GT",
            color: "black",
            price: "$599.99",
            producer: "Acer",
            export: "Germany",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#82ca9d" },
                { name: "orders", color: "#8884d8" },
            ],
            data: [
                {
                    name: "Sun",
                    visits: 3300,
                    orders: 3100,
                },
                {
                    name: "Mon",
                    visits: 3000,
                    orders: 2398,
                },
                {
                    name: "Tue",
                    visits: 3000,
                    orders: 2800,
                },
                {
                    name: "Wed",
                    visits: 3780,
                    orders: 2908,
                },
                {
                    name: "Thu",
                    visits: 3890,
                    orders: 1800,
                },
                {
                    name: "Fri",
                    visits: 2390,
                    orders: 1100,
                },
                {
                    name: "Sat",
                    visits: 2490,
                    orders: 1300,
                },
            ],
        },
        activities: [
            {
                text: "John Doe purchased Dell Acer Laptop 16 KL-4804",
                time: "3 day ago",
            },
            {
                text: "Anna Doe reviewed the product",
                time: "1 month ago",
            },
            {
                text: "Michael Doe added Dell Acer Laptop 16 KL-4804 into their wishlist",
                time: "1 month ago",
            },
            {
                text: "Helen Doe reviewed the product",
                time: "2 months ago",
            },
        ],
    },
]