// Test environment variables loading
Deno.serve(() => {
    const envVars = {
        // Stripe
        STRIPE_SECRET_KEY: Deno.env.get("STRIPE_SECRET_KEY"),
        STRIPE_WEBHOOK_SIGNING_SECRET: Deno.env.get(
            "STRIPE_WEBHOOK_SIGNING_SECRET"
        ),

        // PostHog
        POSTHOG_CLIENT_KEY: Deno.env.get("POSTHOG_CLIENT_KEY"),

        // Postmark
        POSTMARK_SERVER_TOKEN: Deno.env.get("POSTMARK_SERVER_TOKEN"),
        POSTMARK_FROM_EMAIL: Deno.env.get("POSTMARK_FROM_EMAIL"),

        // Auth Providers
        GOOGLE_CLIENT_ID: Deno.env.get("GOOGLE_CLIENT_ID"),
        GOOGLE_SECRET: Deno.env.get("GOOGLE_SECRET"),
        GITHUB_CLIENT_ID: Deno.env.get("GITHUB_CLIENT_ID"),
        GITHUB_SECRET: Deno.env.get("GITHUB_SECRET"),
    };

    return new Response(JSON.stringify(envVars, null, 2), {
        headers: { "Content-Type": "application/json" },
    });
});
