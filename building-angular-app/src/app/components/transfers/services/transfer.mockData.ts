import { MCTransfer } from "../models/transfers.model";

export const employee: MCTransfer[] = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      id: 123,
      curPosition: "Developer",
      reqPosition: "Senior Developer",
      curTeamStatus: {
        approvalStatus: true,
        approvedDate: "2023-06-01",
      },
      hrStatus: {
        approvalStatus: true,
        approvedDate: "2023-06-02",
      },
      reqTransferTeamStatus: {
        approvalStatus: false,
        approvedDate: "",
      },
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      id: 456,
      curPosition: "Designer",
      reqPosition: "Senior Designer",
      curTeamStatus: {
        approvalStatus: true,
        approvedDate: "2023-06-03",
      },
      hrStatus: {
        approvalStatus: true,
        approvedDate: "2023-06-04",
      },
      reqTransferTeamStatus: {
        approvalStatus: false,
        approvedDate: "2023-06-05",
      },
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      email: "michaeljohnson@example.com",
      id: 789,
      curPosition: "Manager",
      reqPosition: "Senior Manager",
      curTeamStatus: {
        approvalStatus: true,
        approvedDate: "2023-06-06",
      },
      hrStatus: {
        approvalStatus: false,
        approvedDate: "",
      },
      reqTransferTeamStatus: {
        approvalStatus: false,
        approvedDate: "",
      },
    },
  ];
