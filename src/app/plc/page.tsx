import Link from "next/link";
import Section from "../components/Section";

function page() {
    return (
        <>
            <Link href="/">
                <div className="snap-y snap-mandatory overflow-auto w-full h-screen">
                    <div className="snap-end snap-always">
                        <Section
                            title='Disfruta, Vive y Baila'
                            description="Date un break"
                            image="/hotel.jpg"
                            bgColor="bg-green-900" />
                    </div>

                    <div className="snap-start snap-always">
                        <Section title='Your business' bgColor="bg-blue-500" />
                    </div>

                    <div className="snap-start snap-always">
                        <Section title='your business' bgColor="bg-red-500" />
                    </div>

                    <div className="snap-start snap-always">
                        <Section title='your business' />
                    </div>
                </div>
            </Link>
        </>
    );
}

export default page;
