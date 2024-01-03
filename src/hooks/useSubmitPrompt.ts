export const useSubmitPrompt = () => {
    return async (prompt: string) => {
        const promptString = `Transform the following code that is using tailwind css to a code using Styled Component library using tw twin macro alognside styled components. Write only the code without imports and explanation. ${prompt}.\``;
        return fetch('https://ec2-34-229-232-43.compute-1.amazonaws.com:8000/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "prompt": promptString
            })
        })
    }
}