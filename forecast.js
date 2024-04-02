const getData = async (ip) => {
  const base = "http://ip-api.com/json/";
  const query = `${ip}`;

  loader(true);
  const req = await fetch(base + query);
  const data = await req.json();
  loader(false);
  return data;
};
