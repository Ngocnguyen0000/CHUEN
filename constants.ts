import { Project, ProjectCategory } from './types'

export const projectHighlights: Project[] = [
    {
        id: 1,
        title: 'Human Resource Management System',
        category: ProjectCategory.UX_UI_DESIGN,
        imageUrl: '/asset/2.png',
        projectUrl:
            'https://www.figma.com/design/nfJisMPrN7gEpzjwyoTWfU/THIET-KE-GIAO-DIEN-HE-THONG-QUAN-LY-NHAN-SU?m=auto&t=ZzT0pDIDWaGusKBT-6',
    },
    {
        id: 2,
        title: 'Inferno Warrior T-shirt',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/1.png',
    },
    {
        id: 3,
        title: 'THE NEXT GENK',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/3.png',
        gallery: [
            '/asset/Img-1.png',
            '/asset/Img-1.1.png',
            '/asset/Img-1.2.png',
            '/asset/Img-1.13png.png',
            '/asset/Img-1.4.png',
        ],
    },
]

export const allProjects: Project[] = [
    // Graphic Design
    {
        id: 101,
        title: 'RED DEVIL',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img.png',
    },
    {
        id: 102,
        title: '[CLB KHỞI] TUYỂN THÀNH VIÊN 2023',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img-1.png',
        gallery: [
            '/asset/Img-1.png',
            '/asset/Img-1.1.png',
            '/asset/Img-1.2.png',
            '/asset/Img-1.13png.png',
            '/asset/Img-1.4.png',
        ],
    },
    {
        id: 103,
        title: '[CLB KHỞI] Ý TƯỞNG SÁNG TẠO 2023',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img-2.png',
        gallery: ['/asset/33.png', '/asset/333.jpg'],
    },
    {
        id: 104,
        title: '[CLB KHỞI] CHUYẾN PHIÊU LƯU KÝ TRẠM CUỐI',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img4.png',
        gallery: ['/asset/111.jpg'],
    },
    {
        id: 105,
        title: '[CLB KHỞI] ĐÊM DUE, BẠN CÓ MUỐN GHÉ?',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img5.png',
        gallery: [
            '/asset/dem1.jpg',
            '/asset/dem2.jpg',
            '/asset/dem3.jpg',
            '/asset/dem4.jpg',
            '/asset/dem5.jpg',
            '/asset/dem6.jpg',
            '/asset/dem7.jpg',
        ],
    },
    {
        id: 106,
        title: '[CLB KHỞI] NHỊP CẦU QUỐC KHÁNH 2/9',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img6.png',
        gallery: [
            '/asset/le1.jpg',
            '/asset/le2.jpg',
            '/asset/le3.jpg',
            '/asset/le4.jpg',
            '/asset/le5.jpg',
            '/asset/le6.jpg',
            '/asset/le7.jpg',
            '/asset/le8.jpg',
            '/asset/le9.jpg',
            '/asset/le10.jpg',
        ],
    },
    {
        id: 107,
        title: 'GIỚI THIỆU THÀNH VIÊN BCN 2023',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img7.png',
        gallery: [
            '/asset/1 (1).jpg',
            '/asset/1 (2).jpg',
            '/asset/1 (3).jpg',
            '/asset/1 (4).jpg',
            '/asset/1 (5).jpg',
            '/asset/1 (6).jpg',
            '/asset/1 (7).jpg',
            '/asset/1 (8).jpg',
            '/asset/1 (9).jpg',
            '/asset/1 (10).jpg',
            '/asset/1 (11).jpg',
            '/asset/1 (12).jpg',
        ],
    },
    {
        id: 108,
        title: '[CLB KHỞI] TRUNG THU XƯA VÀ NAY',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img8.png',
        gallery: [
            '/asset/Img81.png',
            '/asset/Img82.png',
            '/asset/Img83.png',
            '/asset/Img84.png',
            '/asset/Img85.png',
        ],
    },
    {
        id: 109,
        title: '[CLB KHỞI] GIỚI THIỆU NHÀ TUYỂN DỤNG',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img9.png',
        gallery: [
            '/asset/ntd1.jpg',
            '/asset/ntd2.jpg',
            '/asset/ntd3.jpg',
            '/asset/ntd4.jpg',
        ],
    },
    {
        id: 110,
        title: 'JOKER',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img10.png',
        gallery: ['/asset/JOKER.jpg'],
    },
    {
        id: 111,
        title: 'CẬU BÉ VÀ RẮN',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img11.png',
        gallery: ['/asset/RẮN VÀ CẬU BÉ.jpg'],
    },
    {
        id: 112,
        title: 'TUỔI THƠ CỦA EM',
        category: ProjectCategory.GRAPHIC_DESIGN,
        imageUrl: '/asset/Img12.png',
        gallery: ['/asset/TUỔI THƠ CỦA EM.jpg'],
    },

    // Design POD
    {
        id: 201,
        title: 'Inferno Warrior T-shirt',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img13.png',
    },
    {
        id: 202,
        title: 'Bernedoodle Dog',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img14.png',
    },
    {
        id: 203,
        title: 'A trendy hipster duck',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img15.png',
    },
    {
        id: 204,
        title: 'PARAMVEER CHARITABLE TRUST',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img16.png',
    },
    {
        id: 205,
        title: 'BUTCHER SHOP',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img17.png',
    },
    {
        id: 206,
        title: 'LOVE',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img18.png',
    },
    {
        id: 207,
        title: 'Faith can create miracles',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img19.png',
    },
    {
        id: 208,
        title: 'BOSS MOM',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img20.png',
    },
    {
        id: 209,
        title: 'KICK UP SOME SAND',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img21.png',
    },
    {
        id: 210,
        title: 'TRICK OR TREAT',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img22.png',
    },
    {
        id: 211,
        title: 'STREET TACOS',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img23.png',
    },
    {
        id: 212,
        title: 'FIREFIGHTERS',
        category: ProjectCategory.DESIGN_POD,
        imageUrl: '/asset/Img24.png',
    },

    // UX/UI Design
    {
        id: 301,
        title: 'ARO - ỨNG DỤNG THU GOM ĐỒ ĂN THỪA',
        category: ProjectCategory.UX_UI_DESIGN,
        imageUrl: '/asset/Img25.png',
        projectUrl:
            'https://www.behance.net/gallery/224087963/ARO-From-Waste-to-Worth',
    },
    {
        id: 302,
        title: 'Human Resource Management System',
        category: ProjectCategory.UX_UI_DESIGN,
        imageUrl: '/asset/Img26.png',
        projectUrl:
            'https://www.figma.com/design/nfJisMPrN7gEpzjwyoTWfU/THIET-KE-GIAO-DIEN-HE-THONG-QUAN-LY-NHAN-SU?m=auto&t=ZzT0pDIDWaGusKBT-6',
    },

    {
        id: 303,
        title: 'Mobie App | Splash Art',
        category: ProjectCategory.UX_UI_DESIGN,
        imageUrl: '/asset/uxui_design/3.png',
        projectUrl:
            'https://www.behance.net/gallery/236822963/Splash-Art',
        gallery: ['/asset/uxui_design/3.1.png'],

    },

        {
        id: 304,
        title: 'Mobie App | Runzy',
        category: ProjectCategory.UX_UI_DESIGN,
        imageUrl: '/asset/uxui_design/304.PNG',
        projectUrl:
            'https://www.behance.net/gallery/236869453/Mobie-App-Runzy',
        gallery: ['/asset/uxui_design/304.1.png'],

    },

    // Developer
    {
        id: 401,
        title: 'FOOD RESTAURANT WEBSITE',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/Img27.png',
        projectUrl:
            'https://spicy-dola-restaurants-web-design-github-io.vercel.app/',
    },
    {
        id: 402,
        title: 'NOC NOC',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/Img28.png',
        projectUrl: 'https://noc-noc.vercel.app/',
    },
    {
        id: 403,
        title: 'WEATHER APP',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/Img29.png',
        projectUrl: 'https://weather-app-sigma-smoky.vercel.app/',
    },
    {
        id: 404,
        title: 'AllBalance Website',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/developer/404.png',
        projectUrl: 'https://allbalance.vercel.app/',
    },
    {
        id: 405,
        title: 'AI Drawing Automator',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/developer/405.png',
        projectUrl: 'https://draw-step-by-step.vercel.app/',
    },

    {
        id: 406,
        title: 'SVG Dot-to-Dot Generator',
        category: ProjectCategory.DEVELOPER,
        imageUrl: '/asset/developer/406.png',
        projectUrl: 'https://glow-dot-art.vercel.app/',
    },
]
