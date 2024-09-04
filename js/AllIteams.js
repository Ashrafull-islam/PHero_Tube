// category fetch 
const loadData=async()=>{
    const iteams=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const response=await iteams.json();
    const data=response.data;
    showCategory(data)
}

// show category 
const showCategory=(data)=>{
    const takeCetagory=document.getElementById('Cetagory');
    data.forEach(element => {
        console.log(element)
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="categoriesLoad('${element.category_id}')" class="text-xl text-gray-600 btn btn-active btn-ghost">${element.category}</button>
        `;
        takeCetagory.appendChild(div);
    });
}

// show details 
const categoriesLoad=async(id)=>{
   const idFetch=await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
   const res=await idFetch.json();
   const data=res.data;
   showCards(data);
}

const showCards=(card)=>{
    const Cards=document.getElementById('class_Container');
    Cards.textContent='';
    card.forEach(element => {
        console.log(element)
    const div=document.createElement('div');
    div.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');
    div.innerHTML=`
              <figure>
                  <img 
                  class="w-full h-[250px]"
                    src="${element.thumbnail}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <div class="flex gap-4 ">
                  <img 
                  class="rounded-[50%] h-[60px] w-[60px]"
                    src="${element.authors[0].profile_picture}"
                    alt="Profile" />
                    <h3 class="text-xl font-semibold mt-4">${element.title}</h3>
                  </div>
                  <div>
                 <p class='px-[75px] -mt-4'>${element.authors[0].profile_name}</p>
                 <p>
        ${element.authors[0].verified ? '<i class="fa-sharp fa-solid fa-badge-check"></i>' : ''}
    </p>
                  </div>
                  <p class='px-[74px] -mt-1'>${element.others.views} views</p>
                </div>
    `;
    Cards.appendChild(div);
    });
}

loadData()