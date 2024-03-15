export interface Project {
    id: string;
    accountId: string;
    addressLine1: string | null;
    addressLine2: string | null;
    adminGroupId: string;
    businessUnitId: string | null;
    city: string | null;
    classification: string;
    companyCount: number;
    constructionType: string | null;
    contractType: string | null;
    country: string | null;
    createdAt: string;
    currentPhase: string | null;
    deliveryMethod: string | null;
    endDate: string | null;
    imageUrl: string;
    jobNumber: string | null;
    lastSignIn: string | null;
    latitude: string | null;
    longitude: string | null;
    memberCount: number;
    memberGroupId: string;
    name: string;
    platform: string;
    postalCode: string | null;
    projectValue: {
      value: number;
      currency: string;
    };
    products: {
      key: string;
      name: string;
      status: string;
      language: string;
      icon: string;
    }[];
    sheetCount: number | null;
    startDate: string | null;
    stateOrProvince: string | null;
    status: string;
    thumbnailImageUrl: string;
    timezone: string | null;
    type: string;
    updatedAt: string;
}

export interface Issue {
    id: string;
    containerId: string;
    displayId: number;
    rootCauseId: string | null;
    title: string;
    description: string | null;
    issueTypeId: string;
    issueSubtypeId: string;
    status: "open" | "closed" | "pending" | "in_review" | "draft";
    assignedTo: string;
    assignedToType: "user" | "group";
    dueDate: string;
    startDate: string;
    locationId: string | null;
    locationDetails: string | null;
    snapshotUrn: string | null;
    linkedDocuments: any[]; 
    links: any[]; 
    gpsCoordinates: {
        latitude: number;
        longitude: number;
    } | null;
    deleted: boolean;
    ownerId: string;
    officialResponse: {
        response: string | null;
        respondedAt: string | null;
        respondedBy: string | null;
    };
    permittedAttributes: string[];
    permittedActions: string[];
    published: boolean;
    commentCount: number;
    attachmentCount: number;
    openedBy: string;
    openedAt: string;
    closedBy: string | null;
    closedAt: string | null;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
    issueTemplateId: string | null;
    customAttributes: any[]; 
    watchers: string[];
    snapshotHasMarkups: boolean | null;
    permittedStatuses: string[];
}

export interface ApsToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }