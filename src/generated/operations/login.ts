/* Auto-generated. Do not edit. */
export const document: string = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ...GCIPUserFields
  }
}

fragment GCIPUserFields on GCIPUser {
  uid
  email
  emailVerified
  displayName
  photoUrl
  phoneNumber
  disabled
  isAnonymous
  metadata {
    lastSignInTime
    creationTime
    lastRefreshTime
  }
  tokensValidAfterTime
  tenantId
  providerData {
    uid
    providerId
    displayName
    photoUrl
    federatedId
    email
    rawId
    screenName
    phoneNumber
  }
  passwordHash
  passwordSalt
  authDomain
  lastLoginAt
  createdAt
  accessToken
  refreshToken
  expirationTime
  multiFactor {
    enrolledFactors {
      factorId
      phoneNumber
    }
  }
}

mutation login(\$input: LoginInput!) {
  login(input: \$input) {
    ...LoginFields
  }
}`;
