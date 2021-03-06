module.exports = {
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
            ],
            useRenderEvent: true,
            onlyProduction: true,

            headless: false, // <- this could also be inside the customRendererConfig
            customRendererConfig:
                {
                    args: ["--auto-open-devtools-for-tabs"]
                }
        }
    }
}
