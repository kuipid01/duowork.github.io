import Mailjet from "node-mailjet";
import * as requestType from "./types"

export default async function sendMail (requestBody: requestType.RequestObjDataType) {
    const data = {} as {
        pass: any
        fail: any
    };

    try {
        const formUrl = `https://public.herotofu.com/v1/${process.env.GATSBY_HEROTU_FORM_KEY}`;
        
        const res = await fetch(formUrl,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (res.status === 422) {
            throw new Error("Something went wrong. Pleas try again");
        }

        if (res.status === 200) {
            data.pass = {
                code: res.status,
                statusText: 'ok'
            };
        }


    } catch (error) {
        data.fail = {error};
    }

    return data
}