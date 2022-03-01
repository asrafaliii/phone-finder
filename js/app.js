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


const showPhones = (phones) => {
    for(const phone of phones){
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="text-center">
            <img src="${phone.image}" class="card-img-top w-50" alt="...">
        </div>
        <div class="card-body">
            <p class="card-text">${phone.phone_name}</p>
            <div class="d-flex justify-content-between">
              <h5 class="brand-title">${phone.brand}</h5>
              <button class="btn btn-info text-white">Details</button>
            </div>
        </div>
        `;
        parent.appendChild(div);

    }
    // console.log(phones);
};


