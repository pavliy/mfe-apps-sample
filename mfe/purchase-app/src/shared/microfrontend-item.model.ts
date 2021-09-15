import { LoadRemoteModuleOptions } from "./dynamic-federation";

export type MicrofrontendItem = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
  webComponentDetails?: WebComponentDetails;
}

interface WebComponentDetails {
  elementName: string
}