const dataAi = async () => {
  const dataLode = await fetch(
    ` https://openapi.programming-hero.com/api/ai/tools`
  );
  const dataJsone = await dataLode.json();
  const dataValue = dataJsone.data.tools;
  aiReleteds(dataValue);
};

const aiReleteds = aiData => {
  const contentDives = document.getElementById('contentDives');
  aiData = aiData.slice(0, 6);
  aiData.forEach(aiDetles => {
    const divs = document.createElement('div');
    divs.classList = `card w-full bg-base-100 shadow-xl p-5`;
    divs.innerHTML = `
    <figure><img src="${aiDetles?.image}" alt="${aiDetles.name}" /></figure>
<div class="card-body">
  <h2 class="card-title">Features</h2>
  <p> <span>1.</span>${aiDetles?.features[0]}</p>
  <p> <span>2.</span>${aiDetles?.features[1]}</p>
  <p> <span>3.</span>${aiDetles?.features[2] || 'data is nod defind'}</p>
    
  
     <div class=" border-t-2 pt-4">
     <h2 class="text-2xl">${aiDetles.name}</h2>
     <div class="flex justify-end ">
     <button onclick="showAiData('${
       aiDetles.id
     }')" class="btn rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
     </div>
 <h2 class="">${aiDetles.published_in}</h2>
         </div>
         </div>
    `;
    contentDives.appendChild(divs);
  });
};
//----------more data loding ----------
const showAiData = async id => {
  const data = await fetch(
    ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const dataDs = await data.json();
  const finalData = dataDs.data;
  console.log(finalData);

  const ShowAiDetalis = document.getElementById('ShowAiDetalis');

  const div = document.createElement('div');
  ShowAiDetalis.textContent = '';
  div.classList = `lg:flex justify-center gap-6 `;
  div.innerHTML = `
       <!-------first card ------>
           <div class=" bg-[#EB57570D] p-7 rounded-lg lg:w-[50%]">
             <div>
               <p>${finalData.description}</p>
              
             </div>
             <div class="flex gap-2 py-4">
               <div class="px-6 py-5 bg-[#FFFFFF] text-[#03A30A]">
                 <h2>${finalData.pricing[0].plan} </h2>
                 <h2>${finalData.pricing[0].price} </h2>
               </div>
                <div class="px-6 py-5 bg-[#FFFFFF] text-[#F28927]">
                 <h2>${finalData.pricing[1].plan} </h2>
                 <h2>${finalData.pricing[1].price} </h2>
               </div>
               <div class="px-6 py-5 bg-[#FFFFFF] text-[#EB5757]">
                 <h2>${finalData.pricing[2].plan} </h2>
                 <h2>${finalData.pricing[2].price} </h2>
               </div>
             </div>
             <div class=" flex justify-between">
               <!------Features section-->
               <div>
                 <h2 class="text-2xl font-semibold">Features</h2>
                 <ul class="list-disc px-6">
                   <li>${finalData.features['1'].feature_name}</li>
                   <li>${finalData.features['2'].feature_name}</li>
                   <li>${finalData.features['3'].feature_name}</li>
                  
                 </ul>
               </div>
                <!------Integrations section-->
                <div>
                  <h2 class="text-2xl font-semibold">Integrations</h2>
                  <ul class="list-disc px-6">
                    <li>${finalData.integrations[0]}</li>
                    <li>${finalData.integrations[1]}</li>
                    <li>${finalData.integrations[2]}</li>
                   
                  </ul>
                </div>
              </div>

            </div>

            <!-------second card ------>
            <div class="rounded-lg p-6 border-2 border-[#E7E7E7] lg:w-[50%]">
              <div>
                <img src="${finalData.image_link[0]}" alt="">
              </div>
              <h2 class="text-center text-2xl font-bold mt-4">${finalData.input_output_examples[0].input}</h2>
              <p class="text-center "> ${finalData.input_output_examples[0].output}</p>
            </div>
  `;
  ShowAiDetalis.appendChild(div);
  my_modal_3.showModal();
};

dataAi();
