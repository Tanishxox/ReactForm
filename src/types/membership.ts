export const MEMBERSHIP = {
  BUSINESS: {
    label: "Business/Industry",
    subtitle:
      "Membership shall be limited to companies or individuals that are engaged in the research, development, manufacture supply or sale of products, processes, or services, which are based on or provide support to the bioscience industry.",
    votingSubtitle:
      "Representatives from business/industry members may seek BAM Board of Directors nominations and have voting privileges at the BAM Annual General Meeting. Membership fees are determined by the number of employees and/or revenue.    ",
  },
  ASSOCIATE: {
    label: "Associate",
    subtitle:
      "Membership shall be limited to companies or individuals that are engaged in the research, development, manufacture supply or sale of products, processes, or services, which are based on or provide support to the bioscience industry.",
    votingSubtitle:
      "Representatives from business/industry members may seek BAM Board of Directors nominations and have voting privileges at the BAM Annual General Meeting. Membership fees are determined by the number of employees and/or revenue.    ",
  },
  STUDENT: {
    label: "Student",
    subtitle:
      "Membership shall be limited to companies or individuals that are engaged in the research, development, manufacture supply or sale of products, processes, or services, which are based on or provide support to the bioscience industry.",
    votingSubtitle:
      "Representatives from business/industry members may seek BAM Board of Directors nominations and have voting privileges at the BAM Annual General Meeting. Membership fees are determined by the number of employees and/or revenue.    ",
  },
  INDIVIDUAL: {
    label: "Individual/Professional in Transition",
    subtitle:
      "Membership shall be limited to companies or individuals that are engaged in the research, development, manufacture supply or sale of products, processes, or services, which are based on or provide support to the bioscience industry.",
    votingSubtitle:
      "Representatives from business/industry members may seek BAM Board of Directors nominations and have voting privileges at the BAM Annual General Meeting. Membership fees are determined by the number of employees and/or revenue.    ",
  },
} as const;

export type Membership = keyof typeof MEMBERSHIP;
export type MembershipSubtitle = (typeof MEMBERSHIP)[Membership]["subtitle"];
export type MembershipVotingSubtitle =
  (typeof MEMBERSHIP)[Membership]["votingSubtitle"];
