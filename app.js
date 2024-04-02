const changeIp = document.getElementById("change-ip");
const card = document.getElementById("card");
const details = document.getElementById("details");

const overlay = document.getElementById("overlay");
function loader(state) {
  if (state) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

const updateUI = (data) => {
  details.innerHTML = `
        
          <p class="mb-3 mt-3"><b>Shahar</b>: ${data.city}</p>
          <p class="mb-3"><b>Davlat</b>: ${data.country}</p>
          <p class="mb-3"><b>Tashkoilot</b>: ${data.as}, ${data.countryCode}</p>
          <p class="mb-3"><b>Vaqt mintaqasi</b>: ${data.timezone}</p>
          <p class="mb-3"><b>Kompaniya</b>: ${data.isp}</p>
          <p class="mb-3"><b>Ip manzili</b>: ${data.query}</p>
          
  `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const getIpInfo = async (ip) => {
  const data = await getData(ip);
  return data;
};

changeIp.addEventListener("submit", (e) => {
  e.preventDefault();
  const getIp = changeIp.ip.value.trim();
  changeIp.reset();
  getIpInfo(getIp).then((data) => updateUI(data));
});
