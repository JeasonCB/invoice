import Section from "../components/Section";

function page() {
    return (
        <>
            <section className="flex w-[100dvw] h-[100vh]">
                <div className=" bg-red-500 w-0 flex-grow object-cover opacity-80 transition-width hover:cursor-crosshair hover:w-[75dvw] hover:opacity-100 hover:contrast-125">
                    <p className="">Familiar</p>
                </div>
                <div className=" bg-blue-500 w-0 flex-grow object-cover opacity-80 transition-width  hover:cursor-crosshair hover:w-[75dvw] hover:opacity-100 hover:contrast-125">
                    <p className="">Express</p>
                </div>
            </section>
        </>
    );
}

export default page;
