export interface TwikooConfig {
  envId: string;
  region?: string;
  el?: string | HTMLElement;
  path?: string;
  lang?: string;
  theme?: string;
  locale?: Record<string, string>;
  [key: string]: string | HTMLElement | undefined;
}

export interface TwikooAPI {
  (config: TwikooConfig): Promise<void>;
}

declare module "twikoo" {
  export const twikoo: TwikooAPI;
  export default twikoo;
}

declare module "#app" {
  interface NuxtApp {
    $twikoo: TwikooAPI;
  }
}
