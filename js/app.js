document.addEventListener('DOMContentLoaded', async () => {
    await loadTrainingData();

    const currentCase = window.caseData[0];
    const customer = window.customerData.find(c => c.MID === currentCase.MID);

    const prompt = buildMerchantPrompt(currentCase, customer);

    console.log('Merchant AI Prompt:', prompt);

    // Later this will be sent to Gemini automatically
});
