//import Inputs from "./components/inputs";

import Section from "./components/Section";

export default function page() {
  return (
    <>
      <div className="snap-y snap-mandatory  overflow-auto w-full h-screen">
        <div className="snap-start snap-always">
          <Section title='Your business' bgColor="bg-yellow-600" />
        </div>

        <div className="snap-start snap-always">
          <Section title='Your business' bgColor="bg-blue-500"/>
        </div>

        <div className="snap-start snap-always">
          <Section title='your business' bgColor="bg-red-500"/>
        </div>

        <div className="snap-start snap-always">
          <Section title='your business' />
        </div>

      </div>
    </>
  );
}
