/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_FLASK_SERVER_IP: string;
    // Add other environment variables here if needed
  }
}
