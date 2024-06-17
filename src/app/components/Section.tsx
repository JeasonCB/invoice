function Section({ title = "Título predeterminado", description = "Descripción predeterminada", image = "URL de imagen predeterminada", bgColor = "bg-slate-200" }: { title?: string, description?: string, image?: string, bgColor?: string }) {
    return (
        <div className={`grid place-items-center h-screen ${bgColor}`}>

            <h1 className="text-4xl">{title}</h1>
            <h2 className="text-lg">{description}</h2>
            <h3>{image}</h3>
            {/* <Inputs /> */}
        </div>
    );
}

export default Section;
