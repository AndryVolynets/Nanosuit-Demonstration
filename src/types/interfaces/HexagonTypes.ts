
export interface Module {
    Icon: string;
    Title: string;
}

export interface Item {
    id: number;
    name: string;
    modules?: Module[];
}

export interface Data {
    lastId: number;
    items: Item[];
}