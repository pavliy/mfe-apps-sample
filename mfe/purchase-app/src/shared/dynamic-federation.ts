type Scope = unknown;
type Factory = () => any;

type Container = {
    init(shareScope: Scope): void;
    get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };


const moduleMap = {} as any;
const remoteMap = {} as any
let isDefaultScopeInitialized = false;

async function lookupExposedModule<T>(remoteName: string, exposedModule: string): Promise<T> {
      const container = (window as any)[remoteName] as Container;
      const factory = await container.get(exposedModule);
      const Module = factory();
      return Module as T;
}

async function initRemote(remoteName: string) {
    const container = (window as any)[remoteName] as Container;

    // Do we still need to initialize the remote?
    if (remoteMap[remoteName]) {
        return container;
    }

    // Do we still need to initialize the share scope?
    if (!isDefaultScopeInitialized) { 
        await __webpack_init_sharing__('default');
        isDefaultScopeInitialized = true;
    }

    await container.init(__webpack_share_scopes__.default);
    remoteMap[remoteName] = true;
    return container;
}

export type LoadRemoteModuleOptions = { 
    remoteEntry?: string; 
    remoteName: string; 
    exposedModule: string
}

export function loadRemoteEntry(remoteEntry: string, remoteName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {

        // Is remoteEntry already loaded?
        if (moduleMap[remoteEntry]) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = remoteEntry;

        script.onerror = reject;

        script.onload = () => {
            initRemote(remoteName);
            moduleMap[remoteEntry] = true;
            resolve(); 
        }

        document.body.appendChild(script);
    });
}

export async function loadRemoteModule<T = any>(options: LoadRemoteModuleOptions): Promise<T> {
    if (options.remoteEntry) {
        await loadRemoteEntry(options.remoteEntry, options.remoteName);
    }
    return await lookupExposedModule<T>(options.remoteName, options.exposedModule);
}