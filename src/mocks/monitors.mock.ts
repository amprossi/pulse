export type MonitorMock = {
    id: string;
    name: string;
    status: "up" | "down"
    latencyMs: number;
    updatedAt: string;
    tags?: string[];
}

export const monitorsMock: MonitorMock[] = [
    {
        id: "1",
        name: "API Mercado Bitcoin",
        status: "up",
        latencyMs: 120,
        updatedAt: new Date(Date.now() - 2*60_000).toISOString(),
        tags: ["finance"],
    },
    {
        id: "2",
        name: "Website Uptime",
        status: "up",
        latencyMs: 43,
        updatedAt: new Date(Date.now() - 5 * 60_000).toISOString(),
        tags: ["infra"],
    },
    {
        id: "3",
        name: "Ethereum Price",
        status: "up",
        latencyMs: 210,
        updatedAt: new Date(Date.now() - 60_000).toISOString(),
        tags: ["finance"],
    },
    {
        id: "4",
        name: "Server Status",
        status: "down",
        latencyMs: 287,
        updatedAt: new Date(Date.now() - 3 * 60_000).toISOString(),
        tags: ["infra"],
    },
];