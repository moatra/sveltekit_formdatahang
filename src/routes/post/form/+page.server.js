
export const actions = {
    default: async (event) => {
        const body = await event.request.formData();
        console.log("Received text data: ", body);
    }
}