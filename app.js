
const loadDatas = async() =>{
     const res = await fetch('data.json');
     const data = await res.json();
     displayData(data);

}
loadDatas();

const displayData = (datas) =>{
     // console.log(datas)
     const homeContainer = document.getElementById('homepage-content');
     datas.forEach((element) =>{
          console.log(element);
          const {img,name,price} = element;
          const cardContainer = document.createElement('div');
          cardContainer.classList.add = "card", "card-compact", "bg-base-100", "shadow-2xl";
          cardContainer.innerHTML = `
          <figure><img class="h-[300px]" src="${img}" alt="Shoes" /></figure>
          <div class="card-body">
            <div class="flex justify-between">
              <p class="text-2xl card-title">${name}</p>
              <div class="flex items-center">
                  <span><i class="fa-solid fa-heart text-lg mr-3 cursor-pointer"></i></span>
                  <span><i class="fa-solid fa-square-minus text-lg cursor-pointer"></i></span>
              </div>
            </div>
            <p class="text-base">If a dog chews shoes whose shoes does he choose?</p>
            <h2 class="text-xl font-semibold">price: <span>${price}</span> </h2>
            
            <div class="card-actions flex justify-between mx-2">
              <label for="my-modal-3" class="btn  btn-primary btn-outline w-[48%] modal-button"><i class="fa-solid fa-circle-info mr-1"></i>details</label>
            
              <button class="btn btn-secondary btn-outline w-[48%]"><i class="fa-solid fa-bag-shopping mr-1"></i>Buy Now</button>
            </div>
          </div>
          `;
          homeContainer.appendChild(cardContainer);
          
     })   
};