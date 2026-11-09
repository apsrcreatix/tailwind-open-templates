export type PersonType = {
  name?: string;
  email?: string;
  role?: string;
  imageUrl?: string;
  lastSeen?: string | null;
  lastSeenDateTime?: string;
};

export type ListOfPersonType = Array<PersonType>;
