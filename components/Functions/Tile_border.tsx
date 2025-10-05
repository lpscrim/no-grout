import Image from "next/image";

export default function TileBorder() {
    
    const tileCount = 10;
    const tiles = Array.from({ length: tileCount });
    return (
           <div className="absolute left-0 -top-20 w-full flex z-20">
                {tiles.map((_, i) => (
                    <Image
                        key={i}
                        src='/tiles.png'
                        width={150}
                        height={75}
                        alt='Tiles'
                        className="shrink-0"
                    />
                ))}
            </div>
    );
}
