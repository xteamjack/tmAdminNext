declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface ActiveJobsBoxProps {
  clients: Clients[];
  activeClients: number;
  activeJobs: number;
}

declare interface DoughnutChartProps {
  clients: Clients[];
}

declare interface FooterProps {
  user: User;
  type?: "mobile" | "desktop";
}

declare interface SiderbarProps {
  user: User;
}

declare interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface getUserInfoProps {
  userId: string;
}

declare interface signInProps {
  email: string;
  password: string;
}

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare interface CategoryProps {
  category: CategoryCount;
}

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  shareableId: string;
};

declare interface PaginationProps {
  page: number;
  totalPages: number;
}
