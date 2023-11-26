
export const actions = {
    default: async (event) => {
        const body = await event.request.text();
        console.log("Received text data: ", body);
    }
}