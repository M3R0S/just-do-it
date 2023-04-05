import { ReactNode } from "react"

export interface TabItem<T = string> {
    value: T
    content: ReactNode
}

export interface TabsProps<T = string> {
    className?: string;
    tabs: TabItem<T>[]
    value: T
    onTabClick: (tab: TabItem<T>) => void
}
