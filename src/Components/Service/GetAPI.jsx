/** @format */
const GetTrasnlate = async (text, from, to) => {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: from,
      target: to,
    }),
    headers: { "Content-Type": "application/json" },
  });

  return await res.json();
};

const GetLaunguages = async (text, from, to) => {
  const res = await fetch("https://libretranslate.de/languages", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await res.json();
};

export { GetTrasnlate, GetLaunguages };
