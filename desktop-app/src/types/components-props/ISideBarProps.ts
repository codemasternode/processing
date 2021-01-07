export interface ISideBarProps {
    match: {
        url: string;
    },
    name: string;
    lastname: string;
    projects: Project[],
    image?: string;
}