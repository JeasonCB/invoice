import Section from "../components/Section";

function page() {
    return (
        <>
            <section className="flex w-[100dvw] h-[100vh]">
                <div className=" bg-green-900 w-0 flex-grow object-cover opacity-80 transition-width hover:cursor-crosshair hover:w-[75dvw] hover:opacity-100 hover:contrast-125">
                    <p className="break-all text-4xl pr-4 ml-2 uppercase text-white select-none">Familiar</p>
                </div>
                <div className=" bg-black/90 w-0 flex-grow object-cover opacity-80 transition-width  hover:cursor-crosshair hover:w-[75dvw] hover:opacity-100 hover:contrast-125">
                    <p className="break-all text-4xl  ml-2 uppercase text-white select-none">Express</p>
                </div>
            </section>
        </>
    );
}

export default page;
