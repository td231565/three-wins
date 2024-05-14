/**
 * Use Google Sheet with Nuxt3
 * https://dev.to/edwardzzz/how-to-use-google-sheets-with-nuxt-3-1pn9
 */

let sheetRange = "Sheet1!A1:D200";

const getVars = () => {
  // const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
  // const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;
  const SPREAD_SHEET_ID = import.meta.env.NUXT_SHEET_ID;
  const GOOGLE_API_KEY = import.meta.env.NUXT_GOOGLE;

  return { SPREAD_SHEET_ID, GOOGLE_API_KEY };
};

export async function allRows() {
  const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`;
  return await useFetch(url);
}

export async function singleRow(row: any) {
  const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

  const rowRange = `Sheet1!A${row}:D${row}`;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`;
  return await useFetch(url);
}
