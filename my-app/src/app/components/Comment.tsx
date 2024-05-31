export default function Comment() {
    return (
        <div className="w-[630px] bg-[#3EEE9A] rounded-[36px] font-questrial ml-2 mt-3.5 mb-2.5">
            <div className="flex ml-6 items-center mt-3.5">
                <a href="http://localhost:3000/profile">
                    <img className="rounded-full w-12 " src="morty.jpg" alt="profile image" />
                </a>
                <h1 className="font-bold text-[#000000] text-sm ml-2.5">
                    <a href="http://localhost:3000/profile">Morty Gamer</a>
                    <span className="text-[#71767B] font-black"> · <span className="font-medium">17/04/2024, ás 21:42</span> ·
                        <span className="font-bold">João Frango</span> · <span className="font-bold">Surf</span>
                    </span>
                </h1>
            </div>
            <div className="w-[523px] ml-[83px]">
                <p className="text-[#222E50] text-sm font-medium">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin
                </p>
            </div>
            <div className="flex items-center justify-between ml-[74px] mb-1.5">
                <div className="flex items-center">
                    <img src="comente 1.png" alt="comentario icon" />
                    <h1 className="text-[#222E50] text-sm font-medium">2 comentarios</h1>
                </div>
                <div className="flex items-center mr-8">
                    <img src="editIcon.png" alt="Edit icon" />
                    <img className="ml-4"src="lixeira 1.png" alt="Delete icon" />
                </div>
            </div>

        </div>
    )
}