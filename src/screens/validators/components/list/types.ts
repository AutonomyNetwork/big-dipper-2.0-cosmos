export type ValidatorType = {
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  selfPercent: number;
  condition: number;
  status: number;
  jailed: boolean;
  delegators: number;
  topVotingPower?: boolean; // top 34% VP
}

export type ValidatorsState = {
  loading: boolean;
  exists: boolean;
  tab: number;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  votingPowerOverall: number;
  items: ValidatorType[];
}

export type ItemType = Override<ValidatorType, { validator: AvatarName }>;
