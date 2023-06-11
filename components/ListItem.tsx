"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";
import {FaPlay } from "react-icons/fa"

interface ListItemProps {
    image:string;
    name:string;
    href:string;

}
const ListItem: React.FC<ListItemProps> =({
    image,
    name,
    href
})=> {
    const router = useRouter();
    const onClick = () =>{
        // add authentication before push
        router.push(href)
    }
  return (
    <main>
        <button
            className="
                relative
                group
                flex
                items-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-100/10
                hover:bg-neutral-100/20
                transition
                pr-4
                ">
                    <div
                        className="
                        relative
                        min-h-[64px]
                        min-w-[64px]">
                            <Image
                                className="object-cover"
                                fill
                                src={image}
                                alt="Image"
                            />
                    </div>
                    <p>{name}</p>
                    <div
                    className="
                    relative
                    ml-5
                    transition
                    opacity-0
                    rounded-full
                    flex
                    items-end
                    justify-end
                    bg-green-500
                    p-4
                    drop-shadow-md
                    right-5
                    group-hover:opacity-100
                    hover:scale-110
                    
                    ">
                        <FaPlay />
                    </div>
                </button>
    </main>
  )
}

export default ListItem