const accounts = [
  {
    id: "acc_12345",
    availableBalance: 1200.75,
    currentBalance: 1500.0,
    officialName: "Primary Checking Account",
    mask: "6789",
    institutionId: "inst_54321",
    name: "My Checking Account",
    type: "depository",
    subtype: "checking",
    appwriteItemId: "appitem_98765",
    shareableId: "share_abc123",
  },
  {
    id: "acc_67890",
    availableBalance: 2200.5,
    currentBalance: 2300.75,
    officialName: "Savings Account",
    mask: "1234",
    institutionId: "inst_67890",
    name: "Emergency Savings",
    type: "depository",
    subtype: "savings",
    appwriteItemId: "appitem_45678",
    shareableId: "share_def456",
  },
  {
    id: "acc_11223",
    availableBalance: 5000.0,
    currentBalance: 5050.0,
    officialName: "Business Credit Card",
    mask: "4321",
    institutionId: "inst_11223",
    name: "Corporate Credit",
    type: "credit",
    subtype: "credit card",
    appwriteItemId: "appitem_67890",
    shareableId: "share_ghi789",
  },
];

export { accounts };