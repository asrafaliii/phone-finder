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

const showPhoneDetails = (info) => {
  document.getElementById('details-container').innerHTML = `
  <div class="row ">
          <div class="col-md-4">
            <div class="text-center">
              <img src="${info.image}" class="card-img-top w-75" alt="...">
            </div>
          </div>
          <div class="col-md-8">
            <h3>${info.phone_name}</h3>
            <p>Release Date:${info.releaseDate}</p>
            <h1>Main Features </h1>

            <h5>Brand:${info.brand}</h5>
            <h5>Display Size:${info.displaySize}</h5>
            <h5>Sensors:${info.sensors}</h5>
            <h5>Others:${info.others}</h5>

            
            <h6>Sensors:</h6>
          </div>
        </div>
  `
}

