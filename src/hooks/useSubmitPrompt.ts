export const useSubmitPrompt = () => {
    // const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY || '', dangerouslyAllowBrowser: true});
    // console.log(process.env.REACT_APP_OPENAI_API_KEY)
    // return async (prompt: string) => {
    //     try {
    //         const completion = await openai.chat.completions.create({
    //             messages: [{ role: "system", content: "You are a helpful assistant." },
    //                 {
    //                     "role": "user",
    //                     "content": prompt
    //                 }],
    //             model: "gpt-3.5-turbo",
    //         });
    //         return {response: completion.choices[0].message}
    //     } catch (e) {
    //         return {
    //             error: "Something is going wrong, Please try again.",
    //         }
    //     }
    //
    // }
    return async (prompt: string) => {
        return fetch('https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyAC0KK-PP6kjP7NO2XR0Rjv13DKuupMzR0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "text-bison-001",
                "prompt": {
                    text: prompt
                },
            })
        })
    }
}