import Image from "next/image";

export default function ContentImage() {
    return (
        <div className="w-full flex justify-center 2md:justify-start relative">
            <div className="relative">
                {/* Картинка */}
                <Image
                    src={'/bg.png'}
                    alt={"Мужик с мускулами"}
                    width={121}
                    height={240}
                    className="w-24.75 h-50 xs:w-31 xs:h-62.5 2md:w-95 2md:h-191.75"
                    style={{objectFit: "cover"}}
                    loading={"eager"}
                />

                {/* Градиент поверх картинки */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1/3"
                    style={{
                        background: 'linear-gradient(180deg, rgba(35, 40, 41, 0) 0%, #232829 100%)'
                    }}
                />
            </div>
        </div>
    )
}