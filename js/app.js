// https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

const allPhones = () => {
  // console.log('hello')
  const searchText = document.getElementById('search-box').value;
  // console.log(searchText);
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => showPhones(data.data));
};

// show phones
const showPhones = (phones) => {

      const parent = document.getElementById('phone-container');
      const first20Data = phones.slice(0,20);
      // console.log(first20Data);
      
      for(const phone of first20Data){
        const div = document.createElement('div');
        div.className = "col-lg-4 shadow p-1 mb-5 bg-body rounded"
        // console.log(phone.phone_name);
        div.innerHTML = `
        <div class="text-center">
           <img src="${phone.image}" class="card-img-top w-50" alt="...">
      </div>
      <div class="card-body">
           <p class="card-text">${phone.phone_name}</p>
           <div class="d-flex justify-content-between">
             <h5 class="brand-title">${phone.brand}</h5>
             <button onclick="details('${phone.slug}')" class="btn btn-info text-white">Details</button>
          </div>
       </div>
        `
        parent.appendChild(div)
      }
};

// show phone details

const details = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => showPhoneDetails(data.data));
};

const showPhoneDetails = (detail) => {
  document.getElementById('details-container').innerHTML = `
  <div class="row mb-5 mt-3">
          <div class="col-md-4">
            <div class="text-center">
              <img src="${detail.image}" class="card-img-top w-75" alt="...">
            </div>
          </div>
          <div class="col-md-8">
            <h3>  ${detail.name}</h3>
            <p>Release Date:  ${detail.releaseDate}</p>
            <h1>Main Features </h1>

            <h5 class="">Brand:<span class="">  ${detail.brand}</span></h5>
            <h5>Storage:  ${detail.mainFeatures.storage}</h5>
            <h5>Display Size:  ${detail.mainFeatures.displaySize}</h5>
            <h5>Memory:  ${detail.mainFeatures.memory}</h5>
            <h5>Sensors:  ${detail.mainFeatures.sensors}</h5>
            
            <h5>Others:</h5>
            <ul>
            <li>WLAN: ${detail.others.WLAN}</li>
            <li>Bluetooth: ${detail.others.Bluetooth}</li>
            <li>GPS: ${detail.others.GPS}</li>
            <li>NFC: ${detail.others.NFC}</li>
            <li>Radio: ${detail.others.Radio}</li>
            <li>USB: ${detail.others.USB}</li>
            </ul>
          </div>
        </div>
  `
}

