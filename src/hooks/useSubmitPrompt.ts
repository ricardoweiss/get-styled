export const useSubmitPrompt = () => {
    return async (prompt: string) => {
        return fetch('https://api.cssconvertor.com/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "prompt": prompt
            })
        })
    }
}
