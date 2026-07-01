import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function TaskFilterSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full min-w-[10rem] sm:w-40">
                <SelectValue placeholder="My Task" />
            </SelectTrigger>

            <SelectContent className="max-h-60 overflow-y-auto">
                <SelectItem value="all">
                    All Tasks
                </SelectItem>

                <SelectItem value="mine">
                    My Tasks
                </SelectItem>
            </SelectContent>
        </Select>
    );
}