declare module 'react-facebook-pixel' {
  interface PixelOptions {
    autoConfig?: boolean;
    debug?: boolean;
  }

  interface EventData {
    content_type?: string;
    content_ids?: string[];
    value?: number;
    currency?: string;
    [key: string]: any;
  }

  interface ReactPixel {
    init(pixelId: string, advancedMatching?: object, options?: PixelOptions): void;
    pageView(): void;
    track(event: string, data?: EventData): void;
    trackCustom(event: string, data?: EventData): void;
    trackSingle(pixelId: string, event: string, data?: EventData): void;
    trackSingleCustom(pixelId: string, event: string, data?: EventData): void;
    grantConsent(): void;
    revokeConsent(): void;
    fbq(...args: any[]): void;
  }

  const ReactPixel: ReactPixel;
  export default ReactPixel;
}
