export const fatcher = (url: string) => fetch(url).then((res) => res.json());
