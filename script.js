const elements = [
[1,"H","Hydrogen","nonmetal",1,1],
[2,"He","Helium","noble",18,1],
[3,"Li","Lithium","alkali",1,2],
[4,"Be","Beryllium","alkaline",2,2],
[5,"B","Boron","metalloid",13,2],
[6,"C","Carbon","nonmetal",14,2],
[7,"N","Nitrogen","nonmetal",15,2],
[8,"O","Oxygen","nonmetal",16,2],
[9,"F","Fluorine","halogen",17,2],
[10,"Ne","Neon","noble",18,2],
[11,"Na","Sodium","alkali",1,3],
[12,"Mg","Magnesium","alkaline",2,3],
[13,"Al","Aluminium","post-transition",13,3],
[14,"Si","Silicon","metalloid",14,3],
[15,"P","Phosphorus","nonmetal",15,3],
[16,"S","Sulfur","nonmetal",16,3],
[17,"Cl","Chlorine","halogen",17,3],
[18,"Ar","Argon","noble",18,3],
[19,"K","Potassium","alkali",1,4],
[20,"Ca","Calcium","alkaline",2,4],
[21,"Sc","Scandium","transition",3,4],
[22,"Ti","Titanium","transition",4,4],
[23,"V","Vanadium","transition",5,4],
[24,"Cr","Chromium","transition",6,4],
[25,"Mn","Manganese","transition",7,4],
[26,"Fe","Iron","transition",8,4],
[27,"Co","Cobalt","transition",9,4],
[28,"Ni","Nickel","transition",10,4],
[29,"Cu","Copper","transition",11,4],
[30,"Zn","Zinc","transition",12,4],
[31,"Ga","Gallium","post-transition",13,4],
[32,"Ge","Germanium","metalloid",14,4],
[33,"As","Arsenic","metalloid",15,4],
[34,"Se","Selenium","nonmetal",16,4],
[35,"Br","Bromine","halogen",17,4],
[36,"Kr","Krypton","noble",18,4],
[37,"Rb","Rubidium","alkali",1,5],
[38,"Sr","Strontium","alkaline",2,5],
[39,"Y","Yttrium","transition",3,5],
[40,"Zr","Zirconium","transition",4,5],
[41,"Nb","Niobium","transition",5,5],
[42,"Mo","Molybdenum","transition",6,5],
[43,"Tc","Technetium","transition",7,5],
[44,"Ru","Ruthenium","transition",8,5],
[45,"Rh","Rhodium","transition",9,5],
[46,"Pd","Palladium","transition",10,5],
[47,"Ag","Silver","transition",11,5],
[48,"Cd","Cadmium","transition",12,5],
[49,"In","Indium","post-transition",13,5],
[50,"Sn","Tin","post-transition",14,5],
[51,"Sb","Antimony","metalloid",15,5],
[52,"Te","Tellurium","metalloid",16,5],
[53,"I","Iodine","halogen",17,5],
[54,"Xe","Xenon","noble",18,5],
[55,"Cs","Cesium","alkali",1,6],
[56,"Ba","Barium","alkaline",2,6],
[57,"La","Lanthanum","lanthanoid",3,6],
[58,"Ce","Cerium","lanthanoid",4,6],
[59,"Pr","Praseodymium","lanthanoid",5,6],
[60,"Nd","Neodymium","lanthanoid",6,6],
[61,"Pm","Promethium","lanthanoid",7,6],
[62,"Sm","Samarium","lanthanoid",8,6],
[63,"Eu","Europium","lanthanoid",9,6],
[64,"Gd","Gadolinium","lanthanoid",10,6],
[65,"Tb","Terbium","lanthanoid",11,6],
[66,"Dy","Dysprosium","lanthanoid",12,6],
[67,"Ho","Holmium","lanthanoid",13,6],
[68,"Er","Erbium","lanthanoid",14,6],
[69,"Tm","Thulium","lanthanoid",15,6],
[70,"Yb","Ytterbium","lanthanoid",16,6],
[71,"Lu","Lutetium","lanthanoid",17,6],
[72,"Hf","Hafnium","transition",4,6],
[73,"Ta","Tantalum","transition",5,6],
[74,"W","Tungsten","transition",6,6],
[75,"Re","Rhenium","transition",7,6],
[76,"Os","Osmium","transition",8,6],
[77,"Ir","Iridium","transition",9,6],
[78,"Pt","Platinum","transition",10,6],
[79,"Au","Gold","transition",11,6],
[80,"Hg","Mercury","transition",12,6],
[81,"Tl","Thallium","post-transition",13,6],
[82,"Pb","Lead","post-transition",14,6],
[83,"Bi","Bismuth","post-transition",15,6],
[84,"Po","Polonium","post-transition",16,6],
[85,"At","Astatine","halogen",17,6],
[86,"Rn","Radon","noble",18,6],
[87,"Fr","Francium","alkali",1,7],
[88,"Ra","Radium","alkaline",2,7],
[89,"Ac","Actinium","actinoid",3,7],
[90,"Th","Thorium","actinoid",4,7],
[91,"Pa","Protactinium","actinoid",5,7],
[92,"U","Uranium","actinoid",6,7],
[93,"Np","Neptunium","actinoid",7,7],
[94,"Pu","Plutonium","actinoid",8,7],
[95,"Am","Americium","actinoid",9,7],
[96,"Cm","Curium","actinoid",10,7],
[97,"Bk","Berkelium","actinoid",11,7],
[98,"Cf","Californium","actinoid",12,7],
[99,"Es","Einsteinium","actinoid",13,7],
[100,"Fm","Fermium","actinoid",14,7],
[101,"Md","Mendelevium","actinoid",15,7],
[102,"No","Nobelium","actinoid",16,7],
[103,"Lr","Lawrencium","actinoid",17,7],
[104,"Rf","Rutherfordium","transition",4,7],
[105,"Db","Dubnium","transition",5,7],
[106,"Sg","Seaborgium","transition",6,7],
[107,"Bh","Bohrium","transition",7,7],
[108,"Hs","Hassium","transition",8,7],
[109,"Mt","Meitnerium","transition",9,7],
[110,"Ds","Darmstadtium","transition",10,7],
[111,"Rg","Roentgenium","transition",11,7],
[112,"Cn","Copernicium","transition",12,7],
[113,"Nh","Nihonium","post-transition",13,7],
[114,"Fl","Flerovium","post-transition",14,7],
[115,"Mc","Moscovium","post-transition",15,7],
[116,"Lv","Livermorium","post-transition",16,7],
[117,"Ts","Tennessine","halogen",17,7],
[118,"Og","Oganesson","noble",18,7]
];

// HTML Elements
const table = document.getElementById("periodicTable");
const detailsContent = document.getElementById("detailsContent");
const categoryFilters = document.getElementById("categoryFilters");

// Create Periodic Table
function createTable(data) {
    table.innerHTML = "";

    data.forEach(element => {
        const [number, symbol, name, category, group, period] = element;

        const box = document.createElement("div");
        box.className = `element ${category}`;

        // Lanthanoids separate row
        if (number >= 58 && number <= 71) {
            box.style.gridColumn = number - 53;
            box.style.gridRow = 9;
        }

        // Actinoids separate row
        else if (number >= 90 && number <= 103) {
            box.style.gridColumn = number - 85;
            box.style.gridRow = 10;
        }

        // Main periodic table
        else {
            box.style.gridColumn = group;
            box.style.gridRow = period;
        }

        box.innerHTML = `
            <span class="number">${number}</span>
            <span class="symbol">${symbol}</span>
            <span class="name">${name}</span>
        `;

       box.addEventListener("mouseenter", () => showDetails(element));

box.addEventListener("focus", () => showDetails(element));

box.setAttribute("tabindex", "0"); 

        table.appendChild(box);
    });
}

// Show Element Details
function showDetails(element) {
    const [number, symbol, name, category, group, period] = element;

    detailsContent.innerHTML = `
        <div class="detail-symbol ${category}">
            ${symbol}
        </div>

        <div class="detail-info">
            <h2>${name}</h2>
            <p>Atomic Number: ${number}</p>
            <p>Category: ${category.replace("-", " ")}</p>
            <p>Group: ${group}</p>
            <p>Period: ${period}</p>
        </div>
    `;
}

categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) return;

    document.querySelectorAll("#categoryFilters button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const selectedCategory = button.dataset.category;

    if (selectedCategory === "all") {
        createTable(elements);
    } else {
        const filteredElements = elements.filter(
            element => element[3] === selectedCategory
        );

        createTable(filteredElements);
    }
});

// Initial Table
createTable(elements);