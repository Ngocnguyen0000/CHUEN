export enum ProjectCategory {
    GRAPHIC_DESIGN = "Graphic Design",
    DESIGN_POD = "Design POD",
    UX_UI_DESIGN = "UX/UI Design",
    DEVELOPER = "Developer"
}

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    imageUrl: string;
    cols?: number;
    projectUrl?: string;
    gallery?: string[];
}