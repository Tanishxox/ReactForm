import { HTMLProps, useState } from "react";
import { MEMBERSHIP, Membership } from "./types/membership";
import { cn } from "./utils/cn";

function App() {
  const [selectedMembership, setSelectedMembership] =
    useState<Membership>("BUSINESS");

  return (
    <>
      <div className="flex flex-col gap-2">
        {Object.entries(MEMBERSHIP).map(([key, value]) => {
          return (
            <MembershipCard
              onClick={() => setSelectedMembership(key as Membership)}
              selected={selectedMembership === (key as Membership)}
              membershipKey={key as Membership}
              className="max-w-[10rem]"
            />
          );
        })}
      </div>
      <div>{MEMBERSHIP[selectedMembership].votingSubtitle}</div>
    </>
  );
}

interface IMembershipCard extends HTMLProps<HTMLDivElement> {
  className?: string;
  membershipKey: Membership;
  selected?: boolean;
}

const MembershipCard: React.FC<IMembershipCard> = ({
  className,
  membershipKey,
  selected = false,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "p-4 text-center cursor-pointer border border-black rounded-md",
          selected ? "bg-blue-700 text-white" : "bg-gray-300",
          className
        )}
      >
        {MEMBERSHIP[membershipKey].label}
        {selected ? (
          <p className="text-sm mt-2">{MEMBERSHIP[membershipKey].subtitle}</p>
        ) : null}
      </div>
    </>
  );
};

export default App;
