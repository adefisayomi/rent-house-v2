const serviceAccount = {
    "type": "service_account",
    "project_id": process.env.NEXT_PUBLIC_AUTH_FIREBASE_PROJECT_ID!,
    "private_key_id": process.env.NEXT_PUBLIC_AUTH_FIRBASE_PROJECT_KEY_ID!,
    "private_key":process.env.NEXT_PUBLIC_AUTH_FIREBASE_PRIVATE_KEY!,
    "client_email": "firebase-adminsdk-yz4rh@rent-house-a2c71.iam.gserviceaccount.com",
    "client_id": "116556846662694884006",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yz4rh%40rent-house-a2c71.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
  export default serviceAccount