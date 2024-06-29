import CoreLinks from "./CoreLinks/CoreLinks";
import SessionLinks from "./SessionLinks/SessionLinks";

function PrimaryNav(): JSX.Element | null {
  return (
    <nav className="w-full p-4 border-b-2 bg-primary-300 border-primary-600">
      <div className="flex flex-row items-center justify-between m-auto max-w-7xl">
        <div className="flex flex-row gap-8">
          <CoreLinks />
        </div>
        <div className="flex flex-row gap-8">
          <SessionLinks />
        </div>
      </div>
    </nav>
  );
}

export default PrimaryNav;
