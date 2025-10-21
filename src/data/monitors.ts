export type Monitor = {
    id: string;
    name: string;
    status: "up" | "down"
    latencyMs: number;
    updatedAt: string;
    tags?: string[];
}
