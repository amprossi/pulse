export interface Tag {
    id: number;
    name: string;
    color?: string;
}

export const TAGS: Tag[] = [
    {id: 1, name: "Finança", color: "#edea1a"},
    {id: 2, name: "Infra", color: "#3b82f6"},
    {id: 3, name: "Sites", color: "#a855f7"},
];