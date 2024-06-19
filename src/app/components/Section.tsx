import Image from "next/image";

function Section({ title = "Título predeterminado", description = "Descripción predeterminada", image = "", bgColor = "bg-slate-200" }: { title?: string, description?: string, image?: string, bgColor?: string }) {
    return (
        <div className={`flex flex-col items-center
         justify-center h-[100vh] w-[100vw] relative ${bgColor}`}>
            <div className=" bg-slate-100/75 backdrop:blur-md overflow-hidden">
                <h1 className="text-4xl ">{title}</h1>
                <h2 className="text-lg">{description}</h2>
                <Image priority src={image} alt="imagen" width={0} height={0} quality={10} sizes="100%" fill objectFit="cover" className="h-auto w-auto absolute inset-0 " />
                {/* <Inputs /> */}
            </div>
        </div>
    );
}

export default Section;
