import { ReactNode } from "react"

export function Card({ children }: {
    children: ReactNode
}) {
    return (
        <div className="max-w-sm w-full ">
            <div className="border border-gray-400 bg-lime-100 rounded-b p-4 pl-5 pt-3">
                {children}
            </div>
        </div>
    )
}