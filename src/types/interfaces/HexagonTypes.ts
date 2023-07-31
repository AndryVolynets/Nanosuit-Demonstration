export interface Module {
    Icon: string
    Title: string
    Description: string
    Features: string[]
}

export interface Item {
    id: number
    icon: string
    name: string
    modules?: Module[]
}

export interface Data {
    lastId: number
    items: Item[]
}
