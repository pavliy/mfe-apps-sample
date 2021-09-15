import { LoadRemoteModuleOptions } from "./dynamic-federation";

export type DynamicItemInfo = LoadRemoteModuleOptions & {
    mfeName: string;
    componentName: string;
    exposedModule: string;
};
