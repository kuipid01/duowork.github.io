import { google } from "googleapis"

type RequestObjDataType = {
  date: string
  fullName: string
  email: string
  contactSurvey: string
  serviceType: string
  serviceDescription: string
  budget: string
}

export default async function insertInGoogleSheet(
  sheetRange: string = "DUOWORK CRM!B:H",
  data: RequestObjDataType
) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  const sheets = google.sheets({ version: "v4", auth: auth })

  // Create data
  const requestBodyValues: any = [
    data.date,
    data.fullName,
    data.email,
    data.contactSurvey,
    data.serviceType,
    data.serviceDescription,
    data.budget,
  ]

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: `${process.env.GATSBY_API_GOOGLE_SHEET_ID}`,
    range: sheetRange,
    requestBody: { values: requestBodyValues },
  })

  return res.data
}
