import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectProfile() {
    return (
        <Select>
            <SelectTrigger className="w-32">
                <SelectValue placeholder="Connect Wallet" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="apple">Wallet ID</SelectItem>
                    <SelectItem value="banana">Wallet ID 2</SelectItem>
                    <SelectItem value="blueberry">Wallet ID 3</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
