async function fetchUseCases() {
    const response = await fetch("http://localhost:3000/use_cases");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}
async function fetchServices() {
    const response = await fetch("http://localhost:3000/services");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}
async function fetchAbout() {
    const response = await fetch("http://localhost:3000/about");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}


const aboutTitle = document.getElementById("aboutTitle");
const aboutDesc = document.getElementById("aboutDesc");
if (aboutTitle && aboutDesc) {
    fetchAbout().then(about => {
        console.log(about);
        aboutTitle.textContent = about.title;
        aboutDesc.textContent = about.desc;
    });
}

const ulUseCases = document.getElementById('useCasesList');
if (ulUseCases) {
    const list = document.createDocumentFragment();
    fetchUseCases().then((data) => {
        console.log(data);
        data.map(function (useCase) {
            const li = document.createElement('li');

            li.innerHTML = `${useCase.use_case}`;
            li.className = "list-group-item";

            list.appendChild(li);
        });
    }).finally(() => {
        ulUseCases.appendChild(list);
    });
}

const mainContainer = document.getElementById('cards');
if (mainContainer) {
    const list = document.createDocumentFragment();
    fetchServices().then((data) => {
        console.log(data);
        data.map(function (service) {
            const div1 = document.createElement('div');
            div1.className = "col-12 col-xl-4 col-md-6 my-3";

            const divCard = document.createElement('div');
            divCard.className = "card";

            const img = document.createElement('img');
            img.src = service.src;
            img.alt = service.alt;
            img.className = "card-img-top object-fit-contain";
            img.width = 500;
            img.height = 500;

            const divBody = document.createElement('div');
            divBody.className = "card-body";

            const h5Title = document.createElement('h5');
            h5Title.className = "card-title";
            h5Title.innerHTML = `${service.title}`;

            const pText = document.createElement('p');
            pText.className = "card-text";
            pText.innerHTML = `${service.text}`;

            const a = document.createElement('a');
            a.className = "btn btn-primary";
            a.href = `${service.href}`;
            a.innerHTML = `Check ${service.title} service`;

            divBody.appendChild(h5Title);
            divBody.appendChild(pText);
            divBody.appendChild(a);

            divCard.appendChild(img);
            divCard.appendChild(divBody);

            div1.appendChild(divCard);

            console.log(div1);

            list.appendChild(div1);
        });
    }).finally(() => {
        mainContainer.appendChild(list);
    });
}