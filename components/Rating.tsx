import { Star } from "lucide-react";


export default function Rating ({length=5}: {length?: number}) {

    return (
        <div className="w-fit flex items-center gap-[2px]">
            {
                Array.from({length}).map((_, index) => (
                    <Star className="w-4 h-4 text-yellow-400"  key={index}/>
                ))
            }
        </div>
    )
}