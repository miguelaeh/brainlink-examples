# BrainLink NextJS Example

This is a simple example of how to use BrainLink in a NextJS application.

> IMPORTANT: The BrainLink SPA (Single Page Application) SDK is a browser-only library, so it can only be used in the browser. If you need to use BrainLink in your server, please refer to the [docs](https://brainlink.dev/docs) to see the options.

## How to add BrainLink to your NextJS application

1. Install the BrainLink SDK for Single Page Applications

    ```bash
    npm install @brainlink/spa-sdk
    ```

2. Add the BrainLink button to your application

    ```bash
    npm install @brainlink/react-button
    ```

3. Import the BrainLink SDK and the BrainLink button in your application

    ```bash
    import * as BrainLink from "@brainlink/spa-sdk";
    import BrainLinkButton from "@brainlink/react-button";
    ```

4. Add the Script tag to your application so that BrainLink works automatically

    ```html
    <Script type="module" src="https://unpkg.com/@brainlink/spa-sdk/dist/index.js" crossOrigin="anonymous" />
    ```

5. Add the BrainLink button to your application

    ```html
    <BrainLinkButton appClientId="your-brainlink-app-client-id" />
    ```

6. That's all! You can now use BrainLink to perform requests with the OpenAI compatible API

    ```javascript
    if (BrainLink.isConnected()) {
        const userAccessToken = await BrainLink.getUserToken(); // Obtain the user's access token
        const openai = new OpenAI({
        baseURL: "https://brainlink.dev/api/v1",
        apiKey: userAccessToken,
        // Required to use the OpenAI SDK in the browser.
        // Since your app is securely using the user's access token via BrainLink, it's totally safe to use the SDK on the browser.
        dangerouslyAllowBrowser: true,
        });
    }
    ```
