"use client";

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import * as BrainLink from "@brainlink/spa-sdk";

export default function Home() {
    // Get the code and state from the search params query string. This must be done in your callback URL.
    // For this example, we use the homepage and callback URL unified, to bring the user to the homepage after the connection
    const searchParams = useSearchParams();
    const code = searchParams.get('code') || "";
    const state = searchParams.get('state') || "";

    useEffect(() => {
        BrainLink.initialize(); // Initialize the SDK on the client side as soon as the page is loaded

        if (code && state) {
            // Call this on your callback page with the code and state obtained from the URL search params
            BrainLink.exchangeCodeForTokens(code, state); // you can check the boolean returned. If true, tokens were set properly
        }
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* The startCodeExchange function will send the user to the connection page */}
            <button onClick={BrainLink.startCodeExchange}>Get Access Token</button>
        </div>
    );
}
